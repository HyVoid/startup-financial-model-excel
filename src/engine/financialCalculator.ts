import {
  ModelState,
  MonthlyCalculatedData,
  ModelCalculationResults,
  MilestoneResult,
  AnnualSummary,
  ScenarioType,
  ScenarioComparisonRow,
} from '../types/model';

/**
 * Computes standard Year-Month label for a given month index (1-60) from a base start date.
 */
export const getMonthDateLabel = (startDateStr: string, monthIndex: number): string => {
  const parts = startDateStr.split('-');
  const year = parseInt(parts[0], 10) || 2026;
  const month = parseInt(parts[1], 10) || 1;
  const totalMonths = month - 1 + (monthIndex - 1);
  const targetYear = year + Math.floor(totalMonths / 12);
  const targetMonth = (totalMonths % 12) + 1;
  return `${targetYear}-${String(targetMonth).padStart(2, '0')}`;
};

/**
 * Executes full reactive 60-month model calculation.
 */
export const calculateFinancialModel = (
  state: ModelState,
  overrideScenario?: ScenarioType
): ModelCalculationResults => {
  const { assumptions, marketingBudget, staffRoster, fixedOpexRoster, funding } = state;
  const scenario: ScenarioType = overrideScenario ?? assumptions.activeScenario;

  const paidCAC = assumptions.paidCAC[scenario];
  const kFactor = assumptions.organicKFactor[scenario];
  const churnRate = assumptions.monthlyChurn[scenario];
  const convRate = assumptions.conversionRate[scenario];
  const arpu = assumptions.pricingARPU[scenario];
  const cogsRate = assumptions.cogsRate[scenario];
  const socialRate = assumptions.socialRate[scenario];
  const exitMultiple = assumptions.exitMultiple[scenario];

  const monthsData: MonthlyCalculatedData[] = [];

  let cumUsers = 0;
  let prevEndingMAU = 0;
  let runningCash = 0;

  // Running tally for funding gap calculation without external cash
  let cumOperationalCash = 0;
  let minCumOperationalCash = 0;

  for (let m = 1; m <= 60; m++) {
    const dateLabel = getMonthDateLabel(assumptions.startDate, m);
    const budget = marketingBudget[m - 1] ?? 0;

    // 1. Growth
    const paidMAU = Math.round(budget / (paidCAC > 0 ? paidCAC : 1));
    const organicMAU = m === 1 ? 0 : Math.round(prevEndingMAU * kFactor);
    const newMAU = paidMAU + organicMAU;
    const churnedMAU = m === 1 ? 0 : Math.round(prevEndingMAU * churnRate);

    // Ending MAU simulation with churn decay and natural virality
    const endingMAU =
      m === 1
        ? paidMAU
        : Math.round(prevEndingMAU * (1 - churnRate + kFactor) + paidMAU);

    cumUsers += newMAU;
    prevEndingMAU = endingMAU;

    // 2. Revenue & Unit Economics
    const activeMAU = endingMAU;
    const payingUsers = Math.round(activeMAU * convRate);
    const revenue = payingUsers * arpu; // MRR
    const arrRunRate = revenue * 12;
    const cogs = Math.round(revenue * cogsRate * 100) / 100;
    const grossProfit = revenue - cogs;
    const grossMargin = revenue > 0 ? grossProfit / revenue : 0;

    const blendedCAC = newMAU > 0 ? Math.round((budget / newMAU) * 100) / 100 : 0;
    const lifetimeMonths = churnRate > 0 ? Math.round((1 / churnRate) * 10) / 10 : 0;
    const ltv =
      churnRate > 0
        ? Math.round(((arpu * (1 - cogsRate)) / churnRate) * 100) / 100
        : 0;
    const ltvCacRatio = blendedCAC > 0 ? Math.round((ltv / blendedCAC) * 100) / 100 : 0;
    const monthlyGpPerUser = arpu * (1 - cogsRate);
    const paybackMonths =
      monthlyGpPerUser > 0
        ? Math.round((blendedCAC / monthlyGpPerUser) * 10) / 10
        : 0;

    // 3. Team & OPEX
    let headcountRd = 0;
    let headcountSm = 0;
    let headcountGa = 0;
    let salaryRd = 0;
    let salarySm = 0;
    let salaryGa = 0;

    for (const staff of staffRoster) {
      if (m >= staff.hireMonth) {
        if (staff.department === 'R&D') {
          headcountRd += 1;
          salaryRd += staff.baseSalary;
        } else if (staff.department === 'S&M') {
          headcountSm += 1;
          salarySm += staff.baseSalary;
        } else {
          headcountGa += 1;
          salaryGa += staff.baseSalary;
        }
      }
    }

    const totalHeadcount = headcountRd + headcountSm + headcountGa;
    const totalBaseSalary = salaryRd + salarySm + salaryGa;
    const employerSocialCharges = Math.round(totalBaseSalary * socialRate * 100) / 100;
    const totalCompensation = totalBaseSalary + employerSocialCharges;

    // Fixed expenses
    let fixedRd = 0;
    let fixedSm = 0;
    let fixedGa = 0;
    for (const item of fixedOpexRoster) {
      if (m >= item.startMonth) {
        if (item.department === 'R&D') fixedRd += item.monthlyAmount;
        else if (item.department === 'S&M') fixedSm += item.monthlyAmount;
        else fixedGa += item.monthlyAmount;
      }
    }

    const rdOpex = Math.round((salaryRd * (1 + socialRate) + fixedRd) * 100) / 100;
    const smOpex = Math.round((salarySm * (1 + socialRate) + fixedSm) * 100) / 100;
    const gaOpex = Math.round((salaryGa * (1 + socialRate) + fixedGa) * 100) / 100;
    const totalBaseOpex = rdOpex + smOpex + gaOpex;

    // 4. Financials (P&L & Cash Flow)
    const adSpend = budget;
    const totalSmExpense = smOpex + adSpend;
    const totalOpex = rdOpex + totalSmExpense + gaOpex;
    const ebitda = Math.round((grossProfit - totalOpex) * 100) / 100;
    const incomeTax =
      ebitda > 0 ? Math.round(ebitda * assumptions.taxRate * 100) / 100 : 0;
    const netIncome = Math.round((ebitda - incomeTax) * 100) / 100;

    const ocf = netIncome; // Operating cash flow
    const financingCashFlow = m === 1 ? funding.targetFundingAmount : 0;
    const netCashFlow = ocf + financingCashFlow;

    runningCash += netCashFlow;
    const endingCash = Math.round(runningCash * 100) / 100;

    cumOperationalCash += ocf;
    if (cumOperationalCash < minCumOperationalCash) {
      minCumOperationalCash = cumOperationalCash;
    }

    const netCashBurn = ocf < 0 ? Math.abs(ocf) : 0;
    const runwayMonths =
      netCashBurn > 0
        ? Math.round((endingCash / netCashBurn) * 10) / 10
        : 99.0;

    monthsData.push({
      month: m,
      dateLabel,
      marketingBudget: budget,
      paidMAU,
      organicMAU,
      newMAU,
      churnedMAU,
      endingMAU,
      cumulativeUsers: cumUsers,
      activeMAU,
      payingUsers,
      arpu,
      revenue,
      arrRunRate,
      cogs,
      grossProfit,
      grossMargin,
      blendedCAC,
      paidCAC,
      lifetimeMonths,
      ltv,
      ltvCacRatio,
      paybackMonths,
      headcountRd,
      headcountSm,
      headcountGa,
      totalHeadcount,
      salaryRd,
      salarySm,
      salaryGa,
      totalBaseSalary,
      employerSocialCharges,
      totalCompensation,
      rdOpex,
      smOpex,
      gaOpex,
      totalBaseOpex,
      totalRevenue: revenue,
      totalCogs: cogs,
      gp: grossProfit,
      gmPercent: grossMargin,
      adSpend,
      totalSmExpense,
      totalOpex,
      ebitda,
      incomeTax,
      netIncome,
      ocf,
      financingCashFlow,
      netCashFlow,
      endingCash,
      netCashBurn,
      runwayMonths,
    });
  }

  // Milestones detection
  const calculateMilestone = (threshold: number): MilestoneResult => {
    let reachedMonth: number | null = null;
    let cumSpend = 0;
    for (let i = 0; i < monthsData.length; i++) {
      cumSpend += monthsData[i].marketingBudget;
      if (monthsData[i].endingMAU >= threshold) {
        reachedMonth = i + 1;
        break;
      }
    }
    return {
      threshold,
      reachedMonth,
      cumulativeMarketingSpend: reachedMonth !== null ? cumSpend : null,
    };
  };

  const m1 = calculateMilestone(assumptions.milestone1Users);
  const m2 = calculateMilestone(assumptions.milestone2Users);
  const m3 = calculateMilestone(assumptions.milestone3Users);

  // BEP Month (first month where EBITDA > 0)
  const bepMonthIndex = monthsData.findIndex((m) => m.ebitda > 0);
  const bepMonth = bepMonthIndex !== -1 ? bepMonthIndex + 1 : null;

  // Maximum Funding Gap & Recommended Raise
  const peakCashDeficit = minCumOperationalCash;
  const maxFundingGap = Math.abs(minCumOperationalCash);

  // First 6 months average OPEX for safety buffer
  const first6OpexSum = monthsData.slice(0, 6).reduce((acc, m) => acc + m.totalOpex, 0);
  const avgOpex6 = first6OpexSum / 6;
  const safetyBuffer = Math.round(assumptions.minCashBufferMonths * avgOpex6);
  const recommendedRaise = maxFundingGap + safetyBuffer;

  // Key metrics at Year 5 (Month 60)
  const y5Month = monthsData[59];
  const y5EndingARR = y5Month ? y5Month.arrRunRate : 0;
  const y5EndingMAU = y5Month ? y5Month.endingMAU : 0;
  const y5TeamSize = y5Month ? y5Month.totalHeadcount : 0;

  // Y5 Total Revenue (Sum of Month 49 to 60)
  const y5TotalRevenue = monthsData.slice(48, 60).reduce((acc, m) => acc + m.revenue, 0);

  // Lowest runway encountered
  const minRunway = Math.min(...monthsData.map((m) => m.runwayMonths));

  // Average LTV / CAC across 60 months
  const validRatios = monthsData.map((m) => m.ltvCacRatio).filter((r) => r > 0);
  const avgLtvCacRatio =
    validRatios.length > 0
      ? Math.round((validRatios.reduce((a, b) => a + b, 0) / validRatios.length) * 10) / 10
      : 0;

  // Valuation and Returns
  const postMoneyValuation = funding.preMoneyValuation + funding.targetFundingAmount;
  const investorStakePercent =
    postMoneyValuation > 0 ? funding.targetFundingAmount / postMoneyValuation : 0;
  const foundersStakePercent = 1 - investorStakePercent;

  const exitValuation = Math.round(y5EndingARR * exitMultiple);
  const investorProceeds = Math.round(exitValuation * investorStakePercent);
  const moic =
    funding.targetFundingAmount > 0
      ? Math.round((investorProceeds / funding.targetFundingAmount) * 100) / 100
      : 0;
  const irr5Yr = moic > 0 ? Math.pow(moic, 1 / 5) - 1 : 0;

  // Annual aggregations for Y1, Y3, Y5
  const computeAnnual = (yearNumber: number, startM: number, endM: number): AnnualSummary => {
    const slice = monthsData.slice(startM - 1, endM);
    const revenue = slice.reduce((acc, m) => acc + m.revenue, 0);
    const grossProfit = slice.reduce((acc, m) => acc + m.grossProfit, 0);
    const totalOpex = slice.reduce((acc, m) => acc + m.totalOpex, 0);
    const ebitda = slice.reduce((acc, m) => acc + m.ebitda, 0);
    const netIncome = slice.reduce((acc, m) => acc + m.netIncome, 0);
    const endingMau = slice[slice.length - 1]?.endingMAU ?? 0;
    const endingCash = slice[slice.length - 1]?.endingCash ?? 0;
    const grossMargin = revenue > 0 ? grossProfit / revenue : 0;

    return {
      yearNumber,
      revenue,
      grossProfit,
      grossMargin,
      totalOpex,
      ebitda,
      netIncome,
      endingMau,
      endingCash,
    };
  };

  const annualTotals = {
    y1: computeAnnual(1, 1, 12),
    y3: computeAnnual(3, 25, 36),
    y5: computeAnnual(5, 49, 60),
  };

  return {
    months: monthsData,
    m1,
    m2,
    m3,
    bepMonth,
    peakCashDeficit,
    maxFundingGap,
    safetyBuffer,
    recommendedRaise,
    y5EndingARR,
    y5EndingMAU,
    y5TotalRevenue,
    minRunway,
    avgLtvCacRatio,
    y5TeamSize,
    postMoneyValuation,
    investorStakePercent,
    foundersStakePercent,
    exitValuation,
    investorProceeds,
    moic,
    irr5Yr,
    annualTotals,
  };
};

