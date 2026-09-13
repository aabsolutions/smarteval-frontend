/**
 * Espejo del contrato WebSocket del backend (`backend/src/word-clouds/`).
 * Si cambia un payload allá, cambia acá y en `mobile/lib/data/models/word_cloud_models.dart`.
 */

/** Namespace del gateway. Un solo lugar para los dos services. */
export const WORD_CLOUD_NAMESPACE = '/word-cloud';

export type WordCloudStatus = 'draft' | 'open' | 'closed' | 'finished';
export type BackgroundType = 'color' | 'image' | 'preset';

export interface ResolvedAppearance {
  backgroundType: BackgroundType;
  backgroundColor: string;
  backgroundImageUrl?: string;
  backgroundPresetKey?: string;
  backgroundDim: number;
  fontFamily: string;
  /** Stack con fallback, ya resuelto por el servidor. */
  fontStack: string;
  baseFontSize: number;
  paletteKey: string;
  /** Paleta YA RESUELTA: el cliente nunca necesita el mapa key→colores. */
  palette: string[];
}

export interface PublicWord {
  key: string;
  text: string;
  count: number;
  weight: number;
  colorIndex: number;
  rotation: 0 | 90;
}

export interface TeacherEntryView {
  userId: string;
  name: string;
  username: string;
  displayText: string;
  explanation: string;
  updatedAt: string;
}

export interface TeacherWord extends PublicWord {
  variants: string[];
  entries: TeacherEntryView[];
}

export interface PublicCloud {
  sessionId: string;
  version: number;
  totalEntries: number;
  uniqueWords: number;
  maxCount: number;
  layoutSeed: number;
  words: PublicWord[];
}

export interface TeacherCloud extends Omit<PublicCloud, 'words'> {
  words: TeacherWord[];
}

export interface MyEntry {
  displayText: string;
  explanation: string;
  editCount: number;
  updatedAt: string;
}

export interface WordDetails {
  wordKey: string;
  text: string;
  count: number;
  entries: TeacherEntryView[];
}

export interface StudentSnapshot {
  sessionId: string;
  title: string;
  prompt: string;
  status: WordCloudStatus;
  appearance: ResolvedAppearance;
  explanationRequired: boolean;
  canSubmit: boolean;
  canEdit: boolean;
  cloudVisible: boolean;
  finishedAtLabel: string | null;
  myEntry: MyEntry | null;
  cloud: PublicCloud;
}

export interface TeacherSnapshot {
  sessionId: string;
  pin: string;
  title: string;
  prompt: string;
  status: WordCloudStatus;
  appearance: ResolvedAppearance;
  explanationRequired: boolean;
  finishedAtLabel: string | null;
  cloud: TeacherCloud;
}

export interface WordCloudError {
  message: string;
  code:
    | 'AUTH_REQUIRED'
    | 'PIN_INVALID'
    | 'SESSION_CLOSED'
    | 'NOT_PARTICIPANT'
    | 'NOT_AUTHORIZED'
    | 'RATE_LIMITED'
    | 'MAX_WORDS_REACHED'
    | 'VALIDATION'
    | 'INTERNAL';
}

// ═══ REST ═══

export interface WordCloudSessionSummary {
  _id: string;
  title: string;
  prompt: string;
  description?: string;
  pin: string;
  pinActive: boolean;
  status: WordCloudStatus;
  groupIds: any[];
  entries: unknown[];
  appearance: AppearancePayload;
  explanationRequired: boolean;
  maxWords: number;
  createdAt: string;
  openedAt?: string;
  closedAt?: string;
  finishedAt?: string;
}

/** Lo que el cliente PUEDE mandar. La URL/publicId del fondo las escribe el upload. */
export interface AppearancePayload {
  backgroundType?: BackgroundType;
  backgroundColor?: string;
  backgroundPresetKey?: string;
  backgroundDim?: number;
  fontFamily?: string;
  baseFontSize?: number;
  paletteKey?: string;
  customPalette?: string[];
  backgroundImageUrl?: string;
}

export interface CreateWordCloudPayload {
  title: string;
  prompt: string;
  description?: string;
  groupIds?: string[];
  explanationRequired?: boolean;
  maxWords?: number;
  appearance?: AppearancePayload;
}

export interface BackgroundPreset {
  key: string;
  label: string;
  url: string;
  fallbackColor: string;
  suggestedDim: number;
}

export interface AppearanceOptions {
  palettes: Array<{ key: string; colors: string[] }>;
  fonts: string[];
  presets: BackgroundPreset[];
}

export interface WordFrequency {
  text: string;
  key: string;
  count: number;
  percentage: number;
  variants: string[];
}

export interface WordCloudReport {
  sessionId: string;
  title: string;
  prompt: string;
  pin: string;
  status: WordCloudStatus;
  openedAt?: string;
  closedAt?: string;
  finishedAt?: string;
  finishedAtLabel: string | null;
  /** Cuántos ENTRARON con el PIN. */
  totalParticipants: number;
  /** Cuántos de esos efectivamente escribieron una palabra. */
  totalContributions: number;
  uniqueWords: number;
  appearance: ResolvedAppearance;
  topWords: WordFrequency[];
  frequencies: WordFrequency[];
  words: TeacherWord[];
  /** Roster completo: incluye a los que entraron y no participaron. */
  participations: Array<{
    userId: string;
    name: string;
    username: string;
    joinedAt: string;
    participated: boolean;
    displayText: string;
    normalizedText: string;
    explanation: string;
    submittedAt: string | null;
    updatedAt: string | null;
    editCount: number;
  }>;
}

/** Datos de la banda de marca de agua del JPG. */
export interface WatermarkInfo {
  studentLine: string;
  promptLine: string;
}
