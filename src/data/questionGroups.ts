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
  };
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
        title: 'Do you have kids?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 14,
        groupId: 'personal-basics'
      },
      {
        id: 'hasFinancialDependents',
        title: 'Do you have any other financial dependents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 15,
        groupId: 'personal-basics'
      },
      {
        id: 'hasPersonalLoans',
        title: 'Do you have any personal loans apart from home and vehicle loans?',
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
    description: 'Detailed insurance and loan information for each vehicle',
    conditional: true,
    questions: [
      {
        id: 'vehicle1HasInsurance',
        title: 'Vehicle 1: Do you have insurance for this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance',
        questionNumber: 160,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsuranceCover',
        title: 'Vehicle 1: What is the coverage amount of insurance for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance',
        questionNumber: 161,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance',
        questionNumber: 162,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePeriod',
        title: 'Vehicle 1: How often do you pay this premium?',
        type: 'select',
        required: true,
        options: ['Monthly', 'Quarterly', 'Semi-annually', 'Annually'],
        section: 'Vehicle Insurance',
        questionNumber: 163,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1HasLoan',
        title: 'Vehicle 1: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Loans',
        questionNumber: 164,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1OriginalLoanAmount',
        title: 'Vehicle 1: What was the original loan amount for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 165,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1OutstandingLoan',
        title: 'Vehicle 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 166,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanInterestRate',
        title: 'Vehicle 1: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 167,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1MonthlyEMI',
        title: 'Vehicle 1: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 168,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2HasInsurance',
        title: 'Vehicle 2: Do you have insurance for this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Insurance',
        questionNumber: 169,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsuranceCover',
        title: 'Vehicle 2: What is the coverage amount of insurance for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance',
        questionNumber: 170,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Insurance',
        questionNumber: 171,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePeriod',
        title: 'Vehicle 2: How often do you pay this premium?',
        type: 'select',
        required: true,
        options: ['Monthly', 'Quarterly', 'Semi-annually', 'Annually'],
        section: 'Vehicle Insurance',
        questionNumber: 172,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2HasLoan',
        title: 'Vehicle 2: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Vehicle Loans',
        questionNumber: 173,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2OriginalLoanAmount',
        title: 'Vehicle 2: What was the original loan amount for this vehicle?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 174,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2OutstandingLoan',
        title: 'Vehicle 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 175,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanInterestRate',
        title: 'Vehicle 2: What is the interest rate on this loan (in percentage)?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 176,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2MonthlyEMI',
        title: 'Vehicle 2: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        section: 'Vehicle Loans',
        questionNumber: 177,
        groupId: 'vehicles-insurance-loans'
      }
    ]
  }
];