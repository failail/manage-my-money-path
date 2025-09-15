export interface FinancialRatio {
  id: string;
  name: string;
  value: number;
  target: string;
  status: 'good' | 'warning' | 'poor';
  description: string;
}

export interface CalculationInputs {
  // Income
  monthlyGrossIncome: number;
  monthlyNetIncome: number;
  annualBonusCommission: number;
  freelanceIncome: number;
  investmentIncome: number;
  benefitsPensionIncome: number;
  rentalIncome: number;

  // Core Expenses (housing, utilities, food, transport)
  monthlyMortgageRent: number;
  councilTaxPropertyTax: number;
  homeInsurance: number;
  utilities: number;
  groceries: number;
  transport: number;
  internetBroadband: number;

  // Total Monthly Expenses (all expenses)
  totalMonthlyExpenses: number;

  // Debt Payments
  mortgagePayment: number;
  vehicleLoanPayment: number;
  creditCardMinPayments: number;
  personalLoanPayments: number;
  studentLoanPayments: number;
  otherDebtPayments: number;

  // Total Debt Balances
  mortgageBalance: number;
  additionalPropertyMortgages: number;
  vehicleLoanBalance: number;
  creditCardDebt: number;
  personalLoanBalance: number;
  studentLoanBalance: number;
  otherConsumerDebt: number;

  // Assets
  currentAccountBalance: number;
  savingsAccountBalance: number;
  emergencyFundBalance: number;
  termDeposits: number;
  cashAtHome: number;
  retirementAccounts: number;
  stocksShares: number;
  bonds: number;
  cryptocurrency: number;
  businessEquity: number;
  propertyValue: number;
  additionalPropertyValue: number;
  vehicleValue: number;
  collectiblesValue: number;

  // Savings
  monthlyRetirementContribution: number;
  monthlyInvestmentSavings: number;
  totalMonthlySavings: number;
}

