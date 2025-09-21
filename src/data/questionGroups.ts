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
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
        questionNumber: 20,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalDeposit',
        title: 'What was your total rental deposit amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
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
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
        questionNumber: 22,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsuranceCover',
        title: 'What is the total coverage amount of your rental insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
        questionNumber: 23,
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsurancePremium',
        title: 'What is your annual rental insurance premium?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
        questionNumber: 24,
        groupId: 'rental-housing'
      },
      {
        id: 'buildingMaintenanceFees',
        title: 'Do you pay any building maintenance or society fees monthly?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
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
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
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
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 27,
        groupId: 'owned-properties'
      },
      {
        id: 'home1CurrentValue',
        title: 'Home 1: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
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
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 29,
        groupId: 'owned-properties'
      },
      {
        id: 'home1OriginalLoanAmount',
        title: 'Home 1: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 30,
        groupId: 'owned-properties'
      },
      {
        id: 'home1OutstandingLoan',
        title: 'Home 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 31,
        groupId: 'owned-properties'
      },
      {
        id: 'home1LoanInterestRate',
        title: 'Home 1: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 32,
        groupId: 'owned-properties'
      },
      {
        id: 'home1RemainingTenure',
        title: 'Home 1: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 33,
        groupId: 'owned-properties'
      },
      {
        id: 'home1MonthlyPayment',
        title: 'Home 1: What is your monthly EMI/loan payment?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 34,
        groupId: 'owned-properties'
      },
      {
        id: 'home1PropertyTax',
        title: 'Home 1: What is your annual property tax?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 35,
        groupId: 'owned-properties'
      },
      {
        id: 'home1MaintenanceFees',
        title: 'Home 1: What are your monthly building maintenance or society fees?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 36,
        groupId: 'owned-properties'
      },
      {
        id: 'home1Insurance',
        title: 'Home 1: Do you have home insurance for this property?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 37,
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsuranceCover',
        title: 'Home 1: What is the total coverage amount of your home insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 38,
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsurancePremium',
        title: 'Home 1: What is your annual home insurance premium?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        questionNumber: 39,
        groupId: 'owned-properties'
      },
      
      // Home 2 Questions
      {
        id: 'home2PurchasePrice',
        title: 'Home 2: What was the purchase price of this property?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 40,
        groupId: 'owned-properties'
      },
      {
        id: 'home2CurrentValue',
        title: 'Home 2: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 41,
        groupId: 'owned-properties'
      },
      {
        id: 'home2HasLoan',
        title: 'Home 2: Do you have a loan on this property?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 42,
        groupId: 'owned-properties'
      },
      {
        id: 'home2OriginalLoanAmount',
        title: 'Home 2: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 43,
        groupId: 'owned-properties'
      },
      {
        id: 'home2OutstandingLoan',
        title: 'Home 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 44,
        groupId: 'owned-properties'
      },
      {
        id: 'home2LoanInterestRate',
        title: 'Home 2: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 45,
        groupId: 'owned-properties'
      },
      {
        id: 'home2RemainingTenure',
        title: 'Home 2: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 46,
        groupId: 'owned-properties'
      },
      {
        id: 'home2MonthlyPayment',
        title: 'Home 2: What is your monthly EMI/loan payment?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 47,
        groupId: 'owned-properties'
      },
      {
        id: 'home2PropertyTax',
        title: 'Home 2: What is your annual property tax?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 48,
        groupId: 'owned-properties'
      },
      {
        id: 'home2MaintenanceFees',
        title: 'Home 2: What are your monthly building maintenance or society fees?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 49,
        groupId: 'owned-properties'
      },
      {
        id: 'home2Insurance',
        title: 'Home 2: Do you have home insurance for this property?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 50,
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsuranceCover',
        title: 'Home 2: What is the total coverage amount of your home insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 51,
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsurancePremium',
        title: 'Home 2: What is your annual home insurance premium?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        questionNumber: 52,
        groupId: 'owned-properties'
      }
    ]
  },
  {
    id: 'vehicles-common',
    title: 'Vehicle Expenses & Basics',
    description: 'Vehicle expenses that apply to all vehicles',
    conditional: true,
    questions: [
      {
        id: 'monthlyFuelExpenses',
        title: 'What are your total monthly fuel/petrol/diesel expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Expenses',
        questionNumber: 53,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyVehicleMaintenance',
        title: 'What are your total monthly vehicle maintenance expenses?',
        subtitle: 'Include servicing, repairs, car wash, etc.',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Expenses',
        questionNumber: 54,
        groupId: 'vehicles-common'
      },
      {
        id: 'monthlyParkingTolls',
        title: 'What are your total monthly parking and toll expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Expenses',
        questionNumber: 55,
        groupId: 'vehicles-common'
      },
      {
        id: 'annualVehicleRegistration',
        title: 'What are your total annual vehicle registration and licensing fees?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Expenses',
        questionNumber: 56,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1Type',
        title: 'Vehicle 1: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle/Scooter', 'Truck', 'Van', 'SUV', 'Other'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 57,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1PurchasePrice',
        title: 'Vehicle 1: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 58,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1CurrentValue',
        title: 'Vehicle 1: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 59,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle1HasLoan',
        title: 'Vehicle 1: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 60,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2Type',
        title: 'Vehicle 2: What type of vehicle is this?',
        type: 'select',
        required: true,
        options: ['Car', 'Motorcycle/Scooter', 'Truck', 'Van', 'SUV', 'Other'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 61,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2PurchasePrice',
        title: 'Vehicle 2: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 62,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2CurrentValue',
        title: 'Vehicle 2: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 63,
        groupId: 'vehicles-common'
      },
      {
        id: 'vehicle2HasLoan',
        title: 'Vehicle 2: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Details',
        questionNumber: 64,
        groupId: 'vehicles-common'
      }
    ]
  },
  {
    id: 'vehicles-insurance-loans',
    title: 'Vehicle Insurance & Loans',
    description: 'Insurance and loan details for your vehicles',
    conditional: true,
    questions: [
      {
        id: 'vehicle1Insurance',
        title: 'Vehicle 1: Do you have insurance for this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Insurance',
        questionNumber: 65,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your annual vehicle insurance premium?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Vehicle Insurance',
        questionNumber: 66,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanOriginalAmount',
        title: 'Vehicle 1: What was the original loan amount for this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 67,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanOutstanding',
        title: 'Vehicle 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 68,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanInterestRate',
        title: 'Vehicle 1: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 69,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanRemainingTenure',
        title: 'Vehicle 1: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 70,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle1LoanMonthlyPayment',
        title: 'Vehicle 1: What is your monthly EMI/loan payment?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 71,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2Insurance',
        title: 'Vehicle 2: Do you have insurance for this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Insurance',
        questionNumber: 72,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your annual vehicle insurance premium?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['2', '3', '4 or more']
        },
        section: 'Vehicle Insurance',
        questionNumber: 73,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanOriginalAmount',
        title: 'Vehicle 2: What was the original loan amount for this vehicle?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 74,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanOutstanding',
        title: 'Vehicle 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 75,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanInterestRate',
        title: 'Vehicle 2: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 76,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanRemainingTenure',
        title: 'Vehicle 2: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 77,
        groupId: 'vehicles-insurance-loans'
      },
      {
        id: 'vehicle2LoanMonthlyPayment',
        title: 'Vehicle 2: What is your monthly EMI/loan payment?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Loans',
        questionNumber: 78,
        groupId: 'vehicles-insurance-loans'
      }
    ]
  },
  {
    id: 'children',
    title: 'Children',
    description: 'Information about your children',
    conditional: true,
    questions: [
      {
        id: 'child1Age',
        title: 'Child 1: What is their current age?',
        type: 'select',
        required: true,
        options: ['0-2', '3-5', '6-12', '13-18', '19+'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 79,
        groupId: 'children'
      },
      {
        id: 'child1EducationExpenses',
        title: 'Child 1: What are their annual education expenses?',
        subtitle: 'Include school fees, tuition, books, activities',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 80,
        groupId: 'children'
      },
      {
        id: 'child1HealthInsurance',
        title: 'Child 1: Do you have health insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 81,
        groupId: 'children'
      },
      {
        id: 'child1HealthInsuranceCover',
        title: 'Child 1: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'child1HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 82,
        groupId: 'children'
      },
      {
        id: 'child1InsurancePremium',
        title: "Child 1: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'child1HealthInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 83,
        groupId: 'children'
      },
      {
        id: 'child1LifeInsurance',
        title: 'Child 1: Do you have life insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 84,
        groupId: 'children'
      },
      {
        id: 'child1LifeInsuranceCover',
        title: 'Child 1: What is the coverage amount of their life insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'child1LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 85,
        groupId: 'children'
      },
      {
        id: 'child1LifeInsurancePremium',
        title: "Child 1: What is the annual life insurance premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['1', '2', '3 or more']
          },
          {
            dependsOn: 'child1LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 86,
        groupId: 'children'
      },
      {
        id: 'child2Age',
        title: 'Child 2: What is their current age?',
        type: 'select',
        required: true,
        options: ['0-2', '3-5', '6-12', '13-18', '19+'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 87,
        groupId: 'children'
      },
      {
        id: 'child2EducationExpenses',
        title: 'Child 2: What are their annual education expenses?',
        subtitle: 'Include school fees, tuition, books, activities',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 88,
        groupId: 'children'
      },
      {
        id: 'child2HealthInsurance',
        title: 'Child 2: Do you have health insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 89,
        groupId: 'children'
      },
      {
        id: 'child2HealthInsuranceCover',
        title: 'Child 2: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        section: 'Children Details',
        questionNumber: 90,
        groupId: 'children'
      },
      {
        id: 'child2InsurancePremium',
        title: "Child 2: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        section: 'Children Details',
        questionNumber: 91,
        groupId: 'children'
      },
      {
        id: 'child2LifeInsurance',
        title: 'Child 2: Do you have life insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 92,
        groupId: 'children'
      },
      {
        id: 'child2LifeInsuranceCover',
        title: 'Child 2: What is the coverage amount of their life insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 93,
        groupId: 'children'
      },
      {
        id: 'child2LifeInsurancePremium',
        title: "Child 2: What is the annual life insurance premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['2', '3 or more']
          },
          {
            dependsOn: 'child2LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 94,
        groupId: 'children'
      },
      {
        id: 'child3Age',
        title: 'Child 3: What is their current age?',
        type: 'select',
        required: true,
        options: ['0-2', '3-5', '6-12', '13-18', '19+'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 95,
        groupId: 'children'
      },
      {
        id: 'child3EducationExpenses',
        title: 'Child 3: What are their annual education expenses?',
        subtitle: 'Include school fees, tuition, books, activities',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 96,
        groupId: 'children'
      },
      {
        id: 'child3HealthInsurance',
        title: 'Child 3: Do you have health insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 97,
        groupId: 'children'
      },
      {
        id: 'child3HealthInsuranceCover',
        title: 'Child 3: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        section: 'Children Details',
        questionNumber: 98,
        groupId: 'children'
      },
      {
        id: 'child3InsurancePremium',
        title: "Child 3: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        section: 'Children Details',
        questionNumber: 99,
        groupId: 'children'
      },
      {
        id: 'child3LifeInsurance',
        title: 'Child 3: Do you have life insurance for this child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 100,
        groupId: 'children'
      },
      {
        id: 'child3LifeInsuranceCover',
        title: 'Child 3: What is the coverage amount of their life insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 101,
        groupId: 'children'
      },
      {
        id: 'child3LifeInsurancePremium',
        title: "Child 3: What is the annual life insurance premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasChildren',
            values: ['3 or more']
          },
          {
            dependsOn: 'child3LifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Children Details',
        questionNumber: 102,
        groupId: 'children'
      },
      
      // Additional Child 1 Detailed Expenses
      {
        id: 'child1MonthlyChildcare',
        title: 'Child 1: What are your monthly childcare/daycare expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 103,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyClothing',
        title: 'Child 1: What are your monthly clothing and shoes expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 104,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyToys',
        title: 'Child 1: What are your monthly toys and entertainment expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 105,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyActivities',
        title: 'Child 1: What are your monthly activities/sports/hobbies expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 106,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMedical',
        title: 'Child 1: What are your monthly medical expenses not covered by insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 107,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyFood',
        title: 'Child 1: What are your monthly special food/formula expenses?',
        subtitle: 'Baby formula, special dietary needs',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 108,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyTransport',
        title: 'Child 1: What are your monthly school transport expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 109,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyTutoring',
        title: 'Child 1: What are your monthly tutoring/coaching expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 110,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyBooks',
        title: 'Child 1: What are your monthly books and educational materials expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 111,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMiscellaneous',
        title: 'Child 1: What are your other monthly expenses for this child?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['1', '2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 112,
        groupId: 'children'
      },

      // Additional Child 2 Detailed Expenses
      {
        id: 'child2MonthlyChildcare',
        title: 'Child 2: What are your monthly childcare/daycare expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 113,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyClothing',
        title: 'Child 2: What are your monthly clothing and shoes expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 114,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyToys',
        title: 'Child 2: What are your monthly toys and entertainment expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 115,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyActivities',
        title: 'Child 2: What are your monthly activities/sports/hobbies expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 116,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyMedical',
        title: 'Child 2: What are your monthly medical expenses not covered by insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 117,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyFood',
        title: 'Child 2: What are your monthly special food/formula expenses?',
        subtitle: 'Baby formula, special dietary needs',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 118,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyTransport',
        title: 'Child 2: What are your monthly school transport expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 119,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyTutoring',
        title: 'Child 2: What are your monthly tutoring/coaching expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 120,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyBooks',
        title: 'Child 2: What are your monthly books and educational materials expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 121,
        groupId: 'children'
      },
      {
        id: 'child2MonthlyMiscellaneous',
        title: 'Child 2: What are your other monthly expenses for this child?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['2', '3 or more']
        },
        section: 'Children Details',
        questionNumber: 122,
        groupId: 'children'
      },

      // Additional Child 3 Detailed Expenses
      {
        id: 'child3MonthlyChildcare',
        title: 'Child 3: What are your monthly childcare/daycare expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 123,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyClothing',
        title: 'Child 3: What are your monthly clothing and shoes expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 124,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyToys',
        title: 'Child 3: What are your monthly toys and entertainment expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 125,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyActivities',
        title: 'Child 3: What are your monthly activities/sports/hobbies expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 126,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyMedical',
        title: 'Child 3: What are your monthly medical expenses not covered by insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 127,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyFood',
        title: 'Child 3: What are your monthly special food/formula expenses?',
        subtitle: 'Baby formula, special dietary needs',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 128,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyTransport',
        title: 'Child 3: What are your monthly school transport expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 129,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyTutoring',
        title: 'Child 3: What are your monthly tutoring/coaching expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 130,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyBooks',
        title: 'Child 3: What are your monthly books and educational materials expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 131,
        groupId: 'children'
      },
      {
        id: 'child3MonthlyMiscellaneous',
        title: 'Child 3: What are your other monthly expenses for this child?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['3 or more']
        },
        section: 'Children Details',
        questionNumber: 132,
        groupId: 'children'
      }
    ]
  },
  {
    id: 'financial-dependents',
    title: 'Financial Dependents',
    description: 'Information about your financial dependents',
    conditional: true,
    questions: [
      {
        id: 'dependent1Relationship',
        title: "Dependent 1: What's their relationship to you?",
        type: 'select',
        required: true,
        options: ['Parent', 'Grandparent', 'Sibling', 'Spouse/Partner', 'Other family member', 'Other'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 133,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1HealthExpenses',
        title: 'Dependent 1: What are your monthly health-related expenses not covered by insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 134,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1MedicalCosts',
        title: 'Dependent 1: What are your monthly costs for medicines and treatments?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 135,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1LivingExpenses',
        title: 'Dependent 1: What monthly living expenses do you cover (rent, groceries, utilities)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 136,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1MonthlySupport',
        title: 'Dependent 1: How much monthly financial support do you provide?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 137,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1HealthInsurance',
        title: 'Dependent 1: Do you have health insurance for this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 138,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1HealthInsuranceCover',
        title: 'Dependent 1: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 139,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsurancePremium',
        title: "Dependent 1: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 140,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2Relationship',
        title: "Dependent 2: What's their relationship to you?",
        type: 'select',
        required: true,
        options: ['Parent', 'Grandparent', 'Sibling', 'Spouse/Partner', 'Other family member', 'Other'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 141,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2MonthlySupport',
        title: 'Dependent 2: How much monthly financial support do you provide?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 142,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2HealthInsurance',
        title: 'Dependent 2: Do you have health insurance for this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 143,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2HealthInsuranceCover',
        title: 'Dependent 2: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 144,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsurancePremium',
        title: "Dependent 2: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 145,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3Relationship',
        title: "Dependent 3: What's their relationship to you?",
        type: 'select',
        required: true,
        options: ['Parent', 'Grandparent', 'Sibling', 'Spouse/Partner', 'Other family member', 'Other'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 146,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3MonthlySupport',
        title: 'Dependent 3: How much monthly financial support do you provide?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 147,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3HealthInsurance',
        title: 'Dependent 3: Do you have health insurance for this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 148,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3HealthInsuranceCover',
        title: 'Dependent 3: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 149,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3InsurancePremium',
        title: "Dependent 3: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 150,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4Relationship',
        title: "Dependent 4: What's their relationship to you?",
        type: 'select',
        required: true,
        options: ['Parent', 'Grandparent', 'Sibling', 'Spouse/Partner', 'Other family member', 'Other'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 151,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4MonthlySupport',
        title: 'Dependent 4: How much monthly financial support do you provide?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 152,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4HealthInsurance',
        title: 'Dependent 4: Do you have health insurance for this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 153,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4HealthInsuranceCover',
        title: 'Dependent 4: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
      {
        id: 'dependent4InsurancePremium',
        title: "Dependent 4: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 155,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5Relationship',
        title: "Dependent 5: What's their relationship to you?",
        type: 'select',
        required: true,
        options: ['Parent', 'Grandparent', 'Sibling', 'Spouse/Partner', 'Other family member', 'Other'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 156,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5MonthlySupport',
        title: 'Dependent 5: How much monthly financial support do you provide?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 157,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5HealthInsurance',
        title: 'Dependent 5: Do you have health insurance for this dependent?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 158,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5HealthInsuranceCover',
        title: 'Dependent 5: What is the coverage amount of their health insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 159,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5InsurancePremium',
        title: "Dependent 5: What is the annual premium you're paying for this?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
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
        questionNumber: 160,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1EducationCosts',
        title: 'Dependent 1: What are your monthly education costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 161,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1TransportCosts',
        title: 'Dependent 1: What are your monthly transport costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 162,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2EducationCosts',
        title: 'Dependent 2: What are your monthly education costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 163,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2TransportCosts',
        title: 'Dependent 2: What are your monthly transport costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 164,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3EducationCosts',
        title: 'Dependent 3: What are your monthly education costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 165,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent3TransportCosts',
        title: 'Dependent 3: What are your monthly transport costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 166,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4EducationCosts',
        title: 'Dependent 4: What are your monthly education costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 167,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent4TransportCosts',
        title: 'Dependent 4: What are your monthly transport costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 168,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5EducationCosts',
        title: 'Dependent 5: What are your monthly education costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 169,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent5TransportCosts',
        title: 'Dependent 5: What are your monthly transport costs for this dependent?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 170,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentEmergencyFund',
        title: 'Do you maintain an emergency fund for your dependents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 171,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentEmergencyFundAmount',
        title: 'What is the current balance of this emergency fund?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependentEmergencyFund',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 172,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentLifeInsurance',
        title: 'Do you have life insurance that covers your dependents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 173,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentLifeInsuranceCover',
        title: 'What is the total coverage amount of this life insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependentLifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 174,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentLifeInsurancePremium',
        title: 'What is the annual premium for this life insurance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependentLifeInsurance',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 175,
        groupId: 'financial-dependents'
      },
      {
        id: 'totalMonthlyDependentCost',
        title: 'What is your estimated total monthly cost for all dependents?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 176,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentSavingsGoal',
        title: 'Do you have specific savings goals for your dependents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasFinancialDependents',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Financial Dependents',
        questionNumber: 177,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependentSavingsAmount',
        title: 'What is your monthly savings target for your dependents?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: [
          {
            dependsOn: 'hasFinancialDependents',
            values: ['1', '2', '3', '4', '5 or more']
          },
          {
            dependsOn: 'dependentSavingsGoal',
            values: ['Yes']
          }
        ],
        section: 'Financial Dependents',
        questionNumber: 178,
        groupId: 'financial-dependents'
      }
    ]
  },
  {
    id: 'personal-loans',
    title: 'Personal Loans & Credit',
    description: 'Details about your personal loans and credit card debt',
    conditional: true,
    questions: [
      {
        id: 'numberOfPersonalLoans',
        title: 'How many personal loans do you currently have?',
        type: 'select',
        required: true,
        options: ['1', '2', '3', '4', '5 or more'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 179,
        groupId: 'personal-loans'
      },
      {
        id: 'hasCreditCardDebt',
        title: 'Do you have credit card debt?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 180,
        groupId: 'personal-loans'
      },

      // Credit Card Questions
      {
        id: 'creditCardOutstanding',
        title: 'What is your total outstanding credit card balance?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 181,
        groupId: 'personal-loans'
      },
      {
        id: 'creditCardInterestRate',
        title: 'What is the average interest rate on your credit cards (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 182,
        groupId: 'personal-loans'
      },
      {
        id: 'creditCardMinimumPayment',
        title: 'What is your total monthly minimum payment on credit cards?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'hasCreditCardDebt',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 183,
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
        questionNumber: 184,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1OriginalAmount',
        title: 'Personal Loan 1: What was the original loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 185,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1Outstanding',
        title: 'Personal Loan 1: What is the current outstanding amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 186,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1InterestRate',
        title: 'Personal Loan 1: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 187,
        groupId: 'personal-loans'
      },
      {
        id: 'loan1RemainingTenure',
        title: 'Personal Loan 1: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['1', '2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 137,
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
        questionNumber: 138,
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
        questionNumber: 139,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2OriginalAmount',
        title: 'Personal Loan 2: What was the original loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 140,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2Outstanding',
        title: 'Personal Loan 2: What is the current outstanding amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 141,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2InterestRate',
        title: 'Personal Loan 2: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 142,
        groupId: 'personal-loans'
      },
      {
        id: 'loan2RemainingTenure',
        title: 'Personal Loan 2: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['2', '3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 143,
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
        questionNumber: 144,
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
        questionNumber: 145,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3OriginalAmount',
        title: 'Personal Loan 3: What was the original loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 146,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3Outstanding',
        title: 'Personal Loan 3: What is the current outstanding amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 147,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3InterestRate',
        title: 'Personal Loan 3: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 148,
        groupId: 'personal-loans'
      },
      {
        id: 'loan3RemainingTenure',
        title: 'Personal Loan 3: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['3', '4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 149,
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
        questionNumber: 150,
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
        questionNumber: 151,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4OriginalAmount',
        title: 'Personal Loan 4: What was the original loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 152,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4Outstanding',
        title: 'Personal Loan 4: What is the current outstanding amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 153,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4InterestRate',
        title: 'Personal Loan 4: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 154,
        groupId: 'personal-loans'
      },
      {
        id: 'loan4RemainingTenure',
        title: 'Personal Loan 4: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['4', '5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 155,
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
        questionNumber: 156,
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
        questionNumber: 157,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5OriginalAmount',
        title: 'Personal Loan 5: What was the original loan amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 158,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5Outstanding',
        title: 'Personal Loan 5: What is the current outstanding amount?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 159,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5InterestRate',
        title: 'Personal Loan 5: What is the interest rate on this loan (in percentage)?',
        type: 'range',
        required: true,
        min: 0,
        max: 50,
        step: 0.1,
        defaultValue: 10,
        showValue: true,
        suffix: '%',
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Interest rate cannot be negative'
          },
          {
            type: 'max',
            value: 100,
            message: 'Interest rate cannot exceed 100%'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 160,
        groupId: 'personal-loans'
      },
      {
        id: 'loan5RemainingTenure',
        title: 'Personal Loan 5: What is the remaining loan tenure (in years)?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Tenure cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'numberOfPersonalLoans',
          values: ['5 or more']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 161,
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
        questionNumber: 213,
        groupId: 'personal-loans'
      }
    ]
  },
  {
    id: 'insurance-coverage',
    title: 'Insurance Coverage',
    description: 'Overview of your insurance policies',
    questions: [
      {
        id: 'userHealthInsurance',
        title: 'Do you have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 214,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userLifeInsurance',
        title: 'Do you have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 215,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userDisabilityInsurance',
        title: 'Do you have disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 216,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userCriticalIllnessInsurance',
        title: 'Do you have critical illness insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 217,
        groupId: 'insurance-coverage'
      },
      {
        id: 'userTravelInsurance',
        title: 'Do you regularly purchase travel insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Insurance Coverage',
        questionNumber: 218,
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerHealthInsurance',
        title: 'Does your partner have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not applicable'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: 'Insurance Coverage',
        questionNumber: 219,
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerLifeInsurance',
        title: 'Does your partner have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not applicable'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: 'Insurance Coverage',
        questionNumber: 220,
        groupId: 'insurance-coverage'
      }
    ]
  },
  {
    id: 'insurance-details',
    title: 'Insurance Details',
    description: 'Detailed information about your insurance policies',
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
        questionNumber: 170,
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
        questionNumber: 171,
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
        questionNumber: 172,
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
        questionNumber: 173,
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
        questionNumber: 174,
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
        questionNumber: 175,
        groupId: 'insurance-details'
      },
      {
        id: 'userDisabilityInsuranceCover',
        title: 'What is your total disability insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userDisabilityInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 176,
        groupId: 'insurance-details'
      },
      {
        id: 'userDisabilityInsurancePremium',
        title: 'What is your disability insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userDisabilityInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 177,
        groupId: 'insurance-details'
      },
      {
        id: 'userDisabilityInsurancePeriod',
        title: 'Disability insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'userDisabilityInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 178,
        groupId: 'insurance-details'
      },
      {
        id: 'userCriticalIllnessInsuranceCover',
        title: 'What is your total critical illness insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userCriticalIllnessInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 179,
        groupId: 'insurance-details'
      },
      {
        id: 'userCriticalIllnessInsurancePremium',
        title: 'What is your critical illness insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userCriticalIllnessInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 180,
        groupId: 'insurance-details'
      },
      {
        id: 'userCriticalIllnessInsurancePeriod',
        title: 'Critical illness insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'userCriticalIllnessInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 181,
        groupId: 'insurance-details'
      },
      {
        id: 'userTravelInsuranceSpend',
        title: 'What is your annual spending on travel insurance?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'userTravelInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 182,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsuranceCover',
        title: 'What is your partner\'s total health insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 183,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsurancePremium',
        title: 'What is your partner\'s health insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 184,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsurancePeriod',
        title: 'Partner\'s health insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 185,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsuranceCover',
        title: 'What is your partner\'s total life insurance coverage amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 186,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsurancePremium',
        title: 'What is your partner\'s life insurance premium amount?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 187,
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsurancePeriod',
        title: 'Partner\'s life insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        questionNumber: 238,
        groupId: 'insurance-details'
      }
    ]
  },
  {
    id: 'monthly-annual-expenses',
    title: 'Monthly & Annual Expenses',
    description: 'Your regular monthly living expenses and yearly costs',
    questions: [
      // Section A: Monthly Expenses (Questions 221-253)
      {
        id: 'monthlyGroceries',
        title: 'What are your monthly costs for groceries and toiletries?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 221,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyClothing',
        title: 'What are your monthly costs for clothes and shoes?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 222,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyDiningOut',
        title: 'What are your monthly dining out and food delivery costs?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 223,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyEntertainment',
        title: 'What are your monthly entertainment costs?',
        subtitle: 'Movies, concerts, events, hobbies',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 224,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlySubscriptions',
        title: 'What are your monthly subscription costs?',
        subtitle: 'Netflix, Spotify, gym, magazines, etc.',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 225,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyUtilities',
        title: 'What are your monthly utility costs?',
        subtitle: 'Electricity, water, gas, internet, phone',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 226,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyTransportation',
        title: 'What are your monthly transportation costs?',
        subtitle: 'Public transport, taxis, ride-sharing (excluding vehicle expenses)',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 227,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyHealthcare',
        title: 'What are your monthly healthcare costs?',
        subtitle: 'Doctor visits, medicines, treatments not covered by insurance',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 228,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyPersonalCare',
        title: 'What are your monthly personal care costs?',
        subtitle: 'Salon, spa, cosmetics, grooming',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 229,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyGifts',
        title: 'What are your monthly costs for gifts and donations?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 230,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyHouseholdItems',
        title: 'What are your monthly costs for household items and appliances?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 231,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyPetExpenses',
        title: 'What are your monthly pet expenses?',
        subtitle: 'Food, vet, grooming, toys',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 232,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyMiscExpenses',
        title: 'What are your other monthly miscellaneous expenses?',
        type: 'number',
        required: true,
        section: 'Monthly Expenses',
        questionNumber: 233,
        groupId: 'monthly-annual-expenses'
      },

      // Section B: Annual Expenses (Questions 234-243)
      {
        id: 'annualVacationTravel',
        title: 'What are your annual vacation and travel costs?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 234,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualTaxes',
        title: 'What are your annual income taxes (net of any refunds)?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 235,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualProfessionalDevelopment',
        title: 'What are your annual professional development costs?',
        subtitle: 'Training, courses, certifications, conferences',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 236,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualHomeRepairs',
        title: 'What are your annual home repairs and maintenance costs?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 237,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualMedicalExpenses',
        title: 'What are your annual large medical expenses?',
        subtitle: 'Surgeries, dental work, vision care not covered by insurance',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 238,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualCharityDonations',
        title: 'What are your annual charity donations and large gifts?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 239,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualLegalProfessional',
        title: 'What are your annual legal and professional service fees?',
        subtitle: 'Lawyer, accountant, financial advisor fees',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 240,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualSpecialEvents',
        title: 'What are your annual special event costs?',
        subtitle: 'Weddings, parties, celebrations',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 241,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualMiscExpenses',
        title: 'What are your other annual miscellaneous expenses?',
        type: 'number',
        required: true,
        section: 'Annual Expenses',
        questionNumber: 242,
        groupId: 'monthly-annual-expenses'
      },
      
      // Additional Monthly Expenses
      {
        id: 'monthlyDomesticHelp',
        title: 'What are your monthly costs for household help/maid/cook?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 211,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyCableTV',
        title: 'What are your monthly cable/satellite TV costs?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 212,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyNewspaperMagazines',
        title: 'What are your monthly newspaper and magazine subscription costs?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 213,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyLaundry',
        title: 'What are your monthly laundry and dry cleaning costs?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 246,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyEducationSelf',
        title: 'What are your monthly education costs for yourself?',
        subtitle: 'Online courses, books, learning materials',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 247,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyFitnessWellness',
        title: 'What are your monthly fitness/gym/yoga expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 248,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyAlcoholTobacco',
        title: 'What are your monthly alcohol and tobacco expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 249,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'monthlyGardening',
        title: 'What are your monthly gardening and outdoor maintenance costs?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Monthly Expenses',
        questionNumber: 250,
        groupId: 'monthly-annual-expenses'
      },

      // Additional Annual Expenses
      {
        id: 'annualClubMemberships',
        title: 'What are your annual club membership fees?',
        subtitle: 'Country clubs, social clubs, professional associations',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Annual Expenses',
        questionNumber: 251,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualSubscriptions',
        title: 'What are your annual subscription renewals?',
        subtitle: 'Software, apps, premium services',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Annual Expenses',
        questionNumber: 252,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualElectronicsAppliances',
        title: 'What are your annual electronics and appliances purchases?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Annual Expenses',
        questionNumber: 253,
        groupId: 'monthly-annual-expenses'
      },
      {
        id: 'annualFurnitureDecor',
        title: 'What are your annual furniture and home decor expenses?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Annual Expenses',
        questionNumber: 254,
        groupId: 'monthly-annual-expenses'
      }
    ]
  },
  {
    id: 'investment-contributions',
    title: 'Investment Contributions',
    description: 'Your regular investments and savings contributions',
    questions: [
      {
        id: 'monthlyMutualFunds',
        title: 'What are your monthly mutual fund SIP contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 254,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyStockInvestments',
        title: 'What are your monthly direct stock/equity investments?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 255,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyFixedDeposits',
        title: 'What are your monthly fixed deposit contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 256,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyPPF',
        title: 'What are your monthly PPF (Public Provident Fund) contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 257,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyEPF',
        title: 'What are your monthly EPF (Employee Provident Fund) contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 258,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyNPS',
        title: 'What are your monthly NPS (National Pension System) contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 259,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyULIP',
        title: 'What are your monthly ULIP (Unit Linked Insurance Plan) contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 260,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyBonds',
        title: 'What are your monthly bond/debenture investments?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 261,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyGold',
        title: 'What are your monthly gold investments?',
        subtitle: 'Gold ETF, digital gold, physical gold',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 231,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyRealEstate',
        title: 'What are your monthly real estate investment contributions?',
        subtitle: 'REITs, real estate funds',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 264,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyCryptocurrency',
        title: 'What are your monthly cryptocurrency investments?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 265,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyEmergencyFund',
        title: 'What are your monthly emergency fund contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 266,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyRetirementSavings',
        title: 'What are your monthly retirement savings (outside of EPF/NPS)?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 267,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyChildEducation',
        title: 'What are your monthly child education fund contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 268,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyOtherInvestments',
        title: 'What are your other monthly investment contributions?',
        type: 'number',
        required: true,
        section: 'Investment Contributions',
        questionNumber: 269,
        groupId: 'investment-contributions'
      },
      
      // Additional Investment Questions
      {
        id: 'monthlyP2PLending',
        title: 'What are your monthly peer-to-peer lending investments?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Investment Contributions',
        questionNumber: 238,
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyInternationalInvestments',
        title: 'What are your monthly international/foreign investments?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Investment Contributions',
        questionNumber: 264,
        groupId: 'investment-contributions'
      }
    ]
  },
  {
    id: 'assets',
    title: 'Assets',
    description: 'Current value of your assets and holdings',
    questions: [
      // Section A: Cash & Bank Accounts (Questions 272-276)
      {
        id: 'checkingAccountBalance',
        title: 'What is your current checking account balance?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 272,
        groupId: 'assets'
      },
      {
        id: 'savingsAccountBalance',
        title: 'What is your current savings account balance?',
        subtitle: 'Include only regular savings. Exclude: emergency funds, investment savings, and fixed deposits',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 273,
        groupId: 'assets'
      },
      {
        id: 'emergencyFundBalance',
        title: 'What is your current emergency fund balance?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 274,
        groupId: 'assets'
      },
      {
        id: 'fixedDepositBalance',
        title: 'What is the current value of all your fixed deposits?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 275,
        groupId: 'assets'
      },
      {
        id: 'recurringDepositBalance',
        title: 'What is the current value of all your recurring deposits?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 276,
        groupId: 'assets'
      },

      // Section B: Investment Assets (Questions 231-245)
      {
        id: 'mutualFundBalance',
        title: 'What is the current value of all your mutual fund investments?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 245,
        groupId: 'assets'
      },
      {
        id: 'stockPortfolioBalance',
        title: 'What is the current value of your direct stock portfolio?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 246,
        groupId: 'assets'
      },
      {
        id: 'ppfBalance',
        title: 'What is the current value of your PPF account?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 247,
        groupId: 'assets'
      },
      {
        id: 'epfBalance',
        title: 'What is the current value of your EPF account?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 248,
        groupId: 'assets'
      },
      {
        id: 'npsBalance',
        title: 'What is the current value of your NPS account?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 249,
        groupId: 'assets'
      },
      {
        id: 'ulipBalance',
        title: 'What is the current value of your ULIP investments?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 250,
        groupId: 'assets'
      },
      {
        id: 'bondBalance',
        title: 'What is the current value of your bond/debenture investments?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 251,
        groupId: 'assets'
      },
      {
        id: 'goldBalance',
        title: 'What is the current value of your gold investments?',
        subtitle: 'Physical gold, gold ETF, digital gold',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 252,
        groupId: 'assets'
      },
      {
        id: 'realEstateInvestmentBalance',
        title: 'What is the current value of your real estate investments?',
        subtitle: 'REITs, real estate funds (excluding primary residence)',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 253,
        groupId: 'assets'
      },
      {
        id: 'cryptocurrencyBalance',
        title: 'What is the current value of your cryptocurrency holdings?',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 254,
        groupId: 'assets'
      },
      {
        id: 'otherInvestmentBalance',
        title: 'What is the current value of your other investments?',
        subtitle: 'Commodities, art, collectibles, etc.',
        type: 'number',
        required: true,
        section: 'Investment Assets',
        questionNumber: 255,
        groupId: 'assets'
      },

      // Section C: Business & Professional Assets (Questions 242-250)
      {
        id: 'businessEquityValue',
        title: 'What is the estimated value of your business equity/ownership?',
        type: 'number',
        required: true,
        section: 'Business & Professional Assets',
        questionNumber: 256,
        groupId: 'assets'
      },
      {
        id: 'professionalAssetsValue',
        title: 'What is the value of your professional assets?',
        subtitle: 'Equipment, tools, licenses, practice value',
        type: 'number',
        required: true,
        section: 'Business & Professional Assets',
        questionNumber: 257,
        groupId: 'assets'
      },
      {
        id: 'intellectualPropertyValue',
        title: 'What is the estimated value of your intellectual property?',
        subtitle: 'Patents, copyrights, trademarks, royalties',
        type: 'number',
        required: true,
        section: 'Business & Professional Assets',
        questionNumber: 258,
        groupId: 'assets'
      },

      // Section D: Other Valuable Assets (Questions 245-250)
      {
        id: 'jewelryValue',
        title: 'What is the estimated value of your jewelry?',
        subtitle: 'Excluding gold already counted in investments',
        type: 'number',
        required: true,
        section: 'Other Valuable Assets',
        questionNumber: 259,
        groupId: 'assets'
      },
      {
        id: 'artCollectiblesValue',
        title: 'What is the estimated value of your art and collectibles?',
        subtitle: 'Paintings, antiques, rare items',
        type: 'number',
        required: true,
        section: 'Other Valuable Assets',
        questionNumber: 260,
        groupId: 'assets'
      },
      {
        id: 'electronicItemsValue',
        title: 'What is the estimated current value of your electronic items?',
        subtitle: 'Computers, phones, cameras, gadgets',
        type: 'number',
        required: true,
        section: 'Other Valuable Assets',
        questionNumber: 261,
        groupId: 'assets'
      },
      {
        id: 'furnitureAppliancesValue',
        title: 'What is the estimated current value of your furniture and appliances?',
        type: 'number',
        required: true,
        section: 'Other Valuable Assets',
        questionNumber: 262,
        groupId: 'assets'
      },
      {
        id: 'otherPersonalAssetsValue',
        title: 'What is the estimated value of your other valuable personal assets?',
        type: 'number',
        required: true,
        section: 'Other Valuable Assets',
        questionNumber: 263,
        groupId: 'assets'
      },
      
      // Additional Asset Questions
      {
        id: 'loansGivenToOthers',
        title: 'What is the total amount of loans you have given to others?',
        subtitle: 'Money owed to you by friends, family, or others',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Assets',
        questionNumber: 264,
        groupId: 'assets'
      },
      {
        id: 'securityDeposits',
        title: 'What is the total value of your security deposits?',
        subtitle: 'Rental deposits, utility deposits, etc.',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Assets',
        questionNumber: 265,
        groupId: 'assets'
      },
      {
        id: 'cashInHand',
        title: 'How much cash do you keep on hand?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Cash & Bank Accounts',
        questionNumber: 266,
        groupId: 'assets'
      }
    ]
  },
  {
    id: 'income',
    title: 'Income',
    description: 'Your income sources and amounts',
    questions: [
      // Primary Income Sources
      {
        id: 'grossMonthlySalary',
        title: 'What is your gross monthly salary?',
        subtitle: 'Before taxes and deductions',
        type: 'number',
        required: true,
        section: 'Primary Income',
        questionNumber: 267,
        groupId: 'income'
      },
      {
        id: 'netMonthlySalary',
        title: 'What is your net monthly salary?',
        subtitle: 'After taxes and deductions',
        type: 'number',
        required: true,
        section: 'Primary Income',
        questionNumber: 268,
        groupId: 'income'
      },
      {
        id: 'annualBonus',
        title: 'What is your average annual bonus or variable pay/commission?',
        type: 'number',
        required: true,
        section: 'Primary Income',
        questionNumber: 269,
        groupId: 'income'
      },
      {
        id: 'employerEPFContribution',
        title: 'What is your employer\'s monthly EPF contribution?',
        type: 'number',
        required: true,
        section: 'Primary Income',
        questionNumber: 270,
        groupId: 'income'
      },
      {
        id: 'employerBenefitsValue',
        title: 'What is the monthly value of other employer benefits?',
        subtitle: 'Health insurance, meal vouchers, transport allowance, etc.',
        type: 'number',
        required: true,
        section: 'Primary Income',
        questionNumber: 271,
        groupId: 'income'
      },

      // Investment Income (Questions 255-270)
      {
        id: 'monthlyRentalIncome',
        title: 'What is your monthly rental income from properties?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 272,
        groupId: 'income'
      },
      {
        id: 'monthlyDividendIncome',
        title: 'What is your monthly dividend income from stocks and mutual funds?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 273,
        groupId: 'income'
      },
      {
        id: 'monthlyInterestIncome',
        title: 'What is your monthly interest income?',
        subtitle: 'Fixed deposits, savings account, bonds',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 274,
        groupId: 'income'
      },
      {
        id: 'monthlyCapitalGains',
        title: 'What is your average monthly capital gains from investments?',
        subtitle: 'Gains from selling stocks, mutual funds, etc.',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 275,
        groupId: 'income'
      },

      // Business Income (Questions 259-275)
      {
        id: 'monthlyBusinessIncome',
        title: 'What is your monthly business income?',
        subtitle: 'Net profit from your business',
        type: 'number',
        required: true,
        section: 'Business Income',
        questionNumber: 276,
        groupId: 'income'
      },
      {
        id: 'monthlyFreelanceIncome',
        title: 'What is your monthly freelance/consulting income?',
        type: 'number',
        required: true,
        section: 'Business Income',
        questionNumber: 277,
        groupId: 'income'
      },
      {
        id: 'monthlyPartTimeIncome',
        title: 'What is your monthly part-time job income?',
        type: 'number',
        required: true,
        section: 'Business Income',
        questionNumber: 278,
        groupId: 'income'
      },

      // Other Income Sources (Questions 262-295)
      {
        id: 'monthlyPensionIncome',
        title: 'What is your monthly pension income?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 279,
        groupId: 'income'
      },
      {
        id: 'monthlyAlimonyIncome',
        title: 'What is your monthly alimony/maintenance income received?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 280,
        groupId: 'income'
      },
      {
        id: 'monthlyGovernmentBenefits',
        title: 'What is your monthly government benefits or subsidies?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 281,
        groupId: 'income'
      },
      {
        id: 'monthlyInsurancePayouts',
        title: 'What is your monthly insurance payout income?',
        subtitle: 'Disability, critical illness, etc.',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 282,
        groupId: 'income'
      },
      {
        id: 'monthlyRoyaltiesLicensing',
        title: 'What is your monthly royalties/licensing income?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 283,
        groupId: 'income'
      },
      {
        id: 'monthlyFamilySupport',
        title: 'What is your monthly family financial support received?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 284,
        groupId: 'income'
      },
      {
        id: 'monthlyMiscellaneousIncome',
        title: 'What are your other miscellaneous income sources (monthly)?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 285,
        groupId: 'income'
      },
      
      // Partner's Income (if applicable)
      {
        id: 'partnerGrossMonthlySalary',
        title: "What is your partner's gross monthly salary?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        questionNumber: 286,
        groupId: 'income'
      },
      {
        id: 'partnerNetMonthlySalary',
        title: "What is your partner's net monthly salary?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        questionNumber: 287,
        groupId: 'income'
      },
      {
        id: 'partnerOtherIncome',
        title: "What are your partner's other income sources (monthly)?",
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        questionNumber: 288,
        groupId: 'income'
      },
      
      // Additional Income Questions
      {
        id: 'monthlyCommissionIncome',
        title: 'What is your average monthly commission income?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Primary Income',
        questionNumber: 289,
        groupId: 'income'
      },
      {
        id: 'monthlyOvertimeIncome',
        title: 'What is your average monthly overtime income?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Primary Income',
        questionNumber: 290,
        groupId: 'income'
      },
      {
        id: 'annualTaxRefunds',
        title: 'What is your average annual tax refund?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Income Sources',
        questionNumber: 291,
        groupId: 'income'
      },
      {
        id: 'monthlyGiftIncome',
        title: 'What is your average monthly gift/cash gifts received?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Income Sources',
        questionNumber: 292,
        groupId: 'income'
      },
      {
        id: 'monthlySideBusinessIncome',
        title: 'What is your monthly side business/hustle income?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Business Income',
        questionNumber: 293,
        groupId: 'income'
      },
      {
        id: 'monthlyPassiveIncome',
        title: 'What is your other monthly passive income?',
        subtitle: 'Income that requires minimal effort',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Investment Income',
        questionNumber: 294,
        groupId: 'income'
      },
      {
        id: 'annualInheritanceGifts',
        title: 'What is your expected annual inheritance or large gifts?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Income Sources',
        questionNumber: 295,
        groupId: 'income'
      },
      {
        id: 'monthlyPensionIncome',
        title: 'What is your monthly pension income?',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Other Income Sources',
        questionNumber: 296,
        groupId: 'income'
      },
      {
        id: 'partnerAnnualBonus',
        title: "What is your partner's average annual bonus?",
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        questionNumber: 297,
        groupId: 'income'
      },
      {
        id: 'partnerInvestmentIncome',
        title: "What is your partner's monthly investment income?",
        subtitle: 'Dividends, interest, capital gains',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        questionNumber: 298,
        groupId: 'income'
      },
      {
        id: 'householdTotalIncome',
        title: 'What is your estimated total household monthly income?',
        subtitle: 'Combined income of all earning members',
        type: 'number',
        required: true,
        validation: [
          {
            type: 'min',
            value: 0,
            message: 'Amount cannot be negative'
          }
        ],
        section: 'Household Income',
        questionNumber: 299,
        groupId: 'income'
      }
    ]
  }
];
