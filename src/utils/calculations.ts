// Financial calculations for ManageMeMoney app
// All calculations use question IDs from questionGroups.ts

export interface UserFinancialData {
  [key: string]: number | string | boolean | undefined;
}

export interface CalculatedRatios {
  emergencyFundRatio: number;
  currentRatio: number;
  quickRatio: number;
  debtToIncomeRatio: number;
  debtToAssetRatio: number;
  savingsRate: number;
  investmentRate: number;
  lifeInsuranceCoverage: number;
  healthInsuranceAdequacy: number;
  assetProtection: number;
}

// Helper: Safely get numeric value from user data
const getNumber = (data: UserFinancialData, key: string): number => {
  const value = data[key];
  return typeof value === 'number' ? value : 0;
};

// Calculate total monthly expenses from all sources
export const calculateTotalMonthlyExpenses = (data: UserFinancialData): number => {
  // Monthly expense fields (monthly-expenses group)
  const monthlyExpenses = 
    getNumber(data, 'monthlyGroceries') +
    getNumber(data, 'monthlyElectricityBill') +
    getNumber(data, 'monthlyWaterBill') +
    getNumber(data, 'monthlyGasBill') +
    getNumber(data, 'monthlyInternetBill') +
    getNumber(data, 'monthlyMobilePhone') +
    getNumber(data, 'monthlyPublicTransport') +
    getNumber(data, 'monthlyRideSharingCab') +
    getNumber(data, 'monthlyDiningOut') +
    getNumber(data, 'monthlyFoodDelivery') +
    getNumber(data, 'monthlyPersonalCare') +
    getNumber(data, 'monthlyGym') +
    getNumber(data, 'monthlyEntertainment') +
    getNumber(data, 'monthlyStreamingServices') +
    getNumber(data, 'monthlyOtherSubscriptions') +
    getNumber(data, 'monthlyHouseholdHelp') +
    getNumber(data, 'monthlyPetExpenses') +
    getNumber(data, 'monthlyHealthSupplements') +
    getNumber(data, 'monthlyRegularMedicines') +
    getNumber(data, 'monthlyDoctorConsultations') +
    getNumber(data, 'monthlyAlcoholTobacco') +
    getNumber(data, 'monthlyShopping') +
    getNumber(data, 'monthlyGiftsAndDonations') +
    getNumber(data, 'monthlyLaundryDryCleaning') +
    getNumber(data, 'monthlyHomeDeliveries') +
    getNumber(data, 'monthlyClubMemberships') +
    getNumber(data, 'monthlyHobbiesExpenses');

  // Annual expenses converted to monthly
  const annualExpensesMonthly = 
    (getNumber(data, 'annualHomeImprovement') +
     getNumber(data, 'annualHolidayTravel') +
     getNumber(data, 'annualFestivalsGifts') +
     getNumber(data, 'annualMedicalExpenses') +
     getNumber(data, 'annualProfessionalFees') +
     getNumber(data, 'annualMiscExpenses')) / 12;

  // Housing costs
  const housingCosts = 
    getNumber(data, 'monthlyRent') +
    getNumber(data, 'buildingMaintenanceFees') +
    getNumber(data, 'home1MonthlyEMI') +
    getNumber(data, 'home2MonthlyEMI') +
    getNumber(data, 'rentalInsurancePremium') +
    getNumber(data, 'home1InsurancePremium') +
    getNumber(data, 'home2InsurancePremium');

  // Vehicle costs
  const vehicleCosts = 
    getNumber(data, 'vehicle1MonthlyEMI') +
    getNumber(data, 'vehicle2MonthlyEMI') +
    getNumber(data, 'vehicle1FuelCost') +
    getNumber(data, 'vehicle2FuelCost') +
    getNumber(data, 'monthlyParkingCost') +
    getNumber(data, 'monthlyDriverCost') +
    getNumber(data, 'monthlyWashingCost') +
    (getNumber(data, 'annualMaintenanceCost') / 12) +
    getNumber(data, 'vehicle1InsurancePremium') +
    getNumber(data, 'vehicle2InsurancePremium');

  // Debt payments
  const debtPayments = 
    getNumber(data, 'card1MonthlyPayment') +
    getNumber(data, 'card2MonthlyPayment') +
    getNumber(data, 'card3MonthlyPayment') +
    getNumber(data, 'card4MonthlyPayment') +
    getNumber(data, 'loan1MonthlyPayment') +
    getNumber(data, 'loan2MonthlyPayment') +
    getNumber(data, 'loan3MonthlyPayment') +
    getNumber(data, 'loan4MonthlyPayment');

  // Child expenses
  const childExpenses = 
    // Child 1
    getNumber(data, 'child1MonthlyDiapers') +
    getNumber(data, 'child1MonthlyClothing') +
    getNumber(data, 'child1MonthlyToys') +
    getNumber(data, 'child1MonthlyParties') +
    getNumber(data, 'child1MonthlyActivities') +
    getNumber(data, 'child1MonthlyEducation') +
    getNumber(data, 'child1MonthlyOnlineLearning') +
    getNumber(data, 'child1MonthlyTutoring') +
    getNumber(data, 'child1MonthlyBooks') +
    getNumber(data, 'child1MonthlyFieldTrips') +
    getNumber(data, 'child1MonthlyMedical') +
    getNumber(data, 'child1MonthlyMiscellaneous') +
    getNumber(data, 'child1InsurancePremium') +
    // Child 2
    getNumber(data, 'child2MonthlyDiapers') +
    getNumber(data, 'child2MonthlyClothing') +
    getNumber(data, 'child2MonthlyToys') +
    getNumber(data, 'child2MonthlyParties') +
    getNumber(data, 'child2MonthlyActivities') +
    getNumber(data, 'child2MonthlyEducation') +
    getNumber(data, 'child2MonthlyOnlineLearning') +
    getNumber(data, 'child2MonthlyTutoring') +
    getNumber(data, 'child2MonthlyBooks') +
    getNumber(data, 'child2MonthlyFieldTrips') +
    getNumber(data, 'child2MonthlyMedical') +
    getNumber(data, 'child2MonthlyMiscellaneous') +
    getNumber(data, 'child2InsurancePremium') +
    // Child 3
    getNumber(data, 'child3MonthlyDiapers') +
    getNumber(data, 'child3MonthlyClothing') +
    getNumber(data, 'child3MonthlyToys') +
    getNumber(data, 'child3MonthlyParties') +
    getNumber(data, 'child3MonthlyActivities') +
    getNumber(data, 'child3MonthlyEducation') +
    getNumber(data, 'child3MonthlyOnlineLearning') +
    getNumber(data, 'child3MonthlyTutoring') +
    getNumber(data, 'child3MonthlyBooks') +
    getNumber(data, 'child3MonthlyFieldTrips') +
    getNumber(data, 'child3MonthlyMedical') +
    getNumber(data, 'child3MonthlyMiscellaneous') +
    getNumber(data, 'child3InsurancePremium');

  // Dependent expenses
  const dependentExpenses = 
    // Dependent 1
    getNumber(data, 'dependent1HealthExpenses') +
    getNumber(data, 'dependent1MedicalCosts') +
    getNumber(data, 'dependent1LivingExpenses') +
    getNumber(data, 'dependent1TravelExpenses') +
    getNumber(data, 'dependent1EntertainmentExpenses') +
    getNumber(data, 'dependent1MiscellaneousExpenses') +
    getNumber(data, 'dependent1InsurancePremium') +
    // Dependent 2
    getNumber(data, 'dependent2HealthExpenses') +
    getNumber(data, 'dependent2MedicalCosts') +
    getNumber(data, 'dependent2LivingExpenses') +
    getNumber(data, 'dependent2TravelExpenses') +
    getNumber(data, 'dependent2EntertainmentExpenses') +
    getNumber(data, 'dependent2MiscellaneousExpenses') +
    getNumber(data, 'dependent2InsurancePremium') +
    // Dependent 3
    getNumber(data, 'dependent3HealthExpenses') +
    getNumber(data, 'dependent3MedicalCosts') +
    getNumber(data, 'dependent3LivingExpenses') +
    getNumber(data, 'dependent3TravelExpenses') +
    getNumber(data, 'dependent3EntertainmentExpenses') +
    getNumber(data, 'dependent3MiscellaneousExpenses') +
    getNumber(data, 'dependent3InsurancePremium') +
    // Dependent 4
    getNumber(data, 'dependent4HealthExpenses') +
    getNumber(data, 'dependent4MedicalCosts') +
    getNumber(data, 'dependent4LivingExpenses') +
    getNumber(data, 'dependent4TravelExpenses') +
    getNumber(data, 'dependent4EntertainmentExpenses') +
    getNumber(data, 'dependent4MiscellaneousExpenses') +
    getNumber(data, 'dependent4InsurancePremium') +
    // Dependent 5
    getNumber(data, 'dependent5HealthExpenses') +
    getNumber(data, 'dependent5MedicalCosts') +
    getNumber(data, 'dependent5LivingExpenses') +
    getNumber(data, 'dependent5TravelExpenses') +
    getNumber(data, 'dependent5EntertainmentExpenses') +
    getNumber(data, 'dependent5MiscellaneousExpenses') +
    getNumber(data, 'dependent5InsurancePremium');

  // User insurance premiums
  const userInsurancePremiums = 
    getNumber(data, 'userHealthInsurancePremium') +
    getNumber(data, 'userLifeInsurancePremium') +
    getNumber(data, 'userAccidentInsurancePremium');

  // Partner insurance premiums
  const partnerInsurancePremiums = 
    getNumber(data, 'partnerHealthInsurancePremium') +
    getNumber(data, 'partnerLifeInsurancePremium') +
    getNumber(data, 'partnerAccidentInsurancePremium');

  return monthlyExpenses + annualExpensesMonthly + housingCosts + vehicleCosts + 
         debtPayments + childExpenses + dependentExpenses + userInsurancePremiums + 
         partnerInsurancePremiums;
};

