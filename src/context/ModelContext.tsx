import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  ModelState,
  ModelAssumptions,
  StaffRole,
  FixedOpexItem,
  FundingAssumptions,
  ScenarioType,
  ModelCalculationResults,
} from '../types/model';
import { defaultModelState } from '../constants/defaultModel';
import { calculateFinancialModel } from '../engine/financialCalculator';

const STORAGE_KEY = 'startup_financial_model_v1';

export type ActiveTabType =
  | '07_Dashboard'
  | '01_Assumptions'
  | '02_Growth'
  | '03_Revenue'
  | '04_Team'
  | '05_Financials'
  | '06_Funding';

interface ModelContextType {
  state: ModelState;
  results: ModelCalculationResults;
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  lastSavedFormatted: string;
  updateAssumptions: (partial: Partial<ModelAssumptions>) => void;
  updateDriverValue: (driverKey: keyof ModelAssumptions, scenario: ScenarioType, value: number) => void;
  updateMarketingMonth: (monthIndex: number, value: number) => void;
  bulkUpdateMarketingBudget: (newBudget: number[]) => void;
  addStaffRole: (role: Omit<StaffRole, 'id'>) => void;
  updateStaffRole: (id: string, partial: Partial<StaffRole>) => void;
  deleteStaffRole: (id: string) => void;
  bulkSetStaffRoster: (roster: StaffRole[]) => void;
  addFixedOpex: (item: Omit<FixedOpexItem, 'id'>) => void;
  updateFixedOpex: (id: string, partial: Partial<FixedOpexItem>) => void;
  deleteFixedOpex: (id: string) => void;
  updateFunding: (partial: Partial<FundingAssumptions>) => void;
  setScenario: (scenario: ScenarioType) => void;
  exportBackupJson: () => void;
  importBackupJson: (jsonData: string) => { success: boolean; error?: string };
  resetToDefaults: () => void;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const ModelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ModelState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Basic check to ensure valid structure
        if (parsed.assumptions && Array.isArray(parsed.marketingBudget)) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return defaultModelState;
  });

  const [activeTab, setActiveTab] = useState<ActiveTabType>('07_Dashboard');
  const [lastSavedTimestamp, setLastSavedTimestamp] = useState<number>(Date.now());

  // Auto-save to localStorage whenever state changes
  useEffect(() => {
    try {
      const payload: ModelState = {
        ...state,
        lastSaved: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setLastSavedTimestamp(Date.now());
    } catch {
      // ignore
    }
  }, [state]);

  const lastSavedFormatted = useMemo(() => {
    const d = new Date(lastSavedTimestamp);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }, [lastSavedTimestamp]);

  // Recalculate financial model in real time
  const results = useMemo(() => {
    return calculateFinancialModel(state);
  }, [state]);

  const updateAssumptions = useCallback((partial: Partial<ModelAssumptions>) => {
    setState((prev) => ({
      ...prev,
      assumptions: {
        ...prev.assumptions,
        ...partial,
      },
    }));
  }, []);

  const updateDriverValue = useCallback(
    (driverKey: keyof ModelAssumptions, scenario: ScenarioType, value: number) => {
      setState((prev) => {
        const currentDriverObj = prev.assumptions[driverKey] as unknown as Record<ScenarioType, number>;
        return {
          ...prev,
          assumptions: {
            ...prev.assumptions,
            [driverKey]: {
              ...currentDriverObj,
              [scenario]: value,
            },
          },
        };
      });
    },
    []
  );

  const updateMarketingMonth = useCallback((monthIndex: number, value: number) => {
    setState((prev) => {
      const nextBudget = [...prev.marketingBudget];
      nextBudget[monthIndex] = Math.max(0, value);
      return {
        ...prev,
        marketingBudget: nextBudget,
      };
    });
  }, []);

  const bulkUpdateMarketingBudget = useCallback((newBudget: number[]) => {
    setState((prev) => {
      const validBudget = new Array(60).fill(0).map((_, i) => newBudget[i] ?? prev.marketingBudget[i] ?? 0);
      return {
        ...prev,
        marketingBudget: validBudget,
      };
    });
  }, []);

  const addStaffRole = useCallback((role: Omit<StaffRole, 'id'>) => {
    setState((prev) => ({
      ...prev,
      staffRoster: [
        ...prev.staffRoster,
        {
          ...role,
          id: `role-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        },
      ],
    }));
  }, []);

  const updateStaffRole = useCallback((id: string, partial: Partial<StaffRole>) => {
    setState((prev) => ({
      ...prev,
      staffRoster: prev.staffRoster.map((r) => (r.id === id ? { ...r, ...partial } : r)),
    }));
  }, []);

  const deleteStaffRole = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      staffRoster: prev.staffRoster.filter((r) => r.id !== id),
    }));
  }, []);

  const bulkSetStaffRoster = useCallback((roster: StaffRole[]) => {
    setState((prev) => ({
      ...prev,
      staffRoster: roster,
    }));
  }, []);

  const addFixedOpex = useCallback((item: Omit<FixedOpexItem, 'id'>) => {
    setState((prev) => ({
      ...prev,
      fixedOpexRoster: [
        ...prev.fixedOpexRoster,
        {
          ...item,
          id: `opex-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        },
      ],
    }));
  }, []);

  const updateFixedOpex = useCallback((id: string, partial: Partial<FixedOpexItem>) => {
    setState((prev) => ({
      ...prev,
      fixedOpexRoster: prev.fixedOpexRoster.map((it) => (it.id === id ? { ...it, ...partial } : it)),
    }));
  }, []);

  const deleteFixedOpex = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      fixedOpexRoster: prev.fixedOpexRoster.filter((it) => it.id !== id),
    }));
  }, []);

  const updateFunding = useCallback((partial: Partial<FundingAssumptions>) => {
    setState((prev) => ({
      ...prev,
      funding: {
        ...prev.funding,
        ...partial,
      },
    }));
  }, []);

  const setScenario = useCallback((scenario: ScenarioType) => {
    setState((prev) => ({
      ...prev,
      assumptions: {
        ...prev.assumptions,
        activeScenario: scenario,
      },
    }));
  }, []);

  const exportBackupJson = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    const dateStr = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute('download', `startup-financial-model-backup-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [state]);

  const importBackupJson = useCallback((jsonData: string) => {
    try {
      const parsed = JSON.parse(jsonData);
      if (!parsed.assumptions || !Array.isArray(parsed.marketingBudget)) {
        return { success: false, error: 'Invalid JSON schema: Missing required model assumptions.' };
      }
      setState(parsed);
      return { success: true };
    } catch (err: unknown) {
      return { success: false, error: (err as Error).message || 'Invalid JSON syntax.' };
    }
  }, []);

  const resetToDefaults = useCallback(() => {
    setState(defaultModelState);
  }, []);

  return (
    <ModelContext.Provider
      value={{
        state,
        results,
        activeTab,
        setActiveTab,
        lastSavedFormatted,
        updateAssumptions,
        updateDriverValue,
        updateMarketingMonth,
        bulkUpdateMarketingBudget,
        addStaffRole,
        updateStaffRole,
        deleteStaffRole,
        bulkSetStaffRoster,
        addFixedOpex,
        updateFixedOpex,
        deleteFixedOpex,
        updateFunding,
        setScenario,
        exportBackupJson,
        importBackupJson,
        resetToDefaults,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
};
