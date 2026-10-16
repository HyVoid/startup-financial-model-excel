import React, { useState } from 'react';
import { useModel } from '../../context/ModelContext';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { CircleDollarSign, Zap, Clock, ShieldCheck } from 'lucide-react';

export const RevenueSheet: React.FC = () => {
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

  const currentLtv = displayedMonths[displayedMonths.length - 1]?.ltv ?? 0;
  const currentBlendedCac = displayedMonths[displayedMonths.length - 1]?.blendedCAC ?? 0;
  const currentRatio = displayedMonths[displayedMonths.length - 1]?.ltvCacRatio ?? 0;
  const currentPayback = displayedMonths[displayedMonths.length - 1]?.paybackMonths ?? 0;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 03 · Commercialization & Unit Economics Engine
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          Revenue Conversion & Unit Economics (60 Months)
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Converts active user scale into monthly recurring revenue (MRR) and evaluates SaaS commercial sustainability through real-time LTV, Blended CAC, LTV/CAC ratios, and payback cycles.
        </p>
      </div>

      {/* Unit Economics Scorecard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* LTV */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Customer Lifetime Value
            </span>
            <CircleDollarSign className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(currentLtv)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Based on {((1 - assumptions.cogsRate[assumptions.activeScenario]) * 100).toFixed(0)}% gross margin & churn decay
          </div>
        </div>

        {/* Blended CAC */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Blended Acquisition Cost
            </span>
            <Zap className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(currentBlendedCac)}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Diluted by natural organic virality (Paid CAC: {formatCurrency(assumptions.paidCAC[assumptions.activeScenario])})
          </div>
        </div>

        {/* LTV / CAC */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              LTV / CAC Ratio
            </span>
            <StatusPill
              label={currentRatio >= 3.0 ? 'Prime (≥3.0x)' : 'Attention'}
              variant={currentRatio >= 3.0 ? 'positive' : 'negative'}
            />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {currentRatio.toFixed(1)}x
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Venture capital golden standard benchmark: &gt; 3.0x
          </div>
        </div>

        {/* Payback Months */}
        <div className="model-card p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              CAC Payback Period
            </span>
            <Clock className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="font-heading text-[26px] font-bold text-[var(--color-primary)] tracking-tight">
            {currentPayback.toFixed(1)} Months
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1">
            Months of gross profit required to recoup acquisition cash
          </div>
        </div>
      </div>

      {/* 60-Month Revenue & Unit Economics Table */}
      <div className="model-card overflow-hidden">
        {/* Table Controls */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Revenue Stream & Unit Economics Ledger
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

        {/* Table Content */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-right border-collapse min-w-[1050px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-4 text-left sticky left-0 bg-[var(--color-surface)] z-10 w-64 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Revenue / UE Item
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
              {/* Active MAU */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Active Retained Base (MAU)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatNumber(m.activeMAU)}
                  </td>
                ))}
              </tr>

              {/* Paying Users */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans font-medium text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Paying Subscribers (Conv. Rate: {(m_conv(assumptions) * 100).toFixed(1)}%)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 font-semibold text-[var(--color-primary)]">
                    {formatNumber(m.payingUsers)}
                  </td>
                ))}
              </tr>

              {/* Monthly Recurring Revenue MRR */}
              <tr className="bg-[rgba(34,81,255,0.04)] font-bold text-[var(--color-primary)] hover:bg-[rgba(34,81,255,0.07)] transition-colors border-t border-b border-[rgba(34,81,255,0.2)]">
                <td className="py-3 px-4 text-left font-sans sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Monthly Recurring Revenue (MRR)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-3 px-3 text-[var(--color-accent)] font-mono text-[13px]">
                    {formatCurrency(m.revenue)}
                  </td>
                ))}
              </tr>

              {/* ARR Run-Rate */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Annualized Run-Rate ARR (MRR × 12)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.arrRunRate)}
                  </td>
                ))}
              </tr>

              {/* COGS */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-muted)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Variable Direct COGS
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    -{formatCurrency(m.cogs)}
                  </td>
                ))}
              </tr>

              {/* Gross Profit */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Gross Profit (Margin: {(displayedMonths[0]?.grossMargin * 100 || 0).toFixed(0)}%)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.grossProfit)}
                  </td>
                ))}
              </tr>

              {/* Divider / Header for Unit Economics */}
              <tr className="bg-[rgba(5,28,44,0.06)] text-[11px] font-semibold uppercase tracking-[0.06em]">
                <td colSpan={displayedMonths.length + 1} className="py-2 px-4 text-left text-[var(--color-primary)]">
                  Unit Economics Health Audit
                </td>
              </tr>

              {/* Blended CAC */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Blended CAC (Ad Budget ÷ New MAU)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.blendedCAC)}
                  </td>
                ))}
              </tr>

              {/* Customer Lifetime Value LTV */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Customer Lifetime Value (LTV)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)] font-semibold">
                    {formatCurrency(m.ltv)}
                  </td>
                ))}
              </tr>

              {/* LTV / CAC Ratio */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  LTV / CAC Efficiency Ratio
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-accent)] font-bold">
                    {m.ltvCacRatio.toFixed(1)}x
                  </td>
                ))}
              </tr>

              {/* Payback Months */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  CAC Payback Period (Months)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    {m.paybackMonths.toFixed(1)} mo
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="SaaS Unit Economics Validation">
        Institutional investors target an LTV/CAC ratio strictly greater than <strong>3.0x</strong> and a payback cycle below <strong>12 months</strong>. Blended CAC benefits directly from European expansion word-of-mouth compounding as brand recognition deepens.
      </InsightBlock>
    </div>
  );
};

function m_conv(assumptions: any) {
  return assumptions.conversionRate[assumptions.activeScenario] || 0.045;
}
