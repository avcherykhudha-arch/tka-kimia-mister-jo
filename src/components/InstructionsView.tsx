import React, { useState } from 'react';
import {
  Volume2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  Lightbulb,
  FileCheck2,
  Award
} from 'lucide-react';
import { ttsService } from '../utils/tts';

interface InstructionsViewProps {
  onBackToHome: () => void;
  onStartQuiz: () => void;
}

export const INSTRUCTIONS_STEPS = [
  {
    step: 1,
    title: 'LANGKAH 1: Masuk ke Halaman Utama dan Tekan Mulai Belajar',
    description:
      'Dari beranda Kimia Jenius, tekan tombol merah MULAI BELAJAR untuk langsung memasuki ruang simulasi 30 soal TKA Kimia 2026. Aplikasi otomatis memuat soal terakhir yang kamu kerjakan.',
    audioScript:
      'Langkah pertama: Tekan tombol Mulai Belajar di halaman utama. Seluruh progres pengerjaanmu disimpan secara otomatis oleh browser sehingga kamu dapat melanjutkan latihan kapan saja tanpa khawatir kehilangan data.',
    icon: Sparkles
  },
  {
    step: 2,
    title: 'LANGKAH 2: Membaca Stimulus dan Mendengarkan Narator Mister Jo',
    description:
      'Setiap nomor memiliki narasi sapaan, stimulus, dan arahan berpikir. Kamu dapat membaca teks stimulus atau mendengarkan penjelasan audio bersuara natural bahasa Indonesia.',
    audioScript:
      'Langkah kedua: Bacalah paragraf ilmiah konteks nyata, data tabel eksperimen, atau grafik profil reaksi dengan saksama. Kamu juga dapat mendengarkan narator audio Mister Jo yang menemani setiap langkah analisismu.',
    icon: Volume2
  },
  {
    step: 3,
    title: 'LANGKAH 3: Menganalisis Data, Grafik, Diagram, atau Fenomena Kimia',
    description:
      'Hubungkan data eksperimen dengan prinsip kimia: hitung mol pereaksi, tentukan pereaksi pembatas, amati pergeseran kesetimbangan, atau cermati kurva titrasi dan struktur Lewis.',
    audioScript:
      'Langkah ketiga: Jangan langsung menghafal rumus mentah-mentah. Olah data kuantitatif yang tersaji, identifikasi konsep reaksi yang bekerja, dan temukan besaran yang ditanyakan dalam soal.',
    icon: Lightbulb
  },
  {
    step: 4,
    title: 'LANGKAH 4: Memilih Jawaban Sesuai Format Soal',
    description:
      'Perhatikan jenis soal: pada Pilihan Ganda (PG) pilih 1 opsi A-E; pada Pilihan Ganda Kompleks (PGK) pilih seluruh opsi yang benar; pada Benar atau Salah (BS) tentukan status 3 pernyataan.',
    audioScript:
      'Langkah keempat: Pilih jawabanmu secara cermat. Untuk pilihan ganda kompleks, kamu wajib mencentang seluruh pernyataan yang benar untuk memperoleh poin penuh. Untuk benar-salah, tentukan status masing-masing pernyataan.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'LANGKAH 5: Mempelajari Pembahasan Lengkap dan Cara Cepat Ala Mister Jo',
    description:
      'Tekan tombol Periksa Jawaban atau Buka Pembahasan. Pelajari 8 urutan pembahasan: identifikasi masalah, konsep kimia, rumus kunci, langkah penyelesaian, perhitungan numerik, jawaban akhir, alasan opsi lain salah, dan trik cara cepat ala Mister Jo!',
    audioScript:
      'Langkah kelima: Setelah menjawab, pelajari pembahasan bertahap dan dengarkan trik Cara Cepat Ala Mister Jo yang membantu memecahkan perhitungan rumit dalam hitungan detik dengan logika ilmiah.',
    icon: FileCheck2
  },
  {
    step: 6,
    title: 'LANGKAH 6: Melanjutkan ke Nomor Berikutnya atau Menandai Soal',
    description:
      'Gunakan tombol navigasi Soal Berikutnya atau buka kisi-kisi nomor 1-30. Gunakan fitur "Tandai Soal" jika kamu ragu-ragu dan ingin meninjaunya kembali nanti sebelum evaluasi akhir.',
    audioScript:
      'Langkah keenam: Lanjutkan ke nomor berikutnya menggunakan tombol navigasi. Jika masih ragu, aktifkan tanda bookmark untuk meninjau kembali soal tersebut di kemudian waktu.',
    icon: BookOpen
  },
  {
    step: 7,
    title: 'LANGKAH 7: Memeriksa Hasil Evaluasi dan Rekomendasi Belajar',
    description:
      'Setelah menuntaskan 30 soal, masuk ke menu Progres Belajar. Lihat skor ternormalisasi skala 100, analisis penguasaan per materi, materi yang perlu diperbaiki, serta rekomendasi personal dari Mister Jo.',
    audioScript:
      'Langkah ketujuh: Setelah menyelesaikan tiga puluh soal, buka dasbor Progres Belajar untuk memeriksa skor akhir skala seratus, grafik penguasaan materi, dan rekomendasi khusus dari Mister Jo untuk mematangkan persiapan TKA Kimia.',
    icon: Award
  }
];