/**
 * Builds the 3-scenario side-by-side comparison table
 */
export const buildScenarioComparisonMatrix = (
  state: ModelState
): ScenarioComparisonRow[] => {
  const conservativeRes = calculateFinancialModel(state, 1);
  const baseRes = calculateFinancialModel(state, 2);
  const optimisticRes = calculateFinancialModel(state, 3);

  const sym = state.assumptions.currencySymbol;

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;
  const formatNumber = (val: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val);

  return [
    {
      label: 'M1 (100k MAU) Achieved Month',
      conservative: conservativeRes.m1.reachedMonth ? `Month ${conservativeRes.m1.reachedMonth}` : 'Not Reached',
      base: baseRes.m1.reachedMonth ? `Month ${baseRes.m1.reachedMonth}` : 'Not Reached',
      optimistic: optimisticRes.m1.reachedMonth ? `Month ${optimisticRes.m1.reachedMonth}` : 'Not Reached',
    },
    {
      label: 'Month 60 Active MAU',
      conservative: formatNumber(conservativeRes.y5EndingMAU),
      base: formatNumber(baseRes.y5EndingMAU),
      optimistic: formatNumber(optimisticRes.y5EndingMAU),
    },
    {
      label: 'Year 5 Total Revenue',
      conservative: formatCurrency(conservativeRes.y5TotalRevenue),
      base: formatCurrency(baseRes.y5TotalRevenue),
      optimistic: formatCurrency(optimisticRes.y5TotalRevenue),
    },
    {
      label: 'First Break-Even Month (BEP)',
      conservative: conservativeRes.bepMonth ? `Month ${conservativeRes.bepMonth}` : 'Not Reached',
      base: baseRes.bepMonth ? `Month ${baseRes.bepMonth}` : 'Not Reached',
      optimistic: optimisticRes.bepMonth ? `Month ${optimisticRes.bepMonth}` : 'Not Reached',
    },
    {
      label: 'Max Cumulative Cash Gap',
      conservative: formatCurrency(conservativeRes.maxFundingGap),
      base: formatCurrency(baseRes.maxFundingGap),
      optimistic: formatCurrency(optimisticRes.maxFundingGap),
    },
    {
      label: 'Recommended Raise',
      conservative: formatCurrency(conservativeRes.recommendedRaise),
      base: formatCurrency(baseRes.recommendedRaise),
      optimistic: formatCurrency(optimisticRes.recommendedRaise),
    },
    {
      label: '5-Year Exit Valuation',
      conservative: formatCurrency(conservativeRes.exitValuation),
      base: formatCurrency(baseRes.exitValuation),
      optimistic: formatCurrency(optimisticRes.exitValuation),
    },
    {
      label: 'Investor Return (MoIC)',
      conservative: `${conservativeRes.moic.toFixed(1)}x`,
      base: `${baseRes.moic.toFixed(1)}x`,
      optimistic: `${optimisticRes.moic.toFixed(1)}x`,
    },
    {
      label: '5-Year Annualized IRR',
      conservative: `${(conservativeRes.irr5Yr * 100).toFixed(1)}%`,
      base: `${(baseRes.irr5Yr * 100).toFixed(1)}%`,
      optimistic: `${(optimisticRes.irr5Yr * 100).toFixed(1)}%`,
    },
  ];
};
