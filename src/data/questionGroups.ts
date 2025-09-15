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
        id: 'q1',
        title: 'What is your current age?',
        type: 'number',
        required: true,
        validation: [{ type: 'min', value: 18, message: 'Must be 18 or older' }],
        section: 'Demographics',
        questionNumber: 1,
        groupId: 'personal-basics'
      },
      {
        id: 'q2',
        title: 'What is your gender?',
        type: 'radio',
        required: true,
        options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
        section: 'Demographics',
        questionNumber: 2,
        groupId: 'personal-basics'
      },
      {
        id: 'q3',
        title: 'What is your employment status?',
        type: 'radio',
        required: true,
        options: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Unemployed', 'Student', 'Retired'],
        section: 'Work',
        questionNumber: 3,
        groupId: 'personal-basics'
      },
      {
        id: 'q4',
        title: 'What is your current job title or profession?',
        type: 'text',
        required: false,
        section: 'Work',
        questionNumber: 4,
        groupId: 'personal-basics'
      },
      {
        id: 'q5',
        title: 'How many years until your planned retirement?',
        type: 'number',
        required: true,
        validation: [{ type: 'min', value: 0, message: 'Cannot be negative' }],
        section: 'Retirement',
        questionNumber: 5,
        groupId: 'personal-basics'
      },
      {
        id: 'q6',
        title: 'What percentage of your current income do you estimate you will need in retirement?',
        type: 'number',
        required: true,
        validation: [{ type: 'min', value: 10, message: 'Must be at least 10%' }, { type: 'max', value: 150, message: 'Cannot exceed 150%' }],
        section: 'Retirement',
        questionNumber: 6,
        groupId: 'personal-basics'
      },
      {
        id: 'q7',
        title: 'Do you have a workplace pension or superannuation scheme?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No', 'Not sure'],
        section: 'Retirement',
        questionNumber: 7,
        groupId: 'personal-basics'
      },
      {
        id: 'q8',
        title: 'What percentage of your income is contributed to retirement savings (including employer contributions)?',
        type: 'number',
        required: false,
        validation: [{ type: 'min', value: 0, message: 'Cannot be negative' }, { type: 'max', value: 50, message: 'Cannot exceed 50%' }],
        section: 'Retirement',
        questionNumber: 8,
        groupId: 'personal-basics'
      },
      {
        id: 'q9',
        title: 'Which country do you currently live in?',
        type: 'select',
        required: true,
        options: ['United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'South Africa', 'Other'],
        section: 'Location',
        questionNumber: 9,
        groupId: 'personal-basics'
      },
      {
        id: 'q10',
        title: 'What is your primary currency?',
        type: 'select',
        required: true,
        options: ['GBP (£)', 'USD ($)', 'CAD ($)', 'AUD ($)', 'NZD ($)', 'EUR (€)', 'ZAR (R)', 'Other'],
        section: 'Location',
        questionNumber: 10,
        groupId: 'personal-basics'
      },
      {
        id: 'q11',
        title: 'What is your first name? (Optional - for personalised report)',
        type: 'text',
        required: false,
        section: 'Personal',
        questionNumber: 11,
        groupId: 'personal-basics'
      },
      {
        id: 'q12',
        title: 'What is your email address? (Optional - for sending your report)',
        type: 'text',
        required: false,
        section: 'Personal',
        questionNumber: 12,
        groupId: 'personal-basics'
      },
      {
        id: 'q13',
        title: 'What is your relationship status?',
        type: 'radio',
        required: true,
        options: ['Single', 'In a relationship/dating', 'Married/civil partnership', 'Divorced/separated', 'Widowed'],
        section: 'Personal',
        questionNumber: 13,
        groupId: 'personal-basics'
      },
      {
        id: 'q14',
        title: 'What is your highest level of education?',
        type: 'radio',
        required: true,
        options: ['Secondary school/GCSEs', 'A-levels/College', 'University degree', 'Postgraduate degree', 'Professional qualification', 'Other'],
        section: 'Personal',
        questionNumber: 14,
        groupId: 'personal-basics'
      },
      // TRIGGER QUESTIONS (Q15-Q20)
      {
        id: 'q15',
        title: 'Do you currently live with your parents or family rent-free?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
        questionNumber: 15,
        groupId: 'personal-basics'
      },
      {
        id: 'q16',
        title: 'Do you own any additional properties (other than your primary residence)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
        questionNumber: 16,
        groupId: 'personal-basics'
      },
      {
        id: 'q17',
        title: 'Do you own any vehicles (car, motorbike, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
        questionNumber: 17,
        groupId: 'personal-basics'
      },
      {
        id: 'q18',
        title: 'Do you have any children?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
        questionNumber: 18,
        groupId: 'personal-basics'
      },
      {
        id: 'q19',
        title: 'Do you financially support any dependents (parents, relatives, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
        questionNumber: 19,
        groupId: 'personal-basics'
      },
      {
        id: 'q20',
        title: 'Do you have any personal loans or consumer debt (excluding mortgage)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'Triggers',
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