// Calculate total liquid assets (cash and easily-sellable investments)
export const calculateLiquidAssets = (data: UserFinancialData): number => {
  return getNumber(data, 'checkingAccountBalance') +
         getNumber(data, 'savingsAccountBalance') +
         getNumber(data, 'mutualFundsValue') +
         getNumber(data, 'directEquityValue');
};

// Calculate short-term liabilities (credit cards + personal loans)
export const calculateShortTermLiabilities = (data: UserFinancialData): number => {
  const creditCardDebt = 
    getNumber(data, 'card1TotalDebt') +
    getNumber(data, 'card2TotalDebt') +
    getNumber(data, 'card3TotalDebt') +
    getNumber(data, 'card4TotalDebt');

  const personalLoanDebt = 
    getNumber(data, 'loan1OutstandingBalance') +
    getNumber(data, 'loan2OutstandingBalance') +
    getNumber(data, 'loan3OutstandingBalance') +
    getNumber(data, 'loan4OutstandingBalance');

  return creditCardDebt + personalLoanDebt;
};

// Calculate quick assets (most liquid: cash only)
export const calculateQuickAssets = (data: UserFinancialData): number => {
  return getNumber(data, 'checkingAccountBalance') +
         getNumber(data, 'savingsAccountBalance');
};

// LIQUIDITY RATIO 1: Emergency Fund Ratio
// Formula: Emergency Savings / Monthly Expenses
// Good: 6+ months, Average: 3-6 months, Poor: <3 months
export const calculateEmergencyFundRatio = (data: UserFinancialData): number => {
  const emergencySavings = getNumber(data, 'savingsAccountBalance');
  const monthlyExpenses = calculateTotalMonthlyExpenses(data);

  if (monthlyExpenses === 0) return 0;
  
  return emergencySavings / monthlyExpenses;
};

