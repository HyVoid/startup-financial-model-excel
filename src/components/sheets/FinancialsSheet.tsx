import React, { useState } from 'react';
import { useModel } from '../../context/ModelContext';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { Landmark, TrendingUp, AlertTriangle, ShieldCheck, DollarSign } from 'lucide-react';

export const FinancialsSheet: React.FC = () => {
  const { state, results } = useModel();
  const { assumptions } = state;
  const sym = assumptions.currencySymbol;

  const [selectedYear, setSelectedYear] = useState<number>(1);

  const displayedMonths =
    selectedYear === 0
      ? results.months
      : results.months.slice((selectedYear - 1) * 12, selectedYear * 12);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 05 · Core Accounting & Cash Flow Engine
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          60-Month Comprehensive Financial Statements & Cash Runway
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Integrates commercial revenue, variable cloud delivery COGS, and complete team OPEX into GAAP-aligned monthly P&L and cash flow statements. Dynamically determines break-even point (BEP) and minimum safe capitalization.
        </p>
      </div>

      {/* Financial Health & Capitalization Scorecard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* BEP Timing */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Operational Break-Even (BEP)
            </span>
            <StatusPill
              label={results.bepMonth ? `Month ${results.bepMonth}` : 'Beyond 60M'}
              variant={results.bepMonth ? 'positive' : 'negative'}
            />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {results.bepMonth ? `M${results.bepMonth}` : 'N/A'}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            First calendar period where operational EBITDA transitions positive
          </div>
        </div>

        {/* Max Funding Gap */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Max Operational Cash Deficit
            </span>
            <AlertTriangle className="w-4 h-4 text-[var(--color-muted)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(results.maxFundingGap)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Cumulative operational net cash trough prior to self-sufficiency
          </div>
        </div>

        {/* Safety Buffer */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Survival Safety Buffer
            </span>
            <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(results.safetyBuffer)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            {assumptions.minCashBufferMonths} months of baseline operating cash reserves
          </div>
        </div>

        {/* Recommended Raise */}
        <div className="model-card p-5 bg-[rgba(34,81,255,0.03)] border-l-2 border-[var(--color-accent)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Scientifically Suggested Raise
            </span>
            <Landmark className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(results.recommendedRaise)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Max Cash Gap + Emergency Survival Buffer (Cell B35)
          </div>
        </div>
      </div>

      {/* 60-Month Financial Statement Ledger */}
      <div className="model-card overflow-hidden">
        {/* Controls */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              60-Month P&L & Cash Flow Statement
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-[rgba(5,28,44,0.04)] p-1 rounded-[8px]">
            {[
              { id: 1, label: 'Year 1 (M1-12)' },
              { id: 2, label: 'Year 2 (M13-24)' },
              { id: 3, label: 'Year 3 (M25-36)' },
              { id: 4, label: 'Year 4 (M37-48)' },
              { id: 5, label: 'Year 5 (M49-60)' },
              { id: 0, label: 'All 60 Months' },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedYear(view.id)}
                className={`px-3 py-1 text-[11.5px] font-medium rounded-[6px] transition-all ${
                  selectedYear === view.id
                    ? 'bg-white text-[var(--color-accent)] shadow-sm font-semibold'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* Financial Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-right border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-4 text-left sticky left-0 bg-[var(--color-surface)] z-10 w-64 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  P&L / Cash Statement Line
                </th>
                {displayedMonths.map((m) => (
                  <th key={m.month} className="py-3 px-3 min-w-[105px]">
                    <div>M{m.month}</div>
                    <div className="text-[10px] text-[var(--color-muted)] font-normal">{m.dateLabel}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-[12.5px] font-mono">
              {/* Row 6: Revenue */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total Operating Revenue
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.totalRevenue)}
                  </td>
                ))}
              </tr>

              {/* Row 7: COGS */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-muted)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Variable Direct COGS
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    -{formatCurrency(m.totalCogs)}
                  </td>
                ))}
              </tr>

              {/* Row 8: Gross Profit */}
              <tr className="bg-[rgba(5,28,44,0.01)] font-semibold hover:bg-[rgba(5,28,44,0.03)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Gross Profit (Margin: {(displayedMonths[0]?.gmPercent * 100 || 0).toFixed(0)}%)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.gp)}
                  </td>
                ))}
              </tr>

              {/* Section Header: Operating Expenses */}
              <tr className="bg-[rgba(5,28,44,0.06)] text-[11px] font-semibold uppercase tracking-[0.06em]">
                <td colSpan={displayedMonths.length + 1} className="py-2 px-4 text-left text-[var(--color-primary)]">
                  Operating Expenses (OPEX)
                </td>
              </tr>

              {/* R&D */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  R&D (Product & Engineering)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.rdOpex)}
                  </td>
                ))}
              </tr>

              {/* Total S&M (Base + Ad Spend) */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Sales & Marketing (incl. Ad Spend)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.totalSmExpense)}
                  </td>
                ))}
              </tr>

              {/* G&A */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  General & Administrative (G&A)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.gaOpex)}
                  </td>
                ))}
              </tr>

              {/* Total OPEX */}
              <tr className="bg-[rgba(5,28,44,0.03)] font-semibold hover:bg-[rgba(5,28,44,0.05)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total Operating Expenses (OPEX)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.totalOpex)}
                  </td>
                ))}
              </tr>

              {/* Row 18: EBITDA */}
              <tr className="bg-[rgba(34,81,255,0.04)] font-bold text-[var(--color-primary)] hover:bg-[rgba(34,81,255,0.07)] transition-colors border-t border-b border-[rgba(34,81,255,0.2)]">
                <td className="py-3 px-4 text-left font-sans sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  EBITDA (Operating Earnings)
                </td>
                {displayedMonths.map((m) => (
                  <td
                    key={m.month}
                    className={`py-3 px-3 font-mono text-[13px] ${
                      m.ebitda >= 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {formatCurrency(m.ebitda)}
                  </td>
                ))}
              </tr>

              {/* Income Tax */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-muted)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Corporate Income Tax ({(assumptions.taxRate * 100).toFixed(0)}%)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-muted)]">
                    {m.incomeTax > 0 ? `-${formatCurrency(m.incomeTax)}` : `${sym} 0`}
                  </td>
                ))}
              </tr>

              {/* Row 20: Net Income */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Net Income (Bottom Line)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.netIncome)}
                  </td>
                ))}
              </tr>

              {/* Section Header: Cash Flow & Balance */}
              <tr className="bg-[rgba(5,28,44,0.06)] text-[11px] font-semibold uppercase tracking-[0.06em]">
                <td colSpan={displayedMonths.length + 1} className="py-2 px-4 text-left text-[var(--color-primary)]">
                  Cash Flow & Runway Tracking
                </td>
              </tr>

              {/* Financing Cash Flow (Capital Injection) */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Financing Cash Flow (Equity Injection)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-accent)] font-semibold">
                    {m.financingCashFlow > 0 ? formatCurrency(m.financingCashFlow) : '-'}
                  </td>
                ))}
              </tr>

              {/* Net Cash Flow */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Net Monthly Cash Flow
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.netCashFlow)}
                  </td>
                ))}
              </tr>

              {/* Ending Cash Balance (Hero Row) */}
              <tr className="bg-[rgba(34,81,255,0.06)] font-bold text-[var(--color-primary)] hover:bg-[rgba(34,81,255,0.09)] transition-colors border-t-2 border-b-2 border-[rgba(34,81,255,0.25)]">
                <td className="py-3 px-4 text-left font-sans sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Ending Bank Cash Reserve
                </td>
                {displayedMonths.map((m) => (
                  <td
                    key={m.month}
                    className={`py-3 px-3 font-mono text-[13px] ${
                      m.endingCash < 0
                        ? 'text-[var(--color-negative)] font-bold'
                        : 'text-[var(--color-accent)]'
                    }`}
                  >
                    {formatCurrency(m.endingCash)}
                  </td>
                ))}
              </tr>

              {/* Runway Months */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Cash Runway (Months)
                </td>
                {displayedMonths.map((m) => {
                  const isAnomaly = m.runwayMonths < 3.0 && m.netCashBurn > 0;
                  return (
                    <td
                      key={m.month}
                      className={`py-2.5 px-3 ${
                        isAnomaly ? 'text-[var(--color-negative)] font-bold' : 'text-[var(--color-muted)]'
                      }`}
                    >
                      {m.runwayMonths >= 99 ? 'Self-Sustaining' : `${m.runwayMonths.toFixed(1)} mo`}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Scientific Financing Calculation">
        Unlike ad-hoc funding targets, the model isolates the exact minimum operational cash trough (
        <strong>{formatCurrency(results.maxFundingGap)}</strong>) and adds a {assumptions.minCashBufferMonths}
        -month safety buffer (<strong>{formatCurrency(results.safetyBuffer)}</strong>) to determine the mathematically sound round size of{' '}
        <strong>{formatCurrency(results.recommendedRaise)}</strong>.
      </InsightBlock>
    </div>
  );
};
