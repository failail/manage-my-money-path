export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: 'text' | 'number' | 'radio' | 'select' | 'date' | 'range';
  required: boolean;
  options?: string[];
  validation?: ValidationRule[];
  conditional?: {
    dependsOn: string;
    values: string[];
  } | Array<{
    dependsOn: string;
    values: string[];
  }>;
  section: string;
  questionNumber: number;
  groupId: string;
  // Range-specific properties
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  showValue?: boolean;
  suffix?: string;
}

export interface ValidationRule {
  type: 'min' | 'max' | 'required';
  value?: number;
  message: string;
}

export interface QuestionGroup {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  conditional?: boolean;
  triggerQuestions?: string[];
}

export const questionGroups: QuestionGroup[] = [
  {
    id: 'personal-basics',
    title: 'Personal Basics',
    description: 'Essential personal and demographic information',
    questions: [
      {
        id: 'firstName',
        title: "What's your first name?",
        subtitle: "So we know what to call you",
        type: 'text',
        required: true,
        section: 'Personal Information',
        questionNumber: 1,
        groupId: 'personal-basics'
      },
      {
        id: 'yearOfBirth',
        title: 'What year were you born?',
        type: 'select',
        required: true,
        options: ['2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940'],
        section: 'Personal Information',
        questionNumber: 2,
        groupId: 'personal-basics'
      },
      {
        id: 'gender',
        title: "What's your gender?",
        type: 'radio',
        required: true,
        options: ['Male', 'Female', 'Prefer not to say'],
        section: 'Personal Information',
        questionNumber: 3,
        groupId: 'personal-basics'
      },
      {
        id: 'relationshipStatus',
        title: "What's your relationship status?",
        type: 'radio',
        required: true,
        options: ['Single', 'In relationship not living together', 'In relationship living together', 'Married'],
        section: 'Personal Information',
        questionNumber: 4,
        groupId: 'personal-basics'
      },
      {
        id: 'workSituation',
        title: "What's your current work situation?",
        type: 'radio',
        required: true,
        options: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Freelancer', 'Retired', 'Unemployed', 'Student', 'Homemaker'],
        section: 'Personal Information',
        questionNumber: 5,
        groupId: 'personal-basics'
      },
      {
        id: 'industry',
        title: 'Which industry do you work in?',
        type: 'select',
        required: true,
        options: ['Technology', 'Finance & Banking', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Consulting', 'Real Estate', 'Media & Entertainment', 'Government', 'Non-profit', 'Agriculture', 'Energy', 'Transportation', 'Other', 'Not applicable'],
        section: 'Personal Information',
        questionNumber: 6,
        groupId: 'personal-basics'
      },
      {
        id: 'jobFunction',
        title: "What's your primary job function?",
        type: 'select',
        required: true,
        options: ['Engineering/Technical', 'Sales & Marketing', 'Operations', 'Finance & Accounting', 'Human Resources', 'Management/Leadership', 'Customer Service', 'Research & Development', 'Legal', 'Design/Creative', 'Administrative', 'Other', 'Not applicable'],
        section: 'Personal Information',
        questionNumber: 7,
        groupId: 'personal-basics'
      },
      {
        id: 'country',
        title: 'Which country do you live in?',
        type: 'select',
        required: true,
        options: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'UAE', 'Germany', 'Other'],
        section: 'Personal Information',
        questionNumber: 8,
        groupId: 'personal-basics'
      },
      {
        id: 'city',
        title: 'Which city do you live in?',
        type: 'text',
        required: true,
        section: 'Personal Information',
        questionNumber: 9,
        groupId: 'personal-basics'
      },
      {
        id: 'currency',
        title: "What's your preferred currency?",
        type: 'select',
        required: true,
        options: ['INR', 'USD', 'GBP', 'EUR', 'CAD', 'AUD', 'SGD', 'AED'],
        section: 'Personal Information',
        questionNumber: 10,
        groupId: 'personal-basics'
      },
      {
        id: 'housingType',
        title: 'In your primary residence, do you rent it or own it?',
        type: 'radio',
        required: true,
        options: ['Rent it', 'Own it'],
        section: 'Personal Information',
        questionNumber: 11,
        groupId: 'personal-basics'
      },
      {
        id: 'additionalProperties',
        title: 'Apart from your current living arrangement, how many other properties do you own?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4 or more'],
        section: 'Personal Information',
        questionNumber: 12,
        groupId: 'personal-basics'
      },
      {
        id: 'hasVehicles',
        title: 'How many vehicles do you own?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4 or more'],
        section: 'Personal Information',
        questionNumber: 13,
        groupId: 'personal-basics'
      },
      {
        id: 'hasChildren',
        title: 'How many kids do you have?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3 or more'],
        section: 'Personal Information',
        questionNumber: 14,
        groupId: 'personal-basics'
      },
      {
        id: 'hasFinancialDependents',
        title: 'Apart from your children, how many financial dependents do you have?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4', '5 or more'],
        section: 'Personal Information',
        questionNumber: 15,
        groupId: 'personal-basics'
      },
      {
        id: 'hasPersonalLoans',
        title: 'Do you have any personal loans or credit card debt?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 16,
        groupId: 'personal-basics'
      },
      {
        id: 'smoker',
        title: 'Are you a smoker?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 17,
        groupId: 'personal-basics'
      },
      {
        id: 'targetRetirementAge',
        title: 'At what age do you plan to retire?',
        type: 'select',
        required: true,
        options: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
        section: 'Personal Information',
        questionNumber: 18,
        groupId: 'personal-basics'
      },
      {
        id: 'partnerAge',
        title: "What's your partner's age range?",
        type: 'select',
        required: true,
        options: ['18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '60+', 'Not applicable'],
        section: 'Personal Information',
        questionNumber: 19,
        groupId: 'personal-basics'
      }
    ]
  },
  
  {
    id: 'income-expenses',
    title: 'Income & Expenses',
    description: 'Your current financial situation',
    questions: [
      {
        id: 'monthlyIncome',
        title: "What's your monthly income after taxes?",
        subtitle: "Include all sources of income",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 20,
        groupId: 'income-expenses'
      },
      {
        id: 'partnerIncome',
        title: "What's your partner's monthly income after taxes?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Financial Information',
        questionNumber: 21,
        groupId: 'income-expenses'
      },
      {
        id: 'monthlyExpenses',
        title: "What are your total monthly expenses?",
        subtitle: "Include all living costs, bills, and regular expenses",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 22,
        groupId: 'income-expenses'
      },
      {
        id: 'housingCosts',
        title: "What are your monthly housing costs?",
        subtitle: "Rent, mortgage, utilities, maintenance",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 23,
        groupId: 'income-expenses'
      },
      {
        id: 'transportationCosts',
        title: "What are your monthly transportation costs?",
        subtitle: "Car payments, fuel, public transport, maintenance",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 24,
        groupId: 'income-expenses'
      },
      {
        id: 'foodCosts',
        title: "What are your monthly food and dining costs?",
        subtitle: "Groceries, restaurants, takeout",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 25,
        groupId: 'income-expenses'
      },
      {
        id: 'entertainmentCosts',
        title: "What are your monthly entertainment and leisure costs?",
        subtitle: "Movies, hobbies, subscriptions, travel",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 26,
        groupId: 'income-expenses'
      },
      {
        id: 'childcareCosts',
        title: "What are your monthly childcare costs?",
        subtitle: "Daycare, school fees, activities",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Financial Information',
        questionNumber: 27,
        groupId: 'income-expenses'
      },
      {
        id: 'healthcareCosts',
        title: "What are your monthly healthcare costs?",
        subtitle: "Insurance premiums, medical expenses, medications",
        type: 'number',
        required: true,
        section: 'Financial Information',
        questionNumber: 28,
        groupId: 'income-expenses'
      },
      {
        id: 'debtPayments',
        title: "What are your monthly debt payments?",
        subtitle: "Credit cards, personal loans, student loans",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Financial Information',
        questionNumber: 29,
        groupId: 'income-expenses'
      }
    ]
  },

  {
    id: 'assets-liabilities',
    title: 'Assets & Liabilities',
    description: 'Your current wealth and debts',
    questions: [
      {
        id: 'cashSavings',
        title: "How much do you have in cash and savings accounts?",
        subtitle: "Bank accounts, fixed deposits, cash",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 30,
        groupId: 'assets-liabilities'
      },
      {
        id: 'investments',
        title: "What's the current value of your investments?",
        subtitle: "Stocks, bonds, mutual funds, ETFs",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 31,
        groupId: 'assets-liabilities'
      },
      {
        id: 'retirementAccounts',
        title: "What's the current value of your retirement accounts?",
        subtitle: "401k, IRA, pension funds, PF",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 32,
        groupId: 'assets-liabilities'
      },
      {
        id: 'realEstateValue',
        title: "What's the current market value of your real estate?",
        subtitle: "Primary residence and other properties",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 33,
        groupId: 'assets-liabilities'
      },
      {
        id: 'vehicleValue',
        title: "What's the current value of your vehicles?",
        subtitle: "Cars, motorcycles, boats",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Assets & Liabilities',
        questionNumber: 34,
        groupId: 'assets-liabilities'
      },
      {
        id: 'otherAssets',
        title: "What's the value of your other assets?",
        subtitle: "Jewelry, art, collectibles, business equity",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 35,
        groupId: 'assets-liabilities'
      },
      {
        id: 'mortgageDebt',
        title: "How much do you owe on mortgages?",
        subtitle: "Outstanding mortgage balances on all properties",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 36,
        groupId: 'assets-liabilities'
      },
      {
        id: 'creditCardDebt',
        title: "How much credit card debt do you have?",
        subtitle: "Total outstanding balances",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Assets & Liabilities',
        questionNumber: 37,
        groupId: 'assets-liabilities'
      },
      {
        id: 'personalLoans',
        title: "How much do you owe in personal loans?",
        subtitle: "Student loans, personal loans, other debt",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Assets & Liabilities',
        questionNumber: 38,
        groupId: 'assets-liabilities'
      },
      {
        id: 'otherDebts',
        title: "How much do you owe in other debts?",
        subtitle: "Business loans, family loans, other obligations",
        type: 'number',
        required: true,
        section: 'Assets & Liabilities',
        questionNumber: 39,
        groupId: 'assets-liabilities'
      }
    ]
  },

  {
    id: 'financial-goals',
    title: 'Financial Goals',
    description: 'Your short and long-term financial objectives',
    questions: [
      {
        id: 'primaryGoal',
        title: "What's your primary financial goal?",
        type: 'radio',
        required: true,
        options: ['Retirement planning', 'Buying a home', 'Children\'s education', 'Starting a business', 'Building emergency fund', 'Debt reduction', 'Wealth accumulation', 'Other'],
        section: 'Goals & Planning',
        questionNumber: 40,
        groupId: 'financial-goals'
      },
      {
        id: 'retirementGoal',
        title: "How much do you want to have saved for retirement?",
        subtitle: "Total amount needed for comfortable retirement",
        type: 'number',
        required: true,
        section: 'Goals & Planning',
        questionNumber: 41,
        groupId: 'financial-goals'
      },
      {
        id: 'emergencyFundGoal',
        title: "How many months of expenses do you want in your emergency fund?",
        type: 'select',
        required: true,
        options: ['3 months', '6 months', '9 months', '12 months', '18 months', '24 months'],
        section: 'Goals & Planning',
        questionNumber: 42,
        groupId: 'financial-goals'
      },
      {
        id: 'homeDownPayment',
        title: "How much do you need for a home down payment?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'primaryGoal',
          values: ['Buying a home']
        },
        section: 'Goals & Planning',
        questionNumber: 43,
        groupId: 'financial-goals'
      },
      {
        id: 'educationFund',
        title: "How much do you want to save for children's education?",
        type: 'number',
        required: false,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'primaryGoal',
            values: ['Children\'s education']
          }
        ],
        section: 'Goals & Planning',
        questionNumber: 44,
        groupId: 'financial-goals'
      },
      {
        id: 'businessStartupFund',
        title: "How much capital do you need to start your business?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'primaryGoal',
          values: ['Starting a business']
        },
        section: 'Goals & Planning',
        questionNumber: 45,
        groupId: 'financial-goals'
      },
      {
        id: 'timeHorizon',
        title: "What's your investment time horizon?",
        type: 'radio',
        required: true,
        options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        section: 'Goals & Planning',
        questionNumber: 46,
        groupId: 'financial-goals'
      },
      {
        id: 'savingsRate',
        title: "What percentage of your income do you currently save?",
        type: 'select',
        required: true,
        options: ['0-5%', '6-10%', '11-15%', '16-20%', '21-25%', '26-30%', 'More than 30%'],
        section: 'Goals & Planning',
        questionNumber: 47,
        groupId: 'financial-goals'
      },
      {
        id: 'targetSavingsRate',
        title: "What percentage of your income would you like to save?",
        type: 'select',
        required: true,
        options: ['5-10%', '11-15%', '16-20%', '21-25%', '26-30%', '31-40%', 'More than 40%'],
        section: 'Goals & Planning',
        questionNumber: 48,
        groupId: 'financial-goals'
      }
    ]
  },

  {
    id: 'risk-tolerance',
    title: 'Risk Tolerance',
    description: 'Understanding your comfort level with investment risk',
    questions: [
      {
        id: 'riskComfort',
        title: "How comfortable are you with investment risk?",
        type: 'radio',
        required: true,
        options: ['Very conservative - I prefer guaranteed returns', 'Conservative - I prefer low risk with modest returns', 'Moderate - I can accept some risk for better returns', 'Aggressive - I\'m comfortable with high risk for high returns', 'Very aggressive - I seek maximum returns despite high risk'],
        section: 'Risk Assessment',
        questionNumber: 49,
        groupId: 'risk-tolerance'
      },
      {
        id: 'marketDownturn',
        title: "If your investments lost 20% in a market downturn, what would you do?",
        type: 'radio',
        required: true,
        options: ['Sell everything immediately', 'Sell some investments', 'Hold and wait for recovery', 'Buy more at lower prices'],
        section: 'Risk Assessment',
        questionNumber: 50,
        groupId: 'risk-tolerance'
      },
      {
        id: 'investmentExperience',
        title: "How would you describe your investment experience?",
        type: 'radio',
        required: true,
        options: ['Beginner - Little to no experience', 'Basic - Some experience with simple investments', 'Intermediate - Comfortable with various investment types', 'Advanced - Extensive experience and knowledge', 'Expert - Professional level expertise'],
        section: 'Risk Assessment',
        questionNumber: 51,
        groupId: 'risk-tolerance'
      },
      {
        id: 'volatilityTolerance',
        title: "What level of portfolio volatility can you tolerate?",
        type: 'radio',
        required: true,
        options: ['Very low - I want stable, predictable returns', 'Low - Minor fluctuations are acceptable', 'Moderate - I can handle moderate ups and downs', 'High - I\'m comfortable with significant fluctuations', 'Very high - I can handle extreme volatility'],
        section: 'Risk Assessment',
        questionNumber: 52,
        groupId: 'risk-tolerance'
      },
      {
        id: 'lossCapacity',
        title: "What's the maximum percentage loss you could handle without affecting your lifestyle?",
        type: 'radio',
        required: true,
        options: ['0-5%', '6-10%', '11-20%', '21-30%', 'More than 30%'],
        section: 'Risk Assessment',
        questionNumber: 53,
        groupId: 'risk-tolerance'
      },
      {
        id: 'investmentPriority',
        title: "What's most important to you in investments?",
        type: 'radio',
        required: true,
        options: ['Capital preservation', 'Steady income', 'Moderate growth', 'High growth potential', 'Beating inflation'],
        section: 'Risk Assessment',
        questionNumber: 54,
        groupId: 'risk-tolerance'
      }
    ]
  },

  {
    id: 'investment-preferences',
    title: 'Investment Preferences',
    description: 'Your preferences for different types of investments',
    questions: [
      {
        id: 'preferredAssets',
        title: "Which asset classes are you most interested in?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Stocks/Equities', 'Bonds', 'Real Estate', 'Commodities', 'Cryptocurrency', 'Cash/Money Market', 'Alternative Investments'],
        section: 'Investment Strategy',
        questionNumber: 55,
        groupId: 'investment-preferences'
      },
      {
        id: 'geographicPreference',
        title: "What's your geographic investment preference?",
        type: 'radio',
        required: true,
        options: ['Domestic only', 'Primarily domestic with some international', 'Balanced domestic and international', 'Primarily international', 'Global diversification'],
        section: 'Investment Strategy',
        questionNumber: 56,
        groupId: 'investment-preferences'
      },
      {
        id: 'investmentStyle',
        title: "What investment style appeals to you most?",
        type: 'radio',
        required: true,
        options: ['Passive index investing', 'Active stock picking', 'Value investing', 'Growth investing', 'Income investing', 'Momentum investing'],
        section: 'Investment Strategy',
        questionNumber: 57,
        groupId: 'investment-preferences'
      },
      {
        id: 'esgImportance',
        title: "How important is ESG (Environmental, Social, Governance) investing to you?",
        type: 'radio',
        required: true,
        options: ['Not important', 'Somewhat important', 'Important', 'Very important', 'Essential'],
        section: 'Investment Strategy',
        questionNumber: 58,
        groupId: 'investment-preferences'
      },
      {
        id: 'rebalancingFrequency',
        title: "How often would you like to rebalance your portfolio?",
        type: 'radio',
        required: true,
        options: ['Never - Set and forget', 'Annually', 'Semi-annually', 'Quarterly', 'Monthly', 'As needed based on market conditions'],
        section: 'Investment Strategy',
        questionNumber: 59,
        groupId: 'investment-preferences'
      },
      {
        id: 'taxConsideration',
        title: "How important are tax considerations in your investment decisions?",
        type: 'radio',
        required: true,
        options: ['Not important', 'Somewhat important', 'Important', 'Very important', 'Critical'],
        section: 'Investment Strategy',
        questionNumber: 60,
        groupId: 'investment-preferences'
      }
    ]
  },

  {
    id: 'insurance-protection',
    title: 'Insurance & Protection',
    description: 'Your current insurance coverage and protection needs',
    questions: [
      {
        id: 'lifeInsurance',
        title: "Do you have life insurance?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance & Protection',
        questionNumber: 61,
        groupId: 'insurance-protection'
      },
      {
        id: 'lifeInsuranceCoverage',
        title: "What's your current life insurance coverage amount?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'lifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance & Protection',
        questionNumber: 62,
        groupId: 'insurance-protection'
      },
      {
        id: 'lifeInsuranceType',
        title: "What type of life insurance do you have?",
        type: 'radio',
        required: false,
        options: ['Term life', 'Whole life', 'Universal life', 'Variable life', 'Not sure'],
        conditional: {
          dependsOn: 'lifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance & Protection',
        questionNumber: 63,
        groupId: 'insurance-protection'
      },
      {
        id: 'disabilityInsurance',
        title: "Do you have disability insurance?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance & Protection',
        questionNumber: 64,
        groupId: 'insurance-protection'
      },
      {
        id: 'healthInsurance',
        title: "Do you have health insurance?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance & Protection',
        questionNumber: 65,
        groupId: 'insurance-protection'
      },
      {
        id: 'propertyInsurance',
        title: "Do you have property insurance (home/renters)?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance & Protection',
        questionNumber: 66,
        groupId: 'insurance-protection'
      },
      {
        id: 'umbrellaInsurance',
        title: "Do you have umbrella liability insurance?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance & Protection',
        questionNumber: 67,
        groupId: 'insurance-protection'
      },
      {
        id: 'emergencyFundMonths',
        title: "How many months of expenses do you currently have in your emergency fund?",
        type: 'select',
        required: true,
        options: ['0 months', '1 month', '2 months', '3 months', '4-6 months', '7-12 months', 'More than 12 months'],
        section: 'Insurance & Protection',
        questionNumber: 68,
        groupId: 'insurance-protection'
      }
    ]
  },

  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Your tax situation and planning strategies',
    questions: [
      {
        id: 'taxBracket',
        title: "What's your estimated tax bracket?",
        type: 'select',
        required: true,
        options: ['0-10%', '11-15%', '16-22%', '23-24%', '25-32%', '33-35%', '36%+', 'Not sure'],
        section: 'Tax Planning',
        questionNumber: 69,
        groupId: 'tax-planning'
      },
      {
        id: 'taxFilingStatus',
        title: "What's your tax filing status?",
        type: 'radio',
        required: true,
        options: ['Single', 'Married filing jointly', 'Married filing separately', 'Head of household'],
        section: 'Tax Planning',
        questionNumber: 70,
        groupId: 'tax-planning'
      },
      {
        id: 'taxDeductions',
        title: "Do you itemize deductions or take the standard deduction?",
        type: 'radio',
        required: true,
        options: ['Itemize', 'Standard deduction', 'Not sure'],
        section: 'Tax Planning',
        questionNumber: 71,
        groupId: 'tax-planning'
      },
      {
        id: 'retirementContributions',
        title: "Do you contribute to tax-advantaged retirement accounts?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Tax Planning',
        questionNumber: 72,
        groupId: 'tax-planning'
      },
      {
        id: 'retirementContributionAmount',
        title: "How much do you contribute annually to retirement accounts?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'retirementContributions',
          values: ['Yes']
        },
        section: 'Tax Planning',
        questionNumber: 73,
        groupId: 'tax-planning'
      },
      {
        id: 'hsaContributions',
        title: "Do you contribute to a Health Savings Account (HSA)?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not eligible'],
        section: 'Tax Planning',
        questionNumber: 74,
        groupId: 'tax-planning'
      },
      {
        id: 'taxLossHarvesting',
        title: "Are you familiar with tax-loss harvesting?",
        type: 'radio',
        required: true,
        options: ['Yes, I use it', 'Yes, but I don\'t use it', 'No, not familiar'],
        section: 'Tax Planning',
        questionNumber: 75,
        groupId: 'tax-planning'
      },
      {
        id: 'estatePlanning',
        title: "Do you have an estate plan (will, trust, etc.)?",
        type: 'radio',
        required: true,
        options: ['Yes, comprehensive plan', 'Yes, basic will only', 'No, but planning to create one', 'No, not a priority'],
        section: 'Tax Planning',
        questionNumber: 76,
        groupId: 'tax-planning'
      }
    ]
  },

  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Detailed retirement planning and expectations',
    questions: [
      {
        id: 'retirementLifestyle',
        title: "What lifestyle do you envision in retirement?",
        type: 'radio',
        required: true,
        options: ['Modest - Basic needs covered', 'Comfortable - Current lifestyle maintained', 'Luxurious - Enhanced lifestyle with travel and hobbies', 'Lavish - Premium lifestyle with no financial constraints'],
        section: 'Retirement Planning',
        questionNumber: 77,
        groupId: 'retirement-planning'
      },
      {
        id: 'retirementLocation',
        title: "Where do you plan to live in retirement?",
        type: 'radio',
        required: true,
        options: ['Same location as now', 'Different city in same country', 'Different country', 'Multiple locations', 'Haven\'t decided'],
        section: 'Retirement Planning',
        questionNumber: 78,
        groupId: 'retirement-planning'
      },
      {
        id: 'retirementActivities',
        title: "What activities do you plan for retirement?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Travel', 'Hobbies', 'Volunteering', 'Part-time work', 'Starting a business', 'Spending time with family', 'Learning new skills', 'Sports and fitness'],
        section: 'Retirement Planning',
        questionNumber: 79,
        groupId: 'retirement-planning'
      },
      {
        id: 'socialSecurityExpectation',
        title: "Do you expect to receive social security or pension benefits?",
        type: 'radio',
        required: true,
        options: ['Yes, full benefits', 'Yes, reduced benefits', 'No', 'Not sure'],
        section: 'Retirement Planning',
        questionNumber: 80,
        groupId: 'retirement-planning'
      },
      {
        id: 'expectedSocialSecurity',
        title: "What monthly amount do you expect from social security/pension?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'socialSecurityExpectation',
          values: ['Yes, full benefits', 'Yes, reduced benefits']
        },
        section: 'Retirement Planning',
        questionNumber: 81,
        groupId: 'retirement-planning'
      },
      {
        id: 'retirementHealthcare',
        title: "How do you plan to handle healthcare costs in retirement?",
        type: 'radio',
        required: true,
        options: ['Government healthcare', 'Employer retiree benefits', 'Private insurance', 'Self-pay', 'Haven\'t planned'],
        section: 'Retirement Planning',
        questionNumber: 82,
        groupId: 'retirement-planning'
      },
      {
        id: 'legacyGoals',
        title: "Do you want to leave an inheritance?",
        type: 'radio',
        required: true,
        options: ['Yes, substantial inheritance', 'Yes, modest inheritance', 'No, spend it all', 'Haven\'t decided'],
        section: 'Retirement Planning',
        questionNumber: 83,
        groupId: 'retirement-planning'
      },
      {
        id: 'inheritanceAmount',
        title: "How much would you like to leave as inheritance?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'legacyGoals',
          values: ['Yes, substantial inheritance', 'Yes, modest inheritance']
        },
        section: 'Retirement Planning',
        questionNumber: 84,
        groupId: 'retirement-planning'
      }
    ]
  },

  {
    id: 'education-planning',
    title: 'Education Planning',
    description: 'Planning for children\'s education expenses',
    conditional: true,
    triggerQuestions: ['hasChildren'],
    questions: [
      {
        id: 'educationImportance',
        title: "How important is funding your children's education?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Not very important', 'Not important'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Education Planning',
        questionNumber: 85,
        groupId: 'education-planning'
      },
      {
        id: 'educationType',
        title: "What type of education do you want to fund?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Public school', 'Private school', 'College/University', 'Graduate school', 'Professional training', 'International education'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Education Planning',
        questionNumber: 86,
        groupId: 'education-planning'
      },
      {
        id: 'educationFundingStrategy',
        title: "How do you plan to fund education expenses?",
        type: 'radio',
        required: true,
        options: ['Save in advance', 'Pay as you go', 'Combination of savings and loans', 'Student loans only', 'Haven\'t decided'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Education Planning',
        questionNumber: 87,
        groupId: 'education-planning'
      },
      {
        id: 'educationSavingsAccount',
        title: "Do you have education savings accounts (529, ESA, etc.)?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Education Planning',
        questionNumber: 88,
        groupId: 'education-planning'
      },
      {
        id: 'currentEducationSavings',
        title: "How much do you currently have saved for education?",
        type: 'number',
        required: false,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'educationSavingsAccount',
            values: ['Yes']
          }
        ],
        section: 'Education Planning',
        questionNumber: 89,
        groupId: 'education-planning'
      },
      {
        id: 'monthlyEducationSavings',
        title: "How much do you save monthly for education?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Education Planning',
        questionNumber: 90,
        groupId: 'education-planning'
      }
    ]
  },

  {
    id: 'major-purchases',
    title: 'Major Purchases',
    description: 'Planning for significant upcoming expenses',
    questions: [
      {
        id: 'plannedMajorPurchases',
        title: "Do you have any major purchases planned in the next 5 years?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Major Purchases',
        questionNumber: 91,
        groupId: 'major-purchases'
      },
      {
        id: 'purchaseTypes',
        title: "What major purchases are you planning?",
        subtitle: "Select all that apply",
        type: 'select',
        required: false,
        options: ['Home purchase', 'Home renovation', 'Vehicle purchase', 'Vacation/Travel', 'Wedding', 'Starting a business', 'Medical expenses', 'Other'],
        conditional: {
          dependsOn: 'plannedMajorPurchases',
          values: ['Yes']
        },
        section: 'Major Purchases',
        questionNumber: 92,
        groupId: 'major-purchases'
      },
      {
        id: 'homePurchaseAmount',
        title: "How much do you plan to spend on a home?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'purchaseTypes',
          values: ['Home purchase']
        },
        section: 'Major Purchases',
        questionNumber: 93,
        groupId: 'major-purchases'
      },
      {
        id: 'homePurchaseTimeframe',
        title: "When do you plan to buy a home?",
        type: 'select',
        required: false,
        options: ['Within 1 year', '1-2 years', '2-3 years', '3-5 years', 'More than 5 years'],
        conditional: {
          dependsOn: 'purchaseTypes',
          values: ['Home purchase']
        },
        section: 'Major Purchases',
        questionNumber: 94,
        groupId: 'major-purchases'
      },
      {
        id: 'vehiclePurchaseAmount',
        title: "How much do you plan to spend on a vehicle?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'purchaseTypes',
          values: ['Vehicle purchase']
        },
        section: 'Major Purchases',
        questionNumber: 95,
        groupId: 'major-purchases'
      },
      {
        id: 'renovationAmount',
        title: "How much do you plan to spend on home renovation?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'purchaseTypes',
          values: ['Home renovation']
        },
        section: 'Major Purchases',
        questionNumber: 96,
        groupId: 'major-purchases'
      },
      {
        id: 'vacationBudget',
        title: "What's your annual vacation/travel budget?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'purchaseTypes',
          values: ['Vacation/Travel']
        },
        section: 'Major Purchases',
        questionNumber: 97,
        groupId: 'major-purchases'
      }
    ]
  },

  {
    id: 'business-planning',
    title: 'Business Planning',
    description: 'Entrepreneurial goals and business planning',
    questions: [
      {
        id: 'businessInterest',
        title: "Are you interested in starting a business?",
        type: 'radio',
        required: true,
        options: ['Yes, actively planning', 'Yes, considering it', 'Maybe in the future', 'No interest'],
        section: 'Business Planning',
        questionNumber: 98,
        groupId: 'business-planning'
      },
      {
        id: 'businessType',
        title: "What type of business are you considering?",
        type: 'select',
        required: false,
        options: ['Technology/Software', 'Consulting', 'Retail/E-commerce', 'Food & Beverage', 'Real Estate', 'Healthcare', 'Education', 'Manufacturing', 'Service Business', 'Other'],
        conditional: {
          dependsOn: 'businessInterest',
          values: ['Yes, actively planning', 'Yes, considering it']
        },
        section: 'Business Planning',
        questionNumber: 99,
        groupId: 'business-planning'
      },
      {
        id: 'businessTimeline',
        title: "When do you plan to start your business?",
        type: 'select',
        required: false,
        options: ['Within 6 months', '6-12 months', '1-2 years', '2-5 years', 'More than 5 years'],
        conditional: {
          dependsOn: 'businessInterest',
          values: ['Yes, actively planning', 'Yes, considering it']
        },
        section: 'Business Planning',
        questionNumber: 100,
        groupId: 'business-planning'
      },
      {
        id: 'startupCapitalNeeded',
        title: "How much startup capital do you estimate you'll need?",
        type: 'number',
        required: false,
        conditional: {
          dependsOn: 'businessInterest',
          values: ['Yes, actively planning', 'Yes, considering it']
        },
        section: 'Business Planning',
        questionNumber: 101,
        groupId: 'business-planning'
      },
      {
        id: 'fundingSource',
        title: "How do you plan to fund your business?",
        type: 'radio',
        required: false,
        options: ['Personal savings', 'Business loan', 'Investors', 'Crowdfunding', 'Combination of sources', 'Haven\'t decided'],
        conditional: {
          dependsOn: 'businessInterest',
          values: ['Yes, actively planning', 'Yes, considering it']
        },
        section: 'Business Planning',
        questionNumber: 102,
        groupId: 'business-planning'
      },
      {
        id: 'businessRiskTolerance',
        title: "How comfortable are you with business risk?",
        type: 'radio',
        required: false,
        options: ['Very comfortable', 'Comfortable', 'Somewhat comfortable', 'Not very comfortable', 'Not comfortable at all'],
        conditional: {
          dependsOn: 'businessInterest',
          values: ['Yes, actively planning', 'Yes, considering it']
        },
        section: 'Business Planning',
        questionNumber: 103,
        groupId: 'business-planning'
      }
    ]
  },

  {
    id: 'financial-knowledge',
    title: 'Financial Knowledge',
    description: 'Assessing your financial literacy and learning preferences',
    questions: [
      {
        id: 'financialLiteracy',
        title: "How would you rate your financial knowledge?",
        type: 'radio',
        required: true,
        options: ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'],
        section: 'Financial Knowledge',
        questionNumber: 104,
        groupId: 'financial-knowledge'
      },
      {
        id: 'investmentKnowledge',
        title: "How familiar are you with different investment options?",
        type: 'radio',
        required: true,
        options: ['Not familiar at all', 'Slightly familiar', 'Moderately familiar', 'Very familiar', 'Expert level'],
        section: 'Financial Knowledge',
        questionNumber: 105,
        groupId: 'financial-knowledge'
      },
      {
        id: 'financialEducationInterest',
        title: "Are you interested in learning more about personal finance?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested'],
        section: 'Financial Knowledge',
        questionNumber: 106,
        groupId: 'financial-knowledge'
      },
      {
        id: 'learningPreference',
        title: "How do you prefer to learn about financial topics?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Reading articles/books', 'Watching videos', 'Attending seminars', 'Online courses', 'Working with advisor', 'Podcasts', 'Mobile apps'],
        section: 'Financial Knowledge',
        questionNumber: 107,
        groupId: 'financial-knowledge'
      },
      {
        id: 'financialTopicsInterest',
        title: "Which financial topics interest you most?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Budgeting', 'Investing', 'Retirement planning', 'Tax strategies', 'Insurance', 'Real estate', 'Business finance', 'Cryptocurrency'],
        section: 'Financial Knowledge',
        questionNumber: 108,
        groupId: 'financial-knowledge'
      },
      {
        id: 'financialMistakes',
        title: "Have you made significant financial mistakes in the past?",
        type: 'radio',
        required: true,
        options: ['Yes, major mistakes', 'Yes, minor mistakes', 'No significant mistakes', 'Prefer not to say'],
        section: 'Financial Knowledge',
        questionNumber: 109,
        groupId: 'financial-knowledge'
      }
    ]
  },

  {
    id: 'financial-advisor',
    title: 'Financial Advisor Relationship',
    description: 'Your experience and preferences for financial advice',
    questions: [
      {
        id: 'hasFinancialAdvisor',
        title: "Do you currently work with a financial advisor?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Financial Advice',
        questionNumber: 110,
        groupId: 'financial-advisor'
      },
      {
        id: 'advisorSatisfaction',
        title: "How satisfied are you with your current financial advisor?",
        type: 'radio',
        required: false,
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'],
        conditional: {
          dependsOn: 'hasFinancialAdvisor',
          values: ['Yes']
        },
        section: 'Financial Advice',
        questionNumber: 111,
        groupId: 'financial-advisor'
      },
      {
        id: 'advisorServices',
        title: "What services does your advisor provide?",
        subtitle: "Select all that apply",
        type: 'select',
        required: false,
        options: ['Investment management', 'Financial planning', 'Tax planning', 'Insurance review', 'Retirement planning', 'Estate planning', 'Business planning'],
        conditional: {
          dependsOn: 'hasFinancialAdvisor',
          values: ['Yes']
        },
        section: 'Financial Advice',
        questionNumber: 112,
        groupId: 'financial-advisor'
      },
      {
        id: 'advisorFees',
        title: "How does your advisor charge fees?",
        type: 'radio',
        required: false,
        options: ['Percentage of assets', 'Hourly rate', 'Fixed fee', 'Commission-based', 'Combination', 'Not sure'],
        conditional: {
          dependsOn: 'hasFinancialAdvisor',
          values: ['Yes']
        },
        section: 'Financial Advice',
        questionNumber: 113,
        groupId: 'financial-advisor'
      },
      {
        id: 'advisorInterest',
        title: "Are you interested in working with a financial advisor?",
        type: 'radio',
        required: false,
        options: ['Very interested', 'Somewhat interested', 'Maybe', 'Not interested'],
        conditional: {
          dependsOn: 'hasFinancialAdvisor',
          values: ['No']
        },
        section: 'Financial Advice',
        questionNumber: 114,
        groupId: 'financial-advisor'
      },
      {
        id: 'advisorPreferences',
        title: "What type of financial advisor would you prefer?",
        type: 'radio',
        required: false,
        options: ['Fee-only fiduciary', 'Commission-based', 'Robo-advisor', 'Hybrid human/digital', 'No preference'],
        conditional: {
          dependsOn: 'advisorInterest',
          values: ['Very interested', 'Somewhat interested', 'Maybe']
        },
        section: 'Financial Advice',
        questionNumber: 115,
        groupId: 'financial-advisor'
      },
      {
        id: 'diyInvesting',
        title: "Do you prefer to manage your own investments?",
        type: 'radio',
        required: true,
        options: ['Yes, completely DIY', 'Mostly DIY with some advice', 'Balanced approach', 'Prefer professional management', 'Completely hands-off'],
        section: 'Financial Advice',
        questionNumber: 116,
        groupId: 'financial-advisor'
      }
    ]
  },

  {
    id: 'technology-preferences',
    title: 'Technology Preferences',
    description: 'Your comfort level and preferences for financial technology',
    questions: [
      {
        id: 'techComfort',
        title: "How comfortable are you with financial technology?",
        type: 'radio',
        required: true,
        options: ['Very comfortable', 'Comfortable', 'Somewhat comfortable', 'Not very comfortable', 'Not comfortable at all'],
        section: 'Technology & Tools',
        questionNumber: 117,
        groupId: 'technology-preferences'
      },
      {
        id: 'financialApps',
        title: "Do you use financial apps or software?",
        type: 'radio',
        required: true,
        options: ['Yes, regularly', 'Yes, occasionally', 'No, but interested', 'No, not interested'],
        section: 'Technology & Tools',
        questionNumber: 118,
        groupId: 'technology-preferences'
      },
      {
        id: 'appTypes',
        title: "What types of financial apps do you use?",
        subtitle: "Select all that apply",
        type: 'select',
        required: false,
        options: ['Budgeting apps', 'Investment apps', 'Banking apps', 'Credit monitoring', 'Tax software', 'Expense tracking', 'Robo-advisors'],
        conditional: {
          dependsOn: 'financialApps',
          values: ['Yes, regularly', 'Yes, occasionally']
        },
        section: 'Technology & Tools',
        questionNumber: 119,
        groupId: 'technology-preferences'
      },
      {
        id: 'roboAdvisorInterest',
        title: "Are you interested in robo-advisor services?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested'],
        section: 'Technology & Tools',
        questionNumber: 120,
        groupId: 'technology-preferences'
      },
      {
        id: 'onlineBanking',
        title: "How often do you use online banking?",
        type: 'radio',
        required: true,
        options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'],
        section: 'Technology & Tools',
        questionNumber: 121,
        groupId: 'technology-preferences'
      },
      {
        id: 'mobileBanking',
        title: "Do you use mobile banking apps?",
        type: 'radio',
        required: true,
        options: ['Yes, frequently', 'Yes, occasionally', 'No, but would consider', 'No, prefer other methods'],
        section: 'Technology & Tools',
        questionNumber: 122,
        groupId: 'technology-preferences'
      },
      {
        id: 'cryptocurrencyInterest',
        title: "Are you interested in cryptocurrency investments?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested at all'],
        section: 'Technology & Tools',
        questionNumber: 123,
        groupId: 'technology-preferences'
      }
    ]
  },

  {
    id: 'spending-habits',
    title: 'Spending Habits',
    description: 'Understanding your spending patterns and behaviors',
    questions: [
      {
        id: 'spendingStyle',
        title: "How would you describe your spending style?",
        type: 'radio',
        required: true,
        options: ['Very frugal', 'Careful spender', 'Moderate spender', 'Liberal spender', 'Big spender'],
        section: 'Spending & Budgeting',
        questionNumber: 124,
        groupId: 'spending-habits'
      },
      {
        id: 'budgetingMethod',
        title: "Do you follow a budget?",
        type: 'radio',
        required: true,
        options: ['Yes, strict budget', 'Yes, loose budget', 'Sometimes', 'No, but want to start', 'No, don\'t believe in budgets'],
        section: 'Spending & Budgeting',
        questionNumber: 125,
        groupId: 'spending-habits'
      },
      {
        id: 'expenseTracking',
        title: "How do you track your expenses?",
        type: 'radio',
        required: true,
        options: ['Detailed tracking with apps/software', 'Basic tracking with spreadsheets', 'Mental tracking only', 'Bank statements review', 'Don\'t track expenses'],
        section: 'Spending & Budgeting',
        questionNumber: 126,
        groupId: 'spending-habits'
      },
      {
        id: 'impulseSpending',
        title: "How often do you make impulse purchases?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
        section: 'Spending & Budgeting',
        questionNumber: 127,
        groupId: 'spending-habits'
      },
      {
        id: 'spendingCategories',
        title: "What do you spend the most money on besides necessities?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Dining out', 'Entertainment', 'Travel', 'Shopping/Clothes', 'Hobbies', 'Technology', 'Fitness/Health', 'Gifts'],
        section: 'Spending & Budgeting',
        questionNumber: 128,
        groupId: 'spending-habits'
      },
      {
        id: 'paymentMethods',
        title: "What's your preferred payment method?",
        type: 'radio',
        required: true,
        options: ['Cash', 'Debit card', 'Credit card (pay in full)', 'Credit card (carry balance)', 'Mobile payments', 'Mix of methods'],
        section: 'Spending & Budgeting',
        questionNumber: 129,
        groupId: 'spending-habits'
      },
      {
        id: 'subscriptionServices',
        title: "How many subscription services do you pay for?",
        subtitle: "Streaming, software, memberships, etc.",
        type: 'select',
        required: true,
        options: ['0', '1-3', '4-6', '7-10', 'More than 10', 'Don\'t know'],
        section: 'Spending & Budgeting',
        questionNumber: 130,
        groupId: 'spending-habits'
      }
    ]
  },

  {
    id: 'debt-management',
    title: 'Debt Management',
    description: 'Your approach to managing and paying off debt',
    questions: [
      {
        id: 'debtComfort',
        title: "How comfortable are you with carrying debt?",
        type: 'radio',
        required: true,
        options: ['Very uncomfortable - avoid all debt', 'Uncomfortable - only necessary debt', 'Neutral - debt is a tool', 'Comfortable - strategic use of debt', 'Very comfortable - leverage for growth'],
        section: 'Debt Management',
        questionNumber: 131,
        groupId: 'debt-management'
      },
      {
        id: 'debtPayoffStrategy',
        title: "What's your debt payoff strategy?",
        type: 'radio',
        required: false,
        options: ['Pay minimums only', 'Debt snowball (smallest first)', 'Debt avalanche (highest interest first)', 'Balanced approach', 'No specific strategy'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Debt Management',
        questionNumber: 132,
        groupId: 'debt-management'
      },
      {
        id: 'creditScore',
        title: "What's your approximate credit score?",
        type: 'select',
        required: true,
        options: ['Below 580 (Poor)', '580-669 (Fair)', '670-739 (Good)', '740-799 (Very Good)', '800+ (Excellent)', 'Don\'t know'],
        section: 'Debt Management',
        questionNumber: 133,
        groupId: 'debt-management'
      },
      {
        id: 'creditMonitoring',
        title: "Do you monitor your credit score regularly?",
        type: 'radio',
        required: true,
        options: ['Yes, monthly', 'Yes, quarterly', 'Yes, annually', 'Rarely', 'Never'],
        section: 'Debt Management',
        questionNumber: 134,
        groupId: 'debt-management'
      },
      {
        id: 'creditUtilization',
        title: "What percentage of your available credit do you typically use?",
        type: 'select',
        required: true,
        options: ['0%', '1-10%', '11-30%', '31-50%', '51-70%', 'More than 70%', 'Don\'t know'],
        section: 'Debt Management',
        questionNumber: 135,
        groupId: 'debt-management'
      },
      {
        id: 'debtConsolidation',
        title: "Have you considered debt consolidation?",
        type: 'radio',
        required: false,
        options: ['Yes, have done it', 'Yes, considering it', 'No, but might consider', 'No, not interested'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Debt Management',
        questionNumber: 136,
        groupId: 'debt-management'
      }
    ]
  },

  {
    id: 'financial-stress',
    title: 'Financial Stress & Emotions',
    description: 'Understanding your emotional relationship with money',
    questions: [
      {
        id: 'financialStress',
        title: "How often do you feel stressed about money?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        section: 'Financial Psychology',
        questionNumber: 137,
        groupId: 'financial-stress'
      },
      {
        id: 'moneyWorries',
        title: "What financial concerns worry you most?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Not having enough for retirement', 'Job loss/income reduction', 'Medical emergencies', 'Market crashes', 'Inflation', 'Children\'s future', 'Debt burden', 'Economic uncertainty'],
        section: 'Financial Psychology',
        questionNumber: 138,
        groupId: 'financial-stress'
      },
      {
        id: 'financialConfidence',
        title: "How confident are you in your financial decisions?",
        type: 'radio',
        required: true,
        options: ['Very confident', 'Confident', 'Somewhat confident', 'Not very confident', 'Not confident at all'],
        section: 'Financial Psychology',
        questionNumber: 139,
        groupId: 'financial-stress'
      },
      {
        id: 'moneyPersonality',
        title: "Which best describes your money personality?",
        type: 'radio',
        required: true,
        options: ['Saver - I love to save money', 'Spender - I enjoy spending money', 'Investor - I focus on growing wealth', 'Avoider - I prefer not to think about money', 'Worrier - I constantly worry about money'],
        section: 'Financial Psychology',
        questionNumber: 140,
        groupId: 'financial-stress'
      },
      {
        id: 'financialGoalConfidence',
        title: "How confident are you about reaching your financial goals?",
        type: 'radio',
        required: true,
        options: ['Very confident', 'Confident', 'Somewhat confident', 'Not very confident', 'Not confident at all'],
        section: 'Financial Psychology',
        questionNumber: 141,
        groupId: 'financial-stress'
      },
      {
        id: 'financialRegrets',
        title: "Do you have major financial regrets?",
        type: 'radio',
        required: true,
        options: ['No regrets', 'Minor regrets', 'Some regrets', 'Major regrets', 'Prefer not to say'],
        section: 'Financial Psychology',
        questionNumber: 142,
        groupId: 'financial-stress'
      }
    ]
  },

  {
    id: 'family-finances',
    title: 'Family Financial Dynamics',
    description: 'How you handle money decisions with family',
    questions: [
      {
        id: 'financialDecisionMaking',
        title: "Who makes financial decisions in your household?",
        type: 'radio',
        required: true,
        options: ['I make all decisions', 'Partner makes all decisions', 'We decide together', 'We split responsibilities', 'Not applicable'],
        section: 'Family Finances',
        questionNumber: 143,
        groupId: 'family-finances'
      },
      {
        id: 'financialCommunication',
        title: "How often do you discuss finances with your partner?",
        type: 'radio',
        required: false,
        options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Rarely', 'Never'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Family Finances',
        questionNumber: 144,
        groupId: 'family-finances'
      },
      {
        id: 'financialAgreement',
        title: "How well do you and your partner agree on financial matters?",
        type: 'radio',
        required: false,
        options: ['Always agree', 'Usually agree', 'Sometimes agree', 'Rarely agree', 'Never agree'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Family Finances',
        questionNumber: 145,
        groupId: 'family-finances'
      },
      {
        id: 'accountStructure',
        title: "How do you structure your accounts with your partner?",
        type: 'radio',
        required: false,
        options: ['All joint accounts', 'Mostly joint with some separate', 'Mix of joint and separate', 'Mostly separate with some joint', 'All separate accounts'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: 'Family Finances',
        questionNumber: 146,
        groupId: 'family-finances'
      },
      {
        id: 'childrenFinancialEducation',
        title: "Do you teach your children about money?",
        type: 'radio',
        required: false,
        options: ['Yes, actively teach them', 'Yes, occasionally discuss it', 'No, they\'re too young', 'No, not a priority', 'No, leave it to schools'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Family Finances',
        questionNumber: 147,
        groupId: 'family-finances'
      },
      {
        id: 'allowanceSystem',
        title: "Do you give your children an allowance?",
        type: 'radio',
        required: false,
        options: ['Yes, tied to chores', 'Yes, not tied to chores', 'No, but considering it', 'No, don\'t believe in allowances', 'Children too young'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Family Finances',
        questionNumber: 148,
        groupId: 'family-finances'
      }
    ]
  },

  {
    id: 'economic-outlook',
    title: 'Economic Outlook',
    description: 'Your views on economic trends and market conditions',
    questions: [
      {
        id: 'economicOptimism',
        title: "How optimistic are you about the economy in the next 5 years?",
        type: 'radio',
        required: true,
        options: ['Very optimistic', 'Optimistic', 'Neutral', 'Pessimistic', 'Very pessimistic'],
        section: 'Economic Views',
        questionNumber: 149,
        groupId: 'economic-outlook'
      },
      {
        id: 'inflationConcern',
        title: "How concerned are you about inflation?",
        type: 'radio',
        required: true,
        options: ['Very concerned', 'Concerned', 'Somewhat concerned', 'Not very concerned', 'Not concerned at all'],
        section: 'Economic Views',
        questionNumber: 150,
        groupId: 'economic-outlook'
      },
      {
        id: 'marketTiming',
        title: "Do you believe in timing the market?",
        type: 'radio',
        required: true,
        options: ['Yes, actively try to time it', 'Yes, but only for major events', 'No, but watch for opportunities', 'No, time in market beats timing', 'No opinion'],
        section: 'Economic Views',
        questionNumber: 151,
        groupId: 'economic-outlook'
      },
      {
        id: 'recessionPreparation',
        title: "How are you preparing for potential economic downturns?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Building larger emergency fund', 'Reducing debt', 'Diversifying investments', 'Increasing cash holdings', 'Developing additional income streams', 'Not preparing specifically'],
        section: 'Economic Views',
        questionNumber: 152,
        groupId: 'economic-outlook'
      },
      {
        id: 'globalEconomyImpact',
        title: "How much do global economic events affect your financial decisions?",
        type: 'radio',
        required: true,
        options: ['Significantly', 'Moderately', 'Somewhat', 'Very little', 'Not at all'],
        section: 'Economic Views',
        questionNumber: 153,
        groupId: 'economic-outlook'
      }
    ]
  },

  {
    id: 'lifestyle-preferences',
    title: 'Lifestyle Preferences',
    description: 'How your lifestyle affects your financial planning',
    questions: [
      {
        id: 'workLifeBalance',
        title: "How important is work-life balance to you?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Lifestyle & Values',
        questionNumber: 154,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'careerAmbition',
        title: "How would you describe your career ambitions?",
        type: 'radio',
        required: true,
        options: ['Very ambitious - want to reach the top', 'Ambitious - want significant advancement', 'Moderate - steady progression', 'Content - happy with current level', 'Focused elsewhere - career not priority'],
        section: 'Lifestyle & Values',
        questionNumber: 155,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'travelImportance',
        title: "How important is travel to you?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Lifestyle & Values',
        questionNumber: 156,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'materialPossessions',
        title: "How important are material possessions to you?",
        type: 'radio',
        required: true,
        options: ['Very important', 'Important', 'Moderately important', 'Not very important', 'Not important at all'],
        section: 'Lifestyle & Values',
        questionNumber: 157,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'socialStatus',
        title: "How important is social status to you?",
        type: 'radio',
        required: true,
        options: ['Very important', 'Important', 'Moderately important', 'Not very important', 'Not important at all'],
        section: 'Lifestyle & Values',
        questionNumber: 158,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'environmentalValues',
        title: "How important are environmental considerations in your financial decisions?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Lifestyle & Values',
        questionNumber: 159,
        groupId: 'lifestyle-preferences'
      },
      {
        id: 'charitableGiving',
        title: "Do you regularly give to charity?",
        type: 'radio',
        required: true,
        options: ['Yes, significant amounts', 'Yes, moderate amounts', 'Yes, small amounts', 'Occasionally', 'No'],
        section: 'Lifestyle & Values',
        questionNumber: 160,
        groupId: 'lifestyle-preferences'
      }
    ]
  },

  {
    id: 'health-wellness',
    title: 'Health & Wellness Planning',
    description: 'Planning for health-related expenses and wellness goals',
    questions: [
      {
        id: 'healthStatus',
        title: "How would you rate your current health?",
        type: 'radio',
        required: true,
        options: ['Excellent', 'Very good', 'Good', 'Fair', 'Poor'],
        section: 'Health & Wellness',
        questionNumber: 161,
        groupId: 'health-wellness'
      },
      {
        id: 'healthcareExpenses',
        title: "Do you expect significant healthcare expenses in the future?",
        type: 'radio',
        required: true,
        options: ['Yes, definitely', 'Yes, possibly', 'Uncertain', 'Probably not', 'No'],
        section: 'Health & Wellness',
        questionNumber: 162,
        groupId: 'health-wellness'
      },
      {
        id: 'longTermCareInsurance',
        title: "Do you have long-term care insurance?",
        type: 'radio',
        required: true,
        options: ['Yes', 'No, but considering it', 'No, not interested', 'Not sure what it is'],
        section: 'Health & Wellness',
        questionNumber: 163,
        groupId: 'health-wellness'
      },
      {
        id: 'hsaUsage',
        title: "If you have an HSA, how do you use it?",
        type: 'radio',
        required: false,
        options: ['Pay current expenses', 'Save for future expenses', 'Invest for long-term growth', 'Combination approach'],
        conditional: {
          dependsOn: 'hsaContributions',
          values: ['Yes']
        },
        section: 'Health & Wellness',
        questionNumber: 164,
        groupId: 'health-wellness'
      },
      {
        id: 'wellnessSpending',
        title: "How much do you spend monthly on wellness activities?",
        subtitle: "Gym, fitness, mental health, preventive care",
        type: 'number',
        required: true,
        section: 'Health & Wellness',
        questionNumber: 165,
        groupId: 'health-wellness'
      },
      {
        id: 'familyHealthHistory',
        title: "Do you have family history of expensive medical conditions?",
        type: 'radio',
        required: true,
        options: ['Yes, significant history', 'Yes, some history', 'No significant history', 'Don\'t know', 'Prefer not to say'],
        section: 'Health & Wellness',
        questionNumber: 166,
        groupId: 'health-wellness'
      }
    ]
  },

  {
    id: 'career-development',
    title: 'Career Development',
    description: 'Your career plans and their financial implications',
    questions: [
      {
        id: 'careerSatisfaction',
        title: "How satisfied are you with your current career?",
        type: 'radio',
        required: true,
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'],
        section: 'Career & Income',
        questionNumber: 167,
        groupId: 'career-development'
      },
      {
        id: 'careerChange',
        title: "Are you considering a career change?",
        type: 'radio',
        required: true,
        options: ['Yes, actively planning', 'Yes, considering it', 'Maybe in the future', 'No, happy with current career'],
        section: 'Career & Income',
        questionNumber: 168,
        groupId: 'career-development'
      },
      {
        id: 'incomeGrowthExpectation',
        title: "What do you expect for your income growth over the next 5 years?",
        type: 'radio',
        required: true,
        options: ['Significant increase (>50%)', 'Moderate increase (20-50%)', 'Modest increase (5-20%)', 'Stay about the same', 'Might decrease'],
        section: 'Career & Income',
        questionNumber: 169,
        groupId: 'career-development'
      },
      {
        id: 'skillDevelopment',
        title: "Do you invest in professional development?",
        type: 'radio',
        required: true,
        options: ['Yes, significantly', 'Yes, moderately', 'Yes, minimally', 'No, but want to', 'No, not necessary'],
        section: 'Career & Income',
        questionNumber: 170,
        groupId: 'career-development'
      },
      {
        id: 'jobSecurity',
        title: "How secure do you feel in your current job?",
        type: 'radio',
        required: true,
        options: ['Very secure', 'Secure', 'Somewhat secure', 'Not very secure', 'Very insecure'],
        section: 'Career & Income',
        questionNumber: 171,
        groupId: 'career-development'
      },
      {
        id: 'sideIncome',
        title: "Do you have sources of income besides your main job?",
        type: 'radio',
        required: true,
        options: ['Yes, significant side income', 'Yes, modest side income', 'No, but want to develop some', 'No, not interested'],
        section: 'Career & Income',
        questionNumber: 172,
        groupId: 'career-development'
      },
      {
        id: 'retirementFromWork',
        title: "Do you plan to work in retirement?",
        type: 'radio',
        required: true,
        options: ['Yes, full-time', 'Yes, part-time', 'Yes, consulting/freelance', 'Maybe, if needed', 'No, complete retirement'],
        section: 'Career & Income',
        questionNumber: 173,
        groupId: 'career-development'
      }
    ]
  },

  {
    id: 'real-estate-planning',
    title: 'Real Estate Planning',
    description: 'Your real estate investment and housing plans',
    questions: [
      {
        id: 'realEstateInterest',
        title: "Are you interested in real estate investing?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested at all'],
        section: 'Real Estate',
        questionNumber: 174,
        groupId: 'real-estate-planning'
      },
      {
        id: 'realEstateExperience',
        title: "What's your experience with real estate investing?",
        type: 'radio',
        required: true,
        options: ['Extensive experience', 'Some experience', 'Limited experience', 'No experience but interested', 'No experience or interest'],
        section: 'Real Estate',
        questionNumber: 175,
        groupId: 'real-estate-planning'
      },
      {
        id: 'propertyTypes',
        title: "What types of real estate interest you?",
        subtitle: "Select all that apply",
        type: 'select',
        required: false,
        options: ['Residential rental', 'Commercial property', 'REITs', 'Vacation rentals', 'Fix and flip', 'Raw land', 'International property'],
        conditional: {
          dependsOn: 'realEstateInterest',
          values: ['Very interested', 'Somewhat interested']
        },
        section: 'Real Estate',
        questionNumber: 176,
        groupId: 'real-estate-planning'
      },
      {
        id: 'housingPlans',
        title: "What are your housing plans for the next 10 years?",
        type: 'radio',
        required: true,
        options: ['Stay in current home', 'Upgrade to larger home', 'Downsize to smaller home', 'Move to different area', 'Buy vacation home', 'Haven\'t decided'],
        section: 'Real Estate',
        questionNumber: 177,
        groupId: 'real-estate-planning'
      },
      {
        id: 'mortgageStrategy',
        title: "What's your mortgage payoff strategy?",
        type: 'radio',
        required: false,
        options: ['Pay off as quickly as possible', 'Make extra payments when possible', 'Pay minimum and invest difference', 'Refinance for better terms', 'No specific strategy'],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Real Estate',
        questionNumber: 178,
        groupId: 'real-estate-planning'
      },
      {
        id: 'homeEquityUsage',
        title: "How do you view your home equity?",
        type: 'radio',
        required: false,
        options: ['Emergency fund access', 'Investment opportunity', 'Retirement asset', 'Legacy for children', 'Just a place to live'],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Real Estate',
        questionNumber: 179,
        groupId: 'real-estate-planning'
      }
    ]
  },

  {
    id: 'alternative-investments',
    title: 'Alternative Investments',
    description: 'Your interest in non-traditional investment options',
    questions: [
      {
        id: 'alternativeInterest',
        title: "Are you interested in alternative investments?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested at all'],
        section: 'Alternative Investments',
        questionNumber: 180,
        groupId: 'alternative-investments'
      },
      {
        id: 'alternativeTypes',
        title: "Which alternative investments interest you?",
        subtitle: "Select all that apply",
        type: 'select',
        required: false,
        options: ['Cryptocurrency', 'Precious metals', 'Art and collectibles', 'Private equity', 'Hedge funds', 'Commodities', 'Peer-to-peer lending', 'Angel investing'],
        conditional: {
          dependsOn: 'alternativeInterest',
          values: ['Very interested', 'Somewhat interested']
        },
        section: 'Alternative Investments',
        questionNumber: 181,
        groupId: 'alternative-investments'
      },
      {
        id: 'cryptoExperience',
        title: "What's your experience with cryptocurrency?",
        type: 'radio',
        required: true,
        options: ['Active trader', 'Long-term holder', 'Occasional buyer', 'No experience but interested', 'No experience or interest'],
        section: 'Alternative Investments',
        questionNumber: 182,
        groupId: 'alternative-investments'
      },
      {
        id: 'cryptoAllocation',
        title: "What percentage of your portfolio would you allocate to cryptocurrency?",
        type: 'select',
        required: false,
        options: ['0%', '1-5%', '6-10%', '11-20%', '21-30%', 'More than 30%'],
        conditional: {
          dependsOn: 'cryptocurrencyInterest',
          values: ['Very interested', 'Somewhat interested']
        },
        section: 'Alternative Investments',
        questionNumber: 183,
        groupId: 'alternative-investments'
      },
      {
        id: 'collectiblesInterest',
        title: "Do you invest in collectibles or art?",
        type: 'radio',
        required: true,
        options: ['Yes, actively collect', 'Yes, occasionally buy', 'No, but interested', 'No, not interested'],
        section: 'Alternative Investments',
        questionNumber: 184,
        groupId: 'alternative-investments'
      },
      {
        id: 'privateInvestments',
        title: "Are you interested in private investments (private equity, angel investing)?",
        type: 'radio',
        required: true,
        options: ['Very interested', 'Somewhat interested', 'Neutral', 'Not very interested', 'Not interested'],
        section: 'Alternative Investments',
        questionNumber: 185,
        groupId: 'alternative-investments'
      }
    ]
  },

  {
    id: 'financial-milestones',
    title: 'Financial Milestones',
    description: 'Tracking your progress toward financial independence',
    questions: [
      {
        id: 'netWorthGoal',
        title: "What's your target net worth for financial independence?",
        type: 'number',
        required: true,
        section: 'Financial Milestones',
        questionNumber: 186,
        groupId: 'financial-milestones'
      },
      {
        id: 'fireInterest',
        title: "Are you familiar with the FIRE movement (Financial Independence, Retire Early)?",
        type: 'radio',
        required: true,
        options: ['Yes, actively pursuing FIRE', 'Yes, interested but not pursuing', 'Yes, but not interested', 'No, not familiar'],
        section: 'Financial Milestones',
        questionNumber: 187,
        groupId: 'financial-milestones'
      },
      {
        id: 'financialIndependenceAge',
        title: "At what age do you want to achieve financial independence?",
        type: 'select',
        required: true,
        options: ['30-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', 'After 70'],
        section: 'Financial Milestones',
        questionNumber: 188,
        groupId: 'financial-milestones'
      },
      {
        id: 'passiveIncomeGoal',
        title: "What monthly passive income do you want to achieve?",
        type: 'number',
        required: true,
        section: 'Financial Milestones',
        questionNumber: 189,
        groupId: 'financial-milestones'
      },
      {
        id: 'wealthBuildingStrategy',
        title: "What's your primary wealth-building strategy?",
        type: 'radio',
        required: true,
        options: ['High savings rate + index investing', 'Real estate investing', 'Business ownership', 'Stock picking/active investing', 'Combination approach', 'Haven\'t decided'],
        section: 'Financial Milestones',
        questionNumber: 190,
        groupId: 'financial-milestones'
      },
      {
        id: 'financialMilestones',
        title: "Which financial milestones have you achieved?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Emergency fund (3+ months)', 'Positive net worth', 'Six-figure net worth', 'Debt-free except mortgage', 'Completely debt-free', 'Six-figure income', 'None of these yet'],
        section: 'Financial Milestones',
        questionNumber: 191,
        groupId: 'financial-milestones'
      }
    ]
  },

  {
    id: 'behavioral-finance',
    title: 'Behavioral Finance',
    description: 'Understanding your financial behavior patterns',
    questions: [
      {
        id: 'investmentMistakes',
        title: "What investment mistakes have you made?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Panic selling during market drops', 'Buying high, selling low', 'Not diversifying enough', 'Trying to time the market', 'Following hot tips', 'Emotional decision making', 'None of these', 'Prefer not to say'],
        section: 'Behavioral Finance',
        questionNumber: 192,
        groupId: 'behavioral-finance'
      },
      {
        id: 'lossAversion',
        title: "How do you typically react to investment losses?",
        type: 'radio',
        required: true,
        options: ['Sell immediately to prevent further losses', 'Hold and hope for recovery', 'Buy more at lower prices', 'Stick to my plan regardless', 'Seek advice before acting'],
        section: 'Behavioral Finance',
        questionNumber: 193,
        groupId: 'behavioral-finance'
      },
      {
        id: 'investmentResearch',
        title: "How much research do you do before making investments?",
        type: 'radio',
        required: true,
        options: ['Extensive research', 'Moderate research', 'Basic research', 'Minimal research', 'No research - follow advice'],
        section: 'Behavioral Finance',
        questionNumber: 194,
        groupId: 'behavioral-finance'
      },
      {
        id: 'herdMentality',
        title: "How influenced are you by what others are investing in?",
        type: 'radio',
        required: true,
        options: ['Very influenced', 'Somewhat influenced', 'Neutral', 'Not very influenced', 'Not influenced at all'],
        section: 'Behavioral Finance',
        questionNumber: 195,
        groupId: 'behavioral-finance'
      },
      {
        id: 'overconfidence',
        title: "How confident are you in your ability to pick winning investments?",
        type: 'radio',
        required: true,
        options: ['Very confident', 'Confident', 'Somewhat confident', 'Not very confident', 'Not confident at all'],
        section: 'Behavioral Finance',
        questionNumber: 196,
        groupId: 'behavioral-finance'
      },
      {
        id: 'anchoringBias',
        title: "Do you tend to focus on the price you paid for an investment when deciding to sell?",
        type: 'radio',
        required: true,
        options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'],
        section: 'Behavioral Finance',
        questionNumber: 197,
        groupId: 'behavioral-finance'
      }
    ]
  },

  {
    id: 'financial-communication',
    title: 'Financial Communication',
    description: 'How you discuss and share financial information',
    questions: [
      {
        id: 'financialPrivacy',
        title: "How private are you about your financial situation?",
        type: 'radio',
        required: true,
        options: ['Very private - don\'t discuss with anyone', 'Private - only discuss with close family', 'Somewhat private - discuss with trusted friends', 'Open - comfortable discussing finances', 'Very open - share details freely'],
        section: 'Financial Communication',
        questionNumber: 198,
        groupId: 'financial-communication'
      },
      {
        id: 'financialAdviceSource',
        title: "Who do you turn to for financial advice?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Professional financial advisor', 'Family members', 'Friends', 'Online resources', 'Books/Publications', 'Social media', 'No one - figure it out myself'],
        section: 'Financial Communication',
        questionNumber: 199,
        groupId: 'financial-communication'
      },
      {
        id: 'financialInfluencers',
        title: "Do you follow financial influencers or content creators?",
        type: 'radio',
        required: true,
        options: ['Yes, regularly', 'Yes, occasionally', 'No, but interested', 'No, not interested'],
        section: 'Financial Communication',
        questionNumber: 200,
        groupId: 'financial-communication'
      },
      {
        id: 'financialEducationSource',
        title: "Where do you get most of your financial education?",
        type: 'radio',
        required: true,
        options: ['Professional advisors', 'Books and publications', 'Online articles and blogs', 'YouTube and podcasts', 'Social media', 'Friends and family', 'Trial and error'],
        section: 'Financial Communication',
        questionNumber: 201,
        groupId: 'financial-communication'
      },
      {
        id: 'financialTransparency',
        title: "How transparent are you with your partner about finances?",
        type: 'radio',
        required: false,
        options: ['Completely transparent', 'Mostly transparent', 'Somewhat transparent', 'Not very transparent', 'Keep finances separate'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Financial Communication',
        questionNumber: 202,
        groupId: 'financial-communication'
      }
    ]
  },

  {
    id: 'financial-tools-preferences',
    title: 'Financial Tools & Preferences',
    description: 'Your preferences for managing and tracking finances',
    questions: [
      {
        id: 'portfolioTracking',
        title: "How do you track your investment portfolio?",
        type: 'radio',
        required: true,
        options: ['Professional software/platform', 'Spreadsheets', 'Mobile apps', 'Broker websites only', 'Don\'t track regularly'],
        section: 'Financial Tools',
        questionNumber: 203,
        groupId: 'financial-tools-preferences'
      },
      {
        id: 'budgetingTools',
        title: "What tools do you use for budgeting?",
        type: 'radio',
        required: true,
        options: ['Budgeting apps', 'Spreadsheets', 'Pen and paper', 'Mental budgeting', 'Don\'t budget'],
        section: 'Financial Tools',
        questionNumber: 204,
        groupId: 'financial-tools-preferences'
      },
      {
        id: 'automationPreference',
        title: "How much do you automate your finances?",
        type: 'radio',
        required: true,
        options: ['Highly automated - most transactions automatic', 'Moderately automated - some key transactions', 'Minimally automated - prefer manual control', 'Not automated - handle everything manually'],
        section: 'Financial Tools',
        questionNumber: 205,
        groupId: 'financial-tools-preferences'
      },
      {
        id: 'financialReporting',
        title: "How often do you review your overall financial situation?",
        type: 'radio',
        required: true,
        options: ['Weekly', 'Monthly', 'Quarterly', 'Annually', 'Rarely'],
        section: 'Financial Tools',
        questionNumber: 206,
        groupId: 'financial-tools-preferences'
      },
      {
        id: 'alertPreferences',
        title: "What financial alerts do you want to receive?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Account balance changes', 'Large transactions', 'Bill due dates', 'Investment performance', 'Budget overspending', 'Market news', 'None'],
        section: 'Financial Tools',
        questionNumber: 207,
        groupId: 'financial-tools-preferences'
      }
    ]
  },

  {
    id: 'legacy-planning',
    title: 'Legacy & Estate Planning',
    description: 'Planning for wealth transfer and legacy goals',
    questions: [
      {
        id: 'estateDocuments',
        title: "Which estate planning documents do you have?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Will', 'Trust', 'Power of attorney', 'Healthcare directive', 'Beneficiary designations updated', 'None of these'],
        section: 'Legacy Planning',
        questionNumber: 208,
        groupId: 'legacy-planning'
      },
      {
        id: 'estatePlanningPriority',
        title: "How important is estate planning to you?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Legacy Planning',
        questionNumber: 209,
        groupId: 'legacy-planning'
      },
      {
        id: 'charitableLegacy',
        title: "Do you plan to leave money to charity?",
        type: 'radio',
        required: true,
        options: ['Yes, significant amount', 'Yes, modest amount', 'Maybe', 'Probably not', 'No'],
        section: 'Legacy Planning',
        questionNumber: 210,
        groupId: 'legacy-planning'
      },
      {
        id: 'familyLegacy',
        title: "What type of legacy do you want to leave your family?",
        type: 'radio',
        required: true,
        options: ['Financial wealth', 'Financial education and values', 'Business or property', 'Experiences and memories', 'All of the above', 'Not applicable'],
        section: 'Legacy Planning',
        questionNumber: 211,
        groupId: 'legacy-planning'
      },
      {
        id: 'trustInterest',
        title: "Are you interested in setting up trusts?",
        type: 'radio',
        required: true,
        options: ['Yes, already have trusts', 'Yes, planning to set up', 'Maybe, need more information', 'No, not necessary', 'No, too complicated'],
        section: 'Legacy Planning',
        questionNumber: 212,
        groupId: 'legacy-planning'
      },
      {
        id: 'generationalWealth',
        title: "Do you want to build generational wealth?",
        type: 'radio',
        required: true,
        options: ['Yes, top priority', 'Yes, important goal', 'Maybe, if possible', 'No, not a goal', 'Haven\'t thought about it'],
        section: 'Legacy Planning',
        questionNumber: 213,
        groupId: 'legacy-planning'
      }
    ]
  },

  {
    id: 'financial-flexibility',
    title: 'Financial Flexibility & Contingencies',
    description: 'Planning for unexpected events and maintaining flexibility',
    questions: [
      {
        id: 'incomeVolatility',
        title: "How volatile is your income?",
        type: 'radio',
        required: true,
        options: ['Very stable - same amount monthly', 'Mostly stable - minor variations', 'Somewhat variable - seasonal changes', 'Quite variable - significant fluctuations', 'Very volatile - unpredictable'],
        section: 'Financial Flexibility',
        questionNumber: 214,
        groupId: 'financial-flexibility'
      },
      {
        id: 'contingencyPlanning',
        title: "Do you have contingency plans for major life changes?",
        type: 'radio',
        required: true,
        options: ['Yes, detailed plans', 'Yes, basic plans', 'Some planning', 'Minimal planning', 'No specific plans'],
        section: 'Financial Flexibility',
        questionNumber: 215,
        groupId: 'financial-flexibility'
      },
      {
        id: 'liquidityPreference',
        title: "How important is it to have liquid assets available?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Financial Flexibility',
        questionNumber: 216,
        groupId: 'financial-flexibility'
      },
      {
        id: 'financialStressors',
        title: "What financial scenarios worry you most?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Job loss', 'Market crash', 'Health emergency', 'Family emergency', 'Economic recession', 'Inflation', 'Interest rate changes', 'None of these'],
        section: 'Financial Flexibility',
        questionNumber: 217,
        groupId: 'financial-flexibility'
      },
      {
        id: 'adaptabilityRating',
        title: "How adaptable are you to changing financial circumstances?",
        type: 'radio',
        required: true,
        options: ['Very adaptable', 'Adaptable', 'Somewhat adaptable', 'Not very adaptable', 'Prefer stability'],
        section: 'Financial Flexibility',
        questionNumber: 218,
        groupId: 'financial-flexibility'
      }
    ]
  },

  {
    id: 'investment-timeline',
    title: 'Investment Timeline & Liquidity',
    description: 'Understanding when you need access to your investments',
    questions: [
      {
        id: 'shortTermGoals',
        title: "Do you have financial goals within the next 2 years?",
        type: 'radio',
        required: true,
        options: ['Yes, major goals', 'Yes, minor goals', 'Maybe', 'No specific goals'],
        section: 'Investment Timeline',
        questionNumber: 219,
        groupId: 'investment-timeline'
      },
      {
        id: 'mediumTermGoals',
        title: "Do you have financial goals in the 2-10 year timeframe?",
        type: 'radio',
        required: true,
        options: ['Yes, major goals', 'Yes, minor goals', 'Maybe', 'No specific goals'],
        section: 'Investment Timeline',
        questionNumber: 220,
        groupId: 'investment-timeline'
      },
      {
        id: 'liquidityNeeds',
        title: "How much of your investments need to be easily accessible?",
        type: 'select',
        required: true,
        options: ['Less than 10%', '10-25%', '26-50%', '51-75%', 'More than 75%'],
        section: 'Investment Timeline',
        questionNumber: 221,
        groupId: 'investment-timeline'
      },
      {
        id: 'lockUpTolerance',
        title: "Are you comfortable with investments that lock up your money?",
        type: 'radio',
        required: true,
        options: ['Yes, for higher returns', 'Yes, for some portion', 'Maybe, depends on terms', 'No, prefer liquidity', 'Absolutely not'],
        section: 'Investment Timeline',
        questionNumber: 222,
        groupId: 'investment-timeline'
      },
      {
        id: 'investmentRebalancing',
        title: "How do you prefer to rebalance your portfolio?",
        type: 'radio',
        required: true,
        options: ['Automatic rebalancing', 'Scheduled rebalancing', 'Threshold-based rebalancing', 'Manual when needed', 'Don\'t rebalance'],
        section: 'Investment Timeline',
        questionNumber: 223,
        groupId: 'investment-timeline'
      }
    ]
  },

  {
    id: 'financial-priorities',
    title: 'Financial Priorities & Trade-offs',
    description: 'Understanding what matters most in your financial decisions',
    questions: [
      {
        id: 'priorityRanking',
        title: "Rank your top financial priority:",
        type: 'radio',
        required: true,
        options: ['Building wealth', 'Financial security', 'Current lifestyle', 'Family\'s future', 'Early retirement', 'Leaving a legacy'],
        section: 'Financial Priorities',
        questionNumber: 224,
        groupId: 'financial-priorities'
      },
      {
        id: 'riskVsReturn',
        title: "In the trade-off between risk and return, you prefer:",
        type: 'radio',
        required: true,
        options: ['Higher risk for higher returns', 'Moderate risk for moderate returns', 'Lower risk even if returns are lower', 'Guaranteed returns even if minimal', 'Depends on the situation'],
        section: 'Financial Priorities',
        questionNumber: 225,
        groupId: 'financial-priorities'
      },
      {
        id: 'liquidityVsReturn',
        title: "In the trade-off between liquidity and returns, you prefer:",
        type: 'radio',
        required: true,
        options: ['Higher returns even if less liquid', 'Balanced approach', 'Liquidity even if returns are lower', 'Maximum liquidity regardless of returns'],
        section: 'Financial Priorities',
        questionNumber: 226,
        groupId: 'financial-priorities'
      },
      {
        id: 'presentVsFuture',
        title: "Do you prefer to optimize for present enjoyment or future security?",
        type: 'radio',
        required: true,
        options: ['Strongly favor present', 'Somewhat favor present', 'Balanced approach', 'Somewhat favor future', 'Strongly favor future'],
        section: 'Financial Priorities',
        questionNumber: 227,
        groupId: 'financial-priorities'
      },
      {
        id: 'simplicityVsOptimization',
        title: "Do you prefer simple or optimized financial strategies?",
        type: 'radio',
        required: true,
        options: ['Simple, even if not optimal', 'Mostly simple with some complexity', 'Balanced approach', 'Somewhat complex for optimization', 'Complex for maximum optimization'],
        section: 'Financial Priorities',
        questionNumber: 228,
        groupId: 'financial-priorities'
      }
    ]
  },

  {
    id: 'market-outlook',
    title: 'Market Outlook & Timing',
    description: 'Your views on market conditions and investment timing',
    questions: [
      {
        id: 'marketOptimism',
        title: "How optimistic are you about stock market performance over the next 5 years?",
        type: 'radio',
        required: true,
        options: ['Very optimistic', 'Optimistic', 'Neutral', 'Pessimistic', 'Very pessimistic'],
        section: 'Market Outlook',
        questionNumber: 229,
        groupId: 'market-outlook'
      },
      {
        id: 'marketTimingBelief',
        title: "Do you believe it's possible to consistently time the market?",
        type: 'radio',
        required: true,
        options: ['Yes, with skill and research', 'Yes, but very difficult', 'Maybe, for major events', 'No, but worth trying occasionally', 'No, impossible to do consistently'],
        section: 'Market Outlook',
        questionNumber: 230,
        groupId: 'market-outlook'
      },
      {
        id: 'currentMarketView',
        title: "How do you view current market valuations?",
        type: 'radio',
        required: true,
        options: ['Significantly overvalued', 'Somewhat overvalued', 'Fairly valued', 'Somewhat undervalued', 'Significantly undervalued', 'Don\'t have an opinion'],
        section: 'Market Outlook',
        questionNumber: 231,
        groupId: 'market-outlook'
      },
      {
        id: 'investmentTiming',
        title: "When do you prefer to invest new money?",
        type: 'radio',
        required: true,
        options: ['Immediately when available', 'Dollar-cost average over time', 'Wait for market dips', 'Time based on market conditions', 'No consistent approach'],
        section: 'Market Outlook',
        questionNumber: 232,
        groupId: 'market-outlook'
      },
      {
        id: 'sectorRotation',
        title: "Do you adjust your investments based on economic cycles?",
        type: 'radio',
        required: true,
        options: ['Yes, actively rotate sectors', 'Yes, make minor adjustments', 'Sometimes, for major changes', 'No, maintain consistent allocation', 'No, don\'t believe in timing'],
        section: 'Market Outlook',
        questionNumber: 233,
        groupId: 'market-outlook'
      }
    ]
  },

  {
    id: 'financial-education-goals',
    title: 'Financial Education Goals',
    description: 'Areas where you want to improve your financial knowledge',
    questions: [
      {
        id: 'knowledgeGaps',
        title: "Which areas do you want to learn more about?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Investment strategies', 'Tax optimization', 'Retirement planning', 'Estate planning', 'Real estate investing', 'Business finance', 'Insurance planning', 'Behavioral finance'],
        section: 'Financial Education',
        questionNumber: 234,
        groupId: 'financial-education-goals'
      },
      {
        id: 'learningCommitment',
        title: "How much time can you commit to financial education monthly?",
        type: 'select',
        required: true,
        options: ['Less than 1 hour', '1-3 hours', '4-6 hours', '7-10 hours', 'More than 10 hours'],
        section: 'Financial Education',
        questionNumber: 235,
        groupId: 'financial-education-goals'
      },
      {
        id: 'educationFormat',
        title: "What format do you prefer for financial education?",
        type: 'radio',
        required: true,
        options: ['Self-paced online courses', 'Live webinars/seminars', 'One-on-one coaching', 'Books and articles', 'Interactive tools and calculators', 'Video content'],
        section: 'Financial Education',
        questionNumber: 236,
        groupId: 'financial-education-goals'
      },
      {
        id: 'certificationInterest',
        title: "Are you interested in pursuing financial certifications?",
        type: 'radio',
        required: true,
        options: ['Yes, very interested', 'Yes, somewhat interested', 'Maybe in the future', 'No, not interested'],
        section: 'Financial Education',
        questionNumber: 237,
        groupId: 'financial-education-goals'
      },
      {
        id: 'teachingOthers',
        title: "Do you want to teach others about personal finance?",
        type: 'radio',
        required: true,
        options: ['Yes, actively teach now', 'Yes, want to start teaching', 'Maybe in the future', 'No, prefer to keep knowledge private'],
        section: 'Financial Education',
        questionNumber: 238,
        groupId: 'financial-education-goals'
      }
    ]
  },

  {
    id: 'life-transitions',
    title: 'Life Transitions & Changes',
    description: 'Planning for major life events and transitions',
    questions: [
      {
        id: 'upcomingTransitions',
        title: "Do you anticipate any major life transitions in the next 5 years?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Marriage', 'Divorce', 'Having children', 'Job change', 'Career change', 'Relocation', 'Retirement', 'Starting a business', 'None anticipated'],
        section: 'Life Transitions',
        questionNumber: 239,
        groupId: 'life-transitions'
      },
      {
        id: 'transitionPlanning',
        title: "How do you typically plan for major life changes?",
        type: 'radio',
        required: true,
        options: ['Detailed advance planning', 'Basic planning', 'Minimal planning', 'Deal with it when it happens', 'Avoid thinking about it'],
        section: 'Life Transitions',
        questionNumber: 240,
        groupId: 'life-transitions'
      },
      {
        id: 'parentingCosts',
        title: "Have you planned for the costs of raising children?",
        type: 'radio',
        required: false,
        options: ['Yes, detailed planning', 'Yes, basic planning', 'Somewhat planned', 'No, but should', 'No, will figure it out'],
        conditional: {
          dependsOn: 'upcomingTransitions',
          values: ['Having children']
        },
        section: 'Life Transitions',
        questionNumber: 241,
        groupId: 'life-transitions'
      },
      {
        id: 'careerChangeFinancing',
        title: "How would you finance a career change?",
        type: 'radio',
        required: false,
        options: ['Savings', 'Reduced lifestyle', 'Partner\'s income', 'Loans/debt', 'Haven\'t planned'],
        conditional: {
          dependsOn: 'upcomingTransitions',
          values: ['Career change']
        },
        section: 'Life Transitions',
        questionNumber: 242,
        groupId: 'life-transitions'
      },
      {
        id: 'relocationCosts',
        title: "Have you budgeted for relocation costs?",
        type: 'radio',
        required: false,
        options: ['Yes, fully budgeted', 'Yes, estimated costs', 'Somewhat planned', 'No, but should', 'No, will figure it out'],
        conditional: {
          dependsOn: 'upcomingTransitions',
          values: ['Relocation']
        },
        section: 'Life Transitions',
        questionNumber: 243,
        groupId: 'life-transitions'
      }
    ]
  },

  {
    id: 'financial-values',
    title: 'Financial Values & Philosophy',
    description: 'Your core beliefs about money and wealth',
    questions: [
      {
        id: 'moneyMeaning',
        title: "What does money mean to you?",
        type: 'radio',
        required: true,
        options: ['Freedom and independence', 'Security and stability', 'Power and status', 'Tool for experiences', 'Means to help others', 'Necessary evil'],
        section: 'Financial Values',
        questionNumber: 244,
        groupId: 'financial-values'
      },
      {
        id: 'wealthDefinition',
        title: "How do you define being wealthy?",
        type: 'radio',
        required: true,
        options: ['Having a specific net worth', 'Not worrying about money', 'Ability to buy anything wanted', 'Financial independence', 'More than others have', 'Contentment with what you have'],
        section: 'Financial Values',
        questionNumber: 245,
        groupId: 'financial-values'
      },
      {
        id: 'moneyVsTime',
        title: "Do you prefer to save money or save time?",
        type: 'radio',
        required: true,
        options: ['Always save money', 'Usually save money', 'Depends on situation', 'Usually save time', 'Always save time'],
        section: 'Financial Values',
        questionNumber: 246,
        groupId: 'financial-values'
      },
      {
        id: 'financialRole',
        title: "What role should money play in life decisions?",
        type: 'radio',
        required: true,
        options: ['Primary consideration', 'Important factor', 'One of many factors', 'Minor consideration', 'Should not influence decisions'],
        section: 'Financial Values',
        questionNumber: 247,
        groupId: 'financial-values'
      },
      {
        id: 'wealthResponsibility',
        title: "Do you believe wealthy people have social responsibilities?",
        type: 'radio',
        required: true,
        options: ['Yes, significant responsibility', 'Yes, some responsibility', 'Maybe, depends on circumstances', 'No, it\'s their money', 'No opinion'],
        section: 'Financial Values',
        questionNumber: 248,
        groupId: 'financial-values'
      }
    ]
  },

  {
    id: 'spending-psychology',
    title: 'Spending Psychology',
    description: 'Understanding your emotional relationship with spending',
    questions: [
      {
        id: 'spendingTriggers',
        title: "What triggers your spending?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Stress', 'Celebration', 'Boredom', 'Social pressure', 'Sales and discounts', 'Emotional states', 'Convenience', 'None of these'],
        section: 'Spending Psychology',
        questionNumber: 249,
        groupId: 'spending-psychology'
      },
      {
        id: 'spendingRegret',
        title: "How often do you regret purchases?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
        section: 'Spending Psychology',
        questionNumber: 250,
        groupId: 'spending-psychology'
      },
      {
        id: 'spendingJustification',
        title: "How do you justify large purchases?",
        type: 'radio',
        required: true,
        options: ['Detailed cost-benefit analysis', 'Compare to income/budget', 'Consider long-term value', 'If it makes me happy', 'Don\'t need justification'],
        section: 'Spending Psychology',
        questionNumber: 251,
        groupId: 'spending-psychology'
      },
      {
        id: 'delayedGratification',
        title: "How good are you at delaying gratification for financial goals?",
        type: 'radio',
        required: true,
        options: ['Excellent', 'Good', 'Average', 'Poor', 'Very poor'],
        section: 'Spending Psychology',
        questionNumber: 252,
        groupId: 'spending-psychology'
      },
      {
        id: 'spendingInfluence',
        title: "Who or what most influences your spending decisions?",
        type: 'radio',
        required: true,
        options: ['Personal values and goals', 'Family and friends', 'Social media and advertising', 'Financial advisors', 'Market trends', 'Emotions and mood'],
        section: 'Spending Psychology',
        questionNumber: 253,
        groupId: 'spending-psychology'
      }
    ]
  },

  {
    id: 'financial-habits',
    title: 'Financial Habits & Routines',
    description: 'Your regular financial behaviors and practices',
    questions: [
      {
        id: 'financialRoutines',
        title: "Which financial routines do you follow regularly?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Check account balances', 'Review investment performance', 'Update budget', 'Pay bills on schedule', 'Review credit reports', 'Research investments', 'None of these'],
        section: 'Financial Habits',
        questionNumber: 254,
        groupId: 'financial-habits'
      },
      {
        id: 'billPayingHabits',
        title: "How do you handle bill payments?",
        type: 'radio',
        required: true,
        options: ['Automatic payments for everything', 'Automatic for most, manual for some', 'Manual payments with reminders', 'Manual payments without system', 'Often late or missed payments'],
        section: 'Financial Habits',
        questionNumber: 255,
        groupId: 'financial-habits'
      },
      {
        id: 'savingsHabits',
        title: "How do you approach saving money?",
        type: 'radio',
        required: true,
        options: ['Automatic transfers first', 'Save what\'s left over', 'Save when I remember', 'Save for specific goals only', 'Don\'t save regularly'],
        section: 'Financial Habits',
        questionNumber: 256,
        groupId: 'financial-habits'
      },
      {
        id: 'financialOrganization',
        title: "How organized are your financial records?",
        type: 'radio',
        required: true,
        options: ['Highly organized system', 'Mostly organized', 'Somewhat organized', 'Minimally organized', 'Disorganized'],
        section: 'Financial Habits',
        questionNumber: 257,
        groupId: 'financial-habits'
      },
      {
        id: 'financialGoalTracking',
        title: "How do you track progress toward financial goals?",
        type: 'radio',
        required: true,
        options: ['Detailed tracking with metrics', 'Regular informal check-ins', 'Occasional reviews', 'Rarely check progress', 'Don\'t track progress'],
        section: 'Financial Habits',
        questionNumber: 258,
        groupId: 'financial-habits'
      }
    ]
  },

  {
    id: 'investment-philosophy',
    title: 'Investment Philosophy',
    description: 'Your core beliefs about investing and wealth building',
    questions: [
      {
        id: 'investmentApproach',
        title: "Which investment philosophy best describes your approach?",
        type: 'radio',
        required: true,
        options: ['Buy and hold long-term', 'Active trading and timing', 'Passive index investing', 'Value investing', 'Growth investing', 'Haven\'t developed a philosophy'],
        section: 'Investment Philosophy',
        questionNumber: 259,
        groupId: 'investment-philosophy'
      },
      {
        id: 'marketEfficiency',
        title: "Do you believe markets are efficient?",
        type: 'radio',
        required: true,
        options: ['Yes, completely efficient', 'Mostly efficient', 'Somewhat efficient', 'Not very efficient', 'Not efficient at all'],
        section: 'Investment Philosophy',
        questionNumber: 260,
        groupId: 'investment-philosophy'
      },
      {
        id: 'diversificationBelief',
        title: "What's your view on diversification?",
        type: 'radio',
        required: true,
        options: ['Essential for all investors', 'Important for most investors', 'Useful but not critical', 'Overrated concept', 'Limits returns unnecessarily'],
        section: 'Investment Philosophy',
        questionNumber: 261,
        groupId: 'investment-philosophy'
      },
      {
        id: 'activeVsPassive',
        title: "Do you prefer active or passive investment management?",
        type: 'radio',
        required: true,
        options: ['Strongly prefer active', 'Somewhat prefer active', 'No preference', 'Somewhat prefer passive', 'Strongly prefer passive'],
        section: 'Investment Philosophy',
        questionNumber: 262,
        groupId: 'investment-philosophy'
      },
      {
        id: 'investmentResearchImportance',
        title: "How important is investment research to you?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Investment Philosophy',
        questionNumber: 263,
        groupId: 'investment-philosophy'
      }
    ]
  },

  {
    id: 'financial-stress-management',
    title: 'Financial Stress Management',
    description: 'How you cope with financial stress and uncertainty',
    questions: [
      {
        id: 'stressCoping',
        title: "How do you cope with financial stress?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Talk to family/friends', 'Seek professional advice', 'Research and educate myself', 'Exercise or physical activity', 'Meditation or relaxation', 'Avoid thinking about it', 'Make immediate changes'],
        section: 'Stress Management',
        questionNumber: 264,
        groupId: 'financial-stress-management'
      },
      {
        id: 'uncertaintyTolerance',
        title: "How well do you handle financial uncertainty?",
        type: 'radio',
        required: true,
        options: ['Very well', 'Well', 'Moderately well', 'Not very well', 'Poorly'],
        section: 'Stress Management',
        questionNumber: 265,
        groupId: 'financial-stress-management'
      },
      {
        id: 'financialAnxiety',
        title: "Do financial concerns affect your sleep or daily life?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        section: 'Stress Management',
        questionNumber: 266,
        groupId: 'financial-stress-management'
      },
      {
        id: 'controlPerception',
        title: "How much control do you feel you have over your financial future?",
        type: 'radio',
        required: true,
        options: ['Complete control', 'Significant control', 'Moderate control', 'Limited control', 'No control'],
        section: 'Stress Management',
        questionNumber: 267,
        groupId: 'financial-stress-management'
      },
      {
        id: 'supportSystem',
        title: "Do you have people you can talk to about financial concerns?",
        type: 'radio',
        required: true,
        options: ['Yes, many people', 'Yes, a few people', 'Yes, one person', 'No, but wish I did', 'No, prefer to handle alone'],
        section: 'Stress Management',
        questionNumber: 268,
        groupId: 'financial-stress-management'
      }
    ]
  },

  {
    id: 'money-mindset',
    title: 'Money Mindset & Beliefs',
    description: 'Deep-seated beliefs about money and wealth',
    questions: [
      {
        id: 'moneyBeliefs',
        title: "Which statement best reflects your money beliefs?",
        type: 'radio',
        required: true,
        options: ['Money is the root of all evil', 'Money doesn\'t buy happiness', 'Money is a tool for good', 'Money equals freedom', 'Money is just numbers', 'Money is power'],
        section: 'Money Mindset',
        questionNumber: 269,
        groupId: 'money-mindset'
      },
      {
        id: 'wealthDeserving',
        title: "Do you believe you deserve to be wealthy?",
        type: 'radio',
        required: true,
        options: ['Absolutely', 'Yes, if I work for it', 'Maybe, depends on circumstances', 'Not sure', 'No, wealth should be limited'],
        section: 'Money Mindset',
        questionNumber: 270,
        groupId: 'money-mindset'
      },
      {
        id: 'moneyScarcity',
        title: "Do you view money as scarce or abundant?",
        type: 'radio',
        required: true,
        options: ['Very scarce - limited pie', 'Somewhat scarce', 'Neutral', 'Somewhat abundant', 'Very abundant - unlimited potential'],
        section: 'Money Mindset',
        questionNumber: 271,
        groupId: 'money-mindset'
      },
      {
        id: 'financialSuccess',
        title: "What does financial success mean to you?",
        type: 'radio',
        required: true,
        options: ['Never worrying about money', 'Achieving specific net worth', 'Living comfortably', 'Having more than others', 'Being able to help others', 'Personal satisfaction'],
        section: 'Money Mindset',
        questionNumber: 272,
        groupId: 'money-mindset'
      },
      {
        id: 'moneyGuilt',
        title: "Do you ever feel guilty about having or wanting money?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        section: 'Money Mindset',
        questionNumber: 273,
        groupId: 'money-mindset'
      }
    ]
  },

  {
    id: 'financial-decision-making',
    title: 'Financial Decision Making Process',
    description: 'How you make important financial decisions',
    questions: [
      {
        id: 'decisionMakingStyle',
        title: "How do you make major financial decisions?",
        type: 'radio',
        required: true,
        options: ['Extensive research and analysis', 'Moderate research with gut feeling', 'Basic research with advice', 'Mostly intuition and experience', 'Quick decisions based on emotion'],
        section: 'Decision Making',
        questionNumber: 274,
        groupId: 'financial-decision-making'
      },
      {
        id: 'decisionTimeframe',
        title: "How long do you typically take to make major financial decisions?",
        type: 'radio',
        required: true,
        options: ['Days', 'Weeks', 'Months', 'Years', 'Varies significantly'],
        section: 'Decision Making',
        questionNumber: 275,
        groupId: 'financial-decision-making'
      },
      {
        id: 'adviceInfluence',
        title: "How much does professional advice influence your decisions?",
        type: 'radio',
        required: true,
        options: ['Completely follow advice', 'Heavily influenced', 'Moderately influenced', 'Slightly influenced', 'Make independent decisions'],
        section: 'Decision Making',
        questionNumber: 276,
        groupId: 'financial-decision-making'
      },
      {
        id: 'decisionRegret',
        title: "How often do you regret major financial decisions?",
        type: 'radio',
        required: true,
        options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
        section: 'Decision Making',
        questionNumber: 277,
        groupId: 'financial-decision-making'
      },
      {
        id: 'decisionReversibility',
        title: "How important is it that financial decisions be reversible?",
        type: 'radio',
        required: true,
        options: ['Extremely important', 'Very important', 'Moderately important', 'Somewhat important', 'Not important'],
        section: 'Decision Making',
        questionNumber: 278,
        groupId: 'financial-decision-making'
      }
    ]
  },

  {
    id: 'wealth-building-strategy',
    title: 'Wealth Building Strategy',
    description: 'Your approach to building long-term wealth',
    questions: [
      {
        id: 'wealthBuildingFocus',
        title: "What's your primary focus for building wealth?",
        type: 'radio',
        required: true,
        options: ['Maximizing income', 'Minimizing expenses', 'Optimizing investments', 'Building businesses', 'Real estate accumulation', 'Balanced approach'],
        section: 'Wealth Building',
        questionNumber: 279,
        groupId: 'wealth-building-strategy'
      },
      {
        id: 'wealthTimeframe',
        title: "Over what timeframe are you building wealth?",
        type: 'radio',
        required: true,
        options: ['5-10 years', '10-20 years', '20-30 years', '30+ years', 'No specific timeframe'],
        section: 'Wealth Building',
        questionNumber: 280,
        groupId: 'wealth-building-strategy'
      },
      {
        id: 'leverageComfort',
        title: "How comfortable are you using leverage to build wealth?",
        type: 'radio',
        required: true,
        options: ['Very comfortable', 'Comfortable', 'Somewhat comfortable', 'Not very comfortable', 'Not comfortable at all'],
        section: 'Wealth Building',
        questionNumber: 281,
        groupId: 'wealth-building-strategy'
      },
      {
        id: 'wealthMeasurement',
        title: "How do you measure wealth building progress?",
        type: 'radio',
        required: true,
        options: ['Net worth growth', 'Investment returns', 'Income growth', 'Cash flow increase', 'Asset accumulation', 'Don\'t measure regularly'],
        section: 'Wealth Building',
        questionNumber: 282,
        groupId: 'wealth-building-strategy'
      },
      {
        id: 'wealthBuildingObstacles',
        title: "What's your biggest obstacle to building wealth?",
        type: 'radio',
        required: true,
        options: ['Low income', 'High expenses', 'Lack of knowledge', 'Lack of discipline', 'Market volatility', 'Life circumstances', 'No major obstacles'],
        section: 'Wealth Building',
        questionNumber: 283,
        groupId: 'wealth-building-strategy'
      }
    ]
  },

  {
    id: 'financial-independence-details',
    title: 'Financial Independence Details',
    description: 'Specific plans and expectations for financial independence',
    questions: [
      {
        id: 'fiDefinition',
        title: "How do you define financial independence?",
        type: 'radio',
        required: true,
        options: ['Never needing to work again', 'Having enough passive income', 'Reaching a specific net worth', 'Being debt-free', 'Having multiple income streams', 'Peace of mind about money'],
        section: 'Financial Independence',
        questionNumber: 284,
        groupId: 'financial-independence-details'
      },
      {
        id: 'fiMotivation',
        title: "What motivates you most about financial independence?",
        type: 'radio',
        required: true,
        options: ['Freedom to choose work', 'Security for family', 'Ability to pursue passions', 'Escape from financial stress', 'Opportunity to help others', 'Personal achievement'],
        section: 'Financial Independence',
        questionNumber: 285,
        groupId: 'financial-independence-details'
      },
      {
        id: 'fiLifestyle',
        title: "What lifestyle do you want in financial independence?",
        type: 'radio',
        required: true,
        options: ['Maintain current lifestyle', 'Upgrade lifestyle significantly', 'Simplify and downsize', 'Focus on experiences over things', 'Luxury lifestyle', 'Haven\'t decided'],
        section: 'Financial Independence',
        questionNumber: 286,
        groupId: 'financial-independence-details'
      },
      {
        id: 'fiWorkPlans',
        title: "Do you plan to work after achieving financial independence?",
        type: 'radio',
        required: true,
        options: ['No, complete retirement', 'Yes, passion projects only', 'Yes, part-time work', 'Yes, but different career', 'Yes, consulting/freelance', 'Haven\'t decided'],
        section: 'Financial Independence',
        questionNumber: 287,
        groupId: 'financial-independence-details'
      },
      {
        id: 'fiConfidence',
        title: "How confident are you about achieving financial independence?",
        type: 'radio',
        required: true,
        options: ['Very confident', 'Confident', 'Somewhat confident', 'Not very confident', 'Not confident at all'],
        section: 'Financial Independence',
        questionNumber: 288,
        groupId: 'financial-independence-details'
      }
    ]
  },

  {
    id: 'final-preferences',
    title: 'Final Preferences',
    description: 'Last few questions about your financial planning preferences',
    questions: [
      {
        id: 'planningHorizon',
        title: "What's your typical financial planning horizon?",
        type: 'radio',
        required: true,
        options: ['1 year or less', '2-5 years', '6-10 years', '11-20 years', 'More than 20 years', 'Don\'t plan that far ahead'],
        section: 'Planning Preferences',
        questionNumber: 289,
        groupId: 'final-preferences'
      },
      {
        id: 'planComplexity',
        title: "How complex do you want your financial plan to be?",
        type: 'radio',
        required: true,
        options: ['Very simple', 'Somewhat simple', 'Moderately complex', 'Quite complex', 'Very complex'],
        section: 'Planning Preferences',
        questionNumber: 290,
        groupId: 'final-preferences'
      },
      {
        id: 'planReviewFrequency',
        title: "How often do you want to review your financial plan?",
        type: 'radio',
        required: true,
        options: ['Monthly', 'Quarterly', 'Semi-annually', 'Annually', 'Only when major changes occur'],
        section: 'Planning Preferences',
        questionNumber: 291,
        groupId: 'final-preferences'
      },
      {
        id: 'successMetrics',
        title: "How do you want to measure financial planning success?",
        subtitle: "Select all that apply",
        type: 'select',
        required: true,
        options: ['Net worth growth', 'Goal achievement', 'Reduced financial stress', 'Improved cash flow', 'Better investment returns', 'Increased savings rate', 'Peace of mind'],
        section: 'Planning Preferences',
        questionNumber: 292,
        groupId: 'final-preferences'
      },
      {
        id: 'planAdjustments',
        title: "How flexible do you want your financial plan to be?",
        type: 'radio',
        required: true,
        options: ['Very flexible - adjust frequently', 'Somewhat flexible - adjust as needed', 'Moderately flexible - annual adjustments', 'Not very flexible - stick to plan', 'Rigid - rarely change'],
        section: 'Planning Preferences',
        questionNumber: 293,
        groupId: 'final-preferences'
      },
      {
        id: 'implementationSupport',
        title: "What level of support do you want for plan implementation?",
        type: 'radio',
        required: true,
        options: ['Full service - handle everything', 'Significant support - help with most tasks', 'Moderate support - guidance and check-ins', 'Minimal support - plan only', 'No support - completely DIY'],
        section: 'Planning Preferences',
        questionNumber: 294,
        groupId: 'final-preferences'
      },
      {
        id: 'communicationPreference',
        title: "How do you prefer to communicate about your finances?",
        type: 'radio',
        required: true,
        options: ['In-person meetings', 'Video calls', 'Phone calls', 'Email', 'Text/messaging', 'Online platform only'],
        section: 'Planning Preferences',
        questionNumber: 295,
        groupId: 'final-preferences'
      },
      {
        id: 'reportingPreference',
        title: "What type of financial reporting do you prefer?",
        type: 'radio',
        required: true,
        options: ['Detailed written reports', 'Summary dashboards', 'Visual charts and graphs', 'Simple bullet points', 'Verbal updates only', 'No formal reporting'],
        section: 'Planning Preferences',
        questionNumber: 296,
        groupId: 'final-preferences'
      },
      {
        id: 'emergencyPreparedness',
        title: "How prepared do you feel for financial emergencies?",
        type: 'radio',
        required: true,
        options: ['Very prepared', 'Prepared', 'Somewhat prepared', 'Not very prepared', 'Not prepared at all'],
        section: 'Planning Preferences',
        questionNumber: 297,
        groupId: 'final-preferences'
      },
      {
        id: 'overallSatisfaction',
        title: "How satisfied are you with your current financial situation?",
        type: 'radio',
        required: true,
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'],
        section: 'Planning Preferences',
        questionNumber: 298,
        groupId: 'final-preferences'
      },
      {
        id: 'futureOptimism',
        title: "How optimistic are you about your financial future?",
        type: 'radio',
        required: true,
        options: ['Very optimistic', 'Optimistic', 'Neutral', 'Pessimistic', 'Very pessimistic'],
        section: 'Planning Preferences',
        questionNumber: 299,
        groupId: 'final-preferences'
      }
    ]
  }
];