// LIQUIDITY RATIO 2: Current Ratio
// Formula: Liquid Assets / Short-term Liabilities
// Good: >2.0, Average: 1.0-2.0, Poor: <1.0
export const calculateCurrentRatio = (data: UserFinancialData): number => {
  const liquidAssets = calculateLiquidAssets(data);
  const shortTermLiabilities = calculateShortTermLiabilities(data);

  if (shortTermLiabilities === 0) return Infinity;
  
  return liquidAssets / shortTermLiabilities;
};

// LIQUIDITY RATIO 3: Quick Ratio
// Formula: (Cash + Investments) / Current Liabilities
// Good: >1.5, Average: 1.0-1.5, Poor: <1.0
export const calculateQuickRatio = (data: UserFinancialData): number => {
  const quickAssets = calculateQuickAssets(data);
  const currentLiabilities = calculateShortTermLiabilities(data);

  if (currentLiabilities === 0) return Infinity;
  
  return quickAssets / currentLiabilities;
};

// === DEBT RATIOS ===

// Calculate total monthly debt payments
export const calculateTotalMonthlyDebtPayments = (data: UserFinancialData): number => {
  const creditCardPayments = 
    getNumber(data, 'card1MonthlyPayment') +
    getNumber(data, 'card2MonthlyPayment') +
    getNumber(data, 'card3MonthlyPayment') +
    getNumber(data, 'card4MonthlyPayment');

  const loanPayments = 
    getNumber(data, 'loan1MonthlyPayment') +
    getNumber(data, 'loan2MonthlyPayment') +
    getNumber(data, 'loan3MonthlyPayment') +
    getNumber(data, 'loan4MonthlyPayment');

  const mortgagePayments = 
    getNumber(data, 'home1MonthlyEMI') +
    getNumber(data, 'home2MonthlyEMI');

  const vehiclePayments = 
    getNumber(data, 'vehicle1MonthlyEMI') +
    getNumber(data, 'vehicle2MonthlyEMI');

  return creditCardPayments + loanPayments + mortgagePayments + vehiclePayments;
};

