import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden p-6 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition"
          aria-label="Tutup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={26} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Reset Progres Belajar</h3>
            <p className="text-xs text-slate-500">Konfirmasi Penghapusan Data Latihan</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          Apakah kamu yakin ingin menghapus seluruh progres belajar? Semua jawaban dan riwayat pengerjaan akan dihapus dan dimulai kembali dari nomor 1.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
          >
            BATAL
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold text-sm shadow-md hover:from-red-700 hover:to-rose-800 transition"
          >
            YA, RESET PROGRES
          </button>
        </div>
      </div>
    </div>
  );
};
