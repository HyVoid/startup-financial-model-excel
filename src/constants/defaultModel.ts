import { ModelState, StaffRole, FixedOpexItem } from '../types/model';

// Generates an institutional 60-month default marketing spend trajectory ramp
export const generateDefaultMarketingBudget = (): number[] => {
  const budget: number[] = [];
  for (let m = 1; m <= 60; m++) {
    if (m <= 3) budget.push(10000);
    else if (m <= 6) budget.push(15000);
    else if (m <= 9) budget.push(22000);
    else if (m <= 12) budget.push(30000);
    else if (m <= 18) budget.push(45000);
    else if (m <= 24) budget.push(60000);
    else if (m <= 36) budget.push(85000);
    else if (m <= 48) budget.push(110000);
    else budget.push(140000);
  }
  return budget;
};

export const defaultStaffRoster: StaffRole[] = [
  { id: 'role-1', title: 'CEO & Co-founder', department: 'G&A', hireMonth: 1, baseSalary: 6000 },
  { id: 'role-2', title: 'CTO & Co-founder', department: 'R&D', hireMonth: 1, baseSalary: 6000 },
  { id: 'role-3', title: 'Lead Full-stack Engineer', department: 'R&D', hireMonth: 2, baseSalary: 5500 },
  { id: 'role-4', title: 'Head of Growth & Acquisition', department: 'S&M', hireMonth: 3, baseSalary: 5000 },
  { id: 'role-5', title: 'Senior Frontend Developer', department: 'R&D', hireMonth: 4, baseSalary: 5000 },
  { id: 'role-6', title: 'Backend / Data Architect', department: 'R&D', hireMonth: 6, baseSalary: 5200 },
  { id: 'role-7', title: 'Product & UX Designer', department: 'R&D', hireMonth: 6, baseSalary: 4500 },
  { id: 'role-8', title: 'Performance Marketing Lead', department: 'S&M', hireMonth: 7, baseSalary: 4200 },
  { id: 'role-9', title: 'Legal & Operations Specialist', department: 'G&A', hireMonth: 8, baseSalary: 4000 },
  { id: 'role-10', title: 'Customer Success Manager', department: 'S&M', hireMonth: 9, baseSalary: 3800 },
  { id: 'role-11', title: 'Cloud Infrastructure & Security', department: 'R&D', hireMonth: 12, baseSalary: 5500 },
  { id: 'role-12', title: 'Content & Community Manager', department: 'S&M', hireMonth: 14, baseSalary: 3500 },
  { id: 'role-13', title: 'Financial Controller', department: 'G&A', hireMonth: 18, baseSalary: 4800 },
  { id: 'role-14', title: 'Mobile App Engineer', department: 'R&D', hireMonth: 20, baseSalary: 5000 },
  { id: 'role-15', title: 'Enterprise Sales Executive', department: 'S&M', hireMonth: 24, baseSalary: 5000 },
];

export const defaultFixedOpexRoster: FixedOpexItem[] = [
  { id: 'opex-1', itemName: 'Office Lease & Flexible Hubs', department: 'G&A', startMonth: 1, monthlyAmount: 1800 },
  { id: 'opex-2', itemName: 'Enterprise SaaS & Productivity Stack', department: 'G&A', startMonth: 1, monthlyAmount: 800 },
  { id: 'opex-3', itemName: 'European Legal & Regulatory Retainer', department: 'G&A', startMonth: 1, monthlyAmount: 1200 },
  { id: 'opex-4', itemName: 'Core CI/CD & Dev Tooling Environment', department: 'R&D', startMonth: 1, monthlyAmount: 900 },
  { id: 'opex-5', itemName: 'Accounting, Tax & Audit Advisory', department: 'G&A', startMonth: 3, monthlyAmount: 1500 },
];

export const defaultModelState: ModelState = {
  assumptions: {
    currencySymbol: '€',
    startDate: '2026-01-01',
    activeScenario: 2, // Base case
    taxRate: 0.25,
    minCashBufferMonths: 3,
    paidCAC: { 1: 18.0, 2: 12.0, 3: 8.5 },
    organicKFactor: { 1: 0.05, 2: 0.15, 3: 0.28 },
    monthlyChurn: { 1: 0.065, 2: 0.040, 3: 0.025 },
    conversionRate: { 1: 0.025, 2: 0.045, 3: 0.070 },
    pricingARPU: { 1: 19.0, 2: 29.0, 3: 39.0 },
    cogsRate: { 1: 0.22, 2: 0.18, 3: 0.14 },
    socialRate: { 1: 0.28, 2: 0.25, 3: 0.22 },
    exitMultiple: { 1: 4.0, 2: 7.0, 3: 12.0 },
    milestone1Users: 100000,
    milestone2Users: 500000,
    milestone3Users: 1000000,
  },
  marketingBudget: generateDefaultMarketingBudget(),
  staffRoster: defaultStaffRoster,
  fixedOpexRoster: defaultFixedOpexRoster,
  funding: {
    targetFundingAmount: 650000,
    preMoneyValuation: 3500000,
    useOfFunds: {
      rndPercent: 0.4,
      growthPercent: 0.35,
      adminPercent: 0.15,
      reservePercent: 0.1,
    },
  },
  lastSaved: null,
};
