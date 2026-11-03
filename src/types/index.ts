export type QuestionType = 'PG' | 'PGK' | 'BS';

export type Competency = 'Knowing' | 'Applying' | 'Reasoning';

export type TopicCategory = 
  | 'Kimia Dasar'
  | 'Kimia Analitik'
  | 'Kimia Fisik'
  | 'Kimia Organik';

export interface OptionItem {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface StatementItem {
  id: number;
  text: string;
  isCorrect: boolean; // true = Benar, false = Salah
  explanation: string;
}

export interface QuestionDiscussion {
  problemId: string;
  concept: string;
  keyFormula: string;
  steps: string[];
  calculation: string;
  finalAnswer: string;
  whyOthersWrong: string;
  misterJoQuickTrick: string;
}

export interface QuestionNarration {
  intro: string;
  stimulus: string;
  clue: string;
  discussion: string;
  quickTrick: string;
}

export interface StimulusData {
  context: string;
  table?: {
    title?: string;
    headers: string[];
    rows: (string | number)[][];
  };
  chartType?: 'energy-diagram' | 'titration-curve' | 'rate-graph' | 'equilibrium-chart' | 'solubility-curve' | 'orbital-diagram' | 'molecular-diagram';
  chartDetails?: Record<string, any>;
  reactionEquation?: string;
  visualNote?: string;
}

export interface Question {
  id: number;
  number: number;
  type: QuestionType;
  category: TopicCategory;
  subtopic: string;
  competency: Competency;
  title: string;
  stimulus: StimulusData;
  questionText: string;
  options?: OptionItem[]; // For PG & PGK
  statements?: StatementItem[]; // For BS (exactly 3)
  correctAnswer: string | string[]; // 'A'..'E' for PG; ['A','C'] for PGK
  pointWeight: number; // PG: 1, PGK: 2, BS: 3
  narration: QuestionNarration;
  discussion: QuestionDiscussion;
}

export interface UserAnswerRecord {
  questionId: number;
  type: QuestionType;
  pgAnswer?: string; // 'A'..'E'
  pgkAnswer?: string[]; // ['A', 'C']
  bsAnswer?: Record<number, boolean>; // { 1: true, 2: false, 3: true }
  isSubmitted: boolean;
  isBookmarked: boolean;
  scoreAwarded: number;
  isFullyCorrect: boolean;
}

export interface QuizProgress {
  currentQuestionIndex: number;
  answers: Record<number, UserAnswerRecord>;
  startedAt: string;
  lastUpdatedAt: string;
  isCompleted: boolean;
  totalScore: number;
  normalizedScore: number; // 0 - 100
}

export interface FormulaItem {
  id: string;
  name: string;
  category: string;
  formula: string;
  symbols: { symbol: string; meaning: string; unit: string }[];
  whenToUse: string;
  commonMistakes: string;
  example: string;
  misterJoAudioScript: string;
}
