import { Injectable, inject, signal } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { Socket } from 'socket.io-client';
import { LiveQuizQuestion } from '../models/live-quiz.model';

export interface QuizResultData {
  isCorrect: boolean;
  pointsAwarded: number;
  currentRank: number;
  totalScore: number;
  streak: number;
  timedOut: boolean;
}

export interface QuizState {
  status: 'disconnected' | 'lobby' | 'question' | 'answer-sent' | 'result' | 'podium' | 'auth-expired';
  quizId?: string;
  pin?: string;
  title?: string;
  participantCount: number;
  currentQuestion?: LiveQuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  timeLimit: number;
  secondsRemaining: number;
  hasAnswered: boolean;
  lastResult?: QuizResultData;
  podium?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentLiveQuizService {
  private socketService = inject(SocketService);
  private socket: Socket | null = null;

  // Estado reactivo usando Signals de Angular 17+
  public state = signal<QuizState>({
    status: 'disconnected',
    participantCount: 0,
    questionIndex: 0,
    totalQuestions: 0,
    timeLimit: 0,
    secondsRemaining: 0,
    hasAnswered: false,
  });

  /** Último PIN tipeado: hace falta para reintentar si la sesión expiró antes
   *  de que el alumno llegara a entrar a la sala (todavía no hay quizId). */
  private lastPin = '';

  join(pin: string) {
    this.lastPin = pin;
    this.socket = this.socketService.connect('/live-quiz');
    
    this.setupListeners();
    
    // Unirse a la sala con el pin
    this.socket.emit('student:join', { pin });
  }

  /**
   * El gateway rechazó el handshake. Para cuando llega acá, SocketService ya
   * intentó renovar el token, así que el refresh_token también murió.
   *
   * No deslogueamos: en medio de una pregunta con tiempo, un logout sorpresa es
   * peor que el error. Le mostramos el estado y que decida él.
   */
  private handleAuthExpired() {
    this.socketService.disconnect('/live-quiz');
    this.socket = null;
    this.state.update(s => ({
      ...s,
      status: 'auth-expired',
      error: 'Tu sesión expiró. Tocá "Reintentar" para volver a conectarte.',
    }));
  }

  /** Reintenta tras una sesión expirada. Si ya estaba en la sala usamos el
   *  quizId; si se cayó antes de entrar, el PIN que tipeó. */
  retryAfterAuthError() {
    const quizId = this.state().quizId;

    if (!quizId) {
      if (this.lastPin) this.join(this.lastPin);
      return;
    }

    // El handler de 'connect' dispara el rejoin, pero solo si el status no es
    // 'disconnected'. Lo devolvemos a 'lobby' como estado neutro de "conectado
    // a la sala"; el quiz:resync que responde el server corrige al estado real.
    this.state.update(s => ({ ...s, status: 'lobby', error: undefined }));

    this.socket = this.socketService.connect('/live-quiz');
    this.setupListeners();

    if (this.socket.connected) {
      this.socket.emit('student:rejoin', { quizId });
    }
  }

  private setupListeners() {
    if (!this.socket) return;

    this.socket.on('quiz:error', (err) => {
      if (err?.code === 'AUTH_REQUIRED') {
        this.handleAuthExpired();
        return;
      }

      // NO desconectamos. De todos los quiz:error del gateway, el ÚNICO que
      // cierra el socket del lado del server es AUTH_REQUIRED
      // (live-quiz.gateway.ts:73); el resto son `return client.emit(...)` y
      // dejan la conexión viva a propósito. El cliente estaba matando el socket
      // ante cualquier error: un PIN mal tipeado te dejaba sin conexión y sin
      // forma de reintentar salvo recargando la página.
      //
      // Todos los quiz:error que ve el alumno vienen de student:join o de
      // student:rejoin — o sea, siempre significan "no estás en ninguna sala".
      // Por eso bajamos a 'disconnected': es el único estado cuya vista muestra
      // state.error y ofrece el PIN. Sin esto, un rejoin fallido ("La sala ya no
      // existe") dejaba al alumno mirando un lobby congelado, sin mensaje.
      this.state.update(s => ({ ...s, status: 'disconnected', error: err.message }));
    });

    this.socket.on('lobby:joined', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'lobby',
        quizId: data.quizId,
        title: data.quizTitle,
        participantCount: data.participantCount,
        error: undefined
      }));
    });

    this.socket.on('lobby:student-joined', (data) => {
      this.state.update(s => ({ ...s, participantCount: data.totalParticipants }));
    });

    this.socket.on('quiz:question', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'question',
        questionIndex: data.index,
        totalQuestions: data.total,
        currentQuestion: data.question,
        timeLimit: data.timeLimit,
        secondsRemaining: data.timeLimit,
        hasAnswered: false,
        lastResult: undefined,
      }));
    });

    this.socket.on('quiz:countdown', (data) => {
      this.state.update(s => ({ ...s, secondsRemaining: data.secondsRemaining }));
    });

    // El backend ahora envía quiz:your-result INMEDIATAMENTE cuando el estudiante responde,
    // o con timedOut: true cuando expira el timer sin respuesta
    this.socket.on('quiz:your-result', (data: QuizResultData) => {
      this.state.update(s => ({
        ...s,
        status: 'result',
        lastResult: {
          isCorrect: data.isCorrect,
          pointsAwarded: data.pointsAwarded,
          currentRank: data.currentRank,
          totalScore: data.totalScore,
          streak: data.streak,
          timedOut: data.timedOut || false,
        }
      }));
    });

    this.socket.on('quiz:final-result', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'podium',
        podium: data
      }));
    });

    this.socket.on('quiz:kicked', (data) => {
      this.state.update(s => ({ ...s, status: 'disconnected', error: data.message || 'Fuiste expulsado de la sala' }));
      this.socketService.disconnect('/live-quiz');
    });

    // Reconexión: si el socket cae (WiFi, tab en background) y vuelve a conectar,
    // el server no recuerda la room -> pedimos resync en vez de arrancar de cero.
    this.socket.on('connect', () => {
      const s = this.state();
      if (s.quizId && s.status !== 'disconnected') {
        this.socket!.emit('student:rejoin', { quizId: s.quizId });
      }
    });

    this.socket.on('quiz:resync', (data: any) => {
      switch (data.status) {
        case 'lobby':
          this.state.update(s => ({
            ...s,
            status: 'lobby',
            quizId: data.quizId,
            title: data.quizTitle,
            participantCount: data.participantCount,
          }));
          break;
        case 'answer-sent':
          this.state.update(s => ({ ...s, status: 'answer-sent', hasAnswered: true }));
          break;
        case 'question':
          this.state.update(s => ({
            ...s,
            status: 'question',
            questionIndex: data.index,
            totalQuestions: data.total,
            currentQuestion: data.question,
            timeLimit: data.timeLimit,
            secondsRemaining: data.secondsRemaining,
            hasAnswered: false,
          }));
          break;
        case 'podium':
          this.state.update(s => ({ ...s, status: 'podium', podium: data }));
          break;
      }
    });
  }

  submitAnswer(answers: string[]) {
    if (!this.socket) return;

    const currentState = this.state();
    if (currentState.status !== 'question' || !currentState.quizId || currentState.hasAnswered) return;

    this.socket.emit('student:answer', {
      quizId: currentState.quizId,
      questionIndex: currentState.questionIndex,
      answers,
    });

    // Transicionar inmediatamente a "respuesta enviada" sin esperar al resto
    this.state.update(s => ({ ...s, status: 'answer-sent', hasAnswered: true }));
  }

  leave() {
    this.socketService.disconnect('/live-quiz');
    this.state.set({
      status: 'disconnected',
      participantCount: 0,
      questionIndex: 0,
      totalQuestions: 0,
      timeLimit: 0,
      secondsRemaining: 0,
      hasAnswered: false,
    });
  }
}
