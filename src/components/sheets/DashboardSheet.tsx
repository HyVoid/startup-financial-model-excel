import React from 'react';
import { useModel } from '../../context/ModelContext';
import { ScenarioType } from '../../types/model';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { DataBar } from '../common/DataBar';
import {
  TrendingUp,
  Clock,
  Landmark,
  ShieldAlert,
  Zap,
  Users,
  Target,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

export const DashboardSheet: React.FC = () => {
  const { state, results, setScenario, setActiveTab } = useModel();
  const { assumptions, funding } = state;
  const sym = assumptions.currencySymbol;

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;

  const getScenarioTitle = (s: ScenarioType) => {
    switch (s) {
      case 1:
        return 'Conservative Scenario';
      case 2:
        return 'Base Case (Target)';
      case 3:
        return 'Optimistic Expansion';
    }
  };

  const annuals = results.annualTotals;

  // Compute maximum revenue for inline chart bars
  const maxAnnualRev = Math.max(annuals.y5.revenue, 1000);

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Block A: Header & Active Scenario Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[var(--color-border)]">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
            Sheet 07 · Executive & Board Summary
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
            Executive Financial & Growth Dashboard
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            C-Level and investor-facing operational overview. Pure aggregation layer extracting zero-hardcoded calculations from underlying modules.
          </p>
        </div>

        {/* Dynamic Scenario Switcher Chip Bar */}
        <div className="flex items-center gap-1.5 p-1 bg-[rgba(5,28,44,0.04)] rounded-[10px] shrink-0">
          {([1, 2, 3] as ScenarioType[]).map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`px-3 py-1.5 text-[12px] font-semibold rounded-[8px] transition-all ${
                assumptions.activeScenario === s
                  ? 'bg-white text-[var(--color-accent)] shadow-sm font-bold'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              {getScenarioTitle(s)}
            </button>
          ))}
        </div>
      </div>

      {/* Block B: Executive Scorecard (6 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Card 1: Y5 ARR */}
        <div className="model-card p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Y5 Run-Rate ARR
            </span>
            <TrendingUp className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(results.y5EndingARR)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Month 60 annualized velocity
          </div>
        </div>

        {/* Card 2: BEP Timing */}
        <div className="model-card p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Break-Even (BEP)
            </span>
            <Clock className="w-3.5 h-3.5 text-[var(--color-muted)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {results.bepMonth ? `M${results.bepMonth}` : '60M+'}
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            EBITDA profitable point
          </div>
        </div>

        {/* Card 3: Suggested Raise */}
        <div className="model-card p-4 space-y-1 bg-[rgba(34,81,255,0.03)] border-l-2 border-[var(--color-accent)]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Suggested Raise
            </span>
            <Landmark className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(results.recommendedRaise)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Max gap + {assumptions.minCashBufferMonths}mo buffer
          </div>
        </div>

        {/* Card 4: Min Runway */}
        <div className="model-card p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Min Cash Runway
            </span>
            <ShieldAlert
              className={`w-3.5 h-3.5 ${
                results.minRunway < 3.0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-muted)]'
              }`}
            />
          </div>
          <div
            className={`font-heading text-[26px] font-bold tracking-tight ${
              results.minRunway < 3.0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'
            }`}
          >
            {results.minRunway >= 99 ? 'Self-Sustaining' : `${results.minRunway.toFixed(1)} mo`}
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Lowest cash survival trough
          </div>
        </div>

        {/* Card 5: LTV / CAC */}
        <div className="model-card p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Avg LTV / CAC
            </span>
            <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {results.avgLtvCacRatio.toFixed(1)}x
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Golden standard (&gt; 3.0x)
          </div>
        </div>

        {/* Card 6: Team Size */}
        <div className="model-card p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Y5 Headcount
            </span>
            <Users className="w-3.5 h-3.5 text-[var(--color-muted)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {results.y5TeamSize} Staff
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Full European organization
          </div>
        </div>
      </div>

      {/* Block C: Annual Trajectory Matrix & Visual Bar Comparison */}
      <div className="model-card overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div>
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Annual Operating Trajectory Matrix (Years 1, 3, and 5)
            </h2>
            <div className="text-[12px] text-[var(--color-muted)] mt-0.5">
              Aggregated from 60-month monthly financials (C16:E23)
            </div>
          </div>
          <button
            onClick={() => setActiveTab('05_Financials')}
            className="text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-1"
          >
            <span>View Full 60-Month Model</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-6 text-left">Strategic Financial Statement Line</th>
                <th className="py-3 px-6 text-right w-44">Year 1 (M1-12)</th>
                <th className="py-3 px-6 text-right w-44">Year 3 (M25-36)</th>
                <th className="py-3 px-6 text-right w-44 bg-[rgba(34,81,255,0.03)]">Year 5 (M49-60)</th>
                <th className="py-3 px-6 text-left w-56">Scale Magnitude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-[13px] font-mono">
              {/* Total Revenue */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans font-medium text-[var(--color-primary)]">
                  Total Operating Revenue
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y1.revenue)}</td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.revenue)}</td>
                <td className="py-3.5 px-6 font-bold text-[var(--color-accent)] bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.revenue)}
                </td>
                <td className="py-3.5 px-6">
                  <DataBar value={annuals.y5.revenue} max={maxAnnualRev} />
                </td>
              </tr>

              {/* Gross Profit */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans text-[var(--color-body-text)]">
                  Gross Profit (GP)
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y1.grossProfit)}</td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.grossProfit)}</td>
                <td className="py-3.5 px-6 font-semibold bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.grossProfit)}
                </td>
                <td className="py-3.5 px-6">
                  <DataBar value={annuals.y5.grossProfit} max={maxAnnualRev} />
                </td>
              </tr>

              {/* Gross Margin % */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3 px-6 text-left font-sans text-[var(--color-muted)]">
                  Comprehensive Gross Margin %
                </td>
                <td className="py-3 px-6 text-[var(--color-muted)]">
                  {(annuals.y1.grossMargin * 100).toFixed(0)}%
                </td>
                <td className="py-3 px-6 text-[var(--color-muted)]">
                  {(annuals.y3.grossMargin * 100).toFixed(0)}%
                </td>
                <td className="py-3 px-6 text-[var(--color-muted)] bg-[rgba(34,81,255,0.02)]">
                  {(annuals.y5.grossMargin * 100).toFixed(0)}%
                </td>
                <td className="py-3 px-6 text-left font-sans text-[11px] text-[var(--color-muted)]">
                  High-margin software model
                </td>
              </tr>

              {/* Total OPEX */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans text-[var(--color-body-text)]">
                  Total Operating Expenses (OPEX)
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y1.totalOpex)}</td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.totalOpex)}</td>
                <td className="py-3.5 px-6 bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.totalOpex)}
                </td>
                <td className="py-3.5 px-6">
                  <DataBar value={annuals.y5.totalOpex} max={maxAnnualRev} />
                </td>
              </tr>

              {/* EBITDA */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans text-[var(--color-primary)]">
                  Operational EBITDA
                </td>
                <td className={`py-3.5 px-6 ${annuals.y1.ebitda < 0 ? 'text-[var(--color-muted)]' : ''}`}>
                  {formatCurrency(annuals.y1.ebitda)}
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.ebitda)}</td>
                <td className="py-3.5 px-6 font-bold text-[var(--color-primary)] bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.ebitda)}
                </td>
                <td className="py-3.5 px-6">
                  <DataBar
                    value={Math.max(0, annuals.y5.ebitda)}
                    max={maxAnnualRev}
                  />
                </td>
              </tr>

              {/* Net Income */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans text-[var(--color-body-text)]">
                  Net Income (Post-Tax)
                </td>
                <td className={`py-3.5 px-6 ${annuals.y1.netIncome < 0 ? 'text-[var(--color-muted)]' : ''}`}>
                  {formatCurrency(annuals.y1.netIncome)}
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.netIncome)}</td>
                <td className="py-3.5 px-6 font-semibold bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.netIncome)}
                </td>
                <td className="py-3.5 px-6 text-left font-sans text-[11px] text-[var(--color-muted)]">
                  Bottom-line cash generator
                </td>
              </tr>

              {/* Ending MAU */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans font-medium text-[var(--color-primary)]">
                  Period-End Active Base (MAU)
                </td>
                <td className="py-3.5 px-6">{formatNumber(annuals.y1.endingMau)}</td>
                <td className="py-3.5 px-6">{formatNumber(annuals.y3.endingMau)}</td>
                <td className="py-3.5 px-6 font-bold text-[var(--color-accent)] bg-[rgba(34,81,255,0.02)]">
                  {formatNumber(annuals.y5.endingMau)}
                </td>
                <td className="py-3.5 px-6">
                  <DataBar value={annuals.y5.endingMau} max={annuals.y5.endingMau * 1.1} />
                </td>
              </tr>

              {/* Ending Cash */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-3.5 px-6 text-left font-sans text-[var(--color-body-text)]">
                  Period-End Cash Balance
                </td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y1.endingCash)}</td>
                <td className="py-3.5 px-6">{formatCurrency(annuals.y3.endingCash)}</td>
                <td className="py-3.5 px-6 font-semibold bg-[rgba(34,81,255,0.02)]">
                  {formatCurrency(annuals.y5.endingCash)}
                </td>
                <td className="py-3.5 px-6 text-left font-sans text-[11px] text-[var(--color-muted)]">
                  Cumulative bank balance
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Block D & Block E: Milestone Tracker & Cap Table Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Milestone Tracker (Block D) */}
        <div className="model-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[var(--color-accent)]" />
              <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
                User Scale Milestone Tracker
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('02_Growth')}
              className="text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-0.5"
            >
              <span>Funnel Engine</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* M1 */}
            <div className="p-3.5 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[var(--color-primary)] text-[13px]">
                  Milestone 1: {formatNumber(assumptions.milestone1Users)} MAU
                </div>
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
                  Initial European Product-Market Fit validation
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-semibold text-[var(--color-primary)] text-[13px]">
                  {results.m1.reachedMonth ? `Month ${results.m1.reachedMonth}` : 'In Progress'}
                </div>
                <div className="text-[11px] text-[var(--color-muted)] font-mono">
                  {results.m1.cumulativeMarketingSpend !== null
                    ? `${formatCurrency(results.m1.cumulativeMarketingSpend)} spend`
                    : '-'}
                </div>
              </div>
            </div>

            {/* M2 */}
            <div className="p-3.5 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[var(--color-primary)] text-[13px]">
                  Milestone 2: {formatNumber(assumptions.milestone2Users)} MAU
                </div>
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
                  Multiregional European commercial expansion
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-semibold text-[var(--color-primary)] text-[13px]">
                  {results.m2.reachedMonth ? `Month ${results.m2.reachedMonth}` : 'In Progress'}
                </div>
                <div className="text-[11px] text-[var(--color-muted)] font-mono">
                  {results.m2.cumulativeMarketingSpend !== null
                    ? `${formatCurrency(results.m2.cumulativeMarketingSpend)} spend`
                    : '-'}
                </div>
              </div>
            </div>

            {/* M3 */}
            <div className="p-3.5 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[var(--color-primary)] text-[13px]">
                  Milestone 3: {formatNumber(assumptions.milestone3Users)} MAU
                </div>
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
                  Institutional scale category leadership
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-semibold text-[var(--color-primary)] text-[13px]">
                  {results.m3.reachedMonth ? `Month ${results.m3.reachedMonth}` : 'In Progress'}
                </div>
                <div className="text-[11px] text-[var(--color-muted)] font-mono">
                  {results.m3.cumulativeMarketingSpend !== null
                    ? `${formatCurrency(results.m3.cumulativeMarketingSpend)} spend`
                    : '-'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fundraising & Investor Return Summary (Block E) */}
        <div className="model-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[var(--color-accent)]" />
              <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
                Capitalization & Returns Summary
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('06_Funding')}
              className="text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-0.5"
            >
              <span>Cap Table</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 text-[13px]">
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Target Round Capital:</span>
              <span className="font-semibold text-[var(--color-primary)] font-mono">
                {formatCurrency(funding.targetFundingAmount)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Pre-Money / Post-Money:</span>
              <span className="font-mono text-[var(--color-body-text)]">
                {formatCurrency(funding.preMoneyValuation)} / {formatCurrency(results.postMoneyValuation)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Investor Equity Dilution:</span>
              <span className="font-semibold text-[var(--color-accent)] font-mono">
                {(results.investorStakePercent * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">5-Year Exit Enterprise Value:</span>
              <span className="font-semibold text-[var(--color-primary)] font-mono">
                {formatCurrency(results.exitValuation)}
              </span>
            </div>

            <div className="p-4 bg-[rgba(34,81,255,0.04)] rounded-[10px] border border-[rgba(34,81,255,0.15)] flex items-center justify-around text-center mt-3">
              <div>
                <div className="text-[11px] font-semibold uppercase text-[var(--color-muted)]">
                  Expected MoIC
                </div>
                <div className="font-heading text-[26px] font-bold text-[var(--color-accent)]">
                  {results.moic.toFixed(1)}x
                </div>
              </div>
              <div className="h-8 w-px bg-[var(--color-border)]" />
              <div>
                <div className="text-[11px] font-semibold uppercase text-[var(--color-muted)]">
                  5-Yr Compound IRR
                </div>
                <div className="font-heading text-[26px] font-bold text-[var(--color-accent)]">
                  {(results.irr5Yr * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Board Insight Block */}
      <InsightBlock title="Executive Summary & Capital Allocation Strategy">
        Under the <strong>{getScenarioTitle(assumptions.activeScenario)}</strong>, the company attains operational break-even at <strong>{results.bepMonth ? `Month ${results.bepMonth}` : 'N/A'}</strong> with an estimated peak cash requirement of <strong>{formatCurrency(results.maxFundingGap)}</strong>. Raising a round of <strong>{formatCurrency(funding.targetFundingAmount)}</strong> preserves a minimum runway of <strong>{results.minRunway >= 99 ? 'Self-Sustaining' : `${results.minRunway.toFixed(1)} months`}</strong>, driving a projected 5-year exit valuation of <strong>{formatCurrency(results.exitValuation)}</strong> at an attractive <strong>{results.moic.toFixed(1)}x MoIC</strong>.
      </InsightBlock>
    </div>
  );
};
