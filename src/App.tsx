import React, { useState } from 'react';
import { ModelProvider, useModel } from './context/ModelContext';
import { Sidebar } from './components/Sidebar';
import { DashboardSheet } from './components/sheets/DashboardSheet';
import { AssumptionsSheet } from './components/sheets/AssumptionsSheet';
import { GrowthSheet } from './components/sheets/GrowthSheet';
import { RevenueSheet } from './components/sheets/RevenueSheet';
import { TeamSheet } from './components/sheets/TeamSheet';
import { FinancialsSheet } from './components/sheets/FinancialsSheet';
import { FundingSheet } from './components/sheets/FundingSheet';
import { CsvImportModal } from './components/modals/CsvImportModal';
import { HardDrive } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab } = useModel();
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)] text-[var(--color-body-text)]">
      {/* Pinned Left Sidebar */}
      <Sidebar onOpenCsvModal={() => setIsCsvModalOpen(true)} />

      {/* Main Content Wrapper */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Main Content Area: Centered, max-width 1400px, 40px (px-10) horizontal padding */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 sm:px-10 py-8 max-lg:pt-16">
          {activeTab === '07_Dashboard' && <DashboardSheet />}
          {activeTab === '01_Assumptions' && <AssumptionsSheet />}
          {activeTab === '02_Growth' && <GrowthSheet />}
          {activeTab === '03_Revenue' && <RevenueSheet />}
          {activeTab === '04_Team' && <TeamSheet />}
          {activeTab === '05_Financials' && <FinancialsSheet />}
          {activeTab === '06_Funding' && <FundingSheet />}
        </main>

        {/* Bottom Footer with Privacy & Security Notice */}
        <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-4 mt-auto">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-[var(--color-muted)]">
            <div className="flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
              <span>
                All model data is stored locally in your browser's localStorage. No user financial data is transmitted to or retained on any server.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span>Startup Financial Model & Unit Economics</span>
              <span>·</span>
              <span>All calculations running client-side</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Bulk CSV & Data Tools Modal */}
      <CsvImportModal isOpen={isCsvModalOpen} onClose={() => setIsCsvModalOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <ModelProvider>
      <AppContent />
    </ModelProvider>
  );
}
