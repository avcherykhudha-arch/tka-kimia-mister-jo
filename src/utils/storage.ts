import { QuizProgress, UserAnswerRecord } from '../types';

const STORAGE_KEY = 'kimia_jenius_progress_v1';
const SOUND_SETTINGS_KEY = 'kimia_jenius_sound_settings_v1';

export interface SoundSettings {
  autoRead: boolean;
  speed: number;
}

export function getDefaultProgress(): QuizProgress {
  return {
    currentQuestionIndex: 0,
    answers: {},
    startedAt: new Date().toISOString(),
    lastUpdatedAt: new Date().toISOString(),
    isCompleted: false,
    totalScore: 0,
    normalizedScore: 0,
  };
}

export function loadSavedProgress(): QuizProgress {
  if (typeof window === 'undefined') return getDefaultProgress();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    return parsed as QuizProgress;
  } catch (e) {
    console.error('Failed to load progress from localStorage:', e);
    return getDefaultProgress();
  }
}

export function saveProgress(progress: QuizProgress): void {
  if (typeof window === 'undefined') return;

  try {
    const updated: QuizProgress = {
      ...progress,
      lastUpdatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save progress to localStorage:', e);
  }
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear progress:', e);
  }
}

export function loadSoundSettings(): SoundSettings {
  if (typeof window === 'undefined') return { autoRead: true, speed: 0.95 };

  try {
    const raw = localStorage.getItem(SOUND_SETTINGS_KEY);
    if (!raw) return { autoRead: true, speed: 0.95 };
    return JSON.parse(raw);
  } catch {
    return { autoRead: true, speed: 0.95 };
  }
}

export function saveSoundSettings(settings: SoundSettings): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(SOUND_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save sound settings:', e);
  }
}
