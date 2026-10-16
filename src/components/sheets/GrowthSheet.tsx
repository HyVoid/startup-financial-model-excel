import React, { useState } from 'react';
import { useModel } from '../../context/ModelContext';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { Target, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';

export const GrowthSheet: React.FC = () => {
  const { state, results, updateMarketingMonth } = useModel();
  const { assumptions } = state;
  const sym = assumptions.currencySymbol;

  // View pagination / windowing for the 60 months
  const [selectedYear, setSelectedYear] = useState<number>(1); // 1 = M1-12, 2 = M13-24, 3 = M25-36, 4 = M37-48, 5 = M49-60, 0 = All 60

  const displayedMonths =
    selectedYear === 0
      ? results.months
      : results.months.slice((selectedYear - 1) * 12, selectedYear * 12);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;

  const maxEndingMAU = Math.max(...results.months.map((m) => m.endingMAU), 1000);

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 02 · European Acquisition & Viral Funnel Engine
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          Growth & Acquisition Mechanics (60 Months)
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Simulates European expansion dynamics. Monthly marketing budgets drive initial paid acquisitions, compounded by organic network effects (K-Factor) and reduced by natural churn decay.
        </p>
      </div>

      {/* Milestone KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Milestone 1 */}
        <div className="model-card p-5 relative overflow-hidden interactive-chip">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              M1 Milestone Target
            </span>
            <StatusPill
              label={results.m1.reachedMonth ? `Reached M${results.m1.reachedMonth}` : 'In Progress'}
              variant={results.m1.reachedMonth ? 'positive' : 'neutral'}
            />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatNumber(assumptions.milestone1Users)} MAU
          </div>
          <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[12px]">
            <span className="text-[var(--color-muted)]">Achievement Month:</span>
            <span className="font-semibold text-[var(--color-primary)]">
              {results.m1.reachedMonth ? `Month ${results.m1.reachedMonth}` : 'Not Reached in 60M'}
            </span>
          </div>
          <div className="flex items-center justify-between text-[12px] mt-1">
            <span className="text-[var(--color-muted)]">Cumulative Ad Spend:</span>
            <span className="font-semibold text-[var(--color-accent)] font-mono">
              {results.m1.cumulativeMarketingSpend !== null
                ? formatCurrency(results.m1.cumulativeMarketingSpend)
                : 'N/A'}
            </span>
          </div>
        </div>

        {/* Milestone 2 */}
        <div className="model-card p-5 relative overflow-hidden interactive-chip">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              M2 Regional Scaling
            </span>
            <StatusPill
              label={results.m2.reachedMonth ? `Reached M${results.m2.reachedMonth}` : 'In Progress'}
              variant={results.m2.reachedMonth ? 'positive' : 'neutral'}
            />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatNumber(assumptions.milestone2Users)} MAU
          </div>
          <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[12px]">
            <span className="text-[var(--color-muted)]">Achievement Month:</span>
            <span className="font-semibold text-[var(--color-primary)]">
              {results.m2.reachedMonth ? `Month ${results.m2.reachedMonth}` : 'Not Reached in 60M'}
            </span>
          </div>
          <div className="flex items-center justify-between text-[12px] mt-1">
            <span className="text-[var(--color-muted)]">Cumulative Ad Spend:</span>
            <span className="font-semibold text-[var(--color-accent)] font-mono">
              {results.m2.cumulativeMarketingSpend !== null
                ? formatCurrency(results.m2.cumulativeMarketingSpend)
                : 'N/A'}
            </span>
          </div>
        </div>

        {/* Milestone 3 */}
        <div className="model-card p-5 relative overflow-hidden interactive-chip">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              M3 Category Leader
            </span>
            <StatusPill
              label={results.m3.reachedMonth ? `Reached M${results.m3.reachedMonth}` : 'In Progress'}
              variant={results.m3.reachedMonth ? 'positive' : 'neutral'}
            />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatNumber(assumptions.milestone3Users)} MAU
          </div>
          <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[12px]">
            <span className="text-[var(--color-muted)]">Achievement Month:</span>
            <span className="font-semibold text-[var(--color-primary)]">
              {results.m3.reachedMonth ? `Month ${results.m3.reachedMonth}` : 'Not Reached in 60M'}
            </span>
          </div>
          <div className="flex items-center justify-between text-[12px] mt-1">
            <span className="text-[var(--color-muted)]">Cumulative Ad Spend:</span>
            <span className="font-semibold text-[var(--color-accent)] font-mono">
              {results.m3.cumulativeMarketingSpend !== null
                ? formatCurrency(results.m3.cumulativeMarketingSpend)
                : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* 60-Month Growth Timeline Table */}
      <div className="model-card overflow-hidden">
        {/* Table Controls */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              60-Month Growth & Funnel Trajectory
            </h2>
          </div>

          {/* Time Slice Selector */}
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

        {/* Horizontal Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-right border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-4 text-left sticky left-0 bg-[var(--color-surface)] z-10 w-64 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Metric / Time Index
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
              {/* Row 6: Marketing Budget (Editable Input) */}
              <tr className="bg-[#FFFDE7]/40 hover:bg-[#FFFDE7]/70 transition-colors">
                <td className="py-3 px-4 text-left font-sans font-medium text-[var(--color-primary)] sticky left-0 bg-[#FFFDE7] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                    <span>Marketing Spend Budget (Col C6#)</span>
                  </div>
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2 px-2">
                    <input
                      type="number"
                      step="1000"
                      min="0"
                      value={m.marketingBudget}
                      onChange={(e) =>
                        updateMarketingMonth(m.month - 1, parseFloat(e.target.value) || 0)
                      }
                      className="w-full px-2 py-1 text-right text-[12px] font-semibold rounded-[4px] cell-editable"
                    />
                  </td>
                ))}
              </tr>

              {/* Row 7: Paid MAU */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  New Paid MAU (Ad Acquired)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatNumber(m.paidMAU)}
                  </td>
                ))}
              </tr>

              {/* Row 8: Organic MAU */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  New Organic MAU (K-Factor Viral)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    {formatNumber(m.organicMAU)}
                  </td>
                ))}
              </tr>

              {/* Row 9: Total New MAU */}
              <tr className="bg-[rgba(5,28,44,0.01)] font-semibold hover:bg-[rgba(5,28,44,0.03)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total New Monthly Inflow (New MAU)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatNumber(m.newMAU)}
                  </td>
                ))}
              </tr>

              {/* Row 10: Churned MAU */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Monthly Churned MAU
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    -{formatNumber(m.churnedMAU)}
                  </td>
                ))}
              </tr>

              {/* Row 11: Ending MAU (Hero Row) */}
              <tr className="bg-[rgba(34,81,255,0.05)] font-bold text-[var(--color-primary)] hover:bg-[rgba(34,81,255,0.08)] transition-colors border-t-2 border-b-2 border-[rgba(34,81,255,0.2)]">
                <td className="py-3 px-4 text-left font-sans sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between">
                    <span>Ending Retained Active Base (MAU)</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </div>
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-3 px-3 text-[var(--color-accent)] font-mono text-[13px]">
                    {formatNumber(m.endingMAU)}
                  </td>
                ))}
              </tr>

              {/* Row 12: Cumulative Reached Users */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-muted)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Cumulative Users Reached
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    {formatNumber(m.cumulativeUsers)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Organic Compounding vs. Paid Fuel">
        As the user base matures, natural organic inflow (K-Factor × MAU) begins contributing significantly to top-of-funnel velocity, reducing the blended customer acquisition cost and increasing capital efficiency across subsequent growth rounds.
      </InsightBlock>
    </div>
  );
};
