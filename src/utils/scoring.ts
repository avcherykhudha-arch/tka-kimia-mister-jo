import { Question, UserAnswerRecord, TopicCategory } from '../types';

export const MAX_RAW_SCORE = 60; // 10 * 1 (PG) + 10 * 2 (PGK) + 10 * 3 (BS) = 60

/**
 * Calculates raw score awarded for a specific question given the user answer.
 */
export function calculateQuestionScore(
  question: Question,
  userAnswer: Partial<UserAnswerRecord>
): { scoreAwarded: number; isFullyCorrect: boolean } {
  if (question.type === 'PG') {
    const isCorrect = userAnswer.pgAnswer === question.correctAnswer;
    return {
      scoreAwarded: isCorrect ? 1 : 0,
      isFullyCorrect: isCorrect,
    };
  }

  if (question.type === 'PGK') {
    const userSelected = userAnswer.pgkAnswer || [];
    const correctList = Array.isArray(question.correctAnswer)
      ? question.correctAnswer
      : [question.correctAnswer];

    // Must select all correct and none incorrect
    const sortedUser = [...userSelected].sort().join(',');
    const sortedCorrect = [...correctList].sort().join(',');

    const isMatch = sortedUser === sortedCorrect;
    return {
      scoreAwarded: isMatch ? 2 : 0,
      isFullyCorrect: isMatch,
    };
  }

  if (question.type === 'BS' && question.statements) {
    const userBs = userAnswer.bsAnswer || {};
    let correctCount = 0;

    question.statements.forEach((stmt) => {
      const userChoice = userBs[stmt.id];
      if (userChoice !== undefined && userChoice === stmt.isCorrect) {
        correctCount += 1;
      }
    });

    return {
      scoreAwarded: correctCount,
      isFullyCorrect: correctCount === question.statements.length,
    };
  }

  return { scoreAwarded: 0, isFullyCorrect: false };
}

/**
 * Normalizes raw score to a 0-100 scale.
 */
export function normalizeScore(rawScore: number, maxScore: number = MAX_RAW_SCORE): number {
  if (maxScore <= 0) return 0;
  const normalized = (rawScore / maxScore) * 100;
  return Math.min(100, Math.max(0, Math.round(normalized * 10) / 10));
}

export interface EvaluationSummary {
  totalQuestions: number;
  totalAnswered: number;
  totalUnanswered: number;
  totalFullyCorrect: number;
  totalIncorrectOrPartial: number;
  totalRawScore: number;
  maxRawScore: number;
  normalizedScore: number;
  completionPercentage: number;
  categoryStats: Record<
    TopicCategory,
    {
      totalQuestions: number;
      answeredCount: number;
      maxScore: number;
      earnedScore: number;
      percentage: number;
    }
  >;
  subtopicStats: Record<
    string,
    {
      category: TopicCategory;
      totalQuestions: number;
      earnedScore: number;
      maxScore: number;
      percentage: number;
    }
  >;
  strongestTopics: string[];
  weakestTopics: string[];
  misterJoRecommendation: string;
}

