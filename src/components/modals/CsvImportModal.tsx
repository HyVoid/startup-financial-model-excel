import React, { useState } from 'react';
import { useModel } from '../../context/ModelContext';
import { X, Upload, Download, FileText, Check, AlertCircle } from 'lucide-react';
import { StaffRole } from '../../types/model';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({ isOpen, onClose }) => {
  const {
    state,
    results,
    bulkUpdateMarketingBudget,
    bulkSetStaffRoster,
    importBackupJson,
  } = useModel();

  const [activeTab, setActiveTab] = useState<'marketing' | 'staff' | 'backup'>('marketing');
  const [csvText, setCsvText] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  if (!isOpen) return null;

  // Handles 60-Month Marketing Budget Import
  const handleImportMarketing = () => {
    try {
      const lines = csvText.trim().split(/\r?\n/);
      const parsedValues: number[] = [];

      for (const line of lines) {
        if (!line.trim()) continue;
        const tokens = line.split(',');
        // If line has multiple columns (e.g., "Month 1, 10000" or "1, 10000"), take the last numeric column
        const numToken = tokens.length > 1 ? tokens[1].trim() : tokens[0].trim();
        const cleaned = numToken.replace(/[^0-9.-]/g, '');
        const val = parseFloat(cleaned);
        if (!isNaN(val)) {
          parsedValues.push(val);
        }
      }

      if (parsedValues.length === 0) {
        setFeedback({ type: 'error', message: 'No valid numbers found in the CSV text.' });
        return;
      }

      bulkUpdateMarketingBudget(parsedValues);
      setFeedback({
        type: 'success',
        message: `Successfully updated ${parsedValues.length} months of marketing spend budget!`,
      });
      setCsvText('');
    } catch {
      setFeedback({ type: 'error', message: 'Failed to parse CSV lines. Please verify format.' });
    }
  };

  // Handles Staff Roster CSV Import
  const handleImportStaff = () => {
    try {
      const lines = csvText.trim().split(/\r?\n/);
      const newRoster: StaffRole[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        // Ignore header line if present
        if (i === 0 && line.toLowerCase().includes('title') && line.toLowerCase().includes('department')) {
          continue;
        }

        const cols = line.split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
        if (cols.length >= 4) {
          const title = cols[0];
          const rawDept = cols[1].toUpperCase();
          const department: 'R&D' | 'S&M' | 'G&A' =
            rawDept === 'R&D' || rawDept === 'S&M' || rawDept === 'G&A' ? rawDept : 'G&A';
          const hireMonth = parseInt(cols[2], 10) || 1;
          const baseSalary = parseFloat(cols[3].replace(/[^0-9.-]/g, '')) || 0;

          newRoster.push({
            id: `imported-${Date.now()}-${i}`,
            title,
            department,
            hireMonth: Math.min(60, Math.max(1, hireMonth)),
            baseSalary: Math.max(0, baseSalary),
          });
        }
      }

      if (newRoster.length === 0) {
        setFeedback({
          type: 'error',
          message: 'Could not parse staff members. Expected: Title, Department(R&D|S&M|G&A), HireMonth, BaseSalary',
        });
        return;
      }

      bulkSetStaffRoster(newRoster);
      setFeedback({
        type: 'success',
        message: `Successfully imported ${newRoster.length} staff positions!`,
      });
      setCsvText('');
    } catch {
      setFeedback({ type: 'error', message: 'Failed to parse staff CSV.' });
    }
  };

  // Handles JSON Backup Restore
  const handleImportJson = () => {
    const res = importBackupJson(csvText);
    if (res.success) {
      setFeedback({ type: 'success', message: 'Model backup successfully restored!' });
      setCsvText('');
    } else {
      setFeedback({ type: 'error', message: res.error || 'Invalid backup JSON data.' });
    }
  };

  // Exports Marketing CSV
  const handleExportMarketingCsv = () => {
    let csv = 'MonthIndex,Date,MarketingBudget\n';
    results.months.forEach((m) => {
      csv += `${m.month},${m.dateLabel},${m.marketingBudget}\n`;
    });
    downloadFile(csv, 'marketing-budget-60m.csv', 'text/csv');
  };

  // Exports Staff Roster CSV
  const handleExportStaffCsv = () => {
    let csv = 'Title,Department,HireMonth,BaseSalaryMonthly\n';
    state.staffRoster.forEach((s) => {
      csv += `"${s.title}",${s.department},${s.hireMonth},${s.baseSalary}\n`;
    });
    downloadFile(csv, 'staff-roster.csv', 'text/csv');
  };

  // Exports 60-Month Financials Summary CSV
  const handleExportFinancialsCsv = () => {
    let csv = 'Month,Date,ActiveMAU,PayingUsers,Revenue,COGS,GrossProfit,TotalOPEX,EBITDA,NetIncome,EndingCash,RunwayMonths\n';
    results.months.forEach((m) => {
      csv += `${m.month},${m.dateLabel},${m.activeMAU},${m.payingUsers},${m.revenue},${m.cogs},${m.grossProfit},${m.totalOpex},${m.ebitda},${m.netIncome},${m.endingCash},${m.runwayMonths}\n`;
    });
    downloadFile(csv, 'financial-model-60m.csv', 'text/csv');
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // Handle local file drop or selection
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvText(text || '');
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.45)] backdrop-blur-sm animate-fade-up">
      <div className="bg-[var(--color-surface)] w-full max-w-2xl rounded-[14px] shadow-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[20px] font-semibold text-[var(--color-primary)]">
              Data Import & Export Center
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-[var(--color-border)] bg-[rgba(5,28,44,0.02)] px-6">
          <button
            onClick={() => {
              setActiveTab('marketing');
              setFeedback(null);
            }}
            className={`py-3 px-4 text-[13px] font-medium border-b-2 transition-colors ${
              activeTab === 'marketing'
                ? 'border-[var(--color-accent)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            Bulk Marketing Budget CSV
          </button>
          <button
            onClick={() => {
              setActiveTab('staff');
              setFeedback(null);
            }}
            className={`py-3 px-4 text-[13px] font-medium border-b-2 transition-colors ${
              activeTab === 'staff'
                ? 'border-[var(--color-accent)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            Staff Roster CSV
          </button>
          <button
            onClick={() => {
              setActiveTab('backup');
              setFeedback(null);
            }}
            className={`py-3 px-4 text-[13px] font-medium border-b-2 transition-colors ${
              activeTab === 'backup'
                ? 'border-[var(--color-accent)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-primary)]'
            }`}
          >
            Full Model JSON Backup
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {feedback && (
            <div
              className={`p-3 rounded-[6px] flex items-center gap-2 text-[13px] ${
                feedback.type === 'success'
                  ? 'bg-[rgba(0,200,83,0.12)] text-[#008738]'
                  : 'bg-[rgba(211,47,47,0.12)] text-[var(--color-negative)]'
              }`}
            >
              {feedback.type === 'success' ? (
                <Check className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          {activeTab === 'marketing' && (
            <div>
              <div className="text-[13px] text-[var(--color-body-text)] mb-2">
                Paste CSV data for 60 months of marketing spend (either single column values or{' '}
                <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">MonthIndex, Budget</code>):
              </div>
              <textarea
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
                placeholder="Example:&#10;1, 10000&#10;2, 10000&#10;3, 10000&#10;...&#10;60, 140000"
                rows={8}
                className="w-full p-3 font-mono text-[12px] cell-editable rounded-[6px] focus:outline-none"
              />
              <div className="flex items-center justify-between mt-3">
                <label className="cursor-pointer text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload .csv file</span>
                  <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleExportMarketingCsv}
                    className="px-3 py-1.5 text-[12px] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[6px] hover:bg-gray-50 flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Current CSV
                  </button>
                  <button
                    onClick={handleImportMarketing}
                    disabled={!csvText.trim()}
                    className="px-4 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px] disabled:opacity-40"
                  >
                    Apply Marketing Budget
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div>
              <div className="text-[13px] text-[var(--color-body-text)] mb-2">
                Paste CSV data for staff hiring roster. Format:{' '}
                <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                  Title, Department (R&D | S&M | G&A), HireMonth, BaseSalary
                </code>
              </div>
              <textarea
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
                placeholder="Example:&#10;CEO & Co-founder, G&A, 1, 6000&#10;CTO & Co-founder, R&D, 1, 6000&#10;Lead Engineer, R&D, 2, 5500&#10;Head of Growth, S&M, 3, 5000"
                rows={8}
                className="w-full p-3 font-mono text-[12px] cell-editable rounded-[6px] focus:outline-none"
              />
              <div className="flex items-center justify-between mt-3">
                <label className="cursor-pointer text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload .csv file</span>
                  <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleExportStaffCsv}
                    className="px-3 py-1.5 text-[12px] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[6px] hover:bg-gray-50 flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Staff CSV
                  </button>
                  <button
                    onClick={handleImportStaff}
                    disabled={!csvText.trim()}
                    className="px-4 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px] disabled:opacity-40"
                  >
                    Import Staff Roster
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backup' && (
            <div>
              <div className="text-[13px] text-[var(--color-body-text)] mb-2">
                Paste JSON backup string or upload a JSON backup file to restore the entire financial model:
              </div>
              <textarea
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
                placeholder="Paste backup JSON content here..."
                rows={8}
                className="w-full p-3 font-mono text-[12px] cell-editable rounded-[6px] focus:outline-none"
              />
              <div className="flex items-center justify-between mt-3">
                <label className="cursor-pointer text-[12px] text-[var(--color-accent)] hover:underline flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload .json file</span>
                  <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleExportFinancialsCsv}
                    className="px-3 py-1.5 text-[12px] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[6px] hover:bg-gray-50 flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Export Full 60M P&L CSV
                  </button>
                  <button
                    onClick={handleImportJson}
                    disabled={!csvText.trim()}
                    className="px-4 py-1.5 text-[12px] font-medium bg-[var(--color-accent)] text-white rounded-[6px] disabled:opacity-40"
                  >
                    Restore Backup JSON
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[var(--color-border)] bg-[rgba(5,28,44,0.02)] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[13px] text-[var(--color-primary)] hover:bg-gray-100 rounded-[6px] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