// Calculate total monthly income
export const calculateTotalMonthlyIncome = (data: UserFinancialData): number => {
  // User's income
  const userIncome = 
    getNumber(data, 'netMonthlySalary') +
    (getNumber(data, 'annualBonusCommission') / 12) +
    getNumber(data, 'monthlyOvertimePay') +
    getNumber(data, 'monthlySelfEmploymentNet') +
    ((getNumber(data, 'annualDividendIncome') + 
      getNumber(data, 'annualInterestIncome') + 
      getNumber(data, 'annualCapitalGains')) / 12) +
    getNumber(data, 'monthlyRentalIncome') +
    getNumber(data, 'monthlyGovernmentBenefits') +
    getNumber(data, 'monthlyAlimonyChildSupport') +
    getNumber(data, 'monthlyRoyaltiesLicensing') +
    getNumber(data, 'monthlyFamilySupport') +
    getNumber(data, 'monthlyMiscellaneousIncome');

  // Partner's income
  const partnerIncome = 
    getNumber(data, 'partnerNetMonthlySalary') +
    getNumber(data, 'partnerOtherIncome');

  return userIncome + partnerIncome;
};

// Calculate total assets
export const calculateTotalAssets = (data: UserFinancialData): number => {
  // Cash and bank accounts
  const cashAssets = 
    getNumber(data, 'checkingAccountBalance') +
    getNumber(data, 'savingsAccountBalance') +
    getNumber(data, 'fixedDepositsValue') +
    getNumber(data, 'cashOnHand');

  // Investments
  const investments = 
    getNumber(data, 'mutualFundsValue') +
    getNumber(data, 'directEquityValue') +
    getNumber(data, 'retirementAccountBalance') +
    getNumber(data, 'cryptoCurrentValue') +
    getNumber(data, 'commodityHoldingsValue') +
    getNumber(data, 'bondsCurrentValue') +
    getNumber(data, 'otherInvestmentProducts') +
    getNumber(data, 'providentFundBalance') +
    getNumber(data, 'employeeStockOptions');

  // Property values
  const propertyValues = 
    getNumber(data, 'home1CurrentValue') +
    getNumber(data, 'home2CurrentValue');

  // Vehicle values
  const vehicleValues = 
    getNumber(data, 'vehicle1CurrentValue') +
    getNumber(data, 'vehicle2CurrentValue');

  // Other assets
  const otherAssets = 
    getNumber(data, 'businessOwnershipValue') +
    getNumber(data, 'collectiblesValue') +
    getNumber(data, 'loansGivenToOthers') +
    getNumber(data, 'securityDepositsRecoverable') +
    getNumber(data, 'otherMiscellaneousAssets');

  return cashAssets + investments + propertyValues + vehicleValues + otherAssets;
};

// Calculate total liabilities
export const calculateTotalLiabilities = (data: UserFinancialData): number => {
  const creditCardDebt = 
    getNumber(data, 'card1TotalDebt') +
    getNumber(data, 'card2TotalDebt') +
    getNumber(data, 'card3TotalDebt') +
    getNumber(data, 'card4TotalDebt');

  const personalLoans = 
    getNumber(data, 'loan1OutstandingBalance') +
    getNumber(data, 'loan2OutstandingBalance') +
    getNumber(data, 'loan3OutstandingBalance') +
    getNumber(data, 'loan4OutstandingBalance');

  const propertyLoans = 
    getNumber(data, 'home1OutstandingLoan') +
    getNumber(data, 'home2OutstandingLoan');

  const vehicleLoans = 
    getNumber(data, 'vehicle1OutstandingLoan') +
    getNumber(data, 'vehicle2OutstandingLoan');

  return creditCardDebt + personalLoans + propertyLoans + vehicleLoans;
};