export function generateEvaluationSummary(
  questions: Question[],
  answers: Record<number, UserAnswerRecord>
): EvaluationSummary {
  let totalRawScore = 0;
  let totalAnswered = 0;
  let totalFullyCorrect = 0;

  const categoryStats: EvaluationSummary['categoryStats'] = {
    'Kimia Dasar': { totalQuestions: 0, answeredCount: 0, maxScore: 0, earnedScore: 0, percentage: 0 },
    'Kimia Analitik': { totalQuestions: 0, answeredCount: 0, maxScore: 0, earnedScore: 0, percentage: 0 },
    'Kimia Fisik': { totalQuestions: 0, answeredCount: 0, maxScore: 0, earnedScore: 0, percentage: 0 },
    'Kimia Organik': { totalQuestions: 0, answeredCount: 0, maxScore: 0, earnedScore: 0, percentage: 0 },
  };

  const subtopicStats: EvaluationSummary['subtopicStats'] = {};

  questions.forEach((q) => {
    const ans = answers[q.id];
    const cat = categoryStats[q.category];
    cat.totalQuestions += 1;
    cat.maxScore += q.pointWeight;

    if (!subtopicStats[q.subtopic]) {
      subtopicStats[q.subtopic] = {
        category: q.category,
        totalQuestions: 0,
        earnedScore: 0,
        maxScore: 0,
        percentage: 0,
      };
    }
    subtopicStats[q.subtopic].totalQuestions += 1;
    subtopicStats[q.subtopic].maxScore += q.pointWeight;

    if (ans && ans.isSubmitted) {
      totalAnswered += 1;
      totalRawScore += ans.scoreAwarded;
      cat.answeredCount += 1;
      cat.earnedScore += ans.scoreAwarded;
      subtopicStats[q.subtopic].earnedScore += ans.scoreAwarded;

      if (ans.isFullyCorrect) {
        totalFullyCorrect += 1;
      }
    }
  });

  // Calculate percentages
  Object.keys(categoryStats).forEach((key) => {
    const catKey = key as TopicCategory;
    const cat = categoryStats[catKey];
    cat.percentage = cat.maxScore > 0 ? Math.round((cat.earnedScore / cat.maxScore) * 100) : 0;
  });

  const subtopicList: { name: string; percentage: number }[] = [];
  Object.keys(subtopicStats).forEach((sub) => {
    const item = subtopicStats[sub];
    item.percentage = item.maxScore > 0 ? Math.round((item.earnedScore / item.maxScore) * 100) : 0;
    subtopicList.push({ name: sub, percentage: item.percentage });
  });

  // Sort subtopics by performance
  subtopicList.sort((a, b) => b.percentage - a.percentage);
  const strongestTopics = subtopicList.filter((s) => s.percentage >= 70).map((s) => s.name);
  const weakestTopics = subtopicList.filter((s) => s.percentage < 70).map((s) => s.name);

  const normalized = normalizeScore(totalRawScore, MAX_RAW_SCORE);
  const totalUnanswered = questions.length - totalAnswered;
  const totalIncorrectOrPartial = totalAnswered - totalFullyCorrect;
  const completionPercentage = Math.round((totalAnswered / questions.length) * 100);

  // Personalized recommendation from Mister Jo
  let recommendation = '';
  if (normalized >= 85) {
    recommendation =
      'Luar biasa calon saintis hebat! Penguasaan konsep Kimia dan ketelitian numerikmu sudah di atas rata-rata nasional. Pertahankan kecepatan analisis dan perbanyak simulasi soal HOTS berwaktu untuk memantapkan posisi lolos di prodi impian!';
  } else if (normalized >= 70) {
    recommendation =
      'Pencapaian yang sangat baik! Kamu sudah memahami dasar stoikiometri dan kimia analitik dengan kokoh. Cermati lagi topik ' +
      (weakestTopics.slice(0, 2).join(' dan ') || 'penalaran kompleks') +
      ' dan manfaatkan Cara Cepat Ala Mister Jo agar perhitungan lebih cepat dan bebas selip!';
  } else if (normalized >= 50) {
    recommendation =
      'Potensimu sangat menjanjikan! Jangan patah semangat. Kunci utama menaklukkan TKA Kimia adalah menghubungkan rumus dengan data eksperimen nyata. Buka menu Bank Rumus Kunci, pelajari kembali langkah bertahap pada materi ' +
      (weakestTopics.slice(0, 3).join(', ') || 'prioritas') +
      ', lalu ulangi latihan!';
  } else {
    recommendation =
      'Setiap ahli kimia hebat selalu berawal dari rasa ingin tahu dan keberanian mencoba. Jangan buru-buru menghafal rumus mentah-mentah; pahami logika mol dan transfer elektron perlahan. Manfaatkan narator Mister Jo dan baca pembahasan step-by-step di setiap nomor!';
  }

  return {
    totalQuestions: questions.length,
    totalAnswered,
    totalUnanswered,
    totalFullyCorrect,
    totalIncorrectOrPartial,
    totalRawScore,
    maxRawScore: MAX_RAW_SCORE,
    normalizedScore: normalized,
    completionPercentage,
    categoryStats,
    subtopicStats,
    strongestTopics: strongestTopics.length > 0 ? strongestTopics : ['Belum ada topik di atas 70%'],
    weakestTopics: weakestTopics.length > 0 ? weakestTopics : ['Seluruh topik sudah sangat baik!'],
    misterJoRecommendation: recommendation,
  };
}
