import React from 'react';
import { useModel } from '../../context/ModelContext';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { buildScenarioComparisonMatrix } from '../../engine/financialCalculator';
import { Landmark, PieChart, TrendingUp, Layers, CheckCircle } from 'lucide-react';

export const FundingSheet: React.FC = () => {
  const { state, results, updateFunding } = useModel();
  const { assumptions, funding } = state;
  const sym = assumptions.currencySymbol;

  const comparisonRows = buildScenarioComparisonMatrix(state);

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;

  const useOfFundsList = [
    {
      key: 'rndPercent' as const,
      label: 'R&D & Engineering Infrastructure',
      pct: funding.useOfFunds.rndPercent,
      desc: 'Full-stack engineers, cloud architecture, security, and algorithmic development.',
    },
    {
      key: 'growthPercent' as const,
      label: 'European Market Expansion & Growth',
      pct: funding.useOfFunds.growthPercent,
      desc: 'Paid multichannel ad spend, regional localization, and performance marketing teams.',
    },
    {
      key: 'adminPercent' as const,
      label: 'Operations, Legal Compliance & General',
      pct: funding.useOfFunds.adminPercent,
      desc: 'GDPR/EU regulatory compliance, administrative talent, and financial controllership.',
    },
    {
      key: 'reservePercent' as const,
      label: 'Unforeseen Contingency Reserve',
      pct: funding.useOfFunds.reservePercent,
      desc: 'Runway buffer protecting against market macroeconomic downturns.',
    },
  ];

  const totalFundPercent =
    funding.useOfFunds.rndPercent +
    funding.useOfFunds.growthPercent +
    funding.useOfFunds.adminPercent +
    funding.useOfFunds.reservePercent;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 06 · Strategic Capitalization & Exit Analytics
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          Scenario Comparison, Valuation & Investment Returns
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Bridges financial operations to equity cap table economics. Dynamically assesses dilution, use of proceeds, 5-year exit valuations, Multiple on Invested Capital (MoIC), and annualized IRR.
        </p>
      </div>

      {/* Top 3 Blocks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Block A: Round Sizing & Cap Table Dilution */}
        <div className="model-card p-6 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border)]">
            <Landmark className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Funding Round & Dilution
            </h2>
          </div>

          <div className="space-y-3 text-[13px]">
            <div>
              <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                Target Funding Round Size
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="50000"
                  min="0"
                  value={funding.targetFundingAmount}
                  onChange={(e) =>
                    updateFunding({
                      targetFundingAmount: Math.max(0, parseFloat(e.target.value) || 0),
                    })
                  }
                  className="w-full px-3 py-1.5 font-semibold text-[14px] rounded cell-editable"
                />
              </div>
              <div className="text-[10px] text-[var(--color-muted)] mt-1">
                Suggested Baseline: {formatCurrency(results.recommendedRaise)}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                Pre-Money Valuation
              </label>
              <input
                type="number"
                step="250000"
                min="0"
                value={funding.preMoneyValuation}
                onChange={(e) =>
                  updateFunding({
                    preMoneyValuation: Math.max(0, parseFloat(e.target.value) || 0),
                  })
                }
                className="w-full px-3 py-1.5 font-semibold text-[14px] rounded cell-editable"
              />
            </div>

            <div className="pt-2 border-t border-[var(--color-border)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Post-Money Valuation:</span>
                <span className="font-semibold text-[var(--color-primary)] font-mono">
                  {formatCurrency(results.postMoneyValuation)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Investor Equity Stake:</span>
                <span className="font-bold text-[var(--color-accent)] font-mono">
                  {(results.investorStakePercent * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Founders Retained Stake:</span>
                <span className="font-semibold text-[var(--color-primary)] font-mono">
                  {(results.foundersStakePercent * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Block B: Use of Funds Allocation */}
        <div className="model-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[var(--color-accent)]" />
              <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
                Allocation of Proceeds
              </h2>
            </div>
            <span
              className={`text-[11px] font-semibold font-mono ${
                Math.abs(totalFundPercent - 1) < 0.001
                  ? 'text-[#008738]'
                  : 'text-[var(--color-negative)]'
              }`}
            >
              {(totalFundPercent * 100).toFixed(0)}%
            </span>
          </div>

          <div className="space-y-3 text-[12.5px]">
            {useOfFundsList.map((item) => {
              const allocatedAmount = Math.round(funding.targetFundingAmount * item.pct);
              return (
                <div key={item.key} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-primary)]">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="5"
                        value={Math.round(item.pct * 100)}
                        onChange={(e) => {
                          const val = Math.max(0, parseFloat(e.target.value) || 0) / 100;
                          updateFunding({
                            useOfFunds: {
                              ...funding.useOfFunds,
                              [item.key]: val,
                            },
                          });
                        }}
                        className="w-14 px-1 py-0.5 text-right font-mono text-[12px] rounded cell-editable"
                      />
                      <span className="text-[11px] text-[var(--color-muted)]">%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--color-muted)]">
                    <span className="truncate max-w-[180px]">{item.desc}</span>
                    <span className="font-mono text-[var(--color-primary)] font-semibold">
                      {formatCurrency(allocatedAmount)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Block C: 5-Year Exit Valuation & Returns */}
        <div className="model-card p-6 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border)]">
            <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              5-Year Exit & Return Returns
            </h2>
          </div>

          <div className="space-y-3 text-[13px]">
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Year 5 Exit ARR:</span>
              <span className="font-semibold text-[var(--color-primary)] font-mono">
                {formatCurrency(results.y5EndingARR)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Exit Valuation Multiple:</span>
              <span className="font-semibold text-[var(--color-primary)] font-mono">
                {assumptions.exitMultiple[assumptions.activeScenario].toFixed(1)}x P/S
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
              <span className="font-medium text-[var(--color-primary)]">5-Yr Exit Enterprise Value:</span>
              <span className="font-bold text-[var(--color-accent)] font-mono text-[15px]">
                {formatCurrency(results.exitValuation)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-muted)]">Investor Liquidation Proceeds:</span>
              <span className="font-semibold text-[var(--color-primary)] font-mono">
                {formatCurrency(results.investorProceeds)}
              </span>
            </div>

            <div className="p-3 bg-[rgba(5,28,44,0.03)] rounded-[8px] flex items-center justify-around text-center pt-3 mt-2">
              <div>
                <div className="text-[10px] font-semibold uppercase text-[var(--color-muted)]">
                  Expected MoIC
                </div>
                <div className="font-heading text-[22px] font-bold text-[var(--color-primary)]">
                  {results.moic.toFixed(1)}x
                </div>
              </div>
              <div className="h-8 w-px bg-[var(--color-border)]" />
              <div>
                <div className="text-[10px] font-semibold uppercase text-[var(--color-muted)]">
                  5-Yr Compound IRR
                </div>
                <div className="font-heading text-[22px] font-bold text-[var(--color-primary)]">
                  {(results.irr5Yr * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block D: 3-Scenario Cross-Comparison Matrix */}
      <div className="model-card overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Cross-Scenario Sensitivity Matrix (Block D)
            </h2>
          </div>
          <div className="text-[12px] text-[var(--color-muted)]">
            Active: <span className="font-semibold text-[var(--color-primary)]">{assumptions.activeScenario === 1 ? 'Conservative' : assumptions.activeScenario === 2 ? 'Base Case' : 'Optimistic'}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-6">Strategic Metric</th>
                <th className="py-3 px-6 text-right w-48">
                  Conservative Scenario
                </th>
                <th className="py-3 px-6 text-right w-48 bg-[rgba(34,81,255,0.04)]">
                  Base Case (Target)
                </th>
                <th className="py-3 px-6 text-right w-48">
                  Optimistic Scenario
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-[13px] font-mono">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                  <td className="py-3.5 px-6 font-sans font-medium text-[var(--color-primary)]">
                    {row.label}
                  </td>
                  <td className="py-3.5 px-6 text-right text-[var(--color-body-text)]">
                    {row.conservative}
                  </td>
                  <td className="py-3.5 px-6 text-right text-[var(--color-accent)] font-semibold bg-[rgba(34,81,255,0.02)]">
                    {row.base}
                  </td>
                  <td className="py-3.5 px-6 text-right text-[var(--color-body-text)]">
                    {row.optimistic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Institutional Investment Thesis">
        In the Base Case scenario, the venture delivers an estimated <strong>{results.moic.toFixed(1)}x MoIC</strong> and <strong>{(results.irr5Yr * 100).toFixed(1)}% IRR</strong> over a 5-year horizon, safely surpassing standard top-quartile European early-stage VC return hurdles.
      </InsightBlock>
    </div>
  );
};
