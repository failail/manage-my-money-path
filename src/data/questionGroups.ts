export interface Question {
  id: string;
  title: string;
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
        id: 'dateOfBirth',
        title: "What's your date of birth?",
        type: 'date',
        required: true,
        section: 'Personal Information',
        questionNumber: 1,
        groupId: 'personal-basics'
      },
      {
        id: 'gender',
        title: "What's your gender?",
        type: 'radio',
        required: true,
        options: ['Male', 'Female', 'Prefer not to say'],
        section: 'Personal Information',
        questionNumber: 2,
        groupId: 'personal-basics'
      },
      {
        id: 'relationshipStatus',
        title: "What's your relationship status?",
        type: 'radio',
        required: true,
        options: ['Single', 'In relationship not living together', 'In relationship living together', 'Married'],
        section: 'Personal Information',
        questionNumber: 3,
        groupId: 'personal-basics'
      },
      {
        id: 'partnerAge',
        title: "What's your partner's age range?",
        type: 'select',
        required: true,
        options: ['18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '60+'],
        conditional: {
          dependsOn: 'relationshipStatus',
          values: ['In relationship not living together', 'In relationship living together', 'Married']
        },
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
        id: 'retirementDate',
        title: 'When did you retire?',
        type: 'date',
        required: true,
        conditional: {
          dependsOn: 'workSituation',
          values: ['Retired']
        },
        section: 'Personal Information',
        questionNumber: 6,
        groupId: 'personal-basics'
      },
      {
        id: 'industry',
        title: 'Which industry do you work in?',
        type: 'select',
        required: true,
        options: ['Technology', 'Finance & Banking', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Consulting', 'Real Estate', 'Media & Entertainment', 'Government', 'Non-profit', 'Agriculture', 'Energy', 'Transportation', 'Other'],
        conditional: {
          dependsOn: 'workSituation',
          values: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Freelancer']
        },
        section: 'Personal Information',
        questionNumber: 7,
        groupId: 'personal-basics'
      },
      {
        id: 'jobFunction',
        title: "What's your primary job function?",
        type: 'select',
        required: true,
        options: ['Engineering/Technical', 'Sales & Marketing', 'Operations', 'Finance & Accounting', 'Human Resources', 'Management/Leadership', 'Customer Service', 'Research & Development', 'Legal', 'Design/Creative', 'Administrative', 'Other'],
        conditional: {
          dependsOn: 'workSituation',
          values: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Freelancer']
        },
        section: 'Personal Information',
        questionNumber: 8,
        groupId: 'personal-basics'
      },
      {
        id: 'smoker',
        title: 'Are you a smoker?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 9,
        groupId: 'personal-basics'
      },
      {
        id: 'targetRetirementAge',
        title: 'At what age do you plan to retire?',
        type: 'number',
        required: true,
        conditional: {
          dependsOn: 'workSituation',
          values: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Freelancer', 'Unemployed', 'Student', 'Homemaker']
        },
        section: 'Personal Information',
        questionNumber: 10,
        groupId: 'personal-basics'
      },
      {
        id: 'country',
        title: 'Which country do you live in?',
        type: 'select',
        required: true,
        options: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'UAE', 'Germany', 'Other'],
        section: 'Personal Information',
        questionNumber: 11,
        groupId: 'personal-basics'
      },
      {
        id: 'city',
        title: 'Which city do you live in?',
        type: 'text',
        required: true,
        section: 'Personal Information',
        questionNumber: 12,
        groupId: 'personal-basics'
      },
      {
        id: 'currency',
        title: "What's your preferred currency?",
        type: 'select',
        required: true,
        options: ['INR (Indian Rupees)', 'USD (US Dollars)', 'GBP (British Pounds)', 'EUR (Euros)', 'CAD (Canadian Dollars)', 'AUD (Australian Dollars)', 'SGD (Singapore Dollars)', 'AED (UAE Dirhams)'],
        section: 'Personal Information',
        questionNumber: 13,
        groupId: 'personal-basics'
      },
      {
        id: 'firstName',
        title: "What's your first name?",
        type: 'text',
        required: true,
        section: 'Personal Information',
        questionNumber: 14,
        groupId: 'personal-basics'
      },
      {
        id: 'liveWithParents',
        title: 'Do you live with parents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 15,
        groupId: 'personal-basics'
      },
      {
        id: 'hasAdditionalProperties',
        title: 'Do you own any other properties?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 16,
        groupId: 'personal-basics'
      },
      {
        id: 'hasVehicles',
        title: 'Do you own any vehicles for personal/family use?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 17,
        groupId: 'personal-basics'
      },
      {
        id: 'hasChildren',
        title: 'Do you have kids?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 18,
        groupId: 'personal-basics'
      },
      {
        id: 'hasFinancialDependents',
        title: 'Do you have any other financial dependents?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 19,
        groupId: 'personal-basics'
      },
      {
        id: 'hasPersonalLoans',
        title: 'Do you have any personal loans apart from home and vehicle loans?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Personal Information',
        questionNumber: 20,
        groupId: 'personal-basics'
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
  }
];