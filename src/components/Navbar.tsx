import React, { useState } from 'react';
import {
  Atom,
  BookOpen,
  KeyRound,
  BarChart3,
  RotateCcw,
  Menu,
  X,
  Volume2,
  VolumeX,
  Award,
  Sparkles,
  HelpCircle,
  FlaskConical
} from 'lucide-react';
import { ttsService } from '../utils/tts';

interface NavbarProps {
  currentTab: 'home' | 'quiz' | 'instructions' | 'curriculum' | 'formulas' | 'progress';
  onNavigate: (tab: 'home' | 'quiz' | 'instructions' | 'curriculum' | 'formulas' | 'progress') => void;
  onPromptReset: () => void;
  savedAnswerCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onPromptReset,
  savedAnswerCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      ttsService.speak('Suara narator Mister Jo diaktifkan.');
    } else {
      ttsService.stop();
      setIsMuted(true);
    }
  };

  const navItems: {
    id: 'home' | 'quiz' | 'instructions' | 'curriculum' | 'formulas' | 'progress';
    label: string;
    icon: React.ReactNode;
  }[] = [
    { id: 'home', label: 'Beranda', icon: <FlaskConical size={16} /> },
    { id: 'quiz', label: 'Latihan 30 Soal', icon: <Atom size={16} /> },
    { id: 'instructions', label: 'Petunjuk', icon: <HelpCircle size={16} /> },
    { id: 'curriculum', label: 'Materi & Kisi-Kisi', icon: <Award size={16} /> },
    { id: 'formulas', label: 'Bank Rumus', icon: <KeyRound size={16} /> },
    { id: 'progress', label: 'Progres Belajar', icon: <BarChart3 size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-sm">
      {/* Top micro banner for slogan & saved status */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-rose-800 text-white text-[11px] py-1 px-4 text-center font-medium flex items-center justify-between sm:justify-center relative">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wide">MISTER JO:</span>
          <span className="hidden sm:inline">"Berpikir Ilmiah, Menghitung Cermat, Menaklukkan Kimia!"</span>
          <span className="sm:hidden">"Berpikir Ilmiah, Menaklukkan Kimia!"</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-red-100 font-mono sm:absolute sm:right-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Progres Tersimpan</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-md">
              <Atom size={24} className="animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                  KIMIA <span className="text-red-600">JENIUS</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
                  2026
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight">
                Taklukkan TKA Kimia Bersama Mister Jo
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                  currentTab === item.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-red-50 hover:text-red-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.id === 'progress' && savedAnswerCount > 0 && (
                  <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-red-100 text-red-800 font-mono">
                    {savedAnswerCount}/30
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Actions: Sound Mute & Reset Progress button */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isMuted
                  ? 'bg-slate-100 text-slate-400 border-slate-200'
                  : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
              }`}
              title={isMuted ? 'Aktifkan Suara Narator' : 'Bisukan Suara Narator'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span className="text-[11px]">{isMuted ? 'Mute' : 'Audio On'}</span>
            </button>

            <button
              onClick={onPromptReset}
              className="p-2 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-semibold flex items-center gap-1 transition"
              title="Reset Progres Belajar"
            >
              <RotateCcw size={14} />
              <span className="hidden md:inline text-[11px]">Reset</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle suara"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-left transition ${
                currentTab === item.id
                  ? 'bg-red-600 text-white'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.id === 'progress' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  {savedAnswerCount}/30
                </span>
              )}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                onPromptReset();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl border border-rose-300 text-rose-700 font-bold text-xs hover:bg-rose-50"
            >
              <RotateCcw size={15} />
              <span>Reset Seluruh Progres Latihan</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
