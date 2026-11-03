import React from 'react';
import {
  Play,
  BookOpen,
  Award,
  KeyRound,
  BarChart3,
  RotateCcw,
  Volume2,
  Atom,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Compass
} from 'lucide-react';
import { ttsService } from '../utils/tts';

interface HomeHeroProps {
  onStartQuiz: () => void;
  onOpenInstructions: () => void;
  onOpenCurriculum: () => void;
  onOpenFormulas: () => void;
  onOpenProgress: () => void;
  onPromptReset: () => void;
  savedAnswerCount: number;
}

export const WELCOME_NARRATION =
  "Halo, para calon ahli Kimia! Selamat datang di Kimia Jenius bersama Mister Jo. Di sini kita tidak hanya menghafal rumus dan mengingat nama senyawa. Kita akan belajar bagaimana membaca data eksperimen, memahami fenomena kimia, menganalisis grafik, menghitung secara teliti, dan mengambil keputusan berdasarkan bukti ilmiah. Ada tiga puluh tantangan yang sudah menanti. Jangan takut jika awalnya terasa sulit. Ikuti petunjuk, pahami konsep, gunakan rumus kunci, dan pelajari pembahasannya. Target kita bukan sekadar menjawab benar, tetapi benar-benar memahami Kimia. Ayo, kita mulai!";

