export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: 'text' | 'number' | 'radio' | 'select' | 'date';
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
    id: 'rental-housing',
    title: 'Rental Housing',
    description: 'Details about your rental situation',
    conditional: true,
    questions: [
      {
        id: 'monthlyRent',
        title: 'What is your monthly rent amount?',
        type: 'number',
        required: true,
        section: 'Rental Housing',
        questionNumber: 20,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalDeposit',
        title: 'What was your total rental deposit amount?',
        type: 'number',
        required: true,
        section: 'Rental Housing',
        questionNumber: 21,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsurance',
        title: 'Do you have rental/contents insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Rental Housing',
        questionNumber: 22,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsuranceCover',
        title: 'What is the total coverage amount of your rental insurance?',
        type: 'number',
        required: true,
        section: 'Rental Housing',
        questionNumber: 23,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsurancePremium',
        title: 'What is your annual rental insurance premium?',
        type: 'number',
        required: true,
        section: 'Rental Housing',
        questionNumber: 24,
        groupId: 'rental-housing'
      },
      {
        id: 'buildingMaintenanceFees',
        title: 'Do you pay any building maintenance or society fees monthly?',
        type: 'number',
        required: true,
        section: 'Rental Housing',
        questionNumber: 25,
        groupId: 'rental-housing'
      },
      {
        id: 'ownedHomesCount',
        title: 'Apart from your rental, how many other homes do you own?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4 or more'],
        section: 'Rental Housing',
        questionNumber: 26,
        groupId: 'rental-housing'
      }
    ]
  },
  {
    id: 'owned-properties',
    title: 'Owned Properties',
    description: 'Details about properties you own',
    conditional: true,
    questions: [
      {
        id: 'home1PurchasePrice',
        title: 'Home 1: What was the purchase price of this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 27,
        groupId: 'owned-properties'
      },
      {
        id: 'home1CurrentValue',
        title: 'Home 1: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 28,
        groupId: 'owned-properties'
      },
      {
        id: 'home1HasLoan',
        title: 'Home 1: Do you have a loan on this property?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Owned Properties',
        questionNumber: 29,
        groupId: 'owned-properties'
      },
      {
        id: 'home1OriginalLoanAmount',
        title: 'Home 1: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 30,
        groupId: 'owned-properties'
      },
      {
        id: 'home1OutstandingLoan',
        title: 'Home 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 31,
        groupId: 'owned-properties'
      },
      {
        id: 'home1LoanInterestRate',
        title: 'Home 1: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 32,
        groupId: 'owned-properties'
      },
      {
        id: 'home1MonthlyEMI',
        title: 'Home 1: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 33,
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsuranceCover',
        title: 'Home 1: What is the coverage amount of insurance for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 34,
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsurancePremium',
        title: 'Home 1: What is the annual insurance premium for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 35,
        groupId: 'owned-properties'
      },
      {
        id: 'home2PurchasePrice',
        title: 'Home 2: What was the purchase price of this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 36,
        groupId: 'owned-properties'
      },
      {
        id: 'home2CurrentValue',
        title: 'Home 2: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 37,
        groupId: 'owned-properties'
      },
      {
        id: 'home2HasLoan',
        title: 'Home 2: Do you have a loan on this property?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Owned Properties',
        questionNumber: 38,
        groupId: 'owned-properties'
      },
      {
        id: 'home2OriginalLoanAmount',
        title: 'Home 2: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 39,
        groupId: 'owned-properties'
      },
      {
        id: 'home2OutstandingLoan',
        title: 'Home 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 40,
        groupId: 'owned-properties'
      },
      {
        id: 'home2LoanInterestRate',
        title: 'Home 2: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 41,
        groupId: 'owned-properties'
      },
      {
        id: 'home2MonthlyEMI',
        title: 'Home 2: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 42,
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsuranceCover',
        title: 'Home 2: What is the coverage amount of insurance for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 43,
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsurancePremium',
        title: 'Home 2: What is the annual insurance premium for this property?',
        type: 'number',
        required: true,
        section: 'Owned Properties',
        questionNumber: 44,
        groupId: 'owned-properties'
      }
    ]
  },
  {
    id: 'housing',
    title: 'Housing & Property',
    description: 'Details about your primary residence',
    conditional: true,
    triggerQuestions: ['hasFinancialDependents'],
    questions: [
      {
        id: 'q21',
        title: 'Do you own or rent your primary residence?',
        type: 'radio',
        required: true,
        options: ['Own with mortgage', 'Own outright', 'Rent', 'Other arrangement'],
        section: 'Housing',
        questionNumber: 45,
        groupId: 'housing'
      },
      {
        id: 'q22',
        title: 'What is the estimated current value of your property?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 46,
        groupId: 'housing'
      },
      {
        id: 'q23',
        title: 'What is your monthly mortgage payment?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 47,
        groupId: 'housing'
      },
      {
        id: 'q24',
        title: 'What is your outstanding mortgage balance?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 48,
        groupId: 'housing'
      },
      {
        id: 'q25',
        title: 'What is your monthly rent payment?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 49,
        groupId: 'housing'
      },
      {
        id: 'q26',
        title: 'What are your monthly council tax/property taxes?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 50,
        groupId: 'housing'
      },
      {
        id: 'q27',
        title: 'What are your monthly home insurance costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 51,
        groupId: 'housing'
      },
      {
        id: 'q28',
        title: 'What are your monthly utilities costs (gas, electricity, water)?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 52,
        groupId: 'housing'
      },
      {
        id: 'q29',
        title: 'What are your monthly home maintenance/repair costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 53,
        groupId: 'housing'
      },
      {
        id: 'q30',
        title: 'What are your monthly internet/broadband costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 54,
        groupId: 'housing'
      }
    ]
  },
  {
    id: 'income',
    title: 'Income',
    description: 'Your various income sources',
    questions: [
      {
        id: 'q141',
        title: 'What is your gross monthly salary/wage?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 55,
        groupId: 'income'
      },
      {
        id: 'q142',
        title: 'What is your net monthly salary/wage (after tax)?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 56,
        groupId: 'income'
      },
      {
        id: 'q143',
        title: 'Do you receive any bonuses or commission?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 57,
        groupId: 'income'
      },
      {
        id: 'q144',
        title: 'What is your average annual bonus/commission?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 58,
        groupId: 'income'
      },
      {
        id: 'q145',
        title: 'Do you have any freelance/side income?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 59,
        groupId: 'income'
      },
      {
        id: 'q146',
        title: 'What is your monthly freelance/side income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 60,
        groupId: 'income'
      },
      {
        id: 'q147',
        title: 'Do you receive any investment income (dividends, interest, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 61,
        groupId: 'income'
      },
      {
        id: 'q148',
        title: 'What is your monthly investment income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 62,
        groupId: 'income'
      },
      {
        id: 'q149',
        title: 'Do you receive any government benefits or pensions?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 63,
        groupId: 'income'
      },
      {
        id: 'q150',
        title: 'What is your monthly benefits/pension income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 64,
        groupId: 'income'
      }
    ]
  },
  {
    id: 'vehicles-common',
    title: 'Vehicle Expenses & Basics',
    description: 'Common vehicle expenses and basic details',
    conditional: true,
    questions: [
      {
        id: 'monthlyFuelCosts',
        title: 'What are your total monthly fuel costs for all vehicles?',
        type: 'number',
        required: true,
        section: 'Vehicle Expenses',
        questionNumber: 65,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyParkingCosts',
        title: 'What are your total monthly parking costs?',
        type: 'number',
        required: true,
        section: 'Vehicle Expenses',
        questionNumber: 66,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyMaintenanceCosts',
        title: 'What are your average monthly maintenance costs for all vehicles?',
        type: 'number',
        required: true,
        section: 'Vehicle Expenses',
        questionNumber: 67,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1Type',
        title: 'Vehicle 1: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle', 'Truck', 'SUV', 'Van', 'Other'],
        section: 'Vehicle Basics',
        questionNumber: 68,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1PurchasePrice',
        title: 'Vehicle 1: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 69,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1CurrentValue',
        title: 'Vehicle 1: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 70,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2Type',
        title: 'Vehicle 2: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle', 'Truck', 'SUV', 'Van', 'Other'],
        section: 'Vehicle Basics',
        questionNumber: 71,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2PurchasePrice',
        title: 'Vehicle 2: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 72,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2CurrentValue',
        title: 'Vehicle 2: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 73,
        groupId: 'vehicles-common'
      }
    ]
  },
  {
    id: 'vehicles-insurance-loans',
    title: 'Vehicle Insurance & Loans',
    description: 'Insurance and loan information for each vehicle',
    conditional: true,
    questions: [
      {
        id: 'vehicle1InsuranceCover',
        title: 'Vehicle 1: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 74,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 75,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePeriod',
        title: 'Vehicle 1: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 76,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1HasLoan',
        title: 'Vehicle 1: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 77,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1OutstandingLoan',
        title: 'Vehicle 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 78,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanInterestRate',
        title: 'Vehicle 1: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 79,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1MonthlyEMI',
        title: 'Vehicle 1: What is your monthly EMI payment for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 80,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsuranceCover',
        title: 'Vehicle 2: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 81,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 82,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePeriod',
        title: 'Vehicle 2: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 83,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2HasLoan',
        title: 'Vehicle 2: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 84,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2OutstandingLoan',
        title: 'Vehicle 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 85,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanInterestRate',
        title: 'Vehicle 2: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 86,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2MonthlyEMI',
        title: 'Vehicle 2: What is your monthly EMI payment for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 87,
        groupId: 'vehicles-insurance-loans'
      }
    ]
  },
  {
    id: 'children',
    title: 'Children',
    description: 'Details about your children and related expenses',
    conditional: true,
    questions: [
      // Child 1 Questions (always shown if group appears)
      {
        id: 'child1AgeGroup',
        title: 'Child 1: What is the age group of this child?',
        type: 'select',
        required: true,
        options: ['0-5', '6-10', '11-15', '16-18', '19-25', '26 or older'],
        section: 'Children',
        questionNumber: 88,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyDiapers',
        title: 'Child 1: Monthly expenses for diapers',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['0-5']
        },
        section: 'Children',
        questionNumber: 89,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyClothing',
        title: 'Child 1: What are your monthly expenses for clothing, shoes',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 90,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyToys',
        title: 'Child 1: What are your monthly expenses for toys and games',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['0-5', '6-10', '11-15']
        },
        section: 'Children',
        questionNumber: 91,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyParties',
        title: 'Child 1: What are your monthly expenses for parties, gifts for kids parties',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['0-5', '6-10', '11-15', '16-18']
        },
        section: 'Children',
        questionNumber: 92,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyActivities',
        title: 'Child 1: Monthly expense for hobbies, sports, extra curricular activities',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 93,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyEducation',
        title: 'Child 1: Monthly expense for school/college fees',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['6-10', '11-15', '16-18', '19-25']
        },
        section: 'Children',
        questionNumber: 94,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyOnlineLearning',
        title: 'Child 1: Monthly expense for additional online learning',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['6-10', '11-15', '16-18', '19-25']
        },
        section: 'Children',
        questionNumber: 95,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyTutoring',
        title: 'Child 1: Monthly expense for additional tutoring',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['6-10', '11-15', '16-18', '19-25']
        },
        section: 'Children',
        questionNumber: 96,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyBooks',
        title: 'Child 1: Monthly expense for school books',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['6-10', '11-15', '16-18', '19-25']
        },
        section: 'Children',
        questionNumber: 97,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyFieldTrips',
        title: 'Child 1: Monthly expense for field trips',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1AgeGroup',
          values: ['6-10', '11-15', '16-18']
        },
        section: 'Children',
        questionNumber: 98,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMedical',
        title: "Child 1: Monthly expenses for your child's medical expenses, treatments, medicines",
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 99,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMiscellaneous',
        title: 'Child 1: Miscellaneous monthly expenses',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 100,
        groupId: 'children'
      },
      {
        id: 'child1HealthInsurance',
        title: 'Child 1: Do you have health insurance that covers your child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Children',
        questionNumber: 101,
        groupId: 'children'
      },
      {
        id: 'child1InsuranceCover',
        title: 'Child 1: What is the value of the insurance cover?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1HealthInsurance',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 102,
        groupId: 'children'
      },
      {
        id: 'child1InsurancePremium',
        title: "Child 1: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1HealthInsurance',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 103,
        groupId: 'children'
      },

      // Child 2 Questions (if Q14 >= "2")
      {
        id: 'child2AgeGroup',
        title: 'Child 2: What is the age group of this child?',
        type: 'select',
        required: true,
        options: ['0-5', '6-10', '11-15', '16-18', '19-25', '26 or older'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 104,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyDiapers',
        title: 'Child 2: Monthly expenses for diapers',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['0-5']
          }
        ],
        section: 'Children',
        questionNumber: 105,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyClothing',
        title: 'Child 2: What are your monthly expenses for clothing, shoes',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 106,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyToys',
        title: 'Child 2: What are your monthly expenses for toys and games',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['0-5', '6-10', '11-15']
          }
        ],
        section: 'Children',
        questionNumber: 107,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyParties',
        title: 'Child 2: What are your monthly expenses for parties, gifts for kids parties',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['0-5', '6-10', '11-15', '16-18']
          }
        ],
        section: 'Children',
        questionNumber: 108,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyActivities',
        title: 'Child 2: Monthly expense for hobbies, sports, extra curricular activities',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 109,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyEducation',
        title: 'Child 2: Monthly expense for school/college fees',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 110,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyOnlineLearning',
        title: 'Child 2: Monthly expense for additional online learning',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 111,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyTutoring',
        title: 'Child 2: Monthly expense for additional tutoring',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 112,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyBooks',
        title: 'Child 2: Monthly expense for school books',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 113,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyFieldTrips',
        title: 'Child 2: Monthly expense for field trips',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2AgeGroup',
            values: ['6-10', '11-15', '16-18']
          }
        ],
        section: 'Children',
        questionNumber: 114,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyMedical',
        title: "Child 2: Monthly expenses for your child's medical expenses, treatments, medicines",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 115,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyMiscellaneous',
        title: 'Child 2: Miscellaneous monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 116,
        groupId: 'children'
      },
      {
        id: 'child2HealthInsurance',
        title: 'Child 2: Do you have health insurance that covers your child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 117,
        groupId: 'children'
      },
      {
        id: 'child2InsuranceCover',
        title: 'Child 2: What is the value of the insurance cover?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children',
        questionNumber: 118,
        groupId: 'children'
      },
      {
        id: 'child2InsurancePremium',
        title: "Child 2: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children',
        questionNumber: 119,
        groupId: 'children'
      },

      // Child 3 Questions (if Q14 = "3 or more")
      {
        id: 'child3AgeGroup',
        title: 'Child 3: What is the age group of this child?',
        type: 'select',
        required: true,
        options: ['0-5', '6-10', '11-15', '16-18', '19-25', '26 or older'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 120,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyDiapers',
        title: 'Child 3: Monthly expenses for diapers',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['0-5']
          }
        ],
        section: 'Children',
        questionNumber: 121,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyClothing',
        title: 'Child 3: What are your monthly expenses for clothing, shoes',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 122,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyToys',
        title: 'Child 3: What are your monthly expenses for toys and games',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['0-5', '6-10', '11-15']
          }
        ],
        section: 'Children',
        questionNumber: 123,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyParties',
        title: 'Child 3: What are your monthly expenses for parties, gifts for kids parties',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['0-5', '6-10', '11-15', '16-18']
          }
        ],
        section: 'Children',
        questionNumber: 124,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyActivities',
        title: 'Child 3: Monthly expense for hobbies, sports, extra curricular activities',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 125,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyEducation',
        title: 'Child 3: Monthly expense for school/college fees',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 126,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyOnlineLearning',
        title: 'Child 3: Monthly expense for additional online learning',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 127,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyTutoring',
        title: 'Child 3: Monthly expense for additional tutoring',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 128,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyBooks',
        title: 'Child 3: Monthly expense for school books',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['6-10', '11-15', '16-18', '19-25']
          }
        ],
        section: 'Children',
        questionNumber: 129,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyFieldTrips',
        title: 'Child 3: Monthly expense for field trips',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3AgeGroup',
            values: ['6-10', '11-15', '16-18']
          }
        ],
        section: 'Children',
        questionNumber: 130,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyMedical',
        title: "Child 3: Monthly expenses for your child's medical expenses, treatments, medicines",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 131,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyMiscellaneous',
        title: 'Child 3: Miscellaneous monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 132,
        groupId: 'children'
      },
      {
        id: 'child3HealthInsurance',
        title: 'Child 3: Do you have health insurance that covers your child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 133,
        groupId: 'children'
      },
      {
        id: 'child3InsuranceCover',
        title: 'Child 3: What is the value of the insurance cover?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children',
        questionNumber: 134,
        groupId: 'children'
      },
      {
        id: 'child3InsurancePremium',
        title: "Child 3: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children',
        questionNumber: 135,
        groupId: 'children'
      }
    ]
  },
  {
    id: 'financial-dependents',
    title: 'Financial Dependents',
    description: 'Details about your financial dependents',
    conditional: true,
    questions: [
      // Dependent 1 Questions
      {
        id: 'dependent1HealthExpenses',
        title: 'Dependent 1: Health related monthly expenses (not covered by insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 136,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1MedicalCosts',
        title: 'Dependent 1: Monthly cost for medicines, treatments, medical devices, health checkups, etc.',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 137,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1LivingExpenses',
        title: 'Dependent 1: Rent, grocery, utilities expenses, monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 138,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1TravelExpenses',
        title: 'Dependent 1: Travel and commute monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 139,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1EntertainmentExpenses',
        title: 'Dependent 1: Entertainment, leisure, holiday, hobby, monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 140,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1MiscellaneousExpenses',
        title: 'Dependent 1: Other miscellaneous expenses monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 141,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1HealthInsurance',
        title: 'Dependent 1: Do you have health insurance to cover this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 142,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsuranceCover',
        title: 'Dependent 1: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent1HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 143,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsurancePremium',
        title: "Dependent 1: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent1HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 144,
        groupId: 'financial-dependents'
      },

      // Dependent 2 Questions
      {
        id: 'dependent2HealthExpenses',
        title: 'Dependent 2: Health related monthly expenses (not covered by insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 145,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2MedicalCosts',
        title: 'Dependent 2: Monthly cost for medicines, treatments, medical devices, health checkups, etc.',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 146,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2LivingExpenses',
        title: 'Dependent 2: Rent, grocery, utilities expenses, monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 147,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2TravelExpenses',
        title: 'Dependent 2: Travel and commute monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 148,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2EntertainmentExpenses',
        title: 'Dependent 2: Entertainment, leisure, holiday, hobby, monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 149,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2MiscellaneousExpenses',
        title: 'Dependent 2: Other miscellaneous expenses monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 150,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2HealthInsurance',
        title: 'Dependent 2: Do you have health insurance to cover this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 151,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsuranceCover',
        title: 'Dependent 2: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent2HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 152,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsurancePremium',
        title: "Dependent 2: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent2HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 153,
        groupId: 'financial-dependents'
      },

      // Dependent 3 Questions
      {
        id: 'dependent3HealthExpenses',
        title: 'Dependent 3: Health related monthly expenses (not covered by insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 154,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3MedicalCosts',
        title: 'Dependent 3: Monthly cost for medicines, treatments, medical devices, health checkups, etc.',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 155,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3LivingExpenses',
        title: 'Dependent 3: Rent, grocery, utilities expenses, monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 156,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3TravelExpenses',
        title: 'Dependent 3: Travel and commute monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 157,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3EntertainmentExpenses',
        title: 'Dependent 3: Entertainment, leisure, holiday, hobby, monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 158,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3MiscellaneousExpenses',
        title: 'Dependent 3: Other miscellaneous expenses monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 159,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3HealthInsurance',
        title: 'Dependent 3: Do you have health insurance to cover this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 160,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3InsuranceCover',
        title: 'Dependent 3: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent3HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 161,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3InsurancePremium',
        title: "Dependent 3: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['3', '4', '5 or more']
          },
          {
            dependsOn: 'dependent3HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 162,
        groupId: 'financial-dependents'
      },

      // Dependent 4 Questions
      {
        id: 'dependent4HealthExpenses',
        title: 'Dependent 4: Health related monthly expenses (not covered by insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 163,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4MedicalCosts',
        title: 'Dependent 4: Monthly cost for medicines, treatments, medical devices, health checkups, etc.',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 164,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4LivingExpenses',
        title: 'Dependent 4: Rent, grocery, utilities expenses, monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 165,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4TravelExpenses',
        title: 'Dependent 4: Travel and commute monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 166,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4EntertainmentExpenses',
        title: 'Dependent 4: Entertainment, leisure, holiday, hobby, monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 167,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4MiscellaneousExpenses',
        title: 'Dependent 4: Other miscellaneous expenses monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 168,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4HealthInsurance',
        title: 'Dependent 4: Do you have health insurance to cover this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 169,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4InsuranceCover',
        title: 'Dependent 4: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['4', '5 or more']
          },
          {
            dependsOn: 'dependent4HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 170,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4InsurancePremium',
        title: "Dependent 4: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['4', '5 or more']
          },
          {
            dependsOn: 'dependent4HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 171,
        groupId: 'financial-dependents'
      },

      // Dependent 5 Questions
      {
        id: 'dependent5HealthExpenses',
        title: 'Dependent 5: Health related monthly expenses (not covered by insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 172,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5MedicalCosts',
        title: 'Dependent 5: Monthly cost for medicines, treatments, medical devices, health checkups, etc.',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 173,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5LivingExpenses',
        title: 'Dependent 5: Rent, grocery, utilities expenses, monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 174,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5TravelExpenses',
        title: 'Dependent 5: Travel and commute monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 175,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5EntertainmentExpenses',
        title: 'Dependent 5: Entertainment, leisure, holiday, hobby, monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 176,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5MiscellaneousExpenses',
        title: 'Dependent 5: Other miscellaneous expenses monthly',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 177,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5HealthInsurance',
        title: 'Dependent 5: Do you have health insurance to cover this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 178,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5InsuranceCover',
        title: 'Dependent 5: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['5 or more']
          },
          {
            dependsOn: 'dependent5HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 179,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5InsurancePremium',
        title: "Dependent 5: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['5 or more']
          },
          {
            dependsOn: 'dependent5HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 180,
        groupId: 'financial-dependents'
      }
    ]
  },
  {
    id: 'personal-loans',
    title: 'Personal Loans & Credit Cards',
    description: 'Details about your personal loans and credit card debt',
    conditional: true,
    questions: [
      // Part A: Credit Card Debt
      {
        id: 'hasCreditCardDebt',
        title: 'Do you have any credit card debt that is more than 45 days old?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Loans & Credit',
        questionNumber: 181,
        groupId: 'personal-loans'
      },
      {
        id: 'totalCreditCardDebt',
        title: 'What is the total outstanding credit card debt?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 182,
        groupId: 'personal-loans'
      },
      {
        id: 'creditCardMonthlyPayment',
        title: 'What is your current credit card monthly payment?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 183,
        groupId: 'personal-loans'
      },
      {
        id: 'creditCardInterestRate',
        title: 'What is the average interest rate on your credit cards (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 184,
        groupId: 'personal-loans'
      },

      // Part B: Personal Loans
      {
        id: 'numberOfPersonalLoans',
        title: 'How many personal loans do you have apart from those for your home and/or your vehicles?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4', '5 or more'],
        section: 'Personal Loans & Credit',
        questionNumber: 185,
        groupId: 'personal-loans'
      },

      // Personal Loan 1 Questions
      {
        id: 'loan1Purpose',
        title: 'Personal Loan 1: What was this loan taken for?',
        type: 'select',
        required: true,
        options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 186,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1OriginalAmount',
        title: 'Personal Loan 1: What was the original loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 187,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1OutstandingBalance',
        title: 'Personal Loan 1: What is the current outstanding balance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 188,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1InterestRate',
        title: 'Personal Loan 1: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 189,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1MonthlyPayment',
        title: 'Personal Loan 1: What is the monthly payment you make towards this loan?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 190,
        groupId: 'personal-loans'
      },

      // Personal Loan 2 Questions
      {
        id: 'loan2Purpose',
        title: 'Personal Loan 2: What was this loan taken for?',
        type: 'select',
        required: true,
        options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 191,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2OriginalAmount',
        title: 'Personal Loan 2: What was the original loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 192,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2OutstandingBalance',
        title: 'Personal Loan 2: What is the current outstanding balance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 193,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2InterestRate',
        title: 'Personal Loan 2: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 194,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2MonthlyPayment',
        title: 'Personal Loan 2: What is the monthly payment you make towards this loan?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 195,
        groupId: 'personal-loans'
      },

      // Personal Loan 3 Questions
      {
        id: 'loan3Purpose',
        title: 'Personal Loan 3: What was this loan taken for?',
        type: 'select',
        required: true,
        options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 196,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3OriginalAmount',
        title: 'Personal Loan 3: What was the original loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 197,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3OutstandingBalance',
        title: 'Personal Loan 3: What is the current outstanding balance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 198,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3InterestRate',
        title: 'Personal Loan 3: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 199,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3MonthlyPayment',
        title: 'Personal Loan 3: What is the monthly payment you make towards this loan?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 200,
        groupId: 'personal-loans'
      },

      // Personal Loan 4 Questions
      {
        id: 'loan4Purpose',
        title: 'Personal Loan 4: What was this loan taken for?',
        type: 'select',
        required: true,
        options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 201,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4OriginalAmount',
        title: 'Personal Loan 4: What was the original loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 202,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4OutstandingBalance',
        title: 'Personal Loan 4: What is the current outstanding balance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 203,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4InterestRate',
        title: 'Personal Loan 4: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 204,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4MonthlyPayment',
        title: 'Personal Loan 4: What is the monthly payment you make towards this loan?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 205,
        groupId: 'personal-loans'
      },

      // Personal Loan 5 Questions
      {
        id: 'loan5Purpose',
        title: 'Personal Loan 5: What was this loan taken for?',
        type: 'select',
        required: true,
        options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 206,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5OriginalAmount',
        title: 'Personal Loan 5: What was the original loan amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 207,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5OutstandingBalance',
        title: 'Personal Loan 5: What is the current outstanding balance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 208,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5InterestRate',
        title: 'Personal Loan 5: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 209,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5MonthlyPayment',
        title: 'Personal Loan 5: What is the monthly payment you make towards this loan?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 210,
        groupId: 'personal-loans'
      }
    ]
  },
  {
    id: 'insurance-coverage',
    title: 'Insurance Coverage',
    description: 'Basic insurance coverage questions',
    questions: [
      {
        id: 'userHealthInsurance',
        title: 'Do you have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 211,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userLifeInsurance',
        title: 'Do you have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 212,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userAccidentInsurance',
        title: 'Do you have accident and disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 213,
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerHealthInsurance',
        title: 'Does your partner have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not applicable'],
        section: 'Insurance Coverage',
        questionNumber: 214,
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerLifeInsurance',
        title: 'Does your partner have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not applicable'],
        section: 'Insurance Coverage',
        questionNumber: 215,
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerAccidentInsurance',
        title: 'Does your partner have accident and disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not applicable'],
        section: 'Insurance Coverage',
        questionNumber: 216,
        groupId: 'insurance-coverage'
      }
    ]
  },
  {
    id: 'insurance-details',
    title: 'Insurance Details',
    description: 'Detailed insurance coverage amounts and premiums',
    conditional: true,
    questions: [
      {
        id: 'userHealthInsuranceCover',
        title: 'What is your total health insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 217,
        groupId: 'insurance-details'
      },
      {
        id: 'userHealthInsurancePremium',
        title: 'What is your health insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 218,
        groupId: 'insurance-details'
      },
      {
        id: 'userHealthInsurancePeriod',
        title: 'Health insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'userHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 219,
        groupId: 'insurance-details'
      },
      {
        id: 'userLifeInsuranceCover',
        title: 'What is your total life insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 220,
        groupId: 'insurance-details'
      },
      {
        id: 'userLifeInsurancePremium',
        title: 'What is your life insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 221,
        groupId: 'insurance-details'
      },
      {
        id: 'userLifeInsurancePeriod',
        title: 'Life insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'userLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 222,
        groupId: 'insurance-details'
      },
      {
        id: 'userAccidentInsuranceCover',
        title: 'What is your total accident and disability insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 223,
        groupId: 'insurance-details'
      },
      {
        id: 'userAccidentInsurancePremium',
        title: 'What is your accident and disability insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 224,
        groupId: 'insurance-details'
      },
      {
        id: 'userAccidentInsurancePeriod',
        title: 'Accident and disability insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'userAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 225,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsuranceCover',
        title: "What is your partner's total health insurance coverage amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 226,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsurancePremium',
        title: "What is your partner's health insurance premium amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 227,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsurancePeriod',
        title: "Partner's health insurance premium period",
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 228,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsuranceCover',
        title: "What is your partner's total life insurance coverage amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 229,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsurancePremium',
        title: "What is your partner's life insurance premium amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 230,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsurancePeriod',
        title: "Partner's life insurance premium period",
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 231,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsuranceCover',
        title: "What is your partner's total accident and disability insurance coverage amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 232,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsurancePremium',
        title: "What is your partner's accident and disability insurance premium amount?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 233,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsurancePeriod',
        title: "Partner's accident and disability insurance premium period",
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 234,
        groupId: 'insurance-details'
      }
    ]
  },
  // Group 8: Monthly Expenses
  {
    id: 'monthly-expenses',
    title: 'Monthly Expenses',
    description: 'Your regular monthly living expenses',
    questions: [
      {
        id: 'monthlyGroceries',
        title: 'What are your monthly costs for groceries and toiletries?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 235,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyClothing',
        title: 'What are your monthly costs for clothes and shoes?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 236,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyBeauty',
        title: 'What are your monthly costs for makeup and jewellery?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 237,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlySalon',
        title: 'What are your monthly costs for haircuts, salon, beauty treatments and massages?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 238,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyDomesticHelp',
        title: 'What are your monthly costs for maid/cook/househelp/nanny?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 239,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyCookingGas',
        title: 'What are your monthly cooking gas costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 240,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyElectricity',
        title: 'What are your monthly electricity costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 241,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyMobile',
        title: 'What are your monthly mobile plan costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 242,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyInternet',
        title: 'What are your monthly broadband/internet costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 243,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyTvOtt',
        title: 'What are your monthly TV/OTT/cable bills? Include all your OTT subscriptions.',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 244,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyAppSubscriptions',
        title: 'What are your monthly costs for other app subscriptions (music, gaming, data storage, email, health trackers, etc.)?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 245,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyCommute',
        title: 'What are your monthly costs for commuting to office and local transport (not your own vehicle)?',
        subtitle: 'Include taxis, buses, trains, metro - exclude fuel for your own vehicle',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 246,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyPetCosts',
        title: 'What are your monthly pet-related costs?',
        subtitle: 'Include food, grooming, medical treatments, toys, medicines',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 247,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyEntertainment',
        title: 'What are your monthly costs for movies, concerts, shows, museums, sporting events?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 248,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHobbies',
        title: 'What are your monthly hobby costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 249,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyDiningOut',
        title: 'What are your monthly costs for eating out, ordering food, partying, drinking out, coffee outside?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 250,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyAlcoholHome',
        title: 'What are your monthly costs for alcohol ordered at home?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 251,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyTobacco',
        title: 'What are your monthly costs for cigarettes, vaping, tobacco use?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 252,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyMedication',
        title: 'What are your monthly medication and treatment costs not covered by insurance?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 253,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHealthcare',
        title: 'What are your monthly costs for health exams, tests, dental treatment, eyeglasses not covered by insurance?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 254,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyEducation',
        title: 'What are your monthly college/course fees for yourself or partner?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 255,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyVisitingHome',
        title: 'What are your monthly costs for visiting home (if staying away from family)?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 256,
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyMiscellaneous',
        title: 'What are your other miscellaneous monthly expenses not covered above?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 257,
        groupId: 'monthly-expenses'
      }
    ]
  },
  // Group 9: Annual Expenses  
  {
    id: 'annual-expenses',
    title: 'Annual Expenses',
    description: 'Your yearly or occasional expenses',
    questions: [
      {
        id: 'annualHomeDecor',
        title: 'What are your annual costs for home decor, furniture, furnishings, linen?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 258,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualElectronics',
        title: 'What are your annual costs for gadgets, computers, electronics, home appliances (except mobile phone)?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 259,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualMobileHandset',
        title: 'What do you spend annually on new mobile handsets?',
        subtitle: 'If you buy once every 2 years, divide the cost by 2',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 260,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualHolidays',
        title: 'What are your annual costs for holidays and vacations?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 261,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualGifts',
        title: 'What are your annual estimated costs for gifts to partner/friends/family?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 262,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualFitnessMemberships',
        title: 'What are your annual costs for gym/fitness memberships, sports club fees?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 263,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualProfessionalMemberships',
        title: 'What are your annual costs for professional networking, association memberships?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 264,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualDonations',
        title: 'What are your annual charitable donations/religious contributions?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 265,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualProfessionalServices',
        title: 'What are your annual costs for legal/accounting/professional services, tax preparation?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 266,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualHomeSecurity',
        title: 'What are your annual costs for home security systems/services?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 267,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualProfessionalDevelopment',
        title: 'What are your annual costs for professional development, courses, certifications?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 268,
        groupId: 'annual-expenses'
      },
      {
        id: 'annualMiscellaneous',
        title: 'What are your other annual miscellaneous expenses not covered above?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 269,
        groupId: 'annual-expenses'
      }
    ]
  },

  // Group 9: Investment Contributions
  {
    id: 'investment-contributions',
    title: 'Investment Contributions',
    description: 'Your monthly and annual investment contributions',
    questions: [
      // Section A: Monthly Investment Contributions
      {
        id: 'monthlySipContributions',
        title: 'What are your monthly systematic investment plan (SIP) contributions to mutual funds?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 270,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyDirectEquity',
        title: 'What are your monthly direct equity purchases?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 271,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyRetirementContributions',
        title: 'What are your monthly retirement savings contributions?',
        subtitle: 'Include workplace pension schemes like 401k in US, EPF in India, occupational pensions in Europe, superannuation in Australia, etc.',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 272,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyFixedDeposits',
        title: 'What are your monthly fixed deposit or term deposit contributions?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 273,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlySavingsGoals',
        title: 'What are your monthly savings account deposits for investment purposes or saving for goals?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 274,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyCryptoPurchases',
        title: 'What are your monthly cryptocurrency purchases?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 275,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyCommodityInvestments',
        title: 'What are your monthly gold, silver or other commodity investments?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 276,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyBondContributions',
        title: 'What are your monthly contributions to investment bonds or structured products?',
        type: 'number',
        required: true,
        section: 'Monthly Investment Contributions',
        questionNumber: 277,
        groupId: 'investment-contributions'
      },
      
      // Section B: Annual Investment Contributions
      {
        id: 'annualRetirementLumpsum',
        title: 'What are your annual lump sum contributions to retirement accounts?',
        type: 'number',
        required: true,
        section: 'Annual Investment Contributions',
        questionNumber: 278,
        groupId: 'investment-contributions'
      },
      {
        id: 'annualTaxAdvantagedInvestments',
        title: 'What are your annual tax-advantaged investment contributions?',
        subtitle: 'Include ELSS in India, ISA in UK, Roth IRA in US, etc.',
        type: 'number',
        required: true,
        section: 'Annual Investment Contributions',
        questionNumber: 279,
        groupId: 'investment-contributions'
      },
      {
        id: 'annualBondPurchases',
        title: 'What are your annual government or corporate bond purchases?',
        type: 'number',
        required: true,
        section: 'Annual Investment Contributions',
        questionNumber: 280,
        groupId: 'investment-contributions'
      },
      {
        id: 'annualMiscellaneousInvestments',
        title: 'What are your annual miscellaneous investment contributions not covered above?',
        type: 'number',
        required: true,
        section: 'Annual Investment Contributions',
        questionNumber: 281,
        groupId: 'investment-contributions'
      }
    ]
  }
];
