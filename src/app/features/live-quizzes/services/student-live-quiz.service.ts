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
  status: 'disconnected' | 'lobby' | 'question' | 'answer-sent' | 'result' | 'podium';
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

  join(pin: string) {
    this.socket = this.socketService.connect('/live-quiz');
    
    this.setupListeners();
    
    // Unirse a la sala con el pin
    this.socket.emit('student:join', { pin });
  }

  private setupListeners() {
    if (!this.socket) return;

    this.socket.on('quiz:error', (err) => {
      this.state.update(s => ({ ...s, error: err.message }));
      this.socketService.disconnect();
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
      this.socketService.disconnect();
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
    this.socketService.disconnect();
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
