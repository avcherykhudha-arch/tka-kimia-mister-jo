import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Square, Sparkles } from 'lucide-react';
import { ttsService, TTSState } from '../utils/tts';

export const AudioPlayerBar: React.FC = () => {
  const [ttsState, setTtsState] = useState<TTSState>(ttsService.state);

  useEffect(() => {
    const unsubscribe = ttsService.subscribe((state) => {
      setTtsState(state);
    });
    return unsubscribe;
  }, []);

  if (!ttsState.isPlaying && !ttsState.isPaused && !ttsState.currentText) {
    return null;
  }

  const handlePlayPause = () => {
    if (ttsState.isPaused) {
      ttsService.resume();
    } else if (ttsState.isPlaying) {
      ttsService.pause();
    } else {
      ttsService.replay();
    }
  };

  const speeds = [0.85, 0.95, 1.05];

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[480px] z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gradient-to-r from-red-900 via-rose-950 to-slate-900 text-white rounded-2xl p-3.5 shadow-2xl border border-red-500/30 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          {/* Avatar & Speaking status */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center font-bold text-white shadow-inner">
              <span className="text-sm">MJ</span>
              {ttsState.isPlaying && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs tracking-wide text-red-200">Narator Mister Jo</span>
                {ttsState.isPlaying && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1 h-2 bg-emerald-400 animate-pulse"></span>
                    <span className="w-1 h-3.5 bg-emerald-400 animate-pulse delay-75"></span>
                    <span className="w-1 h-2.5 bg-emerald-400 animate-pulse delay-150"></span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 truncate max-w-[210px] sm:max-w-[260px] italic">
                {ttsState.isPlaying
                  ? `"${ttsState.currentText}"`
                  : ttsState.isPaused
                  ? 'Suara dijeda...'
                  : 'Selesai bernarasi'}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* Speed toggle */}
            <div className="hidden sm:flex items-center gap-0.5 mr-1 bg-black/30 rounded-lg p-0.5 text-[10px] font-mono">
              {speeds.map((s) => (
                <button
                  key={s}
                  onClick={() => ttsService.setSpeed(s)}
                  className={`px-1.5 py-0.5 rounded ${
                    ttsState.speed === s ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title={`Kecepatan ${s}x`}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              aria-label={ttsState.isPaused ? 'Lanjutkan Suara' : 'Jeda Suara'}
              className="w-8 h-8 rounded-full bg-white text-red-900 hover:bg-red-100 transition flex items-center justify-center font-bold shadow"
            >
              {ttsState.isPaused ? <Play size={15} className="ml-0.5" /> : <Pause size={15} />}
            </button>

            {/* Replay */}
            <button
              onClick={() => ttsService.replay()}
              aria-label="Ulangi Narasi"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-slate-200 hover:text-white"
              title="Ulangi Narasi"
            >
              <RotateCcw size={14} />
            </button>

            {/* Stop */}
            <button
              onClick={() => ttsService.stop()}
              aria-label="Hentikan Suara"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-slate-200 hover:text-red-300"
              title="Hentikan Suara"
            >
              <Square size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
