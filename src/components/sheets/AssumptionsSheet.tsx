import React from 'react';
import { useModel } from '../../context/ModelContext';
import { ScenarioType } from '../../types/model';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { Sliders, Shield, Zap } from 'lucide-react';

export const AssumptionsSheet: React.FC = () => {
  const { state, updateAssumptions, updateDriverValue, setScenario } = useModel();
  const { assumptions } = state;
  const sym = assumptions.currencySymbol;

  const driversList: {
    key:
      | 'paidCAC'
      | 'organicKFactor'
      | 'monthlyChurn'
      | 'conversionRate'
      | 'pricingARPU'
      | 'cogsRate'
      | 'socialRate'
      | 'exitMultiple';
    name: string;
    unit: string;
    isCurrency?: boolean;
    isPercent?: boolean;
    step: number;
    description: string;
  }[] = [
    {
      key: 'paidCAC',
      name: 'Paid CAC (Blended Paid Channels)',
      unit: `${sym}/user`,
      isCurrency: true,
      step: 0.5,
      description: 'Direct paid advertising cost per customer acquisition across Google, Meta, and regional channels.',
    },
    {
      key: 'organicKFactor',
      name: 'Organic K-Factor (Virality / Word of Mouth)',
      unit: '%',
      isPercent: true,
      step: 0.01,
      description: 'Monthly viral propagation coefficient calculated against active retained MAU base.',
    },
    {
      key: 'monthlyChurn',
      name: 'Monthly MAU Churn Rate',
      unit: '%',
      isPercent: true,
      step: 0.005,
      description: 'Percentage of active user base decaying each 30-day operating cycle.',
    },
    {
      key: 'conversionRate',
      name: 'Active-to-Paying Conversion Rate',
      unit: '%',
      isPercent: true,
      step: 0.005,
      description: 'Percentage of registered/active user base converting into paying subscribers.',
    },
    {
      key: 'pricingARPU',
      name: 'Paying User Monthly ARPU',
      unit: `${sym}/mo`,
      isCurrency: true,
      step: 1,
      description: 'Average monthly subscription revenue per active paying subscriber.',
    },
    {
      key: 'cogsRate',
      name: 'Variable COGS Rate',
      unit: '%',
      isPercent: true,
      step: 0.01,
      description: 'Cloud infrastructure compute, payment gateway processing, and direct service delivery fee ratio.',
    },
    {
      key: 'socialRate',
      name: 'Mandatory Employer Social Charges & Benefits',
      unit: '%',
      isPercent: true,
      step: 0.01,
      description: 'Statutory employer contributions and mandatory employee benefit overhead across European operations.',
    },
    {
      key: 'exitMultiple',
      name: 'Year 5 Exit Valuation Multiple (P/S)',
      unit: 'x',
      step: 0.5,
      description: 'Price-to-Sales (P/S) run-rate ARR multiple applied to derive 5-year exit valuation.',
    },
  ];

  const formatDisplay = (val: number, isCurrency?: boolean, isPercent?: boolean) => {
    if (isCurrency) return `${sym} ${val.toFixed(2)}`;
    if (isPercent) return `${(val * 100).toFixed(1)}%`;
    return `${val.toFixed(1)}x`;
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Page Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 01 · Global Configuration Hub
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          Assumptions & Scenario Control Matrix
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Centralized parameter control board. All 60-month growth simulations, unit economics, headcount, P&L statements, and funding analyses strictly read from these drivers without any hardcoded logic.
        </p>
      </div>

      {/* Block A: Global Environment & Control Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Currency Symbol */}
        <div className="model-card p-4 space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Reporting Currency
          </div>
          <div className="flex items-center gap-2">
            {['€', '$', '£'].map((curr) => (
              <button
                key={curr}
                onClick={() => updateAssumptions({ currencySymbol: curr })}
                className={`w-9 h-9 rounded-[6px] text-[15px] font-semibold transition-all ${
                  assumptions.currencySymbol === curr
                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                    : 'bg-[rgba(5,28,44,0.04)] text-[var(--color-primary)] hover:bg-[rgba(5,28,44,0.08)]'
                }`}
              >
                {curr}
              </button>
            ))}
            <input
              type="text"
              value={assumptions.currencySymbol}
              onChange={(e) => updateAssumptions({ currencySymbol: e.target.value.slice(0, 3) })}
              className="w-12 h-9 px-2 text-center text-[13px] font-semibold rounded-[6px] cell-editable"
              title="Custom Currency"
            />
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Cell C3 · Formats all model outputs
          </div>
        </div>

        {/* Start Date */}
        <div className="model-card p-4 space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Model Base Start Date
          </div>
          <input
            type="date"
            value={assumptions.startDate}
            onChange={(e) => updateAssumptions({ startDate: e.target.value })}
            className="w-full h-9 px-3 rounded-[6px] text-[13px] font-medium cell-editable"
          />
          <div className="text-[11px] text-[var(--color-muted)]">
            Cell C4 · Drives 60-month chronological timeline
          </div>
        </div>

        {/* Active Scenario Selector */}
        <div className="model-card p-4 space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Active Scenario Switcher
          </div>
          <div className="grid grid-cols-3 gap-1 bg-[rgba(5,28,44,0.04)] p-1 rounded-[8px]">
            {([1, 2, 3] as ScenarioType[]).map((s) => (
              <button
                key={s}
                onClick={() => setScenario(s)}
                className={`py-1.5 text-[11px] font-semibold rounded-[6px] transition-all ${
                  assumptions.activeScenario === s
                    ? 'bg-white text-[var(--color-accent)] shadow-sm'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {s === 1 ? 'Conserv.' : s === 2 ? 'Base' : 'Optim.'}
              </button>
            ))}
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Cell C5 · Switches Col F reactive index
          </div>
        </div>

        {/* Corporate Tax & Safety Buffer */}
        <div className="model-card p-4 space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Tax Rate & Runway Buffer
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-[10px] text-[var(--color-muted)] block">Tax Rate</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="50"
                  step="1"
                  value={Math.round(assumptions.taxRate * 100)}
                  onChange={(e) =>
                    updateAssumptions({ taxRate: Math.max(0, parseFloat(e.target.value) || 0) / 100 })
                  }
                  className="w-full h-8 px-2 text-[12px] font-medium rounded-[6px] cell-editable"
                />
                <span className="text-[12px] text-[var(--color-muted)]">%</span>
              </div>
            </div>
            <div className="flex-1">
              <label className="text-[10px] text-[var(--color-muted)] block">Buffer</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={assumptions.minCashBufferMonths}
                  onChange={(e) =>
                    updateAssumptions({
                      minCashBufferMonths: Math.max(1, parseInt(e.target.value, 10) || 1),
                    })
                  }
                  className="w-full h-8 px-2 text-[12px] font-medium rounded-[6px] cell-editable"
                />
                <span className="text-[12px] text-[var(--color-muted)]">Mo</span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-[var(--color-muted)]">
            Cells C6 & C7 · Safety thresholds
          </div>
        </div>
      </div>

      {/* Block B: Multi-Scenario Business Driver Matrix Table */}
      <div className="model-card overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Multi-Scenario Business Driver Matrix (Rows 11 to 18)
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[var(--color-muted)]">
            <span className="inline-block w-3 h-3 rounded-[3px] bg-[#FFFDE7] border border-dashed border-gray-400" />
            <span>Light yellow cells are directly editable user inputs</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em]">
                <th className="py-3 px-6 w-16">Row</th>
                <th className="py-3 px-6">Driver Variable</th>
                <th className="py-3 px-6 text-right w-36">
                  Conservative (Col C)
                </th>
                <th className="py-3 px-6 text-right w-36">
                  Base Case (Col D)
                </th>
                <th className="py-3 px-6 text-right w-36">
                  Optimistic (Col E)
                </th>
                <th className="py-3 px-6 text-right w-44 bg-[rgba(34,81,255,0.05)]">
                  Active Value (Col F: INDEX)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-[13px]">
              {driversList.map((driver, index) => {
                const driverObj = assumptions[driver.key] as Record<ScenarioType, number>;
                const activeVal = driverObj[assumptions.activeScenario];

                return (
                  <tr key={driver.key} className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                    <td className="py-3.5 px-6 font-mono text-[11px] text-[var(--color-muted)]">
                      {11 + index}
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="font-medium text-[var(--color-primary)]">
                        {driver.name}
                      </div>
                      <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
                        {driver.description}
                      </div>
                    </td>

                    {/* Conservative Input (Col C) */}
                    <td className="py-3.5 px-6 text-right">
                      <div className="inline-flex items-center justify-end">
                        <input
                          type="number"
                          step={driver.step}
                          value={driver.isPercent ? +(driverObj[1] * 100).toFixed(2) : driverObj[1]}
                          onChange={(e) => {
                            const raw = parseFloat(e.target.value) || 0;
                            updateDriverValue(
                              driver.key,
                              1,
                              driver.isPercent ? raw / 100 : raw
                            );
                          }}
                          className="w-24 px-2 py-1 text-right text-[13px] font-medium rounded-[6px] cell-editable"
                        />
                      </div>
                    </td>

                    {/* Base Case Input (Col D) */}
                    <td className="py-3.5 px-6 text-right">
                      <div className="inline-flex items-center justify-end">
                        <input
                          type="number"
                          step={driver.step}
                          value={driver.isPercent ? +(driverObj[2] * 100).toFixed(2) : driverObj[2]}
                          onChange={(e) => {
                            const raw = parseFloat(e.target.value) || 0;
                            updateDriverValue(
                              driver.key,
                              2,
                              driver.isPercent ? raw / 100 : raw
                            );
                          }}
                          className="w-24 px-2 py-1 text-right text-[13px] font-medium rounded-[6px] cell-editable"
                        />
                      </div>
                    </td>

                    {/* Optimistic Input (Col E) */}
                    <td className="py-3.5 px-6 text-right">
                      <div className="inline-flex items-center justify-end">
                        <input
                          type="number"
                          step={driver.step}
                          value={driver.isPercent ? +(driverObj[3] * 100).toFixed(2) : driverObj[3]}
                          onChange={(e) => {
                            const raw = parseFloat(e.target.value) || 0;
                            updateDriverValue(
                              driver.key,
                              3,
                              driver.isPercent ? raw / 100 : raw
                            );
                          }}
                          className="w-24 px-2 py-1 text-right text-[13px] font-medium rounded-[6px] cell-editable"
                        />
                      </div>
                    </td>

                    {/* Active Output (Col F: Dynamically extracted) */}
                    <td className="py-3.5 px-6 text-right bg-[rgba(34,81,255,0.03)] font-mono font-semibold text-[var(--color-primary)]">
                      <span className="inline-block px-2.5 py-1 rounded-[6px] bg-[rgba(34,81,255,0.08)] text-[var(--color-accent)] border border-[rgba(34,81,255,0.2)]">
                        {formatDisplay(activeVal, driver.isCurrency, driver.isPercent)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Block C: Milestones Thresholds */}
      <div className="model-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-[var(--color-accent)]" />
          <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
            User Scale Milestone Definitions (Rows 22 to 24)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Milestone 1 (M1)
              </span>
              <StatusPill label="Cell C22" />
            </div>
            <div className="text-[12px] text-[var(--color-muted)] mb-3">
              Initial European Market Traction & Product-Market Fit (PMF)
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="10000"
                value={assumptions.milestone1Users}
                onChange={(e) =>
                  updateAssumptions({
                    milestone1Users: Math.max(1000, parseInt(e.target.value, 10) || 1000),
                  })
                }
                className="w-full px-3 py-1.5 text-[14px] font-semibold rounded-[6px] cell-editable"
              />
              <span className="text-[12px] text-[var(--color-muted)] font-medium">MAU</span>
            </div>
          </div>

          <div className="p-4 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Milestone 2 (M2)
              </span>
              <StatusPill label="Cell C23" />
            </div>
            <div className="text-[12px] text-[var(--color-muted)] mb-3">
              Multi-Country European Expansion & Commercial Acceleration
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="50000"
                value={assumptions.milestone2Users}
                onChange={(e) =>
                  updateAssumptions({
                    milestone2Users: Math.max(1000, parseInt(e.target.value, 10) || 1000),
                  })
                }
                className="w-full px-3 py-1.5 text-[14px] font-semibold rounded-[6px] cell-editable"
              />
              <span className="text-[12px] text-[var(--color-muted)] font-medium">MAU</span>
            </div>
          </div>

          <div className="p-4 rounded-[10px] bg-[rgba(5,28,44,0.02)] border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Milestone 3 (M3)
              </span>
              <StatusPill label="Cell C24" />
            </div>
            <div className="text-[12px] text-[var(--color-muted)] mb-3">
              Category Leadership & Institutional Scale Readiness
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="100000"
                value={assumptions.milestone3Users}
                onChange={(e) =>
                  updateAssumptions({
                    milestone3Users: Math.max(1000, parseInt(e.target.value, 10) || 1000),
                  })
                }
                className="w-full px-3 py-1.5 text-[14px] font-semibold rounded-[6px] cell-editable"
              />
              <span className="text-[12px] text-[var(--color-muted)] font-medium">MAU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Insight Block */}
      <InsightBlock title="Driver-Based Architectural Integrity">
        By routing all calculation formulas through <strong>Column F (INDEX formula)</strong>, the financial engine decouples sensitivity boundaries from downstream models. Changing the active scenario switch (1/2/3) instantaneously propagates through all 60 periods across user growth, team headcount, revenue realization, and cash runway.
      </InsightBlock>
    </div>
  );
};
