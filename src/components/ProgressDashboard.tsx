import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle,
  XCircle,
  Clock,
  Volume2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Target,
  Flame,
  Layers
} from 'lucide-react';
import { Question, UserAnswerRecord, QuizProgress } from '../types';
import { generateEvaluationSummary, EvaluationSummary } from '../utils/scoring';
import { ttsService } from '../utils/tts';

interface ProgressDashboardProps {
  questions: Question[];
  progress: QuizProgress;
  onSelectQuestion: (index: number) => void;
  onBackToHome: () => void;
  onPromptReset: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  questions,
  progress,
  onSelectQuestion,
  onBackToHome,
  onPromptReset,
}) => {
  const summary: EvaluationSummary = generateEvaluationSummary(questions, progress.answers);

  useEffect(() => {
    if (summary.normalizedScore >= 75) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [summary.normalizedScore]);

  const speakSummary = () => {
    const text = `Evaluasi belajar TKA Kimia 2026. Nilai akhirmu adalah ${summary.normalizedScore} dari seratus. Dari tiga puluh soal, kamu telah menyelesaikan ${summary.totalAnswered} soal dengan ${summary.totalFullyCorrect} jawaban tepat sempurna. ${summary.misterJoRecommendation}`;
    ttsService.speak(text);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-2">
            <Trophy size={14} />
            Evaluasi Kompetensi TKA Kimia 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Dasbor Progres dan Evaluasi Belajar
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Penilaian Otomatis Berdasarkan Standar Soal HOTS & Asesmen Nasional
          </p>
        </div>

        <button
          onClick={speakSummary}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white text-xs sm:text-sm font-bold shadow-md transition"
        >
          <Volume2 size={16} />
          Dengarkan Evaluasi Mister Jo
        </button>
      </div>

      {/* Main Score Hero Card */}
      <div className="bg-gradient-to-br from-red-950 via-rose-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-500/30 mb-8 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Normalized Score Circle */}
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
            <span className="text-xs uppercase tracking-wider text-red-200 font-semibold mb-1">
              Nilai Akhir (Skala 100)
            </span>
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-200 to-white my-1">
              {summary.normalizedScore}
            </div>
            <span className="text-xs text-slate-300 font-mono">
              Skor Mentah: {summary.totalRawScore} / {summary.maxRawScore} Poin
            </span>
            <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-amber-300">
              <Target size={13} />
              Ketuntasan: {summary.completionPercentage}%
            </div>
          </div>

          {/* Detailed Question breakdown */}
          <div className="md:col-span-2 space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <div className="flex items-center justify-center text-emerald-400 mb-1">
                  <CheckCircle size={20} />
                </div>
                <div className="text-2xl font-bold text-white">{summary.totalFullyCorrect}</div>
                <div className="text-[11px] text-slate-300">Jawaban Tepat</div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <div className="flex items-center justify-center text-rose-400 mb-1">
                  <XCircle size={20} />
                </div>
                <div className="text-2xl font-bold text-white">{summary.totalIncorrectOrPartial}</div>
                <div className="text-[11px] text-slate-300">Perlu Koreksi</div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <div className="flex items-center justify-center text-amber-400 mb-1">
                  <Clock size={20} />
                </div>
                <div className="text-2xl font-bold text-white">{summary.totalUnanswered}</div>
                <div className="text-[11px] text-slate-300">Belum Dijawab</div>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 bg-red-900/40 rounded-xl border border-red-500/30">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                <Flame size={15} />
                Rekomendasi Belajar dari Mister Jo:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{summary.misterJoRecommendation}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Mastery Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Strongest & Weakest */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-600" />
            Analisis Penguasaan Materi
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-800 mb-1">
                <span>Materi Paling Dikuasai:</span>
                <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Kuat</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                {summary.strongestTopics.map((top, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-emerald-600 flex-shrink-0" />
                    <span>{top}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-rose-800 mb-1">
                <span>Materi yang Perlu Diperbaiki:</span>
                <span className="text-[11px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Fokus Ulang</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                {summary.weakestTopics.map((top, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-rose-500 flex-shrink-0" />
                    <span>{top}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Category Progress */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
            <Layers size={18} className="text-red-600" />
            Penguasaan 4 Rumpun Materi Utama
          </h3>

          <div className="space-y-3.5">
            {Object.entries(summary.categoryStats).map(([catName, stat]) => (
              <div key={catName}>
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="text-slate-800 font-semibold">{catName}</span>
                  <span className="font-mono text-slate-600">
                    {stat.earnedScore} / {stat.maxScore} Poin ({stat.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-full transition-all duration-500"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Questions Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Tinjau Pembahasan 30 Soal</h3>
            <p className="text-xs text-slate-500">Klik salah satu nomor untuk membuka soal dan pembahasan lengkapnya</p>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
          {questions.map((q, idx) => {
            const ans = progress.answers[q.id];
            let badgeBg = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200';

            if (ans && ans.isSubmitted) {
              if (ans.isFullyCorrect) {
                badgeBg = 'bg-emerald-600 text-white font-bold border-emerald-700 shadow-sm';
              } else {
                badgeBg = 'bg-rose-600 text-white font-bold border-rose-700 shadow-sm';
              }
            } else if (ans && (ans.pgAnswer || (ans.pgkAnswer && ans.pgkAnswer.length > 0) || ans.bsAnswer)) {
              badgeBg = 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(idx)}
                className={`h-11 rounded-xl flex flex-col items-center justify-center border text-xs transition transform hover:scale-105 ${badgeBg}`}
                title={`Soal ${q.number}: ${q.title} (${q.type})`}
              >
                <span className="font-bold text-sm leading-none">{q.number}</span>
                <span className="text-[9px] uppercase tracking-tighter opacity-80">{q.type}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span> Jawaban Benar
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-600"></span> Jawaban Salah/Parsial
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-100 border border-amber-300"></span> Belum Diperiksa
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200"></span> Belum Dijawab
          </span>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200">
        <button
          onClick={onBackToHome}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
        >
          ← Kembali ke Halaman Utama
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onPromptReset}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-rose-300 text-rose-700 font-semibold text-sm hover:bg-rose-50 transition flex items-center justify-center gap-1.5"
          >
            <RotateCcw size={15} />
            Reset Latihan
          </button>
          <button
            onClick={() => onSelectQuestion(0)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow transition flex items-center justify-center gap-1.5"
          >
            <span>Ulangi Nomor 1</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
