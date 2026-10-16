import React, { useState } from 'react';
import { useModel, ActiveTabType } from '../context/ModelContext';
import { ScenarioType } from '../types/model';
import {
  TrendingUp,
  LayoutDashboard,
  Sliders,
  Target,
  CircleDollarSign,
  Briefcase,
  Landmark,
  Layers,
  Download,
  Upload,
  RotateCcw,
  Clock,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  onOpenCsvModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenCsvModal }) => {
  const {
    state,
    activeTab,
    setActiveTab,
    setScenario,
    lastSavedFormatted,
    exportBackupJson,
    resetToDefaults,
  } = useModel();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const navItems: {
    id: ActiveTabType;
    label: string;
    sheetCode: string;
    icon: React.ElementType;
    section: string;
  }[] = [
    {
      id: '07_Dashboard',
      label: 'Executive Dashboard',
      sheetCode: '07',
      icon: LayoutDashboard,
      section: 'OVERVIEW',
    },
    {
      id: '01_Assumptions',
      label: 'Assumptions Matrix',
      sheetCode: '01',
      icon: Sliders,
      section: 'DRIVERS & INPUTS',
    },
    {
      id: '02_Growth',
      label: 'Growth & Acquisition',
      sheetCode: '02',
      icon: Target,
      section: 'DRIVERS & INPUTS',
    },
    {
      id: '04_Team',
      label: 'Team & Headcount OPEX',
      sheetCode: '04',
      icon: Briefcase,
      section: 'DRIVERS & INPUTS',
    },
    {
      id: '03_Revenue',
      label: 'Revenue & LTV Economics',
      sheetCode: '03',
      icon: CircleDollarSign,
      section: 'FINANCIAL ENGINES',
    },
    {
      id: '05_Financials',
      label: '60M Monthly Financials',
      sheetCode: '05',
      icon: Landmark,
      section: 'FINANCIAL ENGINES',
    },
    {
      id: '06_Funding',
      label: 'Funding & Scenario Return',
      sheetCode: '06',
      icon: Layers,
      section: 'FINANCIAL ENGINES',
    },
  ];

  const getScenarioLabel = (s: ScenarioType) => {
    switch (s) {
      case 1:
        return 'Conservative';
      case 2:
        return 'Base Case';
      case 3:
        return 'Optimistic';
    }
  };

  const sections = ['OVERVIEW', 'DRIVERS & INPUTS', 'FINANCIAL ENGINES'];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden fixed top-3 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 bg-white rounded-[8px] shadow-md border border-[var(--color-border)] text-[var(--color-primary)] flex items-center justify-center"
          title="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`w-[270px] h-screen sticky top-0 z-40 bg-[var(--nav-bg)] border-r border-[var(--nav-border)] flex flex-col justify-between select-none transition-transform duration-200 ease-in-out shrink-0 ${
          isMobileOpen
            ? 'fixed inset-y-0 left-0 translate-x-0 shadow-2xl'
            : 'max-lg:fixed max-lg:-translate-x-full'
        }`}
      >
        {/* Top: Brand & Scenario Switcher */}
        <div className="p-5 border-b border-[var(--color-border)]">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm shrink-0">
              <TrendingUp className="w-4 h-4 text-[#2251FF]" />
            </div>
            <div className="min-w-0">
              <div className="font-heading font-semibold text-[16px] leading-tight text-[var(--color-primary)] tracking-tight truncate">
                Financial Engine
              </div>
              <div className="text-[10px] text-[var(--color-muted)] font-mono uppercase tracking-wider truncate">
                SaaS Model · 60 Months
              </div>
            </div>
          </div>

          {/* Active Scenario Segment Control */}
          <div className="mt-4 pt-3 border-t border-[rgba(5,28,44,0.06)]">
            <div className="flex items-center justify-between text-[10px] font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-1.5">
              <span>Active Scenario</span>
              <span className="font-mono text-[var(--color-accent)]">
                {getScenarioLabel(state.assumptions.activeScenario)}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-[rgba(5,28,44,0.04)] p-1 rounded-[8px]">
              {([1, 2, 3] as ScenarioType[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setScenario(s)}
                  className={`py-1 text-[11px] font-semibold rounded-[6px] transition-all text-center ${
                    state.assumptions.activeScenario === s
                      ? 'bg-white text-[var(--color-accent)] shadow-sm font-bold'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {s === 1 ? 'Conserv.' : s === 2 ? 'Base' : 'Optim.'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Navigation Groups & Sheet Tabs */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4">
          {sections.map((sec) => {
            const items = navItems.filter((item) => item.section === sec);
            if (items.length === 0) return null;

            return (
              <div key={sec} className="space-y-1">
                <div className="px-3 text-[10px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                  {sec}
                </div>
                {items.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-[8px] text-[12.5px] font-medium transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-[rgba(34,81,255,0.06)] text-[var(--color-primary)] font-semibold border-l-3 border-[var(--color-accent)]'
                          : 'text-[rgba(5,28,44,0.65)] hover:bg-[rgba(5,28,44,0.03)] hover:text-[var(--color-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isActive
                              ? 'text-[var(--color-accent)]'
                              : 'text-[var(--color-muted)] group-hover:text-[var(--color-primary)]'
                          }`}
                        />
                        <span className="truncate">{tab.label}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-[rgba(34,81,255,0.12)] text-[var(--color-accent)] font-semibold'
                            : 'text-[var(--color-muted)]'
                        }`}
                      >
                        {tab.sheetCode}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* Bottom: Utilities, Save Status & Actions */}
        <div className="p-4 border-t border-[var(--color-border)] bg-[rgba(5,28,44,0.015)] space-y-3">
          {/* Last Saved Badge */}
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-[6px] bg-[rgba(5,28,44,0.03)] text-[11px] text-[var(--color-muted)] font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--color-muted)]" />
              <span>Auto-saved</span>
            </div>
            <span className="text-[var(--color-primary)] font-semibold">{lastSavedFormatted}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenCsvModal}
              className="px-2.5 py-1.5 text-[11.5px] font-medium text-[var(--color-primary)] rounded-[6px] border border-[var(--color-border)] hover:bg-white hover:shadow-xs transition-all flex items-center justify-center gap-1.5 bg-white"
              title="Bulk CSV Import & Data Tools"
            >
              <Upload className="w-3.5 h-3.5 text-[var(--color-muted)]" />
              <span>CSV Import</span>
            </button>

            <button
              onClick={exportBackupJson}
              className="px-2.5 py-1.5 text-[11.5px] font-medium text-[var(--color-primary)] rounded-[6px] border border-[var(--color-border)] hover:bg-white hover:shadow-xs transition-all flex items-center justify-center gap-1.5 bg-white"
              title="Download full JSON backup of the financial model"
            >
              <Download className="w-3.5 h-3.5 text-[var(--color-muted)]" />
              <span>Export</span>
            </button>
          </div>

          {/* Reset Model Button */}
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full px-2.5 py-1.5 text-[11px] font-medium text-[var(--color-muted)] hover:text-[var(--color-negative)] hover:bg-[rgba(211,47,47,0.06)] rounded-[6px] transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Model to Baseline</span>
          </button>
        </div>
      </aside>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm animate-fade-up">
          <div className="bg-[var(--color-surface)] p-6 rounded-[14px] shadow-lg max-w-sm w-full space-y-4">
            <h4 className="font-heading text-[18px] font-semibold text-[var(--color-primary)]">
              Reset Model to Defaults?
            </h4>
            <p className="text-[13px] text-[var(--color-body-text)] leading-relaxed">
              This will overwrite all customized assumptions, marketing budgets, staff rosters, and restore the default institutional 60-month model parameters.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-1.5 text-[12px] text-[var(--color-primary)] hover:bg-gray-100 rounded-[6px]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetToDefaults();
                  setShowResetConfirm(false);
                }}
                className="px-3.5 py-1.5 text-[12px] font-medium bg-[var(--color-negative)] text-white rounded-[6px] hover:opacity-90"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
