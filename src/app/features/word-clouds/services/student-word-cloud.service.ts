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
  status: 'disconnected' | 'joining' | 'joined' | 'removed' | 'auth-expired';
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

  /** Último PIN tipeado: hace falta para reintentar si la sesión expiró
   *  antes de que el alumno llegara a entrar (todavía no hay sessionId). */
  private lastPin = '';

  join(pin: string) {
    this.lastPin = pin;
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

  /**
   * El gateway rechazó el handshake. Para cuando llega acá, SocketService ya
   * intentó renovar el token, así que el refresh_token también murió.
   *
   * Cortamos el socket a mano: socket.io reintenta la conexión de por vida y el
   * gateway la rechaza cada vez (word-cloud.gateway.ts:150 emite y desconecta a
   * los 100ms), o sea un loop de errores hasta que el alumno cierre la pestaña.
   * No lo deslogueamos: si estaba escribiendo su palabra, un logout sorpresa se
   * la come. Le mostramos el estado y que decida él.
   */
  private handleAuthExpired() {
    this.socketService.disconnect(WORD_CLOUD_NAMESPACE);
    this.socket = null;
    this.state.update((s) => ({
      ...s,
      status: 'auth-expired',
      saving: false,
      errorCode: 'AUTH_REQUIRED',
      error: 'Tu sesión expiró. Tocá "Reintentar" para volver a conectarte.',
    }));
  }

  /** Reintenta tras una sesión expirada. Si el alumno ya había entrado usamos
   *  el sessionId; si se cayó antes de entrar, el PIN que tipeó. */
  retryAfterAuthError() {
    const sessionId = this.state().sessionId;

    if (!sessionId) {
      if (this.lastPin) this.join(this.lastPin);
      return;
    }

    this.state.update((s) => ({
      ...s,
      status: 'joining',
      error: undefined,
      errorCode: undefined,
    }));

    this.socket = this.socketService.connect(WORD_CLOUD_NAMESPACE);
    this.setupListeners();
    // El handler de 'connect' ya dispara rejoin(); si el socket vino conectado
    // de entrada ese evento no llega y hay que pedirlo a mano.
    if (this.socket.connected) this.rejoin();
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
      if (err.code === 'AUTH_REQUIRED') {
        this.handleAuthExpired();
        return;
      }

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
