export interface Question {
  id: string;
  title: string;
  type: 'text' | 'number' | 'radio' | 'select' | 'date';
  required: boolean;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  conditional?: {
    dependsOn: string;
    values: string[];
  };
  section: string;
  questionNumber: number;
  groupId: string;
}

export interface QuestionGroup {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  conditional?: {
    dependsOn: string;
    values: string[];
  };
}

export const questionGroups: QuestionGroup[] = [
  {
    id: 'personal-basics',
    title: 'Personal Information',
    description: 'Basic information about you and your situation',
    questions: [
      // Page 1: Demographics, work, retirement (Q1-10)
      {
        id: 'q1',
        title: 'What is your age?',
        type: 'number',
        required: true,
        validation: { min: 18, max: 100 },
        section: 'demographics',
        questionNumber: 1,
        groupId: 'personal-basics'
      },
      {
        id: 'q2',
        title: 'What is your gender?',
        type: 'radio',
        required: true,
        options: ['Male', 'Female', 'Other', 'Prefer not to say'],
        section: 'demographics',
        questionNumber: 2,
        groupId: 'personal-basics'
      },
      {
        id: 'q3',
        title: 'What is your employment status?',
        type: 'radio',
        required: true,
        options: ['Full-time employed', 'Part-time employed', 'Self-employed', 'Unemployed', 'Retired', 'Student'],
        section: 'employment',
        questionNumber: 3,
        groupId: 'personal-basics'
      },
      {
        id: 'q4',
        title: 'What is your industry/profession?',
        type: 'text',
        required: false,
        section: 'employment',
        questionNumber: 4,
        groupId: 'personal-basics'
      },
      {
        id: 'q5',
        title: 'How many years have you been working?',
        type: 'number',
        required: true,
        validation: { min: 0, max: 50 },
        section: 'employment',
        questionNumber: 5,
        groupId: 'personal-basics'
      },
      {
        id: 'q6',
        title: 'Do you contribute to a pension scheme?',
        type: 'radio',
        required: true,
        options: ['Yes, workplace pension', 'Yes, private pension', 'Yes, both workplace and private', 'No'],
        section: 'retirement',
        questionNumber: 6,
        groupId: 'personal-basics'
      },
      {
        id: 'q7',
        title: 'What percentage of your salary goes to pension contributions?',
        type: 'number',
        required: false,
        validation: { min: 0, max: 100 },
        section: 'retirement',
        questionNumber: 7,
        groupId: 'personal-basics'
      },
      {
        id: 'q8',
        title: 'At what age do you plan to retire?',
        type: 'number',
        required: true,
        validation: { min: 50, max: 80 },
        section: 'retirement',
        questionNumber: 8,
        groupId: 'personal-basics'
      },
      {
        id: 'q9',
        title: 'What is your relationship status?',
        type: 'radio',
        required: true,
        options: ['Single', 'Married/Civil Partnership', 'Cohabiting', 'Divorced/Separated', 'Widowed'],
        section: 'demographics',
        questionNumber: 9,
        groupId: 'personal-basics'
      },
      {
        id: 'q10',
        title: 'What is your highest level of education?',
        type: 'radio',
        required: false,
        options: ['No formal education', 'GCSE/O-levels', 'A-levels/BTEC', 'University degree', 'Postgraduate degree', 'Professional qualification'],
        section: 'demographics',
        questionNumber: 10,
        groupId: 'personal-basics'
      },
      
      // Page 2: Location, currency, name + trigger questions (Q11-20)
      {
        id: 'q11',
        title: 'Which country do you live in?',
        type: 'select',
        required: true,
        options: ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands', 'Other'],
        section: 'location',
        questionNumber: 11,
        groupId: 'personal-basics'
      },
      {
        id: 'q12',
        title: 'What currency should we use for calculations?',
        type: 'select',
        required: true,
        options: ['GBP (£)', 'USD ($)', 'EUR (€)', 'CAD ($)', 'AUD ($)'],
        section: 'location',
        questionNumber: 12,
        groupId: 'personal-basics'
      },
      {
        id: 'q13',
        title: 'What is your first name? (optional - for personalised report)',
        type: 'text',
        required: false,
        section: 'personal',
        questionNumber: 13,
        groupId: 'personal-basics'
      },
      {
        id: 'q14',
        title: 'What is your email address? (optional - for sending report)',
        type: 'text',
        required: false,
        section: 'personal',
        questionNumber: 14,
        groupId: 'personal-basics'
      },
      
      // TRIGGER QUESTIONS (Q15-20)
      {
        id: 'q15',
        title: 'Do you currently live with your parents or family rent-free?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'housing-trigger',
        questionNumber: 15,
        groupId: 'personal-basics'
      },
      {
        id: 'q16',
        title: 'Do you own any properties other than your main residence?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'property-trigger',
        questionNumber: 16,
        groupId: 'personal-basics'
      },
      {
        id: 'q17',
        title: 'Do you own any vehicles (car, motorcycle, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'vehicle-trigger',
        questionNumber: 17,
        groupId: 'personal-basics'
      },
      {
        id: 'q18',
        title: 'Do you have any children?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'children-trigger',
        questionNumber: 18,
        groupId: 'personal-basics'
      },
      {
        id: 'q19',
        title: 'Do you financially support any dependents (parents, siblings, etc.)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'dependents-trigger',
        questionNumber: 19,
        groupId: 'personal-basics'
      },
      {
        id: 'q20',
        title: 'Do you have any personal loans (excluding mortgage)?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'loans-trigger',
        questionNumber: 20,
        groupId: 'personal-basics'
      }
    ]
  },
  
  // Conditional groups will be added here
  {
    id: 'housing',
    title: 'Housing & Accommodation',
    description: 'Information about your housing situation',
    conditional: {
      dependsOn: 'q15',
      values: ['No']
    },
    questions: [
      {
        id: 'q21',
        title: 'Do you own or rent your main residence?',
        type: 'radio',
        required: true,
        options: ['Own with mortgage', 'Own outright', 'Rent privately', 'Social housing', 'Other'],
        section: 'housing',
        questionNumber: 21,
        groupId: 'housing'
      },
      {
        id: 'q22',
        title: 'What is your monthly housing cost (mortgage/rent)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 22,
        groupId: 'housing'
      },
      {
        id: 'q23',
        title: 'What is the current value of your property?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 23,
        groupId: 'housing'
      },
      {
        id: 'q24',
        title: 'How much is left on your mortgage?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 24,
        groupId: 'housing'
      },
      {
        id: 'q25',
        title: 'What are your monthly council tax payments?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 25,
        groupId: 'housing'
      },
      {
        id: 'q26',
        title: 'What are your monthly utility bills (gas, electricity, water)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 26,
        groupId: 'housing'
      },
      {
        id: 'q27',
        title: 'Do you pay for home insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'housing',
        questionNumber: 27,
        groupId: 'housing'
      },
      {
        id: 'q28',
        title: 'What is your monthly home insurance cost?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 28,
        groupId: 'housing'
      },
      {
        id: 'q29',
        title: 'Do you spend money on home maintenance/improvements?',
        type: 'radio',
        required: true,
        options: ['Yes, regularly', 'Yes, occasionally', 'No'],
        section: 'housing',
        questionNumber: 29,
        groupId: 'housing'
      },
      {
        id: 'q30',
        title: 'What is your average monthly spend on home maintenance?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'housing',
        questionNumber: 30,
        groupId: 'housing'
      }
    ]
  },

  {
    id: 'vehicles',
    title: 'Vehicles & Transport',
    description: 'Information about your vehicles and transport costs',
    conditional: {
      dependsOn: 'q17',
      values: ['Yes']
    },
    questions: [
      {
        id: 'q41',
        title: 'How many vehicles do you own?',
        type: 'number',
        required: true,
        validation: { min: 1, max: 10 },
        section: 'vehicles',
        questionNumber: 41,
        groupId: 'vehicles'
      },
      {
        id: 'q42',
        title: 'What is the total current value of all your vehicles?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 42,
        groupId: 'vehicles'
      },
      {
        id: 'q43',
        title: 'Do you have any outstanding vehicle finance/loans?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'vehicles',
        questionNumber: 43,
        groupId: 'vehicles'
      },
      {
        id: 'q44',
        title: 'What is your total monthly vehicle finance payment?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 44,
        groupId: 'vehicles'
      },
      {
        id: 'q45',
        title: 'What is your monthly vehicle insurance cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 45,
        groupId: 'vehicles'
      },
      {
        id: 'q46',
        title: 'What is your monthly fuel cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 46,
        groupId: 'vehicles'
      },
      {
        id: 'q47',
        title: 'What is your monthly vehicle maintenance/service cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 47,
        groupId: 'vehicles'
      },
      {
        id: 'q48',
        title: 'Do you pay for parking regularly?',
        type: 'radio',
        required: true,
        options: ['Yes, daily', 'Yes, occasionally', 'No'],
        section: 'vehicles',
        questionNumber: 48,
        groupId: 'vehicles'
      },
      {
        id: 'q49',
        title: 'What is your monthly parking cost?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'vehicles',
        questionNumber: 49,
        groupId: 'vehicles'
      },
      {
        id: 'q50',
        title: 'Do you use public transport as well?',
        type: 'radio',
        required: true,
        options: ['Yes, regularly', 'Yes, occasionally', 'No'],
        section: 'vehicles',
        questionNumber: 50,
        groupId: 'vehicles'
      }
    ]
  },

  {
    id: 'insurance',
    title: 'Insurance & Protection',
    description: 'Your insurance coverage and protection plans',
    questions: [
      {
        id: 'q81',
        title: 'Do you have life insurance?',
        type: 'radio',
        required: true,
        options: ['Yes, through work', 'Yes, private policy', 'Yes, both', 'No'],
        section: 'insurance',
        questionNumber: 81,
        groupId: 'insurance'
      },
      {
        id: 'q82',
        title: 'What is your monthly life insurance premium?',
        type: 'number',
        required: false,
        validation: { min: 0 },
        section: 'insurance',
        questionNumber: 82,
        groupId: 'insurance'
      },
      {
        id: 'q83',
        title: 'Do you have income protection/disability insurance?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'insurance',
        questionNumber: 83,
        groupId: 'insurance'
      },
      {
        id: 'q84',
        title: 'Do you have critical illness cover?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'insurance',
        questionNumber: 84,
        groupId: 'insurance'
      },
      {
        id: 'q85',
        title: 'Do you have private health insurance?',
        type: 'radio',
        required: true,
        options: ['Yes, through work', 'Yes, private policy', 'No'],
        section: 'insurance',
        questionNumber: 85,
        groupId: 'insurance'
      },
      {
        id: 'q86',
        title: 'What is your total monthly insurance cost (excluding vehicle/home)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'insurance',
        questionNumber: 86,
        groupId: 'insurance'
      },
      {
        id: 'q87',
        title: 'Do you have contents insurance for your belongings?',
        type: 'radio',
        required: true,
        options: ['Yes', 'No'],
        section: 'insurance',
        questionNumber: 87,
        groupId: 'insurance'
      },
      {
        id: 'q88',
        title: 'Do you have travel insurance?',
        type: 'radio',
        required: true,
        options: ['Yes, annual policy', 'Yes, per trip', 'No'],
        section: 'insurance',
        questionNumber: 88,
        groupId: 'insurance'
      },
      {
        id: 'q89',
        title: 'Are you satisfied with your current insurance coverage?',
        type: 'radio',
        required: true,
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied'],
        section: 'insurance',
        questionNumber: 89,
        groupId: 'insurance'
      },
      {
        id: 'q90',
        title: 'Do you review your insurance policies annually?',
        type: 'radio',
        required: true,
        options: ['Yes, always', 'Sometimes', 'Rarely', 'Never'],
        section: 'insurance',
        questionNumber: 90,
        groupId: 'insurance'
      }
    ]
  },

  {
    id: 'monthly-expenses-1',
    title: 'Monthly Expenses - Part 1',
    description: 'Your regular monthly spending',
    questions: [
      {
        id: 'q91',
        title: 'What is your monthly grocery spend?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 91,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q92',
        title: 'What is your monthly dining out/takeaway spend?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 92,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q93',
        title: 'What is your monthly mobile phone bill?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 93,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q94',
        title: 'What is your monthly internet/broadband cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 94,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q95',
        title: 'What do you spend monthly on streaming services (Netflix, Spotify, etc.)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 95,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q96',
        title: 'What is your monthly clothing and personal care spend?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 96,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q97',
        title: 'What do you spend monthly on entertainment (cinema, events, etc.)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 97,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q98',
        title: 'What is your monthly gym/fitness membership cost?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 98,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q99',
        title: 'What do you spend monthly on hobbies and interests?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 99,
        groupId: 'monthly-expenses-1'
      },
      {
        id: 'q100',
        title: 'What are your other regular monthly expenses?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'expenses',
        questionNumber: 100,
        groupId: 'monthly-expenses-1'
      }
    ]
  },

  // Always shown final groups
  {
    id: 'income',
    title: 'Income & Earnings',
    description: 'Your various sources of income',
    questions: [
      {
        id: 'q141',
        title: 'What is your monthly gross salary (before tax)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'income',
        questionNumber: 141,
        groupId: 'income'
      },
      {
        id: 'q142',
        title: 'What is your monthly net salary (after tax and deductions)?',
        type: 'number',
        required: true,
        validation: { min: 0 },
        section: 'income',
        questionNumber: 142,
        groupId: 'income'
      }
      // ... more income questions
    ]
  }
];

// Helper function to get all questions for a specific group
export function getQuestionsByGroup(groupId: string): Question[] {
  const group = questionGroups.find(g => g.id === groupId);
  return group ? group.questions : [];
}

// Helper function to get question by ID
export function getQuestionById(questionId: string): Question | undefined {
  for (const group of questionGroups) {
    const question = group.questions.find(q => q.id === questionId);
    if (question) return question;
  }
  return undefined;
}