// DEBT RATIO 1: Debt-to-Income Ratio
// Formula: Total Monthly Debt Payments / Monthly Income
// Good: <36%, Average: 36-43%, Poor: >43%
export const calculateDebtToIncomeRatio = (data: UserFinancialData): number => {
  const monthlyDebtPayments = calculateTotalMonthlyDebtPayments(data);
  const monthlyIncome = calculateTotalMonthlyIncome(data);

  if (monthlyIncome === 0) return Infinity;
  
  return monthlyDebtPayments / monthlyIncome;
};

// DEBT RATIO 2: Debt-to-Asset Ratio
// Formula: Total Liabilities / Total Assets
// Good: <0.5, Average: 0.5-0.7, Poor: >0.7
export const calculateDebtToAssetRatio = (data: UserFinancialData): number => {
  const totalLiabilities = calculateTotalLiabilities(data);
  const totalAssets = calculateTotalAssets(data);

  if (totalAssets === 0) return Infinity;
  
  return totalLiabilities / totalAssets;
};

// === SAVINGS & INVESTMENT RATIOS ===

// Calculate total monthly savings
export const calculateTotalMonthlySavings = (data: UserFinancialData): number => {
  return getNumber(data, 'monthlySavingsGoals') +
         getNumber(data, 'monthlyFixedDeposits');
};

// Calculate total monthly investments
export const calculateTotalMonthlyInvestments = (data: UserFinancialData): number => {
  const monthlyContributions = 
    getNumber(data, 'monthlySipContributions') +
    getNumber(data, 'monthlyDirectEquity') +
    getNumber(data, 'monthlyRetirementContributions') +
    getNumber(data, 'monthlyFixedDeposits') +
    getNumber(data, 'monthlySavingsGoals') +
    getNumber(data, 'monthlyCryptoPurchases') +
    getNumber(data, 'monthlyCommodityInvestments') +
    getNumber(data, 'monthlyBondContributions');

  const annualContributions = 
    (getNumber(data, 'annualRetirementLumpsum') +
     getNumber(data, 'annualTaxAdvantagedInvestments') +
     getNumber(data, 'annualBondPurchases') +
     getNumber(data, 'annualMiscellaneousInvestments')) / 12;

  return monthlyContributions + annualContributions;
};

// Calculate net worth
export const calculateNetWorth = (data: UserFinancialData): number => {
  return calculateTotalAssets(data) - calculateTotalLiabilities(data);
};

// SAVINGS RATIO 1: Savings Rate
// Formula: Monthly Savings / Monthly Income
// Good: >20%, Average: 10-20%, Poor: <10%
export const calculateSavingsRate = (data: UserFinancialData): number => {
  const monthlySavings = calculateTotalMonthlySavings(data);
  const monthlyIncome = calculateTotalMonthlyIncome(data);

  if (monthlyIncome === 0) return 0;
  
  return monthlySavings / monthlyIncome;
};

// SAVINGS RATIO 2: Investment Rate
// Formula: Monthly Investments / Monthly Income
// Good: >15%, Average: 5-15%, Poor: <5%
export const calculateInvestmentRate = (data: UserFinancialData): number => {
  const monthlyInvestments = calculateTotalMonthlyInvestments(data);
  const monthlyIncome = calculateTotalMonthlyIncome(data);

  if (monthlyIncome === 0) return 0;
  
  return monthlyInvestments / monthlyIncome;
};

// === PROTECTION RATIOS ===

// Calculate total annual income
export const calculateTotalAnnualIncome = (data: UserFinancialData): number => {
  return calculateTotalMonthlyIncome(data) * 12;
};

// Calculate total life insurance coverage
export const calculateTotalLifeInsurance = (data: UserFinancialData): number => {
  return getNumber(data, 'userLifeInsuranceCover') +
         getNumber(data, 'partnerLifeInsuranceCover');
};

// Calculate total health insurance coverage
export const calculateTotalHealthInsurance = (data: UserFinancialData): number => {
  return getNumber(data, 'userHealthInsuranceCover') +
         getNumber(data, 'partnerHealthInsuranceCover') +
         getNumber(data, 'child1InsuranceCover') +
         getNumber(data, 'child2InsuranceCover') +
         getNumber(data, 'child3InsuranceCover') +
         getNumber(data, 'dependent1InsuranceCover') +
         getNumber(data, 'dependent2InsuranceCover') +
         getNumber(data, 'dependent3InsuranceCover') +
         getNumber(data, 'dependent4InsuranceCover') +
         getNumber(data, 'dependent5InsuranceCover');
};

