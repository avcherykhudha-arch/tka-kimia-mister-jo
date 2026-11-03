import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Sparkles,
  Zap,
  Flame,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Info,
  Grid,
  Check,
  X,
  FileCheck2
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';
import { ChemicalChart } from './ChemicalChart';
import { calculateQuestionScore } from '../utils/scoring';
import { ttsService } from '../utils/tts';
import { BlockMath } from './MathView';

interface QuestionViewProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  userAnswer?: UserAnswerRecord;
  onSaveAnswer: (record: UserAnswerRecord) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onSelectQuestionIndex: (idx: number) => void;
  allAnswers: Record<number, UserAnswerRecord>;
  allQuestions: Question[];
  onOpenFormulas: () => void;
  onFinishQuiz: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  questionIndex,
  totalQuestions,
  userAnswer,
  onSaveAnswer,
  onNextQuestion,
  onPrevQuestion,
  onSelectQuestionIndex,
  allAnswers,
  allQuestions,
  onOpenFormulas,
  onFinishQuiz,
}) => {
  // Local state for options before and after submit
  const [selectedPg, setSelectedPg] = useState<string>(userAnswer?.pgAnswer || '');
  const [selectedPgk, setSelectedPgk] = useState<string[]>(userAnswer?.pgkAnswer || []);
  const [selectedBs, setSelectedBs] = useState<Record<number, boolean>>(userAnswer?.bsAnswer || {});
  const [isBookmarked, setIsBookmarked] = useState<boolean>(userAnswer?.isBookmarked || false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(userAnswer?.isSubmitted || false);
  const [showDiscussion, setShowDiscussion] = useState<boolean>(userAnswer?.isSubmitted || false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  // Sync state whenever question changes
  useEffect(() => {
    const current = allAnswers[question.id];
    setSelectedPg(current?.pgAnswer || '');
    setSelectedPgk(current?.pgkAnswer || []);
    setSelectedBs(current?.bsAnswer || {});
    setIsBookmarked(current?.isBookmarked || false);
    setIsSubmitted(current?.isSubmitted || false);
    setShowDiscussion(current?.isSubmitted || false);

    // Auto-read intro narrative for new question
    ttsService.speak(question.narration.intro);
  }, [question.id]);

  // Handle PG selection
  const handleSelectPg = (key: string) => {
    setSelectedPg(key);
    // Auto-save draft
    onSaveAnswer({
      questionId: question.id,
      type: 'PG',
      pgAnswer: key,
      isSubmitted: false,
      isBookmarked,
      scoreAwarded: 0,
      isFullyCorrect: false,
    });
  };

  // Handle PGK toggle
  const handleTogglePgk = (key: string) => {
    const updated = selectedPgk.includes(key)
      ? selectedPgk.filter((k) => k !== key)
      : [...selectedPgk, key];
    setSelectedPgk(updated);
    onSaveAnswer({
      questionId: question.id,
      type: 'PGK',
      pgkAnswer: updated,
      isSubmitted: false,
      isBookmarked,
      scoreAwarded: 0,
      isFullyCorrect: false,
    });
  };

  // Handle BS toggle
  const handleToggleBs = (stmtId: number, value: boolean) => {
    const updated = { ...selectedBs, [stmtId]: value };
    setSelectedBs(updated);
    onSaveAnswer({
      questionId: question.id,
      type: 'BS',
      bsAnswer: updated,
      isSubmitted: false,
      isBookmarked,
      scoreAwarded: 0,
      isFullyCorrect: false,
    });
  };

  // Toggle Bookmark
  const handleToggleBookmark = () => {
    const updated = !isBookmarked;
    setIsBookmarked(updated);
    onSaveAnswer({
      questionId: question.id,
      type: question.type,
      pgAnswer: selectedPg,
      pgkAnswer: selectedPgk,
      bsAnswer: selectedBs,
      isSubmitted,
      isBookmarked: updated,
      scoreAwarded: userAnswer?.scoreAwarded || 0,
      isFullyCorrect: userAnswer?.isFullyCorrect || false,
    });
  };

  // Submit Answer
  const handleSubmitAnswer = () => {
    const partialRecord: Partial<UserAnswerRecord> = {
      questionId: question.id,
      type: question.type,
      pgAnswer: selectedPg,
      pgkAnswer: selectedPgk,
      bsAnswer: selectedBs,
    };

    const { scoreAwarded, isFullyCorrect } = calculateQuestionScore(question, partialRecord);

    const record: UserAnswerRecord = {
      questionId: question.id,
      type: question.type,
      pgAnswer: selectedPg,
      pgkAnswer: selectedPgk,
      bsAnswer: selectedBs,
      isSubmitted: true,
      isBookmarked,
      scoreAwarded,
      isFullyCorrect,
    };

    setIsSubmitted(true);
    setShowDiscussion(true);
    onSaveAnswer(record);

    // Speak audio feedback
    if (isFullyCorrect) {
      ttsService.speak(`Hebat sekali! Jawabanmu untuk soal nomor ${question.number} tepat sempurna! Mari kita pelajari pembahasannya.`);
    } else {
      ttsService.speak(`Jawaban nomor ${question.number} telah diperiksa. Jangan berkecil hati, mari kita pelajari pembahasannya secara bertahap bersama Mister Jo.`);
    }
  };

  const hasAnyAnswer =
    question.type === 'PG'
      ? Boolean(selectedPg)
      : question.type === 'PGK'
      ? selectedPgk.length > 0
      : Object.keys(selectedBs).length === 3;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {/* Question Number Badge */}
          <span className="px-3.5 py-1 rounded-xl bg-red-600 text-white font-extrabold text-sm sm:text-base shadow-sm">
            Soal {question.number} dari {totalQuestions}
          </span>

          {/* Question Type Badge */}
          <span className="px-3 py-1 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm font-bold">
            {question.type === 'PG'
              ? 'Pilihan Ganda (1 Jawaban)'
              : question.type === 'PGK'
              ? 'Pilihan Ganda Kompleks (Bisa >1 Jawaban)'
              : 'Benar atau Salah (3 Pernyataan)'}
          </span>

          {/* Category & Subtopic */}
          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
            {question.category} • {question.subtopic}
          </span>

          {/* Competency Badge */}
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
            Level: {question.competency}
          </span>
        </div>

        {/* Right buttons: Bookmark & Question Matrix drawer */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              isBookmarked
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
            title="Tandai soal ini untuk ditinjau kembali"
          >
            {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            <span>{isBookmarked ? 'Ditandai' : 'Tandai Soal'}</span>
          </button>

          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition"
          >
            <Grid size={15} />
            <span className="hidden sm:inline">Daftar Soal</span>
          </button>
        </div>
      </div>

      {/* Question Matrix Drawer (Dropdown) */}
      {showMatrix && (
        <div className="mb-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Navigasi Cepat 30 Soal
            </h4>
            <button
              onClick={() => setShowMatrix(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Tutup
            </button>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5">
            {allQuestions.map((q, idx) => {
              const ans = allAnswers[q.id];
              const isCurrent = idx === questionIndex;
              let btnClass = 'bg-slate-100 text-slate-700 border-slate-200';

              if (ans?.isSubmitted) {
                btnClass = ans.isFullyCorrect
                  ? 'bg-emerald-600 text-white font-bold border-emerald-700'
                  : 'bg-rose-600 text-white font-bold border-rose-700';
              } else if (ans && (ans.pgAnswer || ans.pgkAnswer?.length || ans.bsAnswer)) {
                btnClass = 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
              }

              if (isCurrent) {
                btnClass += ' ring-2 ring-red-600 font-black';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestionIndex(idx);
                    setShowMatrix(false);
                  }}
                  className={`h-9 rounded-lg border text-xs flex flex-col items-center justify-center transition ${btnClass}`}
                >
                  <span className="leading-none">{q.number}</span>
                  <span className="text-[8px] opacity-75">{q.type}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Narator Companion Bar for Current Question */}
      <div className="mb-6 bg-gradient-to-r from-red-950 via-rose-950 to-slate-900 text-white rounded-2xl p-4 shadow-md border border-red-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-amber-400 flex items-center justify-center font-black text-sm text-slate-950 shadow">
              MJ
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-200">
                <span>Pendamping Belajar Mister Jo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-xs text-slate-300 italic">
                "{question.narration.intro}"
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => ttsService.speak(question.narration.intro)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-slate-200 flex items-center gap-1 transition"
              title="Dengarkan Sapaan Awal"
            >
              <Volume2 size={13} />
              Sapaan
            </button>
            <button
              onClick={() => ttsService.speak(question.narration.stimulus)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-slate-200 flex items-center gap-1 transition"
              title="Dengarkan Pembacaan Stimulus"
            >
              <Volume2 size={13} />
              Stimulus
            </button>
            <button
              onClick={() => ttsService.speak(question.narration.clue)}
              className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-[11px] font-semibold text-amber-300 border border-amber-500/30 flex items-center gap-1 transition"
              title="Dengarkan Petunjuk Penalaran"
            >
              <LightbulbIcon size={13} />
              Petunjuk
            </button>
          </div>
        </div>
      </div>

      {/* Stimulus Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100 pb-2 mb-4">
          <span>Stimulus Eksperimen Ilmiah</span>
          <span>{question.title}</span>
        </div>

        {/* Context narrative */}
        <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
          {question.stimulus.context}
        </p>

        {/* Table data if present */}
        {question.stimulus.table && (
          <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            {question.stimulus.table.title && (
              <div className="bg-red-50 text-red-900 px-4 py-2 text-xs font-bold tracking-wide uppercase border-b border-red-100">
                {question.stimulus.table.title}
              </div>
            )}
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  {question.stimulus.table.headers.map((h, i) => (
                    <th key={i} className="px-4 py-2.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {question.stimulus.table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2.5 font-mono text-slate-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* SVG Scientific Chart or Diagram if present */}
        <ChemicalChart
          type={question.stimulus.chartType}
          details={question.stimulus.chartDetails}
          reactionEquation={question.stimulus.reactionEquation}
        />

        {question.stimulus.visualNote && (
          <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <Info size={15} className="text-slate-500 flex-shrink-0 mt-0.5" />
            <span>{question.stimulus.visualNote}</span>
          </div>
        )}
      </div>

      {/* Main Question Text (Prompt requirements: minimal 20-22 px desktop) */}
      <div className="bg-white rounded-2xl border-2 border-red-100 p-6 sm:p-8 shadow-sm mb-6">
        <h2 className="text-xl md:text-[21px] font-bold text-slate-900 leading-relaxed mb-6">
          {question.questionText}
        </h2>

        {/* ANSWER INPUT SECTION */}
        {/* Type A: PILIHAN GANDA (PG) */}
        {question.type === 'PG' && question.options && (
          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedPg === opt.key;
              const isCorrectOpt = question.correctAnswer === opt.key;

              let optClass =
                'border-slate-200 bg-white hover:border-red-300 hover:bg-slate-50 text-slate-800';

              if (isSubmitted) {
                if (isCorrectOpt) {
                  optClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectOpt) {
                  optClass = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-500';
                }
              } else if (isSelected) {
                optClass = 'border-red-600 bg-red-50 text-red-950 font-semibold ring-2 ring-red-600 shadow-sm';
              }

              return (
                <button
                  key={opt.key}
                  disabled={isSubmitted}
                  onClick={() => handleSelectPg(opt.key)}
                  className={`w-full p-4 rounded-xl border-2 text-left flex items-start gap-3.5 transition text-base md:text-[19px] leading-relaxed ${optClass}`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {opt.key}
                  </span>
                  <span className="flex-1 font-medium">{opt.text}</span>
                  {isSubmitted && isCorrectOpt && (
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                  )}
                  {isSubmitted && isSelected && !isCorrectOpt && (
                    <XCircle size={20} className="text-rose-600 flex-shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Type B: PILIHAN GANDA KOMPLEKS (PGK) */}
        {question.type === 'PGK' && question.options && (
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-xs font-semibold text-red-900 mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-red-600 flex-shrink-0" />
              <span>Petunjuk PGK: Pilih seluruh pilihan yang benar untuk memperoleh 2 poin penuh.</span>
            </div>

            {question.options.map((opt) => {
              const isSelected = selectedPgk.includes(opt.key);
              const correctList = Array.isArray(question.correctAnswer)
                ? question.correctAnswer
                : [question.correctAnswer];
              const isCorrectOpt = correctList.includes(opt.key);

              let optClass =
                'border-slate-200 bg-white hover:border-red-300 hover:bg-slate-50 text-slate-800';

              if (isSubmitted) {
                if (isCorrectOpt) {
                  optClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectOpt) {
                  optClass = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-500';
                }
              } else if (isSelected) {
                optClass = 'border-red-600 bg-red-50 text-red-950 font-semibold ring-2 ring-red-600 shadow-sm';
              }

              return (
                <button
                  key={opt.key}
                  disabled={isSubmitted}
                  onClick={() => handleTogglePgk(opt.key)}
                  className={`w-full p-4 rounded-xl border-2 text-left flex items-start gap-3.5 transition text-base md:text-[19px] leading-relaxed ${optClass}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border ${
                      isSelected
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white border-slate-300 text-slate-600'
                    }`}
                  >
                    {isSelected ? <Check size={16} /> : opt.key}
                  </div>
                  <span className="flex-1 font-medium">{opt.text}</span>
                  {isSubmitted && isCorrectOpt && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Kunci Benar
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Type C: BENAR ATAU SALAH (BS) */}
        {question.type === 'BS' && question.statements && (
          <div className="space-y-4">
            <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-xs font-semibold text-red-900 mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-red-600 flex-shrink-0" />
              <span>Petunjuk Benar-Salah: Tentukan status ilmiah (Benar / Salah) pada ketiga pernyataan berikut.</span>
            </div>

            {question.statements.map((stmt) => {
              const userChoice = selectedBs[stmt.id];
              const isEvaluated = isSubmitted && userChoice !== undefined;
              const isMatch = userChoice === stmt.isCorrect;

              return (
                <div
                  key={stmt.id}
                  className={`p-4 rounded-2xl border-2 transition ${
                    isEvaluated
                      ? isMatch
                        ? 'border-emerald-300 bg-emerald-50/40'
                        : 'border-rose-300 bg-rose-50/40'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-base md:text-[18px] text-slate-800 leading-relaxed font-medium flex-1">
                      <span className="font-bold text-red-700 mr-2">Pernyataan {stmt.id}:</span>
                      {stmt.text}
                    </p>

                    <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                      <button
                        disabled={isSubmitted}
                        onClick={() => handleToggleBs(stmt.id, true)}
                        className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-sm font-bold border transition ${
                          userChoice === true
                            ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        BENAR
                      </button>

                      <button
                        disabled={isSubmitted}
                        onClick={() => handleToggleBs(stmt.id, false)}
                        className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-sm font-bold border transition ${
                          userChoice === false
                            ? 'bg-rose-600 text-white border-rose-700 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        SALAH
                      </button>
                    </div>
                  </div>

                  {isSubmitted && (
                    <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-600 flex items-start gap-2">
                      <span
                        className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                          stmt.isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        Kunci: {stmt.isCorrect ? 'BENAR' : 'SALAH'}
                      </span>
                      <span className="italic">{stmt.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Action Controls for Submission */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {!isSubmitted ? (
              <button
                disabled={!hasAnyAnswer}
                onClick={handleSubmitAnswer}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 disabled:opacity-40 text-white font-bold text-base shadow-lg transition transform active:scale-95"
              >
                Periksa Jawaban
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span
                  className={`px-3.5 py-1.5 rounded-xl font-bold text-sm flex items-center gap-1.5 ${
                    userAnswer?.isFullyCorrect
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {userAnswer?.isFullyCorrect ? (
                    <>
                      <CheckCircle2 size={16} /> Jawaban Tepat (+{question.pointWeight} Poin)
                    </>
                  ) : (
                    <>
                      <XCircle size={16} /> Perlu Koreksi (+{userAnswer?.scoreAwarded || 0} Poin)
                    </>
                  )}
                </span>

                <button
                  onClick={() => setShowDiscussion(!showDiscussion)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition"
                >
                  {showDiscussion ? 'Tutup Pembahasan' : 'Buka Pembahasan'}
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenFormulas}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition"
            >
              Bank Rumus Kunci
            </button>
          </div>
        </div>
      </div>

      {/* DISCUSSION & MISTER JO QUICK TRICK (Shown after submit or when toggled) */}
      {showDiscussion && (
        <div className="bg-white rounded-3xl border-2 border-red-200 p-6 sm:p-8 shadow-xl mb-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-red-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                <FileCheck2 size={20} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Pembahasan Ilmiah & Cara Cepat Mister Jo
                </h3>
                <p className="text-xs text-slate-500 font-mono">Kode Soal: {question.discussion.problemId}</p>
              </div>
            </div>

            <button
              onClick={() =>
                ttsService.speak(
                  `${question.narration.discussion} Dan sekarang kita simak cara cepatnya: ${question.narration.quickTrick}`
                )
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition"
            >
              <Volume2 size={15} />
              Dengarkan Pembahasan Audio
            </button>
          </div>

          <div className="space-y-6 text-sm md:text-[17.5px] leading-relaxed text-slate-700">
            {/* 1. Identifikasi Masalah */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-1">
                1. IDENTIFIKASI MASALAH
              </h4>
              <p className="text-slate-800">{question.title}</p>
            </div>

            {/* 2. Konsep Kimia */}
            <div>
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-1">
                2. KONSEP KIMIA
              </h4>
              <p className="text-slate-800 font-medium">{question.discussion.concept}</p>
            </div>

            {/* 3. Rumus Kunci */}
            <div>
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-2">
                3. RUMUS KUNCI
              </h4>
              <div className="p-4 bg-slate-900 text-white text-center rounded-xl text-base sm:text-lg font-semibold tracking-wide border border-slate-800 overflow-x-auto shadow-inner">
                <BlockMath math={question.discussion.keyFormula} className="text-white" />
              </div>
            </div>

            {/* 4. Langkah Penyelesaian */}
            <div>
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-2">
                4. LANGKAH PENYELESAIAN
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-slate-800">
                {question.discussion.steps.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ol>
            </div>

            {/* 5. Perhitungan */}
            <div>
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-2">
                5. PERHITUNGAN NUMERIK
              </h4>
              <div className="p-4 bg-red-50 text-red-950 text-center rounded-xl text-sm sm:text-base font-bold border border-red-200 overflow-x-auto shadow-sm">
                <BlockMath math={question.discussion.calculation} className="text-red-950" />
              </div>
            </div>

            {/* 6. Jawaban Akhir */}
            <div>
              <h4 className="font-bold text-red-900 uppercase tracking-wide text-xs mb-1">
                6. JAWABAN AKHIR
              </h4>
              <p className="font-bold text-emerald-800 text-base">{question.discussion.finalAnswer}</p>
            </div>

            {/* 7. Mengapa Opsi Lain Salah? */}
            <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-200">
              <h4 className="font-bold text-rose-900 uppercase tracking-wide text-xs mb-1">
                7. MENGAPA OPSI LAIN SALAH?
              </h4>
              <p className="text-rose-950 text-sm sm:text-base leading-relaxed">
                {question.discussion.whyOthersWrong}
              </p>
            </div>

            {/* 8. CARA CEPAT ALA MISTER JO (Distinctive callout) */}
            <div className="p-6 bg-gradient-to-br from-red-950 via-rose-950 to-slate-950 text-white rounded-2xl border-2 border-amber-400 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 border-b border-red-500/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                    <Zap size={18} />
                  </div>
                  <h4 className="font-black text-amber-300 tracking-wider text-base sm:text-lg">
                    8. CARA CEPAT ALA MISTER JO
                  </h4>
                </div>

                <button
                  onClick={() => ttsService.speak(question.narration.quickTrick)}
                  className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition flex items-center gap-1 shadow"
                >
                  <Volume2 size={13} />
                  Dengarkan Trik
                </button>
              </div>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium italic">
                "{question.discussion.misterJoQuickTrick}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Nav: Prev / Next */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          disabled={questionIndex === 0}
          onClick={onPrevQuestion}
          className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 font-semibold text-sm transition flex items-center gap-1.5"
        >
          <ChevronLeft size={16} />
          <span>Soal Sebelumnya</span>
        </button>

        <span className="text-xs font-semibold text-slate-500 font-mono">
          Nomor {question.number} / {totalQuestions}
        </span>

        {questionIndex < totalQuestions - 1 ? (
          <button
            onClick={onNextQuestion}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-sm shadow-md transition flex items-center gap-1.5"
          >
            <span>Soal Berikutnya</span>
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={onFinishQuiz}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center gap-1.5"
          >
            <span>Selesai & Evaluasi Skor</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

function LightbulbIcon(props: { size?: number }) {
  return <Lightbulb size={props.size || 14} />;
}
function Lightbulb(props: { size?: number; className?: string }) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