export const InstructionsView: React.FC<InstructionsViewProps> = ({
  onBackToHome,
  onStartQuiz,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const playStepAudio = (script: string) => {
    ttsService.speak(script);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-2">
            <HelpCircle size={14} />
            Panduan Interaktif Penggunaan Aplikasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Petunjuk Penggunaan Kimia Jenius
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            7 Langkah Terarah Menguasai Latihan TKA Kimia 2026 Bersama Mister Jo
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              playStepAudio(
                'Pertama, tekan tombol Mulai Belajar untuk memasuki latihan. Bacalah stimulus dengan teliti sebelum menjawab. Kamu akan menemukan berbagai jenis soal, mulai dari pilihan ganda, pilihan ganda kompleks, hingga benar atau salah. Setelah menjawab, kamu dapat mempelajari pembahasan lengkap, mendengarkan penjelasan, dan memahami cara cepat menyelesaikan soal. Gunakan fitur rumus kunci ketika membutuhkan pengingat persamaan penting. Progres belajarmu tersimpan otomatis sehingga kamu dapat melanjutkan latihan kapan saja.'
              )
            }
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition"
          >
            <Volume2 size={15} />
            Dengarkan Ringkasan Panduan
          </button>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-4 mb-10">
        {INSTRUCTIONS_STEPS.map((item) => {
          const Icon = item.icon;
          const isActive = activeStep === item.step;

          return (
            <div
              key={item.step}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isActive
                  ? 'bg-red-50/50 border-red-300 shadow-md ring-1 ring-red-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div
                onClick={() => {
                  setActiveStep(item.step);
                  playStepAudio(item.audioScript);
                }}
                className="p-4 sm:p-5 flex items-start gap-3.5 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.step}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-base font-bold ${
                        isActive ? 'text-red-900' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playStepAudio(item.audioScript);
                      }}
                      className="text-red-600 hover:text-red-700 p-1 rounded-lg hover:bg-red-100 transition"
                      title="Dengarkan penjelasan langkah ini"
                      aria-label="Dengarkan audio langkah ini"
                    >
                      <Volume2 size={17} />
                    </button>
                  </div>

                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {isActive && (
                    <div className="mt-3 p-3 bg-white rounded-xl border border-red-200 text-xs text-red-950 font-medium italic flex items-center gap-2">
                      <span className="text-red-600 font-bold">Narator Audio:</span>
                      "{item.audioScript}"
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={onBackToHome}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
        >
          ← Kembali ke Halaman Utama
        </button>

        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-sm shadow-md hover:from-red-700 hover:to-rose-800 transition flex items-center justify-center gap-2"
        >
          <span>Siap! Mulai Latihan Sekarang</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