// Calculate total insurance coverage (all types)
export const calculateTotalInsuranceCoverage = (data: UserFinancialData): number => {
  const lifeInsurance = calculateTotalLifeInsurance(data);
  
  const healthInsurance = calculateTotalHealthInsurance(data);
  
  const accidentInsurance = 
    getNumber(data, 'userAccidentInsuranceCover') +
    getNumber(data, 'partnerAccidentInsuranceCover');
  
  const propertyInsurance = 
    getNumber(data, 'home1InsuranceCover') +
    getNumber(data, 'home2InsuranceCover') +
    getNumber(data, 'rentalInsuranceCover');
  
  const vehicleInsurance = 
    getNumber(data, 'vehicle1InsuranceCover') +
    getNumber(data, 'vehicle2InsuranceCover');

  return lifeInsurance + healthInsurance + accidentInsurance + propertyInsurance + vehicleInsurance;
};

// PROTECTION RATIO 1: Life Insurance Coverage
// Formula: Life Insurance Coverage / Annual Income
// Good: 10-15x annual income, Average: 5-10x, Poor: <5x
export const calculateLifeInsuranceCoverage = (data: UserFinancialData): number => {
  const lifeInsurance = calculateTotalLifeInsurance(data);
  const annualIncome = calculateTotalAnnualIncome(data);

  if (annualIncome === 0) return 0;
  
  return lifeInsurance / annualIncome;
};

// PROTECTION RATIO 2: Health Insurance Adequacy
// Formula: Health Insurance Coverage / Annual Medical Expenses
// Good: >5x annual expenses, Average: 3-5x, Poor: <3x
export const calculateHealthInsuranceAdequacy = (data: UserFinancialData): number => {
  const healthInsurance = calculateTotalHealthInsurance(data);
  
  // Calculate total medical expenses from all sources
  const monthlyMedicalExpenses = 
    getNumber(data, 'monthlyHealthSupplements') +
    getNumber(data, 'monthlyRegularMedicines') +
    getNumber(data, 'monthlyDoctorConsultations') +
    getNumber(data, 'child1MonthlyMedical') +
    getNumber(data, 'child2MonthlyMedical') +
    getNumber(data, 'child3MonthlyMedical') +
    getNumber(data, 'dependent1HealthExpenses') +
    getNumber(data, 'dependent1MedicalCosts') +
    getNumber(data, 'dependent2HealthExpenses') +
    getNumber(data, 'dependent2MedicalCosts') +
    getNumber(data, 'dependent3HealthExpenses') +
    getNumber(data, 'dependent3MedicalCosts') +
    getNumber(data, 'dependent4HealthExpenses') +
    getNumber(data, 'dependent4MedicalCosts') +
    getNumber(data, 'dependent5HealthExpenses') +
    getNumber(data, 'dependent5MedicalCosts');
  
  const annualMedicalFromMonthly = monthlyMedicalExpenses * 12;
  const annualMedicalExpenses = annualMedicalFromMonthly + getNumber(data, 'annualMedicalExpenses');

  if (annualMedicalExpenses === 0) {
    const estimatedExpenses = calculateTotalAnnualIncome(data) * 0.05;
    return estimatedExpenses > 0 ? healthInsurance / estimatedExpenses : 0;
  }
  
  return healthInsurance / annualMedicalExpenses;
};

// PROTECTION RATIO 3: Asset Protection
// Formula: Total Insurance Coverage / Total Asset Value
// Good: >0.8 (80%+ of assets covered), Average: 0.5-0.8, Poor: <0.5
export const calculateAssetProtection = (data: UserFinancialData): number => {
  const totalInsurance = calculateTotalInsuranceCoverage(data);
  const totalAssets = calculateTotalAssets(data);

  if (totalAssets === 0) return 0;
  
  return totalInsurance / totalAssets;
};

// Main function to calculate all ratios
export const calculateAllRatios = (data: UserFinancialData): CalculatedRatios => {
  return {
    emergencyFundRatio: calculateEmergencyFundRatio(data),
    currentRatio: calculateCurrentRatio(data),
    quickRatio: calculateQuickRatio(data),
    debtToIncomeRatio: calculateDebtToIncomeRatio(data),
    debtToAssetRatio: calculateDebtToAssetRatio(data),
    savingsRate: calculateSavingsRate(data),
    investmentRate: calculateInvestmentRate(data),
    lifeInsuranceCoverage: calculateLifeInsuranceCoverage(data),
    healthInsuranceAdequacy: calculateHealthInsuranceAdequacy(data),
    assetProtection: calculateAssetProtection(data)
  };
};