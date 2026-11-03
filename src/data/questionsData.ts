import { Question } from '../types';
import { questions1to10, questions8to10 } from './questions/questions1to10';
import { questions11to20 } from './questions/questions11to20';
import { questions21to30 } from './questions/questions21to30';

// Combine in order: 1-7, 8-10, 11-20, 21-30
export const ALL_QUESTIONS: Question[] = [
  ...questions1to10,
  ...questions8to10,
  ...questions11to20,
  ...questions21to30,
];

// Re-index number for absolute certainty 1 through 30
ALL_QUESTIONS.forEach((q, index) => {
  q.id = index + 1;
  q.number = index + 1;
});

export function getQuestionById(id: number): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsByType(type: 'PG' | 'PGK' | 'BS'): Question[] {
  return ALL_QUESTIONS.filter((q) => q.type === type);
}

export function getQuestionsByCategory(category: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.category === category);
}
