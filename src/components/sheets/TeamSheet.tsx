import React, { useState } from 'react';
import { useModel } from '../../context/ModelContext';
import { InsightBlock } from '../common/InsightBlock';
import { StatusPill } from '../common/StatusPill';
import { Users, Plus, Trash2, Building, Briefcase, DollarSign } from 'lucide-react';
import { StaffRole, FixedOpexItem } from '../../types/model';

export const TeamSheet: React.FC = () => {
  const {
    state,
    results,
    addStaffRole,
    updateStaffRole,
    deleteStaffRole,
    addFixedOpex,
    updateFixedOpex,
    deleteFixedOpex,
  } = useModel();

  const { assumptions, staffRoster, fixedOpexRoster } = state;
  const sym = assumptions.currencySymbol;

  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [showAddOpexModal, setShowAddOpexModal] = useState(false);

  // Form states for new staff
  const [newTitle, setNewTitle] = useState('');
  const [newDept, setNewDept] = useState<'R&D' | 'S&M' | 'G&A'>('R&D');
  const [newHireMonth, setNewHireMonth] = useState(1);
  const [newSalary, setNewSalary] = useState(5000);

  // Form states for new fixed opex
  const [newOpexItem, setNewOpexItem] = useState('');
  const [newOpexDept, setNewOpexDept] = useState<'R&D' | 'S&M' | 'G&A'>('G&A');
  const [newOpexStart, setNewOpexStart] = useState(1);
  const [newOpexAmount, setNewOpexAmount] = useState(1000);

  const displayedMonths =
    selectedYear === 0
      ? results.months
      : results.months.slice((selectedYear - 1) * 12, selectedYear * 12);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);

  const formatCurrency = (val: number) =>
    `${sym} ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(val)}`;

  const handleCreateStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addStaffRole({
      title: newTitle.trim(),
      department: newDept,
      hireMonth: Math.max(1, Math.min(60, newHireMonth)),
      baseSalary: Math.max(0, newSalary),
    });
    setNewTitle('');
    setShowAddStaffModal(false);
  };

  const handleCreateOpex = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOpexItem.trim()) return;
    addFixedOpex({
      itemName: newOpexItem.trim(),
      department: newOpexDept,
      startMonth: Math.max(1, Math.min(60, newOpexStart)),
      monthlyAmount: Math.max(0, newOpexAmount),
    });
    setNewOpexItem('');
    setShowAddOpexModal(false);
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
          Sheet 04 · Organizational Hierarchy & Fixed Costs
        </div>
        <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-tight">
          Team Headcount & Operating Expenses (OPEX)
        </h1>
        <p className="text-[13px] text-[var(--color-muted)] max-w-3xl mt-1">
          Governs organizational rollout and fixed overhead across R&D, S&M, and G&A. Incorporates statutory European employer social security charges and rolls out headcount-driven monthly burns.
        </p>
      </div>

      {/* Block A & Block B: Staff Roster & Fixed OPEX Roster side-by-side or tabbed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Block A: Staff Hiring Roster (2 cols) */}
        <div className="lg:col-span-2 model-card overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[var(--color-accent)]" />
              <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
                Team Headcount Roster ({staffRoster.length} Roles)
              </h2>
            </div>
            <button
              onClick={() => setShowAddStaffModal(true)}
              className="px-3 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px] hover:opacity-90 flex items-center gap-1 transition-opacity"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Position
            </button>
          </div>

          <div className="overflow-x-auto max-h-[360px] custom-scrollbar">
            <table className="w-full text-left border-collapse text-[12.5px]">
              <thead className="sticky top-0 bg-[var(--table-header-bg)] border-b border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em] z-10">
                <tr>
                  <th className="py-2.5 px-4">Role Title</th>
                  <th className="py-2.5 px-3">Dept</th>
                  <th className="py-2.5 px-3">Hire Month</th>
                  <th className="py-2.5 px-3 text-right">Base Salary/mo</th>
                  <th className="py-2.5 px-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {staffRoster.map((staff) => (
                  <tr key={staff.id} className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={staff.title}
                        onChange={(e) => updateStaffRole(staff.id, { title: e.target.value })}
                        className="w-full px-2 py-1 text-[12.5px] font-medium rounded cell-editable"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <select
                        value={staff.department}
                        onChange={(e) =>
                          updateStaffRole(staff.id, {
                            department: e.target.value as 'R&D' | 'S&M' | 'G&A',
                          })
                        }
                        className="px-2 py-1 text-[11.5px] font-semibold rounded bg-white border border-[var(--color-border)]"
                      >
                        <option value="R&D">R&D</option>
                        <option value="S&M">S&M</option>
                        <option value="G&A">G&A</option>
                      </select>
                    </td>
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] text-[var(--color-muted)] font-mono">M</span>
                        <input
                          type="number"
                          min="1"
                          max="60"
                          value={staff.hireMonth}
                          onChange={(e) =>
                            updateStaffRole(staff.id, {
                              hireMonth: Math.max(1, Math.min(60, parseInt(e.target.value, 10) || 1)),
                            })
                          }
                          className="w-14 px-1.5 py-1 text-[12px] font-mono rounded cell-editable text-center"
                        />
                      </div>
                    </td>
                    <td className="py-2 px-3 text-right">
                      <input
                        type="number"
                        step="200"
                        min="0"
                        value={staff.baseSalary}
                        onChange={(e) =>
                          updateStaffRole(staff.id, {
                            baseSalary: Math.max(0, parseFloat(e.target.value) || 0),
                          })
                        }
                        className="w-24 px-2 py-1 text-right text-[12px] font-mono font-medium rounded cell-editable"
                      />
                    </td>
                    <td className="py-2 px-3 text-center">
                      <button
                        onClick={() => deleteStaffRole(staff.id)}
                        className="text-[var(--color-muted)] hover:text-[var(--color-negative)] p-1 rounded"
                        title="Remove position"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Block B: Fixed OPEX Roster (1 col) */}
        <div className="model-card overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[var(--color-accent)]" />
              <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
                Fixed Overhead Costs
              </h2>
            </div>
            <button
              onClick={() => setShowAddOpexModal(true)}
              className="px-2.5 py-1 text-[11.5px] font-medium bg-[rgba(5,28,44,0.06)] hover:bg-[rgba(5,28,44,0.1)] text-[var(--color-primary)] rounded-[6px] flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Add Item
            </button>
          </div>

          <div className="overflow-x-auto max-h-[360px] custom-scrollbar flex-1">
            <table className="w-full text-left border-collapse text-[12px]">
              <thead className="sticky top-0 bg-[var(--table-header-bg)] border-b border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-[0.06em] z-10">
                <tr>
                  <th className="py-2.5 px-4">Item Name</th>
                  <th className="py-2.5 px-2">Dept</th>
                  <th className="py-2.5 px-3 text-right">Cost/mo</th>
                  <th className="py-2.5 px-2 w-8"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {fixedOpexRoster.map((item) => (
                  <tr key={item.id} className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={item.itemName}
                        onChange={(e) => updateFixedOpex(item.id, { itemName: e.target.value })}
                        className="w-full px-1.5 py-1 text-[12px] font-medium rounded cell-editable"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-[var(--color-primary)]">
                        {item.department}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right">
                      <input
                        type="number"
                        step="100"
                        min="0"
                        value={item.monthlyAmount}
                        onChange={(e) =>
                          updateFixedOpex(item.id, {
                            monthlyAmount: Math.max(0, parseFloat(e.target.value) || 0),
                          })
                        }
                        className="w-20 px-1.5 py-1 text-right text-[12px] font-mono rounded cell-editable"
                      />
                    </td>
                    <td className="py-2 px-2 text-center">
                      <button
                        onClick={() => deleteFixedOpex(item.id)}
                        className="text-[var(--color-muted)] hover:text-[var(--color-negative)] p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Block C: 60-Month Headcount & Payroll Rollout Table */}
      <div className="model-card overflow-hidden">
        {/* Table Controls */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
            <h2 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              60-Month Payroll & Departmental OPEX Summary
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
                  Department & Headcount
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
              {/* Headcount R&D */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  R&D Headcount (Engineering)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {m.headcountRd}
                  </td>
                ))}
              </tr>

              {/* Headcount S&M */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  S&M Headcount (Growth & Sales)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {m.headcountSm}
                  </td>
                ))}
              </tr>

              {/* Headcount G&A */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  G&A Headcount (Executive & Admin)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {m.headcountGa}
                  </td>
                ))}
              </tr>

              {/* Total Headcount */}
              <tr className="bg-[rgba(5,28,44,0.03)] font-bold text-[var(--color-primary)] hover:bg-[rgba(5,28,44,0.05)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total Active Headcount (Full-time)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)] font-semibold">
                    {m.totalHeadcount} staff
                  </td>
                ))}
              </tr>

              {/* Base Salary Subtotal */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total Gross Base Salaries
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.totalBaseSalary)}
                  </td>
                ))}
              </tr>

              {/* Employer Social Taxes */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-muted)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Employer Social Charges ({(assumptions.socialRate[assumptions.activeScenario] * 100).toFixed(0)}%)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-muted)]">
                    {formatCurrency(m.employerSocialCharges)}
                  </td>
                ))}
              </tr>

              {/* Total Compensation */}
              <tr className="bg-[rgba(5,28,44,0.02)] font-semibold hover:bg-[rgba(5,28,44,0.04)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-primary)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Comprehensive Personnel Cost
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-primary)]">
                    {formatCurrency(m.totalCompensation)}
                  </td>
                ))}
              </tr>

              {/* Section Header: Departmental OPEX */}
              <tr className="bg-[rgba(5,28,44,0.06)] text-[11px] font-semibold uppercase tracking-[0.06em]">
                <td colSpan={displayedMonths.length + 1} className="py-2 px-4 text-left text-[var(--color-primary)]">
                  Departmental OPEX Breakdown
                </td>
              </tr>

              {/* R&D OPEX */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  R&D OPEX (Personnel + Tech Stack)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.rdOpex)}
                  </td>
                ))}
              </tr>

              {/* S&M Base OPEX */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  S&M Base OPEX (excl. Ad Spend)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.smOpex)}
                  </td>
                ))}
              </tr>

              {/* G&A OPEX */}
              <tr className="hover:bg-[rgba(5,28,44,0.015)] transition-colors">
                <td className="py-2.5 px-4 text-left font-sans text-[var(--color-body-text)] sticky left-0 bg-[var(--color-surface)] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  G&A OPEX (Legal, Rent, Audit, Admin)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-2.5 px-3 text-[var(--color-body-text)]">
                    {formatCurrency(m.gaOpex)}
                  </td>
                ))}
              </tr>

              {/* Total Base OPEX */}
              <tr className="bg-[rgba(34,81,255,0.05)] font-bold text-[var(--color-primary)] hover:bg-[rgba(34,81,255,0.08)] transition-colors border-t-2 border-b-2 border-[rgba(34,81,255,0.2)]">
                <td className="py-3 px-4 text-left font-sans sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  Total Base OPEX (Burn Floor)
                </td>
                {displayedMonths.map((m) => (
                  <td key={m.month} className="py-3 px-3 text-[var(--color-accent)] font-mono text-[13px]">
                    {formatCurrency(m.totalBaseOpex)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      {showAddStaffModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm animate-fade-up">
          <div className="bg-[var(--color-surface)] p-6 rounded-[14px] shadow-lg max-w-md w-full space-y-4">
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Add New Staff Position
            </h3>
            <form onSubmit={handleCreateStaff} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Senior Security Engineer"
                  className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                    Department
                  </label>
                  <select
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-[13px] rounded border border-[var(--color-border)] bg-white"
                  >
                    <option value="R&D">R&D (Engineering)</option>
                    <option value="S&M">S&M (Growth & Sales)</option>
                    <option value="G&A">G&A (Executive & Admin)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                    Hire Month (1-60)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={newHireMonth}
                    onChange={(e) => setNewHireMonth(parseInt(e.target.value, 10) || 1)}
                    className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                  Monthly Base Salary ({sym})
                </label>
                <input
                  type="number"
                  step="500"
                  min="0"
                  value={newSalary}
                  onChange={(e) => setNewSalary(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddStaffModal(false)}
                  className="px-3.5 py-1.5 text-[12px] text-[var(--color-primary)] hover:bg-gray-100 rounded-[6px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px]"
                >
                  Add Position
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Fixed Opex Modal */}
      {showAddOpexModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm animate-fade-up">
          <div className="bg-[var(--color-surface)] p-6 rounded-[14px] shadow-lg max-w-md w-full space-y-4">
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Add Fixed Operational Expense
            </h3>
            <form onSubmit={handleCreateOpex} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                  Expense Description
                </label>
                <input
                  type="text"
                  required
                  value={newOpexItem}
                  onChange={(e) => setNewOpexItem(e.target.value)}
                  placeholder="e.g. Data Protection Officer Retainer"
                  className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                    Department
                  </label>
                  <select
                    value={newOpexDept}
                    onChange={(e) => setNewOpexDept(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-[13px] rounded border border-[var(--color-border)] bg-white"
                  >
                    <option value="G&A">G&A</option>
                    <option value="R&D">R&D</option>
                    <option value="S&M">S&M</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                    Start Month (1-60)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={newOpexStart}
                    onChange={(e) => setNewOpexStart(parseInt(e.target.value, 10) || 1)}
                    className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase text-[var(--color-muted)] block mb-1">
                  Monthly Cost ({sym})
                </label>
                <input
                  type="number"
                  step="100"
                  min="0"
                  value={newOpexAmount}
                  onChange={(e) => setNewOpexAmount(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 text-[13px] rounded cell-editable focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddOpexModal(false)}
                  className="px-3.5 py-1.5 text-[12px] text-[var(--color-primary)] hover:bg-gray-100 rounded-[6px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px]"
                >
                  Save Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <InsightBlock title="Organizational Operating Discipline">
        European employment contracts carry statutory employer contributions (
        {(assumptions.socialRate[assumptions.activeScenario] * 100).toFixed(0)}%). The model automatically reflects the loaded cash cost per engineer and executive to ensure burn estimates accurately mirror true cash outflows.
      </InsightBlock>
    </div>
  );
};
