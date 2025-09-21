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
  // Group 1: Personal Basics (Q1-19)
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
        title: 'Do you own any vehicles for personal/family use?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
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
        title: 'How many financial dependents do you have?',
        type: 'radio',
        required: true,
        options: ['None', '1', '2', '3', '4', '5 or more'],
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
      }
    ]
  },

  // Group 2: Rental Housing (Q20-26) - Conditional: housingType = "Rent it"
  {
    id: 'rental-housing',
    title: 'Rental Housing',
    description: 'Information about your rental property',
    conditional: true,
    triggerQuestions: ['housingType'],
    questions: [
      {
        id: 'monthlyRent',
        title: 'What is your monthly rent amount?',
        type: 'number',
        required: true,
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

  // Group 3: Owned Properties (Q27-44) - Shows for property owners
  {
    id: 'owned-properties',
    title: 'Owned Properties',
    description: 'Information about properties you own',
    conditional: true,
    triggerQuestions: ['housingType', 'additionalProperties', 'ownedHomesCount'],
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

  // Group 4: Vehicles Basic (Q45-56) - Conditional: hasVehicles = "Yes"
  {
    id: 'vehicles-basic',
    title: 'Vehicle Information',
    description: 'Basic information about your vehicles',
    conditional: true,
    triggerQuestions: ['hasVehicles'],
    questions: [
      {
        id: 'monthlyParkingCost',
        title: 'What is your total monthly parking cost for all vehicles?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 45,
        groupId: 'vehicles-basic'
      },
      {
        id: 'monthlyDriverCost',
        title: 'What is your total monthly chauffeur/driver cost?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 46,
        groupId: 'vehicles-basic'
      },
      {
        id: 'monthlyWashingCost',
        title: 'What is your total monthly vehicle washing/cleaning cost?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 47,
        groupId: 'vehicles-basic'
      },
      {
        id: 'annualMaintenanceCost',
        title: 'What is your total annual cost for maintenance, service, accessories, repairs for all vehicles?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 48,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1PurchasePrice',
        title: 'Vehicle 1: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 49,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1CurrentValue',
        title: 'Vehicle 1: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 50,
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
        questionNumber: 51,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle1FuelCost',
        title: 'Vehicle 1: What are your estimated monthly fuel costs for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 52,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2PurchasePrice',
        title: 'Vehicle 2: What was the purchase price of this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 53,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2CurrentValue',
        title: 'Vehicle 2: What is the estimated current value of this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 54,
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
        questionNumber: 55,
        groupId: 'vehicles-basic'
      },
      {
        id: 'vehicle2FuelCost',
        title: 'Vehicle 2: What are your estimated monthly fuel costs for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicles',
        questionNumber: 56,
        groupId: 'vehicles-basic'
      }
    ]
  },

  // Group 5: Vehicle Insurance & Loans (Q57-68) - Conditional: hasVehicles = "Yes"
  {
    id: 'vehicle-insurance-loans',
    title: 'Vehicle Insurance & Loans',
    description: 'Insurance and loan details for your vehicles',
    conditional: true,
    triggerQuestions: ['hasVehicles'],
    questions: [
      {
        id: 'vehicle1InsuranceCover',
        title: 'Vehicle 1: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 57,
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle1InsurancePremium',
        title: 'Vehicle 1: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 58,
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
        questionNumber: 59,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 60,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 61,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 62,
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2InsuranceCover',
        title: 'Vehicle 2: What is the insurance coverage amount for this vehicle? (Enter 0 if no insurance)',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 63,
        groupId: 'vehicle-insurance-loans'
      },
      {
        id: 'vehicle2InsurancePremium',
        title: 'Vehicle 2: What is your insurance premium for this vehicle?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasVehicles',
          values: ['Yes']
        },
        section: 'Vehicle Insurance & Loans',
        questionNumber: 64,
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
        questionNumber: 65,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 66,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 67,
        groupId: 'vehicle-insurance-loans'
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
        questionNumber: 68,
        groupId: 'vehicle-insurance-loans'
      }
    ]
  },

  // Group 6: Children (Q69-84) - Conditional: hasChildren = "Yes"
  {
    id: 'children',
    title: 'Children',
    description: 'Information about expenses for your children',
    conditional: true,
    triggerQuestions: ['hasChildren'],
    questions: [
      {
        id: 'child1AgeGroup',
        title: 'Child 1: What is the age group of this child?',
        type: 'select',
        required: true,
        options: ['0-5', '6-10', '11-15', '16-18', '19-25', '26 or older'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 69,
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
        questionNumber: 70,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyClothing',
        title: 'Child 1: What are your monthly expenses for clothing, shoes',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 71,
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
        questionNumber: 72,
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
        questionNumber: 73,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyActivities',
        title: 'Child 1: Monthly expense for hobbies, sports, extra curricular activities',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 74,
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
        questionNumber: 75,
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
        questionNumber: 76,
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
        questionNumber: 77,
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
        questionNumber: 78,
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
        questionNumber: 79,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMedical',
        title: 'Child 1: Monthly expenses for your child\'s medical expenses, treatments, medicines',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 80,
        groupId: 'children'
      },
      {
        id: 'child1MonthlyMiscellaneous',
        title: 'Child 1: Miscellaneous monthly expenses',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 81,
        groupId: 'children'
      },
      {
        id: 'child1HealthInsurance',
        title: 'Child 1: Do you have health insurance that covers your child?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasChildren',
          values: ['Yes']
        },
        section: 'Children',
        questionNumber: 82,
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
        questionNumber: 83,
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
        questionNumber: 84,
        groupId: 'children'
      }
    ]
  },

  // Group 7: Financial Dependents (Q85-102) - Conditional: hasFinancialDependents != "None"
  {
    id: 'financial-dependents',
    title: 'Financial Dependents',
    description: 'Information about your financial dependents',
    conditional: true,
    triggerQuestions: ['hasFinancialDependents'],
    questions: [
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
        questionNumber: 85,
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
        questionNumber: 86,
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
        questionNumber: 87,
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
        questionNumber: 88,
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
        questionNumber: 89,
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
        questionNumber: 90,
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
        questionNumber: 91,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsuranceCover',
        title: 'Dependent 1: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'dependent1HealthInsurance',
          values: ['Yes']
        },
        section: 'Financial Dependents',
        questionNumber: 92,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent1InsurancePremium',
        title: 'Dependent 1: What is the annual premium you\'re paying for this?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'dependent1HealthInsurance',
          values: ['Yes']
        },
        section: 'Financial Dependents',
        questionNumber: 93,
        groupId: 'financial-dependents'
      },
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
        questionNumber: 94,
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
        questionNumber: 95,
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
        questionNumber: 96,
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
        questionNumber: 97,
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
        questionNumber: 98,
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
        questionNumber: 99,
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
        questionNumber: 100,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsuranceCover',
        title: 'Dependent 2: What is the value of the insurance cover for this dependent?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'dependent2HealthInsurance',
          values: ['Yes']
        },
        section: 'Financial Dependents',
        questionNumber: 101,
        groupId: 'financial-dependents'
      },
      {
        id: 'dependent2InsurancePremium',
        title: 'Dependent 2: What is the annual premium you\'re paying for this?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'dependent2HealthInsurance',
          values: ['Yes']
        },
        section: 'Financial Dependents',
        questionNumber: 102,
        groupId: 'financial-dependents'
      }
    ]
  },

  // Group 8: Personal Loans & Credit (Q103-132) - Conditional: hasPersonalLoans = "Yes"
  {
    id: 'personal-loans',
    title: 'Personal Loans & Credit',
    description: 'Information about your personal loans and credit card debt',
    conditional: true,
    triggerQuestions: ['hasPersonalLoans'],
    questions: [
      {
        id: 'hasCreditCardDebt',
        title: 'Do you have any credit card debt that is more than 45 days old?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 103,
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
        questionNumber: 104,
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
        questionNumber: 105,
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
        questionNumber: 106,
        groupId: 'personal-loans'
      },
      {
        id: 'numberOfPersonalLoans',
        title: 'How many personal loans do you have apart from those for your home and/or your vehicles?',
        type: 'select',
        required: true,
        options: ['0', '1', '2', '3', '4', '5 or more'],
        conditional: {
          dependsOn: 'hasPersonalLoans',
          values: ['Yes']
        },
        section: 'Personal Loans & Credit',
        questionNumber: 107,
        groupId: 'personal-loans'
      },
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
        questionNumber: 108,
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
        questionNumber: 109,
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
        questionNumber: 110,
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
        questionNumber: 111,
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
        questionNumber: 112,
        groupId: 'personal-loans'
      },
      {
        id: 'userHealthInsurance',
        title: 'Do you have health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        questionNumber: 113,
        groupId: 'personal-loans'
      },
      {
        id: 'userLifeInsurance',
        title: 'Do you have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        questionNumber: 114,
        groupId: 'personal-loans'
      },
      {
        id: 'userAccidentInsurance',
        title: 'Do you have accident and disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Insurance',
        questionNumber: 115,
        groupId: 'personal-loans'
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
        questionNumber: 116,
        groupId: 'personal-loans'
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
        questionNumber: 117,
        groupId: 'personal-loans'
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
        questionNumber: 118,
        groupId: 'personal-loans'
      },
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
        questionNumber: 119,
        groupId: 'personal-loans'
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
        questionNumber: 120,
        groupId: 'personal-loans'
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
        questionNumber: 121,
        groupId: 'personal-loans'
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
        questionNumber: 122,
        groupId: 'personal-loans'
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
        questionNumber: 123,
        groupId: 'personal-loans'
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
        questionNumber: 124,
        groupId: 'personal-loans'
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
        questionNumber: 125,
        groupId: 'personal-loans'
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
        questionNumber: 126,
        groupId: 'personal-loans'
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
        questionNumber: 127,
        groupId: 'personal-loans'
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
        questionNumber: 128,
        groupId: 'personal-loans'
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
        questionNumber: 129,
        groupId: 'personal-loans'
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
        questionNumber: 130,
        groupId: 'personal-loans'
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
  },

  // Group 10: Assets
  {
    id: 'assets',
    title: 'Assets',
    description: 'Current value of your assets and holdings',
    questions: [
      // Auto-calculated fields (non-editable)
      {
        id: 'totalPropertyValue',
        title: 'Total current value of all properties you own',
        subtitle: 'This is calculated automatically from your property details above',
        type: 'number',
        required: false,
        section: 'Auto-calculated Assets',
        questionNumber: 282,
        groupId: 'assets'
      },
      {
        id: 'totalVehicleValue',
        title: 'Total current value of all vehicles you own',
        subtitle: 'This is calculated automatically from your vehicle details above',
        type: 'number',
        required: false,
        section: 'Auto-calculated Assets',
        questionNumber: 283,
        groupId: 'assets'
      },
      
      // Cash & Bank Accounts
      {
        id: 'checkingAccountBalance',
        title: 'What is your current checking account balance?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 284,
        groupId: 'assets'
      },
      {
        id: 'fixedDepositsValue',
        title: 'What is the current value of your fixed deposits/term deposits?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 285,
        groupId: 'assets'
      },
      {
        id: 'cashOnHand',
        title: 'How much cash do you have on hand?',
        type: 'number',
        required: true,
        section: 'Cash & Bank Accounts',
        questionNumber: 286,
        groupId: 'assets'
      },
      
      // Investment Holdings
      {
        id: 'mutualFundsValue',
        title: 'What is the current value of your mutual funds?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 287,
        groupId: 'assets'
      },
      {
        id: 'directEquityValue',
        title: 'What is the current value of your direct equity/stocks?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 288,
        groupId: 'assets'
      },
      {
        id: 'retirementAccountBalance',
        title: 'What is your retirement account balance?',
        subtitle: 'Include 401k, EPF, pension funds, superannuation, etc.',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 289,
        groupId: 'assets'
      },
      {
        id: 'cryptoCurrentValue',
        title: 'What is the current value of your cryptocurrency holdings?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 290,
        groupId: 'assets'
      },
      {
        id: 'commodityHoldingsValue',
        title: 'What is the current value of your gold, silver, or other commodity holdings?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 291,
        groupId: 'assets'
      },
      {
        id: 'bondsCurrentValue',
        title: 'What is the current value of your government/corporate bonds?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 292,
        groupId: 'assets'
      },
      {
        id: 'otherInvestmentProducts',
        title: 'What is the current value of your other investment products?',
        type: 'number',
        required: true,
        section: 'Investment Holdings',
        questionNumber: 293,
        groupId: 'assets'
      },
      
      // Other Assets
      {
        id: 'providentFundBalance',
        title: 'What is your provident fund/pension fund balance?',
        subtitle: 'If separate from retirement accounts mentioned above',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 294,
        groupId: 'assets'
      },
      {
        id: 'employeeStockOptions',
        title: 'What is the current value of your employee stock options?',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 295,
        groupId: 'assets'
      },
      {
        id: 'businessOwnershipValue',
        title: 'What is the value of your business ownership/partnership stakes?',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 296,
        groupId: 'assets'
      },
      {
        id: 'collectiblesValue',
        title: 'What is the value of your collectibles?',
        subtitle: 'Include art, antiques, etc.',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 297,
        groupId: 'assets'
      },
      {
        id: 'loansGivenToOthers',
        title: 'How much money is owed to you?',
        subtitle: 'Loans given to others that you expect to be repaid',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 298,
        groupId: 'assets'
      },
      {
        id: 'securityDepositsRecoverable',
        title: 'What is the total of your recoverable security deposits?',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 299,
        groupId: 'assets'
      },
      {
        id: 'otherMiscellaneousAssets',
        title: 'What is the value of your other miscellaneous assets?',
        type: 'number',
        required: true,
        section: 'Other Assets',
        questionNumber: 300,
        groupId: 'assets'
      }
    ]
  },

  // Group 11: Income
  {
    id: 'income',
    title: 'Income',
    description: 'Your various income sources',
    questions: [
      // Employment Income
      {
        id: 'grossMonthlySalary',
        title: 'What is your gross monthly salary/wage (before taxes)?',
        type: 'number',
        required: true,
        section: 'Employment Income',
        questionNumber: 301,
        groupId: 'income'
      },
      {
        id: 'netMonthlySalary',
        title: 'What is your net monthly salary/wage (after taxes and deductions)?',
        type: 'number',
        required: true,
        section: 'Employment Income',
        questionNumber: 302,
        groupId: 'income'
      },
      {
        id: 'annualBonusCommission',
        title: 'What is your average annual bonus/commission?',
        type: 'number',
        required: true,
        section: 'Employment Income',
        questionNumber: 303,
        groupId: 'income'
      },
      {
        id: 'monthlyOvertimePay',
        title: 'What is your monthly average overtime pay?',
        type: 'number',
        required: true,
        section: 'Employment Income',
        questionNumber: 304,
        groupId: 'income'
      },
      
      // Self-Employment/Business Income
      {
        id: 'monthlySelfEmploymentGross',
        title: 'What is your monthly self-employment/freelance income, side hustles, income from hobbies, gig work (gross)?',
        type: 'number',
        required: true,
        section: 'Self-Employment/Business Income',
        questionNumber: 305,
        groupId: 'income'
      },
      {
        id: 'monthlySelfEmploymentNet',
        title: 'What is your monthly self-employment/freelance income (net after expenses)?',
        type: 'number',
        required: true,
        section: 'Self-Employment/Business Income',
        questionNumber: 306,
        groupId: 'income'
      },
      
      // Investment Income
      {
        id: 'annualDividendIncome',
        title: 'What is your annual dividend income?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 307,
        groupId: 'income'
      },
      {
        id: 'annualInterestIncome',
        title: 'What is your annual interest income (from savings, FDs, bonds)?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 308,
        groupId: 'income'
      },
      {
        id: 'monthlyRentalIncome',
        title: 'What is your monthly rental income from properties?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 309,
        groupId: 'income'
      },
      {
        id: 'annualCapitalGains',
        title: 'What are your annual average capital gains?',
        type: 'number',
        required: true,
        section: 'Investment Income',
        questionNumber: 310,
        groupId: 'income'
      },
      
      // Other Income Sources
      {
        id: 'monthlyGovernmentBenefits',
        title: 'What are your monthly government benefits/pensions?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 311,
        groupId: 'income'
      },
      {
        id: 'monthlyAlimonyChildSupport',
        title: 'What is your monthly alimony/child support received?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 312,
        groupId: 'income'
      },
      {
        id: 'monthlyRoyaltiesLicensing',
        title: 'What is your monthly royalties/licensing income?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 313,
        groupId: 'income'
      },
      {
        id: 'monthlyFamilySupport',
        title: 'What is your monthly family financial support received?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 314,
        groupId: 'income'
      },
      {
        id: 'monthlyMiscellaneousIncome',
        title: 'What are your other miscellaneous income sources (monthly)?',
        type: 'number',
        required: true,
        section: 'Other Income Sources',
        questionNumber: 315,
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
        questionNumber: 316,
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
        questionNumber: 317,
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
        questionNumber: 318,
        groupId: 'income'
      }
    ]
  }
];
