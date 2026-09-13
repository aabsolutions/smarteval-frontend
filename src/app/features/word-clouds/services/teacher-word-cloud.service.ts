import { Injectable, inject, signal } from '@angular/core';
import { Socket } from 'socket.io-client';
import { SocketService } from '../../../core/services/socket.service';
import {
  AppearancePayload,
  ResolvedAppearance,
  TeacherCloud,
  TeacherSnapshot,
  WordCloudError,
  WordCloudStatus,
  WordDetails,
  WORD_CLOUD_NAMESPACE,
} from '../models/word-cloud.model';

export interface TeacherWordCloudState {
  status: 'disconnected' | 'connecting' | 'live';
  sessionStatus: WordCloudStatus | null;
  sessionId?: string;
  pin?: string;
  title?: string;
  prompt?: string;
  appearance?: ResolvedAppearance;
  cloud?: TeacherCloud;
  selectedWord: WordDetails | null;
  onlineCount: number;
  submittedCount: number;
  finishedAtLabel: string | null;
  error?: string;
  errorCode?: WordCloudError['code'];
}

const INITIAL_STATE: TeacherWordCloudState = {
  status: 'disconnected',
  sessionStatus: null,
  selectedWord: null,
  onlineCount: 0,
  submittedCount: 0,
  finishedAtLabel: null,
};

/** Estado del host. Es el único que recibe explicaciones. */
@Injectable({ providedIn: 'root' })
export class TeacherWordCloudService {
  private socketService = inject(SocketService);
  private socket: Socket | null = null;

  public state = signal<TeacherWordCloudState>({ ...INITIAL_STATE });

  openSession(sessionId: string) {
    this.state.set({ ...INITIAL_STATE, status: 'connecting', sessionId });
    this.socket = this.socketService.connect(WORD_CLOUD_NAMESPACE);
    this.setupListeners();
    this.socket.emit('teacher:open-session', { sessionId });
  }

  resync() {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('teacher:resync', { sessionId });
  }

  updateAppearance(appearance: AppearancePayload) {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('teacher:update-appearance', { sessionId, appearance });
  }

  setEntriesOpen(open: boolean) {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit(open ? 'teacher:reopen-entries' : 'teacher:close-entries', { sessionId });
  }

  finish() {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('teacher:finish-session', { sessionId });
  }

  selectWord(wordKey: string) {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('teacher:get-word-details', { sessionId, wordKey });
  }

  clearSelectedWord() {
    this.state.update((s) => ({ ...s, selectedWord: null }));
  }

  removeEntry(userId: string) {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('teacher:remove-entry', { sessionId, userId });
  }

  leave() {
    this.socketService.disconnect(WORD_CLOUD_NAMESPACE);
    this.socket = null;
    this.state.set({ ...INITIAL_STATE });
  }

  private applySnapshot(data: TeacherSnapshot) {
    this.state.update((s) => ({
      ...s,
      status: 'live',
      sessionStatus: data.status,
      sessionId: data.sessionId,
      pin: data.pin,
      title: data.title,
      prompt: data.prompt,
      appearance: data.appearance,
      cloud: data.cloud,
      submittedCount: data.cloud.totalEntries,
      finishedAtLabel: data.finishedAtLabel,
      error: undefined,
      errorCode: undefined,
    }));
  }

  private setupListeners() {
    const socket = this.socket;
    if (!socket) return;

    [
      'wc:error',
      'session:opened',
      'cloud:update-teacher',
      'cloud:word-details',
      'session:appearance',
      'session:state',
      'session:finished',
      'session:presence',
      'wc:resync',
      'connect',
      'connect_error',
      'disconnect',
    ].forEach((event) => socket.off(event));

    socket.on('wc:error', (err: WordCloudError) => {
      this.state.update((s) => ({ ...s, error: err.message, errorCode: err.code }));
    });

    // Un namespace inexistente o un CORS mal configurado moría solo en consola:
    // el proyector se quedaba esperando para siempre sin decir nada.
    socket.on('connect_error', (err: Error) => {
      this.state.update((s) => ({
        ...s,
        error: `No se pudo conectar en vivo: ${err.message}`,
        errorCode: 'INTERNAL',
      }));
    });

    socket.on('session:opened', (data: TeacherSnapshot) => this.applySnapshot(data));
    socket.on('wc:resync', (data: TeacherSnapshot) => this.applySnapshot(data));

    socket.on('cloud:update-teacher', (cloud: TeacherCloud) => {
      this.state.update((s) => {
        if (s.cloud && cloud.version < s.cloud.version) return s;

        // El panel abierto se refresca solo con los datos del último update:
        // si el docente está leyendo "innovación" y entra una explicación nueva,
        // la ve aparecer sin tener que volver a hacer clic.
        const selected = s.selectedWord
          ? cloud.words.find((w) => w.key === s.selectedWord!.wordKey)
          : undefined;

        return {
          ...s,
          cloud,
          submittedCount: cloud.totalEntries,
          selectedWord: selected
            ? {
                wordKey: selected.key,
                text: selected.text,
                count: selected.count,
                entries: selected.entries,
              }
            : s.selectedWord && !cloud.words.some((w) => w.key === s.selectedWord!.wordKey)
              ? null // la palabra desapareció (moderación): cerramos el panel
              : s.selectedWord,
        };
      });
    });

    socket.on('cloud:word-details', (details: WordDetails) => {
      this.state.update((s) => ({ ...s, selectedWord: details }));
    });

    socket.on('session:appearance', (data: { appearance: ResolvedAppearance }) => {
      this.state.update((s) => ({ ...s, appearance: data.appearance }));
    });

    socket.on('session:state', (data: { status: WordCloudStatus }) => {
      this.state.update((s) => ({ ...s, sessionStatus: data.status }));
    });

    socket.on(
      'session:finished',
      (data: { status: WordCloudStatus; finishedAtLabel: string | null }) => {
        this.state.update((s) => ({
          ...s,
          sessionStatus: data.status,
          finishedAtLabel: data.finishedAtLabel,
        }));
      },
    );

    socket.on('session:presence', (data: { onlineCount: number; submittedCount: number }) => {
      this.state.update((s) => ({
        ...s,
        onlineCount: data.onlineCount,
        submittedCount: data.submittedCount,
      }));
    });

    socket.on('connect', () => {
      if (this.state().sessionId) this.resync();
    });
  }
}
