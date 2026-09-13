import { Injectable, inject, signal } from '@angular/core';
import { Socket } from 'socket.io-client';
import { SocketService } from '../../../core/services/socket.service';
import {
  MyEntry,
  PublicCloud,
  ResolvedAppearance,
  StudentSnapshot,
  WordCloudError,
  WordCloudStatus,
  WORD_CLOUD_NAMESPACE,
} from '../models/word-cloud.model';

export interface StudentWordCloudState {
  status: 'disconnected' | 'joining' | 'joined' | 'removed';
  sessionStatus: WordCloudStatus | null;
  sessionId?: string;
  title?: string;
  prompt?: string;
  appearance?: ResolvedAppearance;
  cloud?: PublicCloud;
  myEntry: MyEntry | null;
  explanationRequired: boolean;
  canSubmit: boolean;
  onlineCount: number;
  submittedCount: number;
  finishedAtLabel: string | null;
  saving: boolean;
  error?: string;
  errorCode?: WordCloudError['code'];
}

const INITIAL_STATE: StudentWordCloudState = {
  status: 'disconnected',
  sessionStatus: null,
  myEntry: null,
  explanationRequired: false,
  canSubmit: false,
  onlineCount: 0,
  submittedCount: 0,
  finishedAtLabel: null,
  saving: false,
};

/**
 * Estado del alumno. Solo consume payloads PÚBLICOS: este servicio no conoce
 * `cloud:update-teacher` ni `cloud:word-details`, y no debería aprenderlos nunca.
 */
@Injectable({ providedIn: 'root' })
export class StudentWordCloudService {
  private socketService = inject(SocketService);
  private socket: Socket | null = null;

  public state = signal<StudentWordCloudState>({ ...INITIAL_STATE });

  join(pin: string) {
    this.state.set({ ...INITIAL_STATE, status: 'joining' });
    this.socket = this.socketService.connect(WORD_CLOUD_NAMESPACE);
    this.setupListeners();
    this.socket.emit('student:join', { pin });
  }

  submit(word: string, explanation: string) {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;

    this.state.update((s) => ({ ...s, saving: true, error: undefined }));
    this.socket.emit('student:submit', { sessionId, word, explanation });
  }

  /** Reconexión tras perder red o volver del background. */
  rejoin() {
    const sessionId = this.state().sessionId;
    if (!this.socket || !sessionId) return;
    this.socket.emit('student:rejoin', { sessionId });
  }

  leave() {
    const sessionId = this.state().sessionId;
    if (this.socket && sessionId) {
      this.socket.emit('student:leave', { sessionId });
    }
    this.socketService.disconnect(WORD_CLOUD_NAMESPACE);
    this.socket = null;
    this.state.set({ ...INITIAL_STATE });
  }

  private applySnapshot(data: StudentSnapshot) {
    this.state.update((s) => ({
      ...s,
      status: 'joined',
      sessionStatus: data.status,
      sessionId: data.sessionId,
      title: data.title,
      prompt: data.prompt,
      appearance: data.appearance,
      cloud: data.cloud,
      myEntry: data.myEntry,
      explanationRequired: data.explanationRequired,
      canSubmit: data.canSubmit,
      finishedAtLabel: data.finishedAtLabel,
      saving: false,
      error: undefined,
      errorCode: undefined,
    }));
  }

  private setupListeners() {
    const socket = this.socket;
    if (!socket) return;

    // off() antes de on(): un rejoin no debe duplicar handlers
    [
      'wc:error',
      'student:joined',
      'student:entry-saved',
      'cloud:update',
      'session:appearance',
      'session:state',
      'session:finished',
      'session:presence',
      'wc:resync',
      'wc:removed',
      'connect',
    ].forEach((event) => socket.off(event));

    socket.on('wc:error', (err: WordCloudError) => {
      this.state.update((s) => ({
        ...s,
        saving: false,
        error: err.message,
        errorCode: err.code,
      }));
    });

    socket.on('student:joined', (data: StudentSnapshot) => this.applySnapshot(data));
    socket.on('wc:resync', (data: StudentSnapshot) => this.applySnapshot(data));

    socket.on('student:entry-saved', (entry: MyEntry) => {
      this.state.update((s) => ({ ...s, myEntry: entry, saving: false, error: undefined }));
    });

    socket.on('cloud:update', (cloud: PublicCloud) => {
      this.state.update((s) => {
        // Payload viejo que llegó fuera de orden: lo descartamos
        if (s.cloud && cloud.version < s.cloud.version) return s;
        return { ...s, cloud, submittedCount: cloud.totalEntries };
      });
    });

    socket.on('session:appearance', (data: { appearance: ResolvedAppearance }) => {
      this.state.update((s) => ({ ...s, appearance: data.appearance }));
    });

    socket.on('session:state', (data: { status: WordCloudStatus }) => {
      this.state.update((s) => ({
        ...s,
        sessionStatus: data.status,
        canSubmit: data.status === 'open',
      }));
    });

    socket.on(
      'session:finished',
      (data: { status: WordCloudStatus; finishedAtLabel: string | null }) => {
        this.state.update((s) => ({
          ...s,
          sessionStatus: data.status,
          canSubmit: false,
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

    socket.on('wc:removed', (data: { message: string }) => {
      this.state.update((s) => ({ ...s, status: 'removed', myEntry: null, error: data.message }));
    });

    // El socket se cayó y volvió: pedimos el estado completo, no asumimos nada
    socket.on('connect', () => {
      if (this.state().sessionId) this.rejoin();
    });
  }
}
