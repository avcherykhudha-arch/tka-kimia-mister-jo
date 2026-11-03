/**
 * Indonesian Web Speech API TTS helper with chemistry sanitization
 */

export function sanitizeChemicalTextForTTS(text: string): string {
  if (!text) return '';

  let sanitized = text;

  // Clean Markdown headers & symbols
  sanitized = sanitized.replace(/#{1,6}\s+/g, '');
  sanitized = sanitized.replace(/\*\*(.*?)\*\*/g, '$1');
  sanitized = sanitized.replace(/\*(.*?)\*/g, '$1');
  sanitized = sanitized.replace(/`([^`]+)`/g, '$1');

  // Common chemistry and math replacements
  sanitized = sanitized
    .replace(/\bpH\b/g, 'pe-ha')
    .replace(/\bpOH\b/g, 'pe-o-ha')
    .replace(/\[H\+\]/g, 'konsentrasi H plus')
    .replace(/\[OH\-\]/g, 'konsentrasi O H minus')
    .replace(/ΔH/g, 'delta H')
    .replace(/ΔT/g, 'delta T')
    .replace(/Δn/g, 'delta n')
    .replace(/⇌/g, ' berkeseimbangan bolak balik dengan ')
    .replace(/→/g, ' bereaksi menghasilkan ')
    .replace(/\s*->\s*/g, ' bereaksi menghasilkan ')
    .replace(/([0-9]+)\s*×\s*10\^([−\-]?\d+)/g, '$1 kali sepuluh pangkat $2')
    .replace(/10\^([−\-]?\d+)/g, 'sepuluh pangkat $1')
    .replace(/kJ\/mol/gi, ' kilojoule per mol')
    .replace(/J\/g\s*°C/gi, ' joule per gram derajat celsius')
    .replace(/kJ/gi, ' kilojoule')
    .replace(/g\/mol/gi, ' gram per mol')
    .replace(/g\/cm\^3/gi, ' gram per sentimeter kubik')
    .replace(/([0-9,.]+)\s*M\b/g, '$1 molar')
    .replace(/([0-9,.]+)\s*mL\b/gi, '$1 mililiter')
    .replace(/([0-9,.]+)\s*L\b/g, '$1 liter')
    .replace(/([0-9,.]+)\s*atm\b/gi, '$1 atmosfer')
    .replace(/\(aq\)/gi, ' terlarut ')
    .replace(/\(s\)/gi, ' padatan ')
    .replace(/\(g\)/gi, ' gas ')
    .replace(/\(l\)/gi, ' cairan ')
    .replace(/CH3COOH/g, 'C-H tiga C-O-O-H asam asetat')
    .replace(/CH3COO-/g, 'ion C-H tiga C-O-O minus')
    .replace(/NaOH/g, 'N-a O-H natrium hidroksida')
    .replace(/HCl/g, 'H C-l asam klorida')
    .replace(/H2SO4/g, 'H dua S O empat asam sulfat')
    .replace(/HNO3/g, 'H N O tiga asam nitrat')
    .replace(/NH3/g, 'N H tiga amonia')
    .replace(/NH4\+/g, 'ion amonium')
    .replace(/NH4Cl/g, 'amonium klorida')
    .replace(/H2O/g, 'H dua O air')
    .replace(/CO2/g, 'C O dua karbon dioksida')
    .replace(/Ca\(OH\)2/g, 'C-a O-H dua kali kalsium hidroksida')
    .replace(/BaSO4/g, 'B-a S O empat barium sulfat')
    .replace(/AgCl/g, 'A-g C-l perak klorida')
    .replace(/Fe2O3/g, 'besi tiga oksida')
    .replace(/Al2O3/g, 'aluminium oksida')
    .replace(/Ksp/g, 'K-s-p')
    .replace(/Qsp/g, 'Q-s-p')
    .replace(/Kc/g, 'K-c')
    .replace(/Kp/g, 'K-p')
    .replace(/Ka/g, 'K-a')
    .replace(/Kb/g, 'K-b')
    .replace(/Kw/g, 'K-w')
    .replace(/Mr/g, 'M-r massa molekul relatif')
    .replace(/Ar/g, 'A-r massa atom relatif')
    .replace(/VSEPR/g, 'V-S-E-P-R')
    .replace(/PEI/g, 'P-E-I pasangan elektron ikatan')
    .replace(/PEB/g, 'P-E-B pasangan elektron bebas');

  return sanitized.trim();
}

export interface TTSState {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  speed: number;
}

class TTSService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: ((state: TTSState) => void)[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;

  public state: TTSState = {
    isPlaying: false,
    isPaused: false,
    currentText: '',
    speed: 0.95,
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Try to find indonesian voice first
    const idVoice = voices.find(
      (v) => v.lang.startsWith('id') || v.lang.includes('ID') || v.name.toLowerCase().includes('indonesia')
    );
    if (idVoice) {
      this.selectedVoice = idVoice;
    } else {
      // fallback to default voice
      this.selectedVoice = voices.find((v) => v.default) || voices[0] || null;
    }
  }

  public subscribe(listener: (state: TTSState) => void): () => void {
    this.listeners.push(listener);
    listener(this.state);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l({ ...this.state }));
  }

  public speak(text: string, onEndCallback?: () => void) {
    if (!this.synth) return;

    // Stop ongoing speech
    this.stop();

    if (!text || text.trim() === '') return;

    const cleanedText = sanitizeChemicalTextForTTS(text);
    this.state.currentText = text;
    this.state.isPlaying = true;
    this.state.isPaused = false;
    this.notify();

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'id-ID';
    utterance.rate = this.state.speed;
    utterance.pitch = 1.0;

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    utterance.onend = () => {
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.currentUtterance = null;
      this.notify();
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.state.isPlaying && !this.state.isPaused) {
      this.synth.pause();
      this.state.isPaused = true;
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.state.isPlaying && this.state.isPaused) {
      this.synth.resume();
      this.state.isPaused = false;
      this.notify();
    }
  }

  public replay() {
    if (this.state.currentText) {
      this.speak(this.state.currentText);
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    }
  }

  public setSpeed(speed: number) {
    this.state.speed = Math.max(0.75, Math.min(1.25, speed));
    this.notify();
    // If currently speaking, restart with new speed
    if (this.state.isPlaying && this.state.currentText) {
      this.speak(this.state.currentText);
    }
  }
}

export const ttsService = new TTSService();