export const calculateFinancialRatios = (inputs: CalculationInputs): FinancialRatio[] => {
  // Calculate derived values
  const coreMonthlyExpenses = 
    inputs.monthlyMortgageRent + 
    inputs.councilTaxPropertyTax + 
    inputs.homeInsurance + 
    inputs.utilities + 
    inputs.groceries + 
    inputs.transport + 
    inputs.internetBroadband;

  const totalMonthlyDebtPayments = 
    inputs.mortgagePayment + 
    inputs.vehicleLoanPayment + 
    inputs.creditCardMinPayments + 
    inputs.personalLoanPayments + 
    inputs.studentLoanPayments + 
    inputs.otherDebtPayments;

  const totalDebt = 
    inputs.mortgageBalance + 
    inputs.additionalPropertyMortgages + 
    inputs.vehicleLoanBalance + 
    inputs.creditCardDebt + 
    inputs.personalLoanBalance + 
    inputs.studentLoanBalance + 
    inputs.otherConsumerDebt;

  const liquidCash = 
    inputs.currentAccountBalance + 
    inputs.savingsAccountBalance + 
    inputs.cashAtHome;

  const liquidAssets = 
    liquidCash + 
    inputs.termDeposits;

  const totalInvestments = 
    inputs.retirementAccounts + 
    inputs.stocksShares + 
    inputs.bonds + 
    inputs.cryptocurrency + 
    inputs.businessEquity;

  const totalAssets = 
    liquidAssets + 
    totalInvestments + 
    inputs.propertyValue + 
    inputs.additionalPropertyValue + 
    inputs.vehicleValue + 
    inputs.collectiblesValue;

  const emergencyBuffer = inputs.savingsAccountBalance + inputs.emergencyFundBalance + liquidCash;
  const annualGrossIncome = inputs.monthlyGrossIncome * 12 + inputs.annualBonusCommission;

  // Helper functions for status determination
  const getStatus = (value: number, goodThreshold: number, warningThreshold: number, isReverse = false): 'good' | 'warning' | 'poor' => {
    if (isReverse) {
      if (value <= goodThreshold) return 'good';
      if (value <= warningThreshold) return 'warning';
      return 'poor';
    } else {
      if (value >= goodThreshold) return 'good';
      if (value >= warningThreshold) return 'warning';
      return 'poor';
    }
  };

  const ratios: FinancialRatio[] = [
    {
      id: 'core-expense-ratio',
      name: 'Core Expense Ratio',
      value: inputs.monthlyNetIncome > 0 ? (coreMonthlyExpenses / inputs.monthlyNetIncome) * 100 : 0,
      target: '< 50%',
      status: getStatus(
        inputs.monthlyNetIncome > 0 ? (coreMonthlyExpenses / inputs.monthlyNetIncome) * 100 : 100,
        50, 65, true
      ),
      description: 'Essential expenses as a percentage of net income. Lower is better for financial flexibility.'
    },
    {
      id: 'total-expense-ratio',
      name: 'Total Expense Ratio',
      value: inputs.monthlyNetIncome > 0 ? (inputs.totalMonthlyExpenses / inputs.monthlyNetIncome) * 100 : 0,
      target: '< 80%',
      status: getStatus(
        inputs.monthlyNetIncome > 0 ? (inputs.totalMonthlyExpenses / inputs.monthlyNetIncome) * 100 : 100,
        80, 90, true
      ),
      description: 'Total expenses as a percentage of net income. Leaves room for savings and unexpected costs.'
    },
    {
      id: 'debt-servicing-ratio',
      name: 'Debt Servicing Ratio',
      value: inputs.monthlyGrossIncome > 0 ? (totalMonthlyDebtPayments / inputs.monthlyGrossIncome) * 100 : 0,
      target: '< 36%',
      status: getStatus(
        inputs.monthlyGrossIncome > 0 ? (totalMonthlyDebtPayments / inputs.monthlyGrossIncome) * 100 : 100,
        36, 43, true
      ),
      description: 'Monthly debt payments as a percentage of gross income. Critical for creditworthiness.'
    },
    {
      id: 'cash-buffer-ratio',
      name: 'Cash Buffer Ratio',
      value: coreMonthlyExpenses > 0 ? liquidCash / coreMonthlyExpenses : 0,
      target: '≥ 1.0',
      status: getStatus(
        coreMonthlyExpenses > 0 ? liquidCash / coreMonthlyExpenses : 0,
        1.0, 0.5
      ),
      description: 'Liquid cash relative to monthly core expenses. Provides immediate financial cushion.'
    },
    {
      id: 'emergency-months',
      name: 'Emergency Fund (Months)',
      value: coreMonthlyExpenses > 0 ? emergencyBuffer / coreMonthlyExpenses : 0,
      target: '≥ 6 months',
      status: getStatus(
        coreMonthlyExpenses > 0 ? emergencyBuffer / coreMonthlyExpenses : 0,
        6, 3
      ),
      description: 'Number of months your emergency savings could cover core expenses.'
    },
    {
      id: 'savings-rate',
      name: 'Savings Rate',
      value: inputs.monthlyNetIncome > 0 ? (inputs.totalMonthlySavings / inputs.monthlyNetIncome) * 100 : 0,
      target: '≥ 20%',
      status: getStatus(
        inputs.monthlyNetIncome > 0 ? (inputs.totalMonthlySavings / inputs.monthlyNetIncome) * 100 : 0,
        20, 10
      ),
      description: 'Percentage of net income saved each month. Higher rates accelerate wealth building.'
    },
    {
      id: 'investment-allocation',
      name: 'Investment Allocation',
      value: totalAssets > 0 ? (totalInvestments / totalAssets) * 100 : 0,
      target: '≥ 60%',
      status: getStatus(
        totalAssets > 0 ? (totalInvestments / totalAssets) * 100 : 0,
        60, 40
      ),
      description: 'Percentage of total assets in growth investments. Important for long-term wealth.'
    },
    {
      id: 'debt-to-income',
      name: 'Debt-to-Income Ratio',
      value: annualGrossIncome > 0 ? (totalDebt / annualGrossIncome) * 100 : 0,
      target: '< 200%',
      status: getStatus(
        annualGrossIncome > 0 ? (totalDebt / annualGrossIncome) * 100 : 1000,
        200, 300, true
      ),
      description: 'Total debt relative to annual income. Lower ratios indicate better debt management.'
    },
    {
      id: 'debt-to-assets',
      name: 'Debt-to-Assets Ratio',
      value: totalAssets > 0 ? (totalDebt / totalAssets) * 100 : 0,
      target: '< 40%',
      status: getStatus(
        totalAssets > 0 ? (totalDebt / totalAssets) * 100 : 100,
        40, 60, true
      ),
      description: 'Total debt as a percentage of total assets. Measures overall financial leverage.'
    },
    {
      id: 'cash-to-assets',
      name: 'Cash-to-Assets Ratio',
      value: totalAssets > 0 ? (liquidCash / totalAssets) * 100 : 0,
      target: '5-15%',
      status: getStatus(
        totalAssets > 0 ? (liquidCash / totalAssets) * 100 : 0,
        5, 2
      ) === 'good' && (totalAssets > 0 ? (liquidCash / totalAssets) * 100 : 0) <= 15 ? 'good' : 
      (totalAssets > 0 ? (liquidCash / totalAssets) * 100 : 0) > 20 ? 'warning' : 'poor',
      description: 'Liquid cash as percentage of assets. Too high reduces returns, too low reduces flexibility.'
    },
    {
      id: 'liquid-assets-ratio',
      name: 'Liquid Assets Ratio',
      value: totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0,
      target: '15-30%',
      status: getStatus(
        totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0,
        15, 10
      ) === 'good' && (totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0) <= 30 ? 'good' : 
      (totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0) > 40 ? 'warning' : 'poor',
      description: 'Easily accessible assets for emergencies and opportunities.'
    },
    {
      id: 'debt-to-liquid',
      name: 'Debt-to-Liquid Assets',
      value: liquidAssets > 0 ? (totalDebt / liquidAssets) * 100 : (totalDebt > 0 ? 1000 : 0),
      target: '< 300%',
      status: getStatus(
        liquidAssets > 0 ? (totalDebt / liquidAssets) * 100 : (totalDebt > 0 ? 1000 : 0),
        300, 500, true
      ),
      description: 'Total debt relative to liquid assets. Measures ability to pay down debt quickly.'
    }
  ];

  return ratios;
};

