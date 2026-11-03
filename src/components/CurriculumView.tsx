import React, { useState } from 'react';
import { Award, Volume2, CheckCircle2, Layers, BookCheck, BrainCircuit } from 'lucide-react';
import { ttsService } from '../utils/tts';

interface CurriculumViewProps {
  onBackToHome: () => void;
  onStartQuiz: () => void;
}

export const CURRICULUM_DOMAINS = [
  {
    category: 'A. KIMIA DASAR',
    description: 'Pondasi partikel materi, susunan elektron, ikatan kovalen/ion, hukum kuantitatif, dan perhitungan mol.',
    subtopics: [
      { name: '1. Struktur Atom', points: ['Partikel atom, isotop/isobar/isoton', 'Konfigurasi Aufbau, Pauli, Hund', 'Empat bilangan kuantum (n, l, m, s)', 'Kestabilan orbital setengah & penuh'] },
      { name: '2. Sistem Periodik Unsur', points: ['Golongan & periode blok s, p, d, f', 'Tren jari-jari atom & ion', 'Energi ionisasi bertingkat', 'Afinitas elektron & keelektronegatifan'] },
      { name: '3. Ikatan Kimia & Geometri', points: ['Struktur Lewis & muatan formal', 'Ikatan ion, kovalen koordinasi', 'Teori VSEPR & domain elektron (PEI/PEB)', 'Kepolaran molekul & momen dipol'] },
      { name: '4. Interaksi Antarmolekul', points: ['Gaya dispersi London & dipol-dipol', 'Ikatan hidrogen & anomali titik didih', 'Kelarutan polar vs nonpolar'] },
      { name: '5. Hukum Dasar & Stoikiometri', points: ['Hukum Lavoisier, Proust, Dalton', 'Gay-Lussac & hipotesis Avogadro', 'Konsep mol & massa molar', 'Pereaksi pembatas, sisa & % rendemen'] }
    ]
  },
  {
    category: 'B. KIMIA ANALITIK',
    description: 'Kesetimbangan fasa larutan air, asam-basa kuantitatif, buffer tubuh, hidrolisis garam, dan pengendapan Ksp.',
    subtopics: [
      { name: '6. Larutan & Konsentrasi', points: ['Molaritas, pengenceran, pencampuran', 'Sifat koligatif larutan', 'Fraksi mol & persen massa'] },
      { name: '7. Asam, Basa & Derajat Keasaman (pH)', points: ['Teori Arrhenius, Bronsted-Lowry, Lewis', 'Asam/basa kuat vs lemah (Ka, Kb, α)', 'Perhitungan pH & pOH larutan', 'Titrasi netralisasi & indikator PP'] },
      { name: '8. Larutan Penyangga (Buffer)', points: ['Buffer asam & buffer basa', 'Persamaan Henderson-Hasselbalch', 'Kapasitas buffer melawan asam/basa', 'Sistem buffer bikarbonat dalam darah'] },
      { name: '9. Hidrolisis Garam', points: ['Garam asam, garam basa, total & parsial', 'Perhitungan Kh dan pH garam terhidrolisis'] },
      { name: '10. Kelarutan & Ksp', points: ['Kelarutan molar (s) & rumus Ksp', 'Efek ion senama pada kelarutan', 'Prediksi endapan dengan kuosien Qsp'] },
      { name: '11. Sistem Koloid', points: ['Efek Tyndall & gerak Brown', 'Adsorpsi & koagulasi pengolahan air PDAM', 'Elektroforesis & dialisis'] }
    ]
  },
  {
    category: 'C. KIMIA FISIK',
    description: 'Termodinamika energi kalor, dinamika tumbukan kinetika reaksi, dan hukum kesetimbangan dinamis.',
    subtopics: [
      { name: '12. Termokimia', points: ['Reaksi eksotermik & endotermik', 'Kalorimetri larutan (q = m·c·ΔT)', 'Hukum Hess & diagram tingkat energi', 'Energi ikatan rata-rata (pemutusan - pembentukan)'] },
      { name: '13. Laju Reaksi', points: ['Teori tumbukan & energi aktivasi (Ea)', 'Pengaruh konsentrasi, suhu, luas bidang sentuh', 'Peran katalis pada jalur reaksi alternatif', 'Penentuan orde & persamaan laju v = k[A]^m[B]^n'] },
      { name: '14. Kesetimbangan Kimia', points: ['Tetapan Kc & Kp serta relasinya', 'Asas Le Chatelier (suhu, tekanan, konsentrasi)', 'Derajat disosiasi (α) pada sistem gas'] }
    ]
  },
  {
    category: 'D. KIMIA ORGANIK',
    description: 'Arsitektur senyawa karbon, mekanisme reaksi adisi/substitusi, identifikasi gugus fungsi, dan polimer sintetis.',
    subtopics: [
      { name: '15. Hidrokarbon & Turunan', points: ['Alkana, alkena, alkuna (tata nama IUPAC)', 'Reaksi adisi Markovnikov & substitusi', 'Isomer rantai, posisi, fungsi, geometri & optis', 'Alkohol, eter, aldehid, keton, asam karboksilat, ester'] },
      { name: '16. Makromolekul & Polimer', points: ['Polimerisasi adisi vs kondensasi', 'Poliester, poliamida (nilon & protein)', 'Termoplastik vs termoset'] }
    ]
  }
];

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  onBackToHome,
  onStartQuiz,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);

  const speakCurriculum = (text: string) => {
    ttsService.speak(text);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
            <Award size={14} />
            Standar Kisi-Kisi Asesmen TKA Kimia 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Materi dan Kompetensi TKA Kimia 2026
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Panduan Lengkap Rumpun Materi, Level Kognitif, dan Bobot Penalaran HOTS
          </p>
        </div>

        <button
          onClick={() =>
            speakCurriculum(
              'Kisi-kisi TKA Kimia 2026 mencakup empat pilar: Kimia Dasar, Kimia Analitik, Kimia Fisik, dan Kimia Organik. Soal dirancang menguji tiga kemampuan kognitif: Knowing untuk konsep dasar, Applying untuk aplikasi rumus kuantitatif, dan Reasoning untuk penalaran tingkat tinggi berbasis data eksperimen.'
            )
          }
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition"
        >
          <Volume2 size={15} />
          Dengarkan Penjelasan Mister Jo
        </button>
      </div>

      {/* Cognitive levels breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
            <BookCheck size={18} />
            <span>Level 1: Knowing (Pemahaman)</span>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed">
            Mengingat aturan penamaan senyawa, konfigurasi elektron, sifat fisik golongan, dan teori dasar kimia.
          </p>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
            <BrainCircuit size={18} />
            <span>Level 2: Applying (Penerapan)</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            Mengaplikasikan rumus mol, pH larutan asam-basa, pereaksi pembatas, laju reaksi, dan hukum Hess secara akurat.
          </p>
        </div>

        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
          <div className="flex items-center gap-2 text-red-900 font-bold text-sm mb-1">
            <Layers size={18} />
            <span>Level 3: Reasoning (Penalaran HOTS)</span>
          </div>
          <p className="text-xs text-red-800 leading-relaxed">
            Menganalisis tabel data eksperimen, kurva titrasi, pergeseran kesetimbangan, dan mengambil keputusan ilmiah.
          </p>
        </div>
      </div>

      {/* Tabs for 4 Domains */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {CURRICULUM_DOMAINS.map((domain, idx) => (
          <button
            key={domain.category}
            onClick={() => {
              setSelectedDomain(idx);
              speakCurriculum(
                `Membuka silabus ${domain.category}. ${domain.description}`
              );
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
              selectedDomain === idx
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {domain.category}
          </button>
        ))}
      </div>

      {/* Active Domain Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {CURRICULUM_DOMAINS[selectedDomain].category}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {CURRICULUM_DOMAINS[selectedDomain].description}
            </p>
          </div>
          <button
            onClick={() =>
              speakCurriculum(
                `${CURRICULUM_DOMAINS[selectedDomain].category}. ${CURRICULUM_DOMAINS[selectedDomain].description}`
              )
            }
            className="p-2 rounded-xl text-red-600 hover:bg-red-50 transition"
            title="Dengarkan narasi domain ini"
          >
            <Volume2 size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRICULUM_DOMAINS[selectedDomain].subtopics.map((sub) => (
            <div key={sub.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2.5 text-red-800">
                {sub.name}
              </h4>
              <ul className="space-y-1.5">
                {sub.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          onClick={onBackToHome}
          className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
        >
          ← Kembali ke Beranda
        </button>

        <button
          onClick={onStartQuiz}
          className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition"
        >
          Lanjut Kerjakan Latihan →
        </button>
      </div>
    </div>
  );
};
