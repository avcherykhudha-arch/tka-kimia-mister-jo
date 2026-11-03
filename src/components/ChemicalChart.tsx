import React from 'react';
import { StimulusData } from '../types';
import { BlockMath } from './MathView';

interface ChemicalChartProps {
  type: StimulusData['chartType'];
  details?: Record<string, any>;
  reactionEquation?: string;
}

export const ChemicalChart: React.FC<ChemicalChartProps> = ({ type, details, reactionEquation }) => {
  if (type === 'energy-diagram') {
    return (
      <div className="my-4 p-4 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-red-400">
            Diagram Profil Koordinat Energi Reaksi
          </span>
          <span className="text-xs text-slate-400">{details?.title || 'Eksoterm / Jalur Katalis'}</span>
        </div>
        <div className="w-full h-56 flex items-center justify-center">
          <svg viewBox="0 0 500 240" className="w-full h-full max-w-lg">
            {/* Axes */}
            <line x1="60" y1="20" x2="60" y2="210" stroke="#64748b" strokeWidth="2" />
            <line x1="60" y1="210" x2="480" y2="210" stroke="#64748b" strokeWidth="2" />
            
            {/* Axis Labels */}
            <text x="25" y="30" fill="#94a3b8" fontSize="11" transform="rotate(-90 25,30)">Energi Potensial (kJ)</text>
            <text x="230" y="230" fill="#94a3b8" fontSize="11" textAnchor="middle">Koordinat / Jalur Reaksi</text>

            {/* Grid markings */}
            <line x1="55" y1="130" x2="470" y2="130" stroke="#334155" strokeDasharray="3,3" />
            <text x="48" y="134" fill="#94a3b8" fontSize="10" textAnchor="end">100</text>
            
            <line x1="55" y1="180" x2="470" y2="180" stroke="#334155" strokeDasharray="3,3" />
            <text x="48" y="184" fill="#94a3b8" fontSize="10" textAnchor="end">40</text>

            <line x1="55" y1="40" x2="470" y2="40" stroke="#334155" strokeDasharray="3,3" />
            <text x="48" y="44" fill="#94a3b8" fontSize="10" textAnchor="end">180</text>

            {/* Path 1: Tanpa Katalis (Red curve) */}
            <path
              d="M 60,130 C 130,130 180,40 250,40 C 320,40 370,180 460,180"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
            />

            {/* Path 2: Dengan Katalis (Cyan dashed curve) */}
            <path
              d="M 60,130 C 140,130 190,90 250,90 C 310,90 370,180 460,180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="5,4"
            />

            {/* Labels on diagram */}
            <circle cx="80" cy="130" r="4" fill="#ef4444" />
            <text x="85" y="122" fill="#f87171" fontSize="11" fontWeight="bold">Reaktan (100 kJ)</text>

            <circle cx="450" cy="180" r="4" fill="#ef4444" />
            <text x="420" y="200" fill="#f87171" fontSize="11" fontWeight="bold">Produk (40 kJ)</text>

            <text x="250" y="28" fill="#f87171" fontSize="11" textAnchor="middle" fontWeight="bold">Ea tanpa katalis = 80 kJ</text>
            <text x="250" y="82" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">Ea dengan katalis = 45 kJ</text>

            {/* Delta H arrow */}
            <line x1="420" y1="130" x2="420" y2="180" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="428" y="158" fill="#fbbf24" fontSize="11" fontWeight="bold">ΔH = -60 kJ</text>
          </svg>
        </div>
        <div className="flex items-center justify-center gap-6 mt-2 text-xs border-t border-slate-800 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1 bg-red-500 rounded"></span>
            <span className="text-slate-300">Jalur Tanpa Katalis (Ea = 80 kJ)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-1 bg-sky-400 rounded"></span>
            <span className="text-slate-300">Jalur Alternatif Dengan Katalis (Ea = 45 kJ)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'titration-curve') {
    return (
      <div className="my-4 p-4 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
            Kurva Titrasi Asam Asetat (CH3COOH) vs NaOH 0,10 M
          </span>
          <span className="text-xs text-slate-400">pH vs Volume Titran (mL)</span>
        </div>
        <div className="w-full h-56 flex items-center justify-center">
          <svg viewBox="0 0 500 240" className="w-full h-full max-w-lg">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="200" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="200" x2="470" y2="200" stroke="#64748b" strokeWidth="2" />
            
            {/* Axis labels */}
            <text x="25" y="40" fill="#94a3b8" fontSize="11" transform="rotate(-90 25,40)">pH Larutan</text>
            <text x="260" y="225" fill="#94a3b8" fontSize="11" textAnchor="middle">Volume NaOH Ditambahkan (mL)</text>

            {/* pH Grid */}
            <text x="42" y="195" fill="#94a3b8" fontSize="10" textAnchor="end">0</text>
            <text x="42" y="150" fill="#94a3b8" fontSize="10" textAnchor="end">3</text>
            <text x="42" y="125" fill="#94a3b8" fontSize="10" textAnchor="end">5</text>
            <text x="42" y="95" fill="#94a3b8" fontSize="10" textAnchor="end">7</text>
            <text x="42" y="70" fill="#94a3b8" fontSize="10" textAnchor="end">9</text>
            <text x="42" y="30" fill="#94a3b8" fontSize="10" textAnchor="end">14</text>

            {/* Volume Marks */}
            <text x="50" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle">0</text>
            <text x="190" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle">12,5</text>
            <text x="330" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle">25,0</text>
            <text x="450" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle">40,0</text>

            {/* Titration sigmoidal curve */}
            <path
              d="M 50,150 Q 120,135 190,125 T 300,115 C 320,110 325,90 330,72 C 335,50 360,40 450,35"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />

            {/* Key Points */}
            {/* pH awal */}
            <circle cx="50" cy="150" r="4" fill="#fbbf24" />
            <text x="60" y="155" fill="#fbbf24" fontSize="10">pH Awal = 3,0</text>

            {/* Setengah ekuivalen */}
            <line x1="190" y1="125" x2="190" y2="200" stroke="#64748b" strokeDasharray="3,3" />
            <circle cx="190" cy="125" r="4" fill="#38bdf8" />
            <text x="130" y="112" fill="#38bdf8" fontSize="10">Setengah Ekuivalen (pH = pKa = 5,0)</text>

            {/* Titik ekuivalen */}
            <line x1="330" y1="72" x2="330" y2="200" stroke="#64748b" strokeDasharray="3,3" />
            <circle cx="330" cy="72" r="5" fill="#ef4444" />
            <text x="250" y="60" fill="#f87171" fontSize="10" fontWeight="bold">Titik Ekuivalen (pH = 8,85)</text>
          </svg>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-2 px-2">
          <span>Daerah Penyangga: V = 0 – 24 mL</span>
          <span className="text-emerald-400 font-medium">Titik Akhir: Fenolftalein (Trayek 8,3 – 10,0)</span>
        </div>
      </div>
    );
  }

  // Default reaction formula block rendered with textbook KaTeX notation
  if (reactionEquation) {
    return (
      <div className="my-4 p-4 bg-gradient-to-r from-red-50/90 via-white to-red-50/90 border-2 border-red-200/90 rounded-2xl text-slate-900 shadow-sm text-center">
        <div className="text-[11px] font-bold tracking-wider uppercase text-red-800 mb-2 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          Persamaan Reaksi Kimia
        </div>
        <div className="text-base sm:text-lg font-semibold text-slate-900 overflow-x-auto">
          <BlockMath math={reactionEquation} />
        </div>
      </div>
    );
  }

  return null;
};