export const calculateOverallScore = (ratios: FinancialRatio[]): number => {
  const weights = {
    'core-expense-ratio': 0.15,
    'total-expense-ratio': 0.12,
    'debt-servicing-ratio': 0.15,
    'cash-buffer-ratio': 0.10,
    'emergency-months': 0.15,
    'savings-rate': 0.12,
    'investment-allocation': 0.08,
    'debt-to-income': 0.05,
    'debt-to-assets': 0.03,
    'cash-to-assets': 0.02,
    'liquid-assets-ratio': 0.02,
    'debt-to-liquid': 0.01
  };

  let weightedScore = 0;
  let totalWeight = 0;

  ratios.forEach(ratio => {
    const weight = weights[ratio.id as keyof typeof weights] || 0;
    if (weight > 0) {
      let score = 0;
      if (ratio.status === 'good') score = 100;
      else if (ratio.status === 'warning') score = 60;
      else score = 20;
      
      weightedScore += score * weight;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
};

export const getPriorityRecommendations = (ratios: FinancialRatio[]): string[] => {
  const recommendations: string[] = [];
  
  // High priority recommendations based on poor ratios
  const emergencyMonths = ratios.find(r => r.id === 'emergency-months');
  if (emergencyMonths && emergencyMonths.status === 'poor') {
    recommendations.push('Build an emergency fund covering 3-6 months of core expenses');
  }

  const debtServicing = ratios.find(r => r.id === 'debt-servicing-ratio');
  if (debtServicing && debtServicing.status === 'poor') {
    recommendations.push('Reduce monthly debt payments to below 36% of gross income');
  }

  const coreExpenses = ratios.find(r => r.id === 'core-expense-ratio');
  if (coreExpenses && coreExpenses.status === 'poor') {
    recommendations.push('Reduce core living expenses to improve financial flexibility');
  }

  const savingsRate = ratios.find(r => r.id === 'savings-rate');
  if (savingsRate && savingsRate.status === 'poor') {
    recommendations.push('Increase monthly savings to at least 10% of net income');
  }

  const investmentAllocation = ratios.find(r => r.id === 'investment-allocation');
  if (investmentAllocation && investmentAllocation.status === 'poor') {
    recommendations.push('Increase investment allocation for long-term wealth building');
  }

  // If no poor ratios, look at warning ratios
  if (recommendations.length === 0) {
    ratios.forEach(ratio => {
      if (ratio.status === 'warning') {
        switch (ratio.id) {
          case 'emergency-months':
            recommendations.push('Build emergency fund to 6 months of expenses');
            break;
          case 'savings-rate':
            recommendations.push('Increase savings rate to 20% for optimal wealth building');
            break;
          case 'investment-allocation':
            recommendations.push('Consider increasing investment allocation to 60%+');
            break;
        }
      }
    });
  }

  return recommendations.slice(0, 5); // Return top 5 recommendations
};