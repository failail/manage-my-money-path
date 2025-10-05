/**
 * ⚠️ CRITICAL: DO NOT MODIFY WITHOUT EXPLICIT DEVELOPER PERMISSION ⚠️
 * 
 * This file contains the complete question structure for the financial assessment.
 * 
 * PROHIBITED ACTIONS (require explicit permission):
 * - Changing question wording/titles
 * - Adding or deleting questions
 * - Reordering sections
 * - Reordering questions within sections
 * - Changing question types (text, number, select, radio, range)
 * - Changing answer options/fields
 * - Modifying validation rules
 * - Changing conditional logic
 * 
 * ALLOWED ACTIONS (without permission):
 * - Bug fixes for syntax errors only
 * - TypeScript type corrections only
 * 
 * Any structural changes to questions will break the financial calculation logic.
 * Always confirm with developer before making changes.
 */

export interface Validation {
  type: string;
  value?: number;
  message: string;
}

export interface Conditional {
  dependsOn: string;
  values: string[];
  field?: string;
  value?: string[];
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: 'text' | 'number' | 'select' | 'radio' | 'range';
  required: boolean;
  options?: (string | { value: string; label: string })[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  showValue?: boolean;
  suffix?: string;
  validation?: Validation[] | { min: number };
  conditional?: Conditional | Conditional[];
  dependsOn?: { field: string; value: string[] };
  section: string;
  groupId: string;
  description?: string;
  readOnly?: boolean;
}

export interface QuestionGroup {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  conditional?: boolean;
  section?: string;
  groupId?: string;
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
        groupId: 'personal-basics'
      },
      {
        id: 'yearOfBirth',
        title: 'What year were you born?',
        type: 'select',
        required: true,
        options: ['2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'gender',
        title: "What's your gender?",
        type: 'radio',
        required: true,
        options: ['Male', 'Female', 'Prefer not to say'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'relationshipStatus',
        title: "What's your relationship status?",
        type: 'radio',
        required: true,
        options: ['Single', 'In relationship not living together', 'In relationship living together', 'Married'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'workSituation',
        title: "What's your current work situation?",
        type: 'radio',
        required: true,
        options: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Freelancer', 'Retired', 'Unemployed', 'Student', 'Homemaker'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'industry',
        title: 'Which industry do you work in?',
        type: 'select',
        required: true,
        options: ['Technology', 'Finance & Banking', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Consulting', 'Real Estate', 'Media & Entertainment', 'Government', 'Non-profit', 'Agriculture', 'Energy', 'Transportation', 'Other', 'Not applicable'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'jobFunction',
        title: "What's your primary job function?",
        type: 'select',
        required: true,
        options: ['Engineering/Technical', 'Sales & Marketing', 'Operations', 'Finance & Accounting', 'Human Resources', 'Management/Leadership', 'Customer Service', 'Research & Development', 'Legal', 'Design/Creative', 'Administrative', 'Other', 'Not applicable'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'country',
        title: 'Which country do you live in?',
        type: 'select',
        required: true,
        options: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'UAE', 'Germany', 'Other'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'city',
        title: 'Which city do you live in?',
        type: 'text',
        required: true,
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'currency',
        title: "What's your preferred currency?",
        type: 'select',
        required: true,
        options: ['INR', 'USD', 'GBP', 'EUR', 'CAD', 'AUD', 'SGD', 'AED'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'housingType',
        title: 'In your primary residence, do you rent it or own it?',
        type: 'radio',
        required: true,
        options: ['Rent it', 'Own it'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'additionalProperties',
        title: 'Apart from your current living arrangement, how many other properties do you own?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4 or more'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'hasVehicles',
        title: 'Do you own any vehicles for personal/family use?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
  id: 'hasChildren',
  title: 'How many children do you have?',
  type: 'select',
  required: true,
  options: ['0', '1', '2', '3'],
  section: 'Personal Information',
  groupId: 'personal-basics'
},
      {
        id: 'hasFinancialDependents',
        title: 'How many financial dependents do you have?',
        type: 'radio',
        required: true,
        options: ['None', '1', '2', '3', '4'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
{
  id: 'numberOfPersonalLoans',
  title: 'How many personal loans apart from those for your home/vehicle do you have?',
  type: 'select',
  required: true,
  options: ['0', '1', '2', '3', '4 or more'],
  section: 'Personal Information',
  groupId: 'personal-basics'
},
      {
  id: 'numberOfCreditCards',
  title: 'How many credit cards do you have where the outstanding balance is 45 days or older?',
  type: 'select',
  required: true,
  options: ['0', '1', '2', '3', '4 or more'],
  section: 'Personal Information',
  groupId: 'personal-basics'
},
{
  id: 'smoker',
  title: 'Are you a smoker?',
  type: 'radio',
  required: true,
  options: ['Yes', 'No'],
  section: 'Personal Information',
  groupId: 'personal-basics'
},
      {
        id: 'targetRetirementAge',
        title: 'At what age do you plan to retire?',
        type: 'select',
        required: true,
        options: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
        section: 'Personal Information',
        groupId: 'personal-basics'
      },
      {
        id: 'partnerAge',
        title: "What's your partner's age range?",
        type: 'select',
        required: true,
        options: ['18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '60+', 'Not applicable'],
        section: 'Personal Information',
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
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
        groupId: 'rental-housing'
      },
      {
        id: 'rentalDeposit',
        title: 'What was your total rental deposit amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
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
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsuranceCover',
        title: 'What is the total coverage amount of your rental insurance?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'rentalInsurance',
          values: ['Yes']
        },
        section: 'Rental Housing',
        groupId: 'rental-housing'
      },
      {
        id: 'rentalInsurancePremium',
        title: 'What is your annual rental insurance premium?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'rentalInsurance',
          values: ['Yes']
        },
        section: 'Rental Housing',
        groupId: 'rental-housing'
      },
      {
        id: 'buildingMaintenanceFees',
        title: 'Do you pay any building maintenance or society fees monthly?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Rent it']
        },
        section: 'Rental Housing',
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
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home1CurrentValue',
        title: 'Home 1: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
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
        groupId: 'owned-properties'
      },
      {
        id: 'home1OriginalLoanAmount',
        title: 'Home 1: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home1HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home1OutstandingLoan',
        title: 'Home 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home1HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
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
            value: 50,
            message: 'Interest rate cannot exceed 50%'
          }
        ],
        conditional: {
          dependsOn: 'home1HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home1MonthlyEMI',
        title: 'Home 1: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home1HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsuranceCover',
        title: 'Home 1: What is the coverage amount of insurance for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home1InsurancePremium',
        title: 'Home 1: What is the annual insurance premium for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'housingType',
          values: ['Own it']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2PurchasePrice',
        title: 'Home 2: What was the purchase price of this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2CurrentValue',
        title: 'Home 2: What is the estimated current value of this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
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
        groupId: 'owned-properties'
      },
      {
        id: 'home2OriginalLoanAmount',
        title: 'Home 2: What was the original loan amount for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home2HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2OutstandingLoan',
        title: 'Home 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home2HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
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
            value: 50,
            message: 'Interest rate cannot exceed 50%'
          }
        ],
        conditional: {
          dependsOn: 'home2HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2MonthlyEMI',
        title: 'Home 2: What is your monthly EMI payment for this loan?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'home2HasLoan',
          values: ['Yes']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsuranceCover',
        title: 'Home 2: What is the coverage amount of insurance for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      },
      {
        id: 'home2InsurancePremium',
        title: 'Home 2: What is the annual insurance premium for this property?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'additionalProperties',
          values: ['1', '2', '3', '4 or more']
        },
        section: 'Owned Properties',
        groupId: 'owned-properties'
      }
    ]
  },
  {
    id: 'vehicles-basic',
    title: 'Vehicle Information',
    description: 'Vehicle expenses and basic details',
    conditional: true,
    questions: [
      {
        id: 'monthlyParkingCost',
        title: 'What is your total monthly parking cost for all vehicles?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'monthlyDriverCost',
        title: 'What is your total monthly chauffeur/driver cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'monthlyWashingCost',
        title: 'What is your total monthly vehicle washing/cleaning cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'annualMaintenanceCost',
        title: 'What is your total annual cost for maintenance, service, accessories, repairs for all vehicles?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1PurchasePrice',
        title: 'Vehicle 1: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1CurrentValue',
        title: 'Vehicle 1: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1HasLoan',
        title: 'Vehicle 1: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1FuelCost',
        title: 'Vehicle 1: What are your estimated monthly fuel costs for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2PurchasePrice',
        title: 'Vehicle 2: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2CurrentValue',
        title: 'Vehicle 2: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2HasLoan',
        title: 'Vehicle 2: Do you have a loan on this vehicle?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2FuelCost',
        title: 'Vehicle 2: What are your estimated monthly fuel costs for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        groupId: 'vehicles-basic'
      }
    ]
  },
  {
    id: 'vehicle-insurance-loans',
    title: 'Vehicle Insurance & Loans',
    description: 'Insurance and loan details for your vehicles',
    conditional: true,
    questions: [
      {
        id: 'vehicle1InsuranceCover',
        title: 'Vehicle 1: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePeriod',
        title: 'Vehicle 1: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle1OutstandingLoan',
        title: 'Vehicle 1: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
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
            value: 50,
            message: 'Interest rate cannot exceed 50%'
          }
        ],
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle1MonthlyEMI',
        title: 'Vehicle 1: What is your monthly EMI payment for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'vehicle1HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2InsuranceCover',
        title: 'Vehicle 2: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePeriod',
        title: 'Vehicle 2: Insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2OutstandingLoan',
        title: 'Vehicle 2: What is the current outstanding loan amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
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
            value: 50,
            message: 'Interest rate cannot exceed 50%'
          }
        ],
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2MonthlyEMI',
        title: 'Vehicle 2: What is your monthly EMI payment for this vehicle?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'vehicle2HasLoan',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        groupId: 'vehicle-insurance-loans'
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
      id: 'child1AgeGroup',
      type: 'select',
      title: 'Age group of Child 1',
      required: true,
      options: [
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '6-12', label: '6-12 years' },
        { value: '13-18', label: '13-18 years' },
        { value: '18+', label: '18+ years' }
      ],
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyDiapers',
      type: 'number',
      title: 'Monthly expenses for diapers for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyClothing',
      type: 'number',
      title: 'Monthly clothing expenses for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyToys',
      type: 'number',
      title: 'Monthly expenses on toys and games for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyParties',
      type: 'number',
      title: 'Monthly expenses on parties and celebrations for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyActivities',
      type: 'number',
      title: 'Monthly expenses on activities and sports for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyEducation',
      type: 'number',
      title: 'Monthly school/education fees for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyOnlineLearning',
      type: 'number',
      title: 'Monthly online learning subscriptions for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyTutoring',
      type: 'number',
      title: 'Monthly tutoring/coaching expenses for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyBooks',
      type: 'number',
      title: 'Monthly expenses on books and stationery for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyFieldTrips',
      type: 'number',
      title: 'Monthly field trips and excursions for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyMedical',
      type: 'number',
      title: 'Monthly medical expenses for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1MonthlyMiscellaneous',
      type: 'number',
      title: 'Other monthly expenses for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Child 1?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasChildren',
        values: ['1', '2', '3']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Child 1',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'child1HealthInsurance',
        values: ['yes']
      },
      section: 'Children',
      groupId: 'children'
    },
    {
      id: 'child1InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Child 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'child1HealthInsurance',
        values: ['yes']
      },
      section: 'Children',
      groupId: 'children'
    }
  ]
},
{
  id: 'children-extended',
  title: 'Additional Children',
  description: 'Information about children 2-3',
  conditional: true,
  questions: [
    {
      id: 'child2AgeGroup',
      type: 'select',
      title: 'Age group of Child 2',
      required: true,
      options: [
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '6-12', label: '6-12 years' },
        { value: '13-18', label: '13-18 years' },
        { value: '18+', label: '18+ years' }
      ],
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyDiapers',
      type: 'number',
      title: 'Monthly expenses for diapers for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyClothing',
      type: 'number',
      title: 'Monthly clothing expenses for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyToys',
      type: 'number',
      title: 'Monthly expenses on toys and games for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyParties',
      type: 'number',
      title: 'Monthly expenses on parties and celebrations for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyActivities',
      type: 'number',
      title: 'Monthly expenses on activities and sports for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyEducation',
      type: 'number',
      title: 'Monthly school/education fees for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyOnlineLearning',
      type: 'number',
      title: 'Monthly online learning subscriptions for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyTutoring',
      type: 'number',
      title: 'Monthly tutoring/coaching expenses for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyBooks',
      type: 'number',
      title: 'Monthly expenses on books and stationery for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyFieldTrips',
      type: 'number',
      title: 'Monthly field trips and excursions for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyMedical',
      type: 'number',
      title: 'Monthly medical expenses for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2MonthlyMiscellaneous',
      type: 'number',
      title: 'Other monthly expenses for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Child 2?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasChildren',
        values: ['2', '3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Child 2',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'child2HealthInsurance',
        values: ['yes']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child2InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Child 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'child2HealthInsurance',
        values: ['yes']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3AgeGroup',
      type: 'select',
      title: 'Age group of Child 3',
      required: true,
      options: [
        { value: '0-2', label: '0-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '6-12', label: '6-12 years' },
        { value: '13-18', label: '13-18 years' },
        { value: '18+', label: '18+ years' }
      ],
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyDiapers',
      type: 'number',
      title: 'Monthly expenses for diapers for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyClothing',
      type: 'number',
      title: 'Monthly clothing expenses for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyToys',
      type: 'number',
      title: 'Monthly expenses on toys and games for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyParties',
      type: 'number',
      title: 'Monthly expenses on parties and celebrations for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyActivities',
      type: 'number',
      title: 'Monthly expenses on activities and sports for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyEducation',
      type: 'number',
      title: 'Monthly school/education fees for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyOnlineLearning',
      type: 'number',
      title: 'Monthly online learning subscriptions for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyTutoring',
      type: 'number',
      title: 'Monthly tutoring/coaching expenses for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyBooks',
      type: 'number',
      title: 'Monthly expenses on books and stationery for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
      id: 'child3MonthlyFieldTrips',
      type: 'number',
      title: 'Monthly field trips and excursions for Child 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasChildren',
        values: ['3']
      },
      section: 'Children',
      groupId: 'children-extended'
    },
    {
  id: 'child3MonthlyMedical',
  type: 'number',
  title: 'Monthly medical expenses for Child 3',
  required: true,
  validation: { min: 0 },
  conditional: {
    dependsOn: 'hasChildren',
    values: ['3']
  },
  section: 'Children',
  groupId: 'children-extended'
}
  ]
},
{
  id: 'financial-dependents',
  title: 'Financial Dependents',
  description: 'Information about people who depend on you financially',
  conditional: true,
  questions: [
    {
      id: 'dependent1HealthExpenses',
      type: 'number',
      title: 'Monthly health and wellness expenses for Dependent 1',
      description: 'Regular health-related costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1MedicalCosts',
      type: 'number',
      title: 'Monthly medical costs for Dependent 1',
      description: 'Doctor visits, medicines, treatments',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1LivingExpenses',
      type: 'number',
      title: 'Monthly living expenses for Dependent 1',
      description: 'Food, accommodation, utilities',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1TravelExpenses',
      type: 'number',
      title: 'Monthly travel expenses for Dependent 1',
      description: 'Transportation costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1EntertainmentExpenses',
      type: 'number',
      title: 'Monthly entertainment expenses for Dependent 1',
      description: 'Recreation and leisure',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1MiscellaneousExpenses',
      type: 'number',
      title: 'Other monthly expenses for Dependent 1',
      description: 'Any other regular costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Dependent 1?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['1', '2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Dependent 1',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent1HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent1InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Dependent 1',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent1HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2HealthExpenses',
      type: 'number',
      title: 'Monthly health and wellness expenses for Dependent 2',
      description: 'Regular health-related costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2MedicalCosts',
      type: 'number',
      title: 'Monthly medical costs for Dependent 2',
      description: 'Doctor visits, medicines, treatments',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2LivingExpenses',
      type: 'number',
      title: 'Monthly living expenses for Dependent 2',
      description: 'Food, accommodation, utilities',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2TravelExpenses',
      type: 'number',
      title: 'Monthly travel expenses for Dependent 2',
      description: 'Transportation costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2EntertainmentExpenses',
      type: 'number',
      title: 'Monthly entertainment expenses for Dependent 2',
      description: 'Recreation and leisure',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2MiscellaneousExpenses',
      type: 'number',
      title: 'Other monthly expenses for Dependent 2',
      description: 'Any other regular costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Dependent 2?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['2', '3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Dependent 2',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent2HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    },
    {
      id: 'dependent2InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Dependent 2',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent2HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents'
    }
  ]
},
{
  id: 'financial-dependents-extended',
  title: 'Additional Financial Dependents',
  description: 'Information about dependents 3-4',
  conditional: true,
  questions: [
    {
      id: 'dependent3HealthExpenses',
      type: 'number',
      title: 'Monthly health and wellness expenses for Dependent 3',
      description: 'Regular health-related costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3MedicalCosts',
      type: 'number',
      title: 'Monthly medical costs for Dependent 3',
      description: 'Doctor visits, medicines, treatments',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3LivingExpenses',
      type: 'number',
      title: 'Monthly living expenses for Dependent 3',
      description: 'Food, accommodation, utilities',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3TravelExpenses',
      type: 'number',
      title: 'Monthly travel expenses for Dependent 3',
      description: 'Transportation costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3EntertainmentExpenses',
      type: 'number',
      title: 'Monthly entertainment expenses for Dependent 3',
      description: 'Recreation and leisure',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3MiscellaneousExpenses',
      type: 'number',
      title: 'Other monthly expenses for Dependent 3',
      description: 'Any other regular costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Dependent 3?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['3', '4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Dependent 3',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent3HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent3InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Dependent 3',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent3HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4HealthExpenses',
      type: 'number',
      title: 'Monthly health and wellness expenses for Dependent 4',
      description: 'Regular health-related costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4MedicalCosts',
      type: 'number',
      title: 'Monthly medical costs for Dependent 4',
      description: 'Doctor visits, medicines, treatments',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4LivingExpenses',
      type: 'number',
      title: 'Monthly living expenses for Dependent 4',
      description: 'Food, accommodation, utilities',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4TravelExpenses',
      type: 'number',
      title: 'Monthly travel expenses for Dependent 4',
      description: 'Transportation costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4EntertainmentExpenses',
      type: 'number',
      title: 'Monthly entertainment expenses for Dependent 4',
      description: 'Recreation and leisure',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4MiscellaneousExpenses',
      type: 'number',
      title: 'Other monthly expenses for Dependent 4',
      description: 'Any other regular costs',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4HealthInsurance',
      type: 'radio',
      title: 'Do you have health insurance for Dependent 4?',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ],
      conditional: {
        dependsOn: 'hasFinancialDependents',
        values: ['4']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4InsuranceCover',
      type: 'number',
      title: 'Health insurance coverage amount for Dependent 4',
      description: 'Total sum insured',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent4HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    },
    {
      id: 'dependent4InsurancePremium',
      type: 'number',
      title: 'Monthly insurance premium for Dependent 4',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'dependent4HealthInsurance',
        values: ['yes']
      },
      section: 'Financial Dependents',
      groupId: 'financial-dependents-extended'
    }
  ]
},
{
  id: 'personal-loans',
  title: 'Personal Loans & Credit',
  description: 'Credit cards and personal loan details',
  conditional: true,
  questions: [
    // CREDIT CARDS SECTION
    {
      id: 'card1TotalDebt',
      title: 'Credit Card 1: What is the total outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card1MonthlyPayment',
      title: 'Credit Card 1: What is your current monthly payment?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card1InterestRate',
      title: 'Credit Card 1: What is the interest rate (in percentage)?',
      type: 'range',
      required: true,
      min: 0,
      max: 50,
      step: 0.1,
      defaultValue: 15,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card2TotalDebt',
      title: 'Credit Card 2: What is the total outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card2MonthlyPayment',
      title: 'Credit Card 2: What is your current monthly payment?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card2InterestRate',
      title: 'Credit Card 2: What is the interest rate (in percentage)?',
      type: 'range',
      required: true,
      min: 0,
      max: 50,
      step: 0.1,
      defaultValue: 15,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['2', '3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card3TotalDebt',
      title: 'Credit Card 3: What is the total outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card3MonthlyPayment',
      title: 'Credit Card 3: What is your current monthly payment?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card3InterestRate',
      title: 'Credit Card 3: What is the interest rate (in percentage)?',
      type: 'range',
      required: true,
      min: 0,
      max: 50,
      step: 0.1,
      defaultValue: 15,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['3', '4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card4TotalDebt',
      title: 'Credit Card 4: What is the total outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card4MonthlyPayment',
      title: 'Credit Card 4: What is your current monthly payment?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    {
      id: 'card4InterestRate',
      title: 'Credit Card 4: What is the interest rate (in percentage)?',
      type: 'range',
      required: true,
      min: 0,
      max: 50,
      step: 0.1,
      defaultValue: 15,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfCreditCards',
        values: ['4 or more']
      },
      section: 'Credit Cards',
      groupId: 'personal-loans'
    },
    // PERSONAL LOANS SECTION
    {
      id: 'loan1Purpose',
      title: 'Personal Loan 1: What was this loan taken for?',
      type: 'select',
      required: true,
      options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan1OriginalAmount',
      title: 'Personal Loan 1: What was the original loan amount?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan1OutstandingBalance',
      title: 'Personal Loan 1: What is the current outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Personal Loans',
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
      defaultValue: 12,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan1MonthlyPayment',
      title: 'Personal Loan 1: What is the monthly payment you make towards this loan?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['1', '2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan2Purpose',
      title: 'Personal Loan 2: What was this loan taken for?',
      type: 'select',
      required: true,
      options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan2OriginalAmount',
      title: 'Personal Loan 2: What was the original loan amount?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan2OutstandingBalance',
      title: 'Personal Loan 2: What is the current outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['2', '3', '4 or more']
      },
      section: 'Personal Loans',
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
      defaultValue: 12,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan2MonthlyPayment',
      title: 'Personal Loan 2: What is the monthly payment you make towards this loan?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['2', '3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan3Purpose',
      title: 'Personal Loan 3: What was this loan taken for?',
      type: 'select',
      required: true,
      options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan3OriginalAmount',
      title: 'Personal Loan 3: What was the original loan amount?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan3OutstandingBalance',
      title: 'Personal Loan 3: What is the current outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['3', '4 or more']
      },
      section: 'Personal Loans',
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
      defaultValue: 12,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan3MonthlyPayment',
      title: 'Personal Loan 3: What is the monthly payment you make towards this loan?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['3', '4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan4Purpose',
      title: 'Personal Loan 4: What was this loan taken for?',
      type: 'select',
      required: true,
      options: ['Education', 'Wedding', 'Medical emergency', 'Business', 'Debt consolidation', 'Holiday/Travel', 'Home renovation', 'Emergency', 'Other'],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan4OriginalAmount',
      title: 'Personal Loan 4: What was the original loan amount?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan4OutstandingBalance',
      title: 'Personal Loan 4: What is the current outstanding balance?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['4 or more']
      },
      section: 'Personal Loans',
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
      defaultValue: 12,
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
          value: 50,
          message: 'Interest rate cannot exceed 50%'
        }
      ],
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    },
    {
      id: 'loan4MonthlyPayment',
      title: 'Personal Loan 4: What is the monthly payment you make towards this loan?',
      type: 'number',
      required: true,
      validation: { min: 0 },
      conditional: {
        dependsOn: 'numberOfPersonalLoans',
        values: ['4 or more']
      },
      section: 'Personal Loans',
      groupId: 'personal-loans'
    }
  ]
},
{
    id: 'insurance-coverage',
    title: 'Personal Insurance',
    description: 'Your insurance coverage',
    questions: [
      {
        id: 'userHealthInsurance',
        title: 'Do you have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      {
        id: 'userLifeInsurance',
        title: 'Do you have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      {
        id: 'userAccidentInsurance',
        title: 'Do you have accident and disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerHealthInsurance',
        title: 'Does your partner have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerLifeInsurance',
        title: 'Does your partner have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      {
        id: 'partnerAccidentInsurance',
        title: 'Does your partner have accident and disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
        section: 'Personal Insurance',
        groupId: 'insurance-coverage'
      },
      }
    ]
  },    
  {
    id: 'insurance-details',
    title: 'Insurance Details',
    description: 'Insurance coverage amounts and premiums',
    conditional: true,
    questions: [
      {
        id: 'userHealthInsuranceCover',
        title: 'What is your total health insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'userHealthInsurancePremium',
        title: 'What is your health insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
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
        groupId: 'insurance-details'
      },
      {
        id: 'userLifeInsuranceCover',
        title: 'What is your total life insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'userLifeInsurancePremium',
        title: 'What is your life insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
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
        groupId: 'insurance-details'
      },
      {
        id: 'userAccidentInsuranceCover',
        title: 'What is your total accident and disability insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'userAccidentInsurancePremium',
        title: 'What is your accident and disability insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'userAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
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
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsuranceCover',
        title: 'What is your partner\'s total health insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'partnerHealthInsurancePremium',
        title: 'What is your partner\'s health insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerHealthInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
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
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsuranceCover',
        title: 'What is your partner\'s total life insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'partnerLifeInsurancePremium',
        title: 'What is your partner\'s life insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerLifeInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
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
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsuranceCover',
        title: 'What is your partner\'s total accident and disability insurance coverage amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsurancePremium',
        title: 'What is your partner\'s accident and disability insurance premium amount?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      },
      {
        id: 'partnerAccidentInsurancePeriod',
        title: 'Partner\'s accident and disability insurance premium period',
        type: 'select',
        required: true,
        options: ['Monthly', 'Annual'],
        conditional: {
          dependsOn: 'partnerAccidentInsurance',
          values: ['Yes']
        },
        section: 'Insurance Details',
        groupId: 'insurance-details'
      }
    ]
  },
  {
    id: 'monthly-expenses',
    title: 'Monthly & Annual Expenses',
    description: 'Your regular living expenses',
    questions: [
      {
        id: 'monthlyGroceries',
        title: 'What are your monthly groceries expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyElectricityBill',
        title: 'What is your monthly electricity bill?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyWaterBill',
        title: 'What is your monthly water bill?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyGasBill',
        title: 'What is your monthly gas/LPG bill?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyInternetBill',
        title: 'What is your monthly internet bill?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyMobilePhone',
        title: 'What are your monthly mobile phone expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyPublicTransport',
        title: 'What are your monthly public transport expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyRideSharingCab',
        title: 'What are your monthly ride-sharing/cab expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyDiningOut',
        title: 'What are your monthly dining out expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyFoodDelivery',
        title: 'What are your monthly food delivery expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyPersonalCare',
        title: 'What are your monthly personal care expenses (saloon, spa, grooming)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyGym',
        title: 'What are your monthly gym/fitness expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyEntertainment',
        title: 'What are your monthly entertainment expenses (movies, events, concerts)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyStreamingServices',
        title: 'What are your monthly streaming services expenses (Netflix, Prime, Spotify)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyOtherSubscriptions',
        title: 'What are your other monthly subscription expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHouseholdHelp',
        title: 'What are your monthly household help expenses (maid, cook, driver)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyPetExpenses',
        title: 'What are your monthly pet-related expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHealthSupplements',
        title: 'What are your monthly health supplements and vitamins expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyRegularMedicines',
        title: 'What are your monthly regular medicines expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyDoctorConsultations',
        title: 'What are your monthly doctor consultation expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyAlcoholTobacco',
        title: 'What are your monthly alcohol and tobacco expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyShopping',
        title: 'What are your monthly shopping expenses (clothes, gadgets, etc)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyGiftsAndDonations',
        title: 'What are your monthly gifts and charitable donations expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyLaundryDryCleaning',
        title: 'What are your monthly laundry and dry cleaning expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHomeDeliveries',
        title: 'What are your monthly home deliveries expenses (milk, newspapers, etc)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyClubMemberships',
        title: 'What are your monthly club membership fees?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'monthlyHobbiesExpenses',
        title: 'What are your monthly hobbies and recreation expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualHomeImprovement',
        title: 'What are your annual home improvement and maintenance expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualHolidayTravel',
        title: 'What are your annual holiday and travel expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualFestivalsGifts',
        title: 'What are your annual festival and gift-giving expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualMedicalExpenses',
        title: 'What are your annual medical expenses not covered by insurance?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualProfessionalFees',
        title: 'What are your annual professional fees (licenses, certifications)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'annualMiscExpenses',
        title: 'What are your other annual miscellaneous expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Expenses',
        groupId: 'monthly-expenses'
      },
      {
        id: 'totalPropertyEMI',
        title: 'Total monthly EMI for all property loans (auto-calculated)',
        type: 'number',
        required: false,
        readOnly: true,
        section: 'Auto-calculated',
        groupId: 'monthly-expenses'
      },
      {
        id: 'totalVehicleEMI',
        title: 'Total monthly EMI for all vehicle loans (auto-calculated)',
        type: 'number',
        required: false,
        readOnly: true,
        section: 'Auto-calculated',
        groupId: 'monthly-expenses'
      }
    ]
  },
  {
    id: 'investment-contributions',
    title: 'Investment Contributions',
    description: 'Your monthly and annual investment contributions',
    questions: [
      {
        id: 'monthlySipContributions',
        title: 'What are your monthly systematic investment plan (SIP) contributions to mutual funds?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyDirectEquity',
        title: 'What are your monthly direct equity purchases?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyRetirementContributions',
        title: 'What are your monthly retirement savings contributions?',
        subtitle: 'Include workplace pension schemes like 401k in US, EPF in India, occupational pensions in Europe, superannuation in Australia, etc.',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyFixedDeposits',
        title: 'What are your monthly fixed deposit or term deposit contributions?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlySavingsGoals',
        title: 'What are your monthly savings account deposits for investment purposes or saving for goals?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyCryptoPurchases',
        title: 'What are your monthly cryptocurrency purchases?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyCommodityInvestments',
        title: 'What are your monthly gold, silver or other commodity investments?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'monthlyBondContributions',
        title: 'What are your monthly contributions to investment, structured, government bonds or structured products?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Monthly Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'annualRetirementLumpsum',
        title: 'What are your annual lump sum contributions to retirement accounts?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'annualTaxAdvantagedInvestments',
        title: 'What are your annual tax-advantaged investment contributions?',
        subtitle: 'Include ELSS in India, ISA in UK, Roth IRA in US, etc.',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Investment Contributions',
        groupId: 'investment-contributions'
      },
      {
        id: 'annualMiscellaneousInvestments',
        title: 'What are your annual miscellaneous investment contributions not covered above?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Annual Investment Contributions',
        groupId: 'investment-contributions'
      }
    ]
  },
  {
    id: 'assets',
    title: 'Assets',
    description: 'Current value of your assets and holdings',
    questions: [
      {
        id: 'totalPropertyValue',
        title: 'Total current value of all properties you own',
        subtitle: 'This is calculated automatically from your property details above',
        type: 'number',
        required: false,
        readOnly: true,
        section: 'Auto-calculated Assets',
        groupId: 'assets'
      },
      {
        id: 'totalVehicleValue',
        title: 'Total current value of all vehicles you own',
        subtitle: 'This is calculated automatically from your vehicle details above',
        type: 'number',
        required: false,
        readOnly: true,
        section: 'Auto-calculated Assets',
        groupId: 'assets'
      },
      {
        id: 'checkingAccountBalance',
        title: 'What is your current checking account balance?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Cash & Bank Accounts',
        groupId: 'assets'
      },
      {
        id: 'savingsAccountBalance',
        title: 'What is your current savings account balance?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Cash & Bank Accounts',
        groupId: 'assets'
      },
      {
        id: 'fixedDepositsValue',
        title: 'What is the current value of your fixed deposits/term deposits?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Cash & Bank Accounts',
        groupId: 'assets'
      },
      {
        id: 'cashOnHand',
        title: 'How much cash do you have on hand?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Cash & Bank Accounts',
        groupId: 'assets'
      },
      {
        id: 'mutualFundsValue',
        title: 'What is the current value of your mutual funds?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'directEquityValue',
        title: 'What is the current value of your direct equity/stocks?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'retirementAccountBalance',
        title: 'What is your retirement account balance?',
        subtitle: 'Include 401k, EPF, pension funds, superannuation, etc.',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'cryptoCurrentValue',
        title: 'What is the current value of your cryptocurrency holdings?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'commodityHoldingsValue',
        title: 'What is the current value of your gold, silver, or other commodity holdings?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'bondsCurrentValue',
        title: 'What is the current value of your government/corporate bonds?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'otherInvestmentProducts',
        title: 'What is the current value of your other investment products?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Holdings',
        groupId: 'assets'
      },
      {
        id: 'providentFundBalance',
        title: 'What is your provident fund/pension fund balance?',
        subtitle: 'If separate from retirement accounts mentioned above',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'employeeStockOptions',
        title: 'What is the current value of your employee stock options?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'businessOwnershipValue',
        title: 'What is the value of your business ownership/partnership stakes?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'collectiblesValue',
        title: 'What is the value of your collectibles?',
        subtitle: 'Include art, antiques, etc.',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'loansGivenToOthers',
        title: 'How much money is owed to you?',
        subtitle: 'Loans given to others that you expect to be repaid',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'securityDepositsRecoverable',
        title: 'What is the total of your recoverable security deposits?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      },
      {
        id: 'otherMiscellaneousAssets',
        title: 'What is the value of your other miscellaneous assets?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Assets',
        groupId: 'assets'
      }
    ]
  },
  {
    id: 'income',
    title: 'Income',
    description: 'Your various income sources',
    questions: [
      {
        id: 'grossMonthlySalary',
        title: 'What is your gross monthly salary/wage (before taxes)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Employment Income',
        groupId: 'income'
      },
      {
        id: 'netMonthlySalary',
        title: 'What is your net monthly salary/wage (after taxes and deductions)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Employment Income',
        groupId: 'income'
      },
      {
        id: 'annualBonusCommission',
        title: 'What is your average annual bonus/commission?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Employment Income',
        groupId: 'income'
      },
      {
        id: 'monthlyOvertimePay',
        title: 'What is your monthly average overtime pay?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Employment Income',
        groupId: 'income'
      },
      {
        id: 'monthlySelfEmploymentGross',
        title: 'What is your monthly self-employment/freelance income, side hustles, income from hobbies, gig work (gross)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Self-Employment/Business Income',
        groupId: 'income'
      },
      {
        id: 'monthlySelfEmploymentNet',
        title: 'What is your monthly self-employment/freelance income (net after expenses)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Self-Employment/Business Income',
        groupId: 'income'
      },
      {
        id: 'annualDividendIncome',
        title: 'What is your annual dividend income?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Income',
        groupId: 'income'
      },
      {
        id: 'annualInterestIncome',
        title: 'What is your annual interest income (from savings, FDs, bonds)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Income',
        groupId: 'income'
      },
      {
        id: 'monthlyRentalIncome',
        title: 'What is your monthly rental income from properties?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Income',
        groupId: 'income'
      },
      {
        id: 'annualCapitalGains',
        title: 'What are your annual average capital gains?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Investment Income',
        groupId: 'income'
      },
      {
        id: 'monthlyGovernmentBenefits',
        title: 'What are your monthly government benefits/pensions?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Income Sources',
        groupId: 'income'
      },
      {
        id: 'monthlyAlimonyChildSupport',
        title: 'What is your monthly alimony/child support received?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Income Sources',
        groupId: 'income'
      },
      {
        id: 'monthlyRoyaltiesLicensing',
        title: 'What is your monthly royalties/licensing income?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Income Sources',
        groupId: 'income'
      },
      {
        id: 'monthlyFamilySupport',
        title: 'What is your monthly family financial support received?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Income Sources',
        groupId: 'income'
      },
      {
        id: 'monthlyMiscellaneousIncome',
        title: 'What are your other miscellaneous income sources (monthly)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'Other Income Sources',
        groupId: 'income'
      },
      {
        id: 'partnerGrossMonthlySalary',
        title: "What is your partner's gross monthly salary?",
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        groupId: 'income'
      },
      {
        id: 'partnerNetMonthlySalary',
        title: "What is your partner's net monthly salary?",
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        groupId: 'income'
      },
      {
        id: 'partnerOtherIncome',
        title: "What are your partner's other income sources (monthly)?",
        type: 'number',
        required: true,
        validation: { min: 0 },
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship living together', 'Married']
        },
        section: "Partner's Income",
        groupId: 'income'
      }
    ]
  }
];