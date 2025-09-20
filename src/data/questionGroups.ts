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
      },
      {
        id: 'retiredYear',
        title: 'What year did you retire?',
        type: 'select',
        required: true,
        options: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', 'Not applicable'],
        section: 'Personal Information',
        questionNumber: 20,
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
    triggerQuestions: ['q15'],
    questions: [
      {
        id: 'q21',
        title: 'Do you own or rent your primary residence?',
        type: 'radio',
        required: true,
        options: ['Own with mortgage', 'Own outright', 'Rent', 'Other arrangement'],
        section: 'Housing',
        questionNumber: 21,
        groupId: 'housing'
      },
      {
        id: 'q22',
        title: 'What is the estimated current value of your property?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 22,
        groupId: 'housing'
      },
      {
        id: 'q23',
        title: 'What is your monthly mortgage payment?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 23,
        groupId: 'housing'
      },
      {
        id: 'q24',
        title: 'What is your outstanding mortgage balance?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 24,
        groupId: 'housing'
      },
      {
        id: 'q25',
        title: 'What is your monthly rent payment?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 25,
        groupId: 'housing'
      },
      {
        id: 'q26',
        title: 'What are your monthly council tax/property taxes?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 26,
        groupId: 'housing'
      },
      {
        id: 'q27',
        title: 'What are your monthly home insurance costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 27,
        groupId: 'housing'
      },
      {
        id: 'q28',
        title: 'What are your monthly utilities costs (gas, electricity, water)?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 28,
        groupId: 'housing'
      },
      {
        id: 'q29',
        title: 'What are your monthly home maintenance/repair costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 29,
        groupId: 'housing'
      },
      {
        id: 'q30',
        title: 'What are your monthly internet/broadband costs?',
        type: 'number',
        required: false,
        section: 'Housing',
        questionNumber: 30,
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
        questionNumber: 141,
        groupId: 'income'
      },
      {
        id: 'q142',
        title: 'What is your net monthly salary/wage (after tax)?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 142,
        groupId: 'income'
      },
      {
        id: 'q143',
        title: 'Do you receive any bonuses or commission?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 143,
        groupId: 'income'
      },
      {
        id: 'q144',
        title: 'What is your average annual bonus/commission?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 144,
        groupId: 'income'
      },
      {
        id: 'q145',
        title: 'Do you have any freelance/side income?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 145,
        groupId: 'income'
      },
      {
        id: 'q146',
        title: 'What is your monthly freelance/side income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 146,
        groupId: 'income'
      },
      {
        id: 'q147',
        title: 'Do you receive any investment income (dividends, interest, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 147,
        groupId: 'income'
      },
      {
        id: 'q148',
        title: 'What is your monthly investment income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 148,
        groupId: 'income'
      },
      {
        id: 'q149',
        title: 'Do you receive any government benefits or pensions?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Income',
        questionNumber: 149,
        groupId: 'income'
      },
      {
        id: 'q150',
        title: 'What is your monthly benefits/pension income?',
        type: 'number',
        required: false,
        section: 'Income',
        questionNumber: 150,
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
        questionNumber: 151,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyParkingCosts',
        title: 'What are your total monthly parking costs?',
        type: 'number',
        required: true,
        section: 'Vehicle Expenses',
        questionNumber: 152,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyMaintenanceCosts',
        title: 'What are your average monthly maintenance costs for all vehicles?',
        type: 'number',
        required: true,
        section: 'Vehicle Expenses',
        questionNumber: 153,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1Type',
        title: 'Vehicle 1: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle', 'Truck', 'SUV', 'Van', 'Other'],
        section: 'Vehicle Basics',
        questionNumber: 154,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1PurchasePrice',
        title: 'Vehicle 1: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 155,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1CurrentValue',
        title: 'Vehicle 1: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 156,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2Type',
        title: 'Vehicle 2: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle', 'Truck', 'SUV', 'Van', 'Other'],
        section: 'Vehicle Basics',
        questionNumber: 157,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2PurchasePrice',
        title: 'Vehicle 2: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 158,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2CurrentValue',
        title: 'Vehicle 2: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Basics',
        questionNumber: 159,
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
        questionNumber: 57,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 58,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePeriod',
        title: 'Vehicle 1: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 59,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1HasLoan',
        title: 'Vehicle 1: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 60,
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
        questionNumber: 61,
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
        questionNumber: 62,
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
        questionNumber: 63,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsuranceCover',
        title: 'Vehicle 2: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 64,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance & Loans',
        questionNumber: 65,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePeriod',
        title: 'Vehicle 2: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 66,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2HasLoan',
        title: 'Vehicle 2: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance & Loans',
        questionNumber: 67,
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
        questionNumber: 68,
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
        questionNumber: 69,
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
        questionNumber: 70,
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
        questionNumber: 71,
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
        questionNumber: 72,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyClothing',
        title: 'Child 1: What are your monthly expenses for clothing, shoes',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 73,
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
        questionNumber: 74,
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
        questionNumber: 75,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyActivities',
        title: 'Child 1: Monthly expense for hobbies, sports, extra curricular activities',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 76,
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
        questionNumber: 77,
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
        questionNumber: 78,
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
        questionNumber: 79,
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
        questionNumber: 80,
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
        questionNumber: 81,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMedical',
        title: 'Child 1: Monthly expenses for your child\'s medical expenses, treatments, medicines',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 82,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMiscellaneous',
        title: 'Child 1: Miscellaneous monthly expenses',
        type: 'number',
        required: true,
        section: 'Children',
        questionNumber: 83,
        groupId: 'children'
      },
      {
        id: 'child1HealthInsurance',
        title: 'Child 1: Do you have health insurance that covers your child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Children',
        questionNumber: 84,
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
        questionNumber: 85,
        groupId: 'children'
      },
      {
        id: 'child1InsurancePremium',
        title: 'Child 1: What is the annual premium you\'re paying for this?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'child1HealthInsurance',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 86,
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
        questionNumber: 87,
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
        questionNumber: 88,
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
        questionNumber: 89,
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
        questionNumber: 90,
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
        questionNumber: 91,
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
        questionNumber: 92,
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
        questionNumber: 93,
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
        questionNumber: 94,
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
        questionNumber: 95,
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
        questionNumber: 96,
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
        questionNumber: 97,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyMedical',
        title: 'Child 2: Monthly expenses for your child\'s medical expenses, treatments, medicines',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children',
        questionNumber: 98,
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
        questionNumber: 99,
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
        questionNumber: 100,
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
        questionNumber: 101,
        groupId: 'children'
      },
      {
        id: 'child2InsurancePremium',
        title: 'Child 2: What is the annual premium you\'re paying for this?',
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
        questionNumber: 102,
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
        questionNumber: 103,
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
        questionNumber: 104,
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
        questionNumber: 105,
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
        questionNumber: 106,
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
        questionNumber: 107,
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
        questionNumber: 108,
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
        questionNumber: 109,
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
        questionNumber: 110,
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
        questionNumber: 111,
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
        questionNumber: 112,
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
        questionNumber: 113,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyMedical',
        title: 'Child 3: Monthly expenses for your child\'s medical expenses, treatments, medicines',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children',
        questionNumber: 114,
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
        questionNumber: 115,
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
        questionNumber: 116,
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
        questionNumber: 117,
        groupId: 'children'
      },
      {
        id: 'child3InsurancePremium',
        title: 'Child 3: What is the annual premium you\'re paying for this?',
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
        questionNumber: 118,
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
        questionNumber: 119,
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
        questionNumber: 120,
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
        questionNumber: 121,
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
        questionNumber: 122,
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
        questionNumber: 123,
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
        questionNumber: 124,
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
        questionNumber: 125,
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
        questionNumber: 126,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsurancePremium',
        title: 'Dependent 1: What is the annual premium you\'re paying for this?',
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
        questionNumber: 127,
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
        questionNumber: 128,
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
        questionNumber: 129,
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
        questionNumber: 130,
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
        questionNumber: 131,
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
        questionNumber: 132,
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
        questionNumber: 133,
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
        questionNumber: 134,
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
        questionNumber: 135,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsurancePremium',
        title: 'Dependent 2: What is the annual premium you\'re paying for this?',
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
        questionNumber: 136,
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
        questionNumber: 137,
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
        questionNumber: 138,
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
        questionNumber: 139,
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
        questionNumber: 140,
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
        questionNumber: 141,
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
        questionNumber: 142,
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
        questionNumber: 143,
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
        questionNumber: 144,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3InsurancePremium',
        title: 'Dependent 3: What is the annual premium you\'re paying for this?',
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
        questionNumber: 145,
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
        questionNumber: 146,
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
        questionNumber: 147,
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
        questionNumber: 148,
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
        questionNumber: 149,
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
        questionNumber: 150,
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
        questionNumber: 151,
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
        questionNumber: 152,
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
        questionNumber: 153,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4InsurancePremium',
        title: 'Dependent 4: What is the annual premium you\'re paying for this?',
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
        questionNumber: 154,
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
        questionNumber: 155,
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
        questionNumber: 156,
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
        questionNumber: 157,
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
        questionNumber: 158,
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
        questionNumber: 159,
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
        questionNumber: 160,
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
        questionNumber: 161,
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
        questionNumber: 162,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5InsurancePremium',
        title: 'Dependent 5: What is the annual premium you\'re paying for this?',
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
        questionNumber: 163,
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
        questionNumber: 164,
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
        questionNumber: 165,
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
        questionNumber: 166,
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
        questionNumber: 167,
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
        questionNumber: 168,
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
        questionNumber: 169,
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
        questionNumber: 170,
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
        questionNumber: 171,
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
        questionNumber: 172,
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
        questionNumber: 173,
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
        questionNumber: 174,
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
        questionNumber: 175,
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
        questionNumber: 176,
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
        questionNumber: 177,
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
        questionNumber: 178,
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
        questionNumber: 179,
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
        questionNumber: 180,
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
        questionNumber: 181,
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
        questionNumber: 182,
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
        questionNumber: 183,
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
        questionNumber: 184,
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
        questionNumber: 185,
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
        questionNumber: 186,
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
        questionNumber: 187,
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
        questionNumber: 188,
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
        questionNumber: 189,
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
        questionNumber: 190,
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
        questionNumber: 191,
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
        questionNumber: 192,
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
        questionNumber: 193,
        groupId: 'personal-loans'
      }
    ]
  }
];