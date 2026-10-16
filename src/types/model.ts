/**
 * Startup Financial Model & Unit Economics - Type Definitions
 */

export type ScenarioType = 1 | 2 | 3; // 1 = Conservative, 2 = Base Case, 3 = Optimistic

export interface ScenarioDriver {
  name: string;
  conservative: number;
  base: number;
  optimistic: number;
  unit: string;
  description: string;
  isCurrency?: boolean;
  isPercent?: boolean;
}

export interface ModelAssumptions {
  currencySymbol: string; // e.g. "€", "$", "£"
  startDate: string; // e.g. "2026-01-01"
  activeScenario: ScenarioType;
  taxRate: number; // e.g. 0.25 (25%)
  minCashBufferMonths: number; // e.g. 3 months

  // 8 Core Scenario Drivers
  paidCAC: { 1: number; 2: number; 3: number };
  organicKFactor: { 1: number; 2: number; 3: number };
  monthlyChurn: { 1: number; 2: number; 3: number };
  conversionRate: { 1: number; 2: number; 3: number };
  pricingARPU: { 1: number; 2: number; 3: number };
  cogsRate: { 1: number; 2: number; 3: number };
  socialRate: { 1: number; 2: number; 3: number };
  exitMultiple: { 1: number; 2: number; 3: number };

  // Milestones MAU thresholds
  milestone1Users: number; // 100,000
  milestone2Users: number; // 500,000
  milestone3Users: number; // 1,000,000
}

export interface StaffRole {
  id: string;
  title: string;
  department: 'R&D' | 'S&M' | 'G&A';
  hireMonth: number; // 1 to 60
  baseSalary: number; // Monthly base in EUR
}

export interface FixedOpexItem {
  id: string;
  itemName: string;
  department: 'R&D' | 'S&M' | 'G&A';
  startMonth: number; // 1 to 60
  monthlyAmount: number;
}

export interface FundingAssumptions {
  targetFundingAmount: number; // Input round size (EUR)
  preMoneyValuation: number; // Pre-money valuation (EUR)
  useOfFunds: {
    rndPercent: number; // e.g. 0.40
    growthPercent: number; // e.g. 0.35
    adminPercent: number; // e.g. 0.15
    reservePercent: number; // e.g. 0.10
  };
}

export interface ModelState {
  assumptions: ModelAssumptions;
  marketingBudget: number[]; // 60 values
  staffRoster: StaffRole[];
  fixedOpexRoster: FixedOpexItem[];
  funding: FundingAssumptions;
  lastSaved: string | null;
}

// Monthly calculated slices (Month 1 to 60)
export interface MonthlyCalculatedData {
  month: number; // 1 to 60
  dateLabel: string; // "2026-01", etc.

  // Growth & Acquisition
  marketingBudget: number;
  paidMAU: number;
  organicMAU: number;
  newMAU: number;
  churnedMAU: number;
  endingMAU: number;
  cumulativeUsers: number;

  // Revenue & Unit Economics
  activeMAU: number;
  payingUsers: number;
  arpu: number;
  revenue: number; // MRR
  arrRunRate: number;
  cogs: number;
  grossProfit: number;
  grossMargin: number; // 0 to 1
  blendedCAC: number;
  paidCAC: number;
  lifetimeMonths: number;
  ltv: number;
  ltvCacRatio: number;
  paybackMonths: number;

  // Team & OPEX
  headcountRd: number;
  headcountSm: number;
  headcountGa: number;
  totalHeadcount: number;
  salaryRd: number;
  salarySm: number;
  salaryGa: number;
  totalBaseSalary: number;
  employerSocialCharges: number;
  totalCompensation: number;
  rdOpex: number;
  smOpex: number; // Base S&M opex excluding ad spend
  gaOpex: number;
  totalBaseOpex: number;

  // Monthly Financials (P&L & Cash Flow)
  totalRevenue: number;
  totalCogs: number;
  gp: number;
  gmPercent: number;
  adSpend: number;
  totalSmExpense: number; // Base S&M + Ad Spend
  totalOpex: number; // R&D + Total S&M + G&A
  ebitda: number;
  incomeTax: number;
  netIncome: number;
  ocf: number; // Operating Cash Flow
  financingCashFlow: number; // Month 1 funding injection
  netCashFlow: number;
  endingCash: number;
  netCashBurn: number;
  runwayMonths: number;
}

export interface MilestoneResult {
  threshold: number;
  reachedMonth: number | null; // null if not reached within 60 months
  cumulativeMarketingSpend: number | null;
}

export interface ScenarioComparisonRow {
  label: string;
  conservative: string;
  base: string;
  optimistic: string;
}

export interface ModelCalculationResults {
  months: MonthlyCalculatedData[];
  m1: MilestoneResult;
  m2: MilestoneResult;
  m3: MilestoneResult;
  bepMonth: number | null; // First month where EBITDA > 0
  peakCashDeficit: number; // Most negative cumulative cash trough without external financing
  maxFundingGap: number;
  safetyBuffer: number;
  recommendedRaise: number;
  y5EndingARR: number;
  y5EndingMAU: number;
  y5TotalRevenue: number;
  minRunway: number;
  avgLtvCacRatio: number;
  y5TeamSize: number;

  // Funding Outputs
  postMoneyValuation: number;
  investorStakePercent: number;
  foundersStakePercent: number;
  exitValuation: number;
  investorProceeds: number;
  moic: number;
  irr5Yr: number;

  // Annual Totals for Y1, Y3, Y5
  annualTotals: {
    y1: AnnualSummary;
    y3: AnnualSummary;
    y5: AnnualSummary;
  };
}

export interface AnnualSummary {
  yearNumber: number;
  revenue: number;
  grossProfit: number;
  grossMargin: number;
  totalOpex: number;
  ebitda: number;
  netIncome: number;
  endingMau: number;
  endingCash: number;
}
