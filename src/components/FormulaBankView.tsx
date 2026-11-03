import React, { useState } from 'react';
import { KeyRound, Search, Volume2, Info, AlertCircle, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FORMULA_BANK } from '../data/formulaBank';
import { FormulaItem } from '../types';
import { ttsService } from '../utils/tts';
import { BlockMath } from './MathView';

interface FormulaBankViewProps {
  onBackToHome: () => void;
  onGoToQuiz: () => void;
}

export const FormulaBankView: React.FC<FormulaBankViewProps> = ({
  onBackToHome,
  onGoToQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Struktur Atom',
    'Sistem Periodik',
    'Stoikiometri',
    'Hukum Dasar Kimia',
    'Larutan dan Konsentrasi',
    'Asam dan Basa',
    'pH dan pOH',
    'Larutan Penyangga',
    'Hidrolisis Garam',
    'Ksp',
    'Termokimia',
    'Laju Reaksi',
    'Kesetimbangan Kimia',
    'Hidrokarbon'
  ];

  const filteredFormulas = FORMULA_BANK.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whenToUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const playFormulaNarration = (formula: FormulaItem) => {
    const speech = `Rumus ${formula.name}. Digunakan saat: ${formula.whenToUse}. Perhatikan peringatan Mister Jo: ${formula.commonMistakes}. Contoh praktis: ${formula.example}. ${formula.misterJoAudioScript}`;
    ttsService.speak(speech);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-2">
            <KeyRound size={14} />
            Koleksi Persamaan Matematis Resmi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Bank Rumus Kunci Kimia
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            14 Rumpun Persamaan Utama TKA Kimia 2026 Dilengkapi Panduan Suara Mister Jo
          </p>
        </div>

        <button
          onClick={() =>
            ttsService.speak(
              'Selamat datang di Bank Rumus Kunci Kimia bersama Mister Jo. Di sini tersimpan seluruh persamaan penting yang kamu butuhkan untuk menaklukkan soal hitungan numerik. Dengarkan tips penggunaan dan hindari kesalahan umum pada masing-masing rumus!'
            )
          }
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition"
        >
          <Volume2 size={15} />
          Dengarkan Panduan Bank Rumus
        </button>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari rumus (misal: molaritas, pH, Hess, Ksp, buffer, Gay-Lussac)..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
          />
        </div>

        {/* Categories scrollable pill list */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if (cat !== 'Semua') {
                  ttsService.speak(`Kategori rumus ${cat}`);
                }
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Formulas Card Grid */}
      <div className="space-y-6 mb-12">
        {filteredFormulas.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{item.name}</h3>
              </div>

              <button
                onClick={() => playFormulaNarration(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold transition"
                title="Dengarkan penjelasan audio Mister Jo untuk rumus ini"
              >
                <Volume2 size={15} />
                Dengarkan Arahan Mister Jo
              </button>
            </div>

            {/* Formula display box */}
            <div className="my-4 p-4 bg-slate-900 text-white rounded-xl shadow-inner text-center text-base sm:text-lg font-semibold tracking-wide border border-slate-800 overflow-x-auto">
              <BlockMath math={item.formula} className="text-white" />
            </div>

            {/* Symbols Table */}
            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Keterangan Simbol dan Satuan:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {item.symbols.map((sym, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="font-mono font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                      {sym.symbol}
                    </span>
                    <span className="text-slate-700">
                      {sym.meaning} <span className="text-slate-400">({sym.unit})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage & Common Pitfalls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-3">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-900">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Info size={14} className="text-emerald-700" />
                  Kondisi Penggunaan:
                </div>
                <p className="leading-relaxed">{item.whenToUse}</p>
              </div>

              <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-rose-900">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <AlertCircle size={14} className="text-rose-700" />
                  Kesalahan Umum yang Sering Terjadi:
                </div>
                <p className="leading-relaxed">{item.commonMistakes}</p>
              </div>
            </div>

            {/* Practical Example */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Contoh Penerapan Singkat: </span>
              {item.example}
            </div>

            {/* Mister Jo Voice Note box */}
            <div className="mt-3 p-3 bg-gradient-to-r from-red-950 to-slate-900 text-white rounded-xl text-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-[11px] text-white flex-shrink-0">
                MJ
              </div>
              <p className="text-slate-200 italic leading-relaxed">
                "{item.misterJoAudioScript}"
              </p>
            </div>
          </div>
        ))}

        {filteredFormulas.length === 0 && (
          <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
            Tidak ditemukan rumus dengan kata kunci "{searchQuery}".
          </div>
        )}
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
          onClick={onGoToQuiz}
          className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition flex items-center gap-2"
        >
          <span>Terapkan pada Latihan Soal</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
