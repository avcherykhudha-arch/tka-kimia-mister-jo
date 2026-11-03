/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ALL_QUESTIONS } from './data/questionsData';
import { QuizProgress, UserAnswerRecord } from './types';
import {
  loadSavedProgress,
  saveProgress,
  clearProgress,
  getDefaultProgress,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { QuestionView } from './components/QuestionView';
import { InstructionsView } from './components/InstructionsView';
import { CurriculumView } from './components/CurriculumView';
import { FormulaBankView } from './components/FormulaBankView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { ttsService } from './utils/tts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'home' | 'quiz' | 'instructions' | 'curriculum' | 'formulas' | 'progress'
  >('home');

  const [progress, setProgress] = useState<QuizProgress>(getDefaultProgress());
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  // Initialize progress from localStorage
  useEffect(() => {
    const saved = loadSavedProgress();
    setProgress(saved);

    // Support ?autostart=1 for rapid verification
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setCurrentTab('quiz');
      }
    }
  }, []);

  // Save progress helper
  const updateAndSaveProgress = (updater: (prev: QuizProgress) => QuizProgress) => {
    setProgress((prev) => {
      const updated = updater(prev);
      saveProgress(updated);
      return updated;
    });
  };

  // Handle saving an answer for a question
  const handleSaveAnswer = (record: UserAnswerRecord) => {
    updateAndSaveProgress((prev) => {
      const nextAnswers = { ...prev.answers, [record.questionId]: record };

      // Calculate total score
      let totalRaw = 0;
      Object.values(nextAnswers).forEach((ans) => {
        if (ans.isSubmitted) {
          totalRaw += ans.scoreAwarded;
        }
      });

      return {
        ...prev,
        answers: nextAnswers,
        totalScore: totalRaw,
        normalizedScore: Math.round((totalRaw / 60) * 100),
      };
    });
  };

  // Navigating between questions
  const handleNextQuestion = () => {
    if (progress.currentQuestionIndex < ALL_QUESTIONS.length - 1) {
      const nextIdx = progress.currentQuestionIndex + 1;
      updateAndSaveProgress((prev) => ({
        ...prev,
        currentQuestionIndex: nextIdx,
      }));
    }
  };

  const handlePrevQuestion = () => {
    if (progress.currentQuestionIndex > 0) {
      const prevIdx = progress.currentQuestionIndex - 1;
      updateAndSaveProgress((prev) => ({
        ...prev,
        currentQuestionIndex: prevIdx,
      }));
    }
  };

  const handleSelectQuestionIndex = (idx: number) => {
    if (idx >= 0 && idx < ALL_QUESTIONS.length) {
      updateAndSaveProgress((prev) => ({
        ...prev,
        currentQuestionIndex: idx,
      }));
      setCurrentTab('quiz');
    }
  };

  // Handle reset progress
  const handleConfirmReset = () => {
    clearProgress();
    const fresh = getDefaultProgress();
    setProgress(fresh);
    setCurrentTab('home');
    ttsService.speak('Seluruh progres belajar telah di-reset. Mari kita mulai lembaran baru bersama Mister Jo!');
  };

  const savedAnswerCount = Object.values(progress.answers).filter((a) => a.isSubmitted).length;
  const currentQuestion = ALL_QUESTIONS[progress.currentQuestionIndex] || ALL_QUESTIONS[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Universal Merah Putih Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          ttsService.stop();
          setCurrentTab(tab);
        }}
        onPromptReset={() => setShowResetModal(true)}
        savedAnswerCount={savedAnswerCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        {currentTab === 'home' && (
          <HomeHero
            onStartQuiz={() => setCurrentTab('quiz')}
            onOpenInstructions={() => setCurrentTab('instructions')}
            onOpenCurriculum={() => setCurrentTab('curriculum')}
            onOpenFormulas={() => setCurrentTab('formulas')}
            onOpenProgress={() => setCurrentTab('progress')}
            onPromptReset={() => setShowResetModal(true)}
            savedAnswerCount={savedAnswerCount}
          />
        )}

        {currentTab === 'quiz' && (
          <QuestionView
            question={currentQuestion}
            questionIndex={progress.currentQuestionIndex}
            totalQuestions={ALL_QUESTIONS.length}
            userAnswer={progress.answers[currentQuestion.id]}
            onSaveAnswer={handleSaveAnswer}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onSelectQuestionIndex={handleSelectQuestionIndex}
            allAnswers={progress.answers}
            allQuestions={ALL_QUESTIONS}
            onOpenFormulas={() => setCurrentTab('formulas')}
            onFinishQuiz={() => setCurrentTab('progress')}
          />
        )}

        {currentTab === 'instructions' && (
          <InstructionsView
            onBackToHome={() => setCurrentTab('home')}
            onStartQuiz={() => setCurrentTab('quiz')}
          />
        )}

        {currentTab === 'curriculum' && (
          <CurriculumView
            onBackToHome={() => setCurrentTab('home')}
            onStartQuiz={() => setCurrentTab('quiz')}
          />
        )}

        {currentTab === 'formulas' && (
          <FormulaBankView
            onBackToHome={() => setCurrentTab('home')}
            onGoToQuiz={() => setCurrentTab('quiz')}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressDashboard
            questions={ALL_QUESTIONS}
            progress={progress}
            onSelectQuestion={handleSelectQuestionIndex}
            onBackToHome={() => setCurrentTab('home')}
            onPromptReset={() => setShowResetModal(true)}
          />
        )}
      </main>

      {/* Persistent Audio Player Floating Bar */}
      <AudioPlayerBar />

      {/* Modal Konfirmasi Reset Progres */}
      <ResetConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleConfirmReset}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <span className="font-bold text-slate-800">KIMIA JENIUS</span>
            <span>— Taklukkan TKA Kimia 2026 Bersama Mister Jo</span>
          </div>
          <p className="italic text-slate-600">
            "Berpikir Ilmiah, Menghitung Cermat, Menaklukkan Kimia!"
          </p>
          <div className="text-[11px] text-slate-400">
            Mister Jo Edutech • Merah Putih Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}