export const HomeHero: React.FC<HomeHeroProps> = ({
  onStartQuiz,
  onOpenInstructions,
  onOpenCurriculum,
  onOpenFormulas,
  onOpenProgress,
  onPromptReset,
  savedAnswerCount,
}) => {
  const playWelcomeSpeech = () => {
    ttsService.speak(WELCOME_NARRATION);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative Merah Putih background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-100/50 via-rose-50/30 to-transparent pointer-events-none rounded-b-full blur-3xl -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Top badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            TEMA: MERAH PUTIH – KIMIA JENIUS 2026
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium">
            <Atom size={15} className="text-red-600" />
            30 Soal HOTS Numerik & Penalaran
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 bg-clip-text text-transparent">
              KIMIA JENIUS
            </span>
          </h1>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
            LATIHAN TKA KIMIA 2026
          </p>
          <div className="mt-1 flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold text-red-700">
            <span>Bersama Mister Jo</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-normal italic">
              "Berpikir Ilmiah, Menghitung Cermat, Menaklukkan Kimia!"
            </span>
          </div>
        </div>

        {/* Mister Jo Welcome Speech Card */}
        <div className="mb-10 max-w-4xl mx-auto bg-gradient-to-br from-red-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-500/30 relative overflow-hidden">
          {/* Subtle molecular background SVG */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <svg width="260" height="260" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="30" r="12" fill="white" />
              <circle cx="170" cy="100" r="10" fill="white" />
              <circle cx="100" cy="170" r="12" fill="white" />
              <circle cx="30" cy="100" r="10" fill="white" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-red-500/20 pb-5 mb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-500 to-amber-400 p-0.5 shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-xl text-amber-300 tracking-wider">
                  MJ
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-wide">Pesan Pembimbing: Mister Jo</h2>
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Audio Aktif
                  </span>
                </div>
                <p className="text-xs text-red-200">Guru Besar & Spesialis Pembuat Soal HOTS TKA Kimia</p>
              </div>
            </div>

            <button
              onClick={playWelcomeSpeech}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm shadow-md transition transform active:scale-95"
            >
              <Volume2 size={16} />
              Dengarkan Sambutan Mister Jo
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-light italic">
            "{WELCOME_NARRATION}"
          </p>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" />
              30 Soal HOTS: 10 PG + 10 PGK + 10 Benar/Salah
            </span>
            <span className="text-slate-400 font-mono">
              Status Tersimpan: {savedAnswerCount} dari 30 Soal Dijawab
            </span>
          </div>
        </div>

        {/* 6 MAIN ACTION BUTTONS */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {/* 1. MULAI BELAJAR */}
          <button
            onClick={() => {
              ttsService.speak('Memulai latihan tiga puluh soal TKA Kimia bersama Mister Jo. Selamat belajar!');
              onStartQuiz();
            }}
            className="group relative flex flex-col p-5 bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 text-left border border-red-500 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white shadow-inner">
                <Play size={20} className="fill-white translate-x-0.5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white">
                Utama
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">1. MULAI BELAJAR</h3>
            <p className="text-xs text-red-100 leading-relaxed">
              Masuki 30 tantangan soal HOTS terstruktur dengan bimbingan narator audio dan cara cepat.
            </p>
          </button>

          {/* 2. PETUNJUK PENGGUNAAN */}
          <button
            onClick={() => {
              ttsService.speak(
                'Pertama, tekan tombol Mulai Belajar untuk memasuki latihan. Bacalah stimulus dengan teliti sebelum menjawab. Kamu akan menemukan berbagai jenis soal, mulai dari pilihan ganda, pilihan ganda kompleks, hingga benar atau salah. Setelah menjawab, kamu dapat mempelajari pembahasan lengkap, mendengarkan penjelasan, dan memahami cara cepat menyelesaikan soal. Gunakan fitur rumus kunci ketika membutuhkan pengingat persamaan penting. Progres belajarmu tersimpan otomatis sehingga kamu dapat melanjutkan latihan kapan saja.'
              );
              onOpenInstructions();
            }}
            className="group flex flex-col p-5 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left border border-slate-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <span className="text-xs text-slate-400 font-mono">7 Langkah</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">2. PETUNJUK PENGGUNAAN</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Panduan interaktif cara mengerjakan latihan, fitur tombol, dan navigasi belajar cerdas.
            </p>
          </button>

          {/* 3. MATERI DAN KOMPETENSI */}
          <button
            onClick={() => {
              ttsService.speak(
                'Membuka kisi-kisi materi dan kompetensi TKA Kimia 2026. Mencakup Kimia Dasar, Kimia Analitik, Kimia Fisik, dan Kimia Organik dengan level kognitif Knowing, Applying, dan Reasoning.'
              );
              onOpenCurriculum();
            }}
            className="group flex flex-col p-5 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left border border-slate-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <span className="text-xs text-slate-400 font-mono">Standar BPPP</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">3. MATERI & KOMPETENSI</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Struktur kisi-kisi resmi TKA Kimia 2026 dan distribusi level kognitif asesmen nasional.
            </p>
          </button>

          {/* 4. RUMUS KUNCI KIMIA */}
          <button
            onClick={() => {
              ttsService.speak(
                'Membuka Bank Rumus Kunci Kimia. Berisi empat belas kategori persamaan matematis lengkap beserta satuan, kondisi penggunaan, dan panduan audio Mister Jo.'
              );
              onOpenFormulas();
            }}
            className="group flex flex-col p-5 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left border border-slate-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <KeyRound size={20} />
              </div>
              <span className="text-xs text-slate-400 font-mono">14 Kategori</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">4. RUMUS KUNCI KIMIA</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Kumpulan rumus cepat, stoikiometri, asam-basa, Ksp, termokimia, kinetika, dan organik.
            </p>
          </button>

          {/* 5. PROGRES BELAJAR */}
          <button
            onClick={() => {
              ttsService.speak(
                'Membuka dasbor progres belajar dan evaluasi skor. Periksa tingkat ketuntasan dan rekomendasi personal dari Mister Jo.'
              );
              onOpenProgress();
            }}
            className="group flex flex-col p-5 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left border border-slate-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <BarChart3 size={20} />
              </div>
              <span className="text-xs text-emerald-600 font-semibold">{savedAnswerCount}/30 Selesai</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">5. PROGRES BELAJAR</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pantau skor ternormalisasi skala 100, materi terkuat, dan area yang memerlukan penguatan.
            </p>
          </button>

          {/* 6. RESET PROGRES */}
          <button
            onClick={() => {
              ttsService.speak(
                'Peringatan reset progres: Apakah kamu yakin ingin menghapus seluruh progres belajar? Semua jawaban dan riwayat pengerjaan akan dihapus.'
              );
              onPromptReset();
            }}
            className="group flex flex-col p-5 bg-white hover:bg-rose-50 text-slate-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left border border-rose-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <RotateCcw size={20} />
              </div>
              <span className="text-xs text-rose-500 font-mono">Reset</span>
            </div>
            <h3 className="text-base font-bold text-rose-700 mb-1">6. RESET PROGRES</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mulai ulang latihan dari awal dan hapus riwayat jawaban dengan konfirmasi aman.
            </p>
          </button>
        </div>

        {/* Benefits Section as explained by narrator */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="text-red-600" size={20} />
            <h3 className="text-lg font-bold text-slate-900">Manfaat Belajar Bersama Kimia Jenius</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Melatih penalaran tingkat tinggi (HOTS):</strong> Memecahkan masalah berbasis bukti ilmiah.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Membaca data eksperimen:</strong> Menganalisis tabel konsentrasi, suhu, massa, dan pH.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Menguasai perhitungan numerik:</strong> Stoikiometri, Kc/Kp, buffer, Ksp, dan kalorimetri presisi.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Analisis grafik & tabel:</strong> Membaca kurva titrasi, diagram profil energi, dan laju reaksi.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Konteks kehidupan nyata:</strong> Industri pupuk, pengolahan air bersih, metalurgi, dan farmasi.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span><strong>Strategi cepat ala Mister Jo:</strong> Trik kilat menyelesaikan soal tanpa melanggar konsep ilmiah.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
