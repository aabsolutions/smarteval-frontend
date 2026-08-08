import { Injectable, inject, signal } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { Socket } from 'socket.io-client';
import { LiveQuizQuestion } from '../models/live-quiz.model';

export interface TeacherQuizState {
  status: 'disconnected' | 'lobby' | 'question' | 'stats' | 'podium';
  quizId?: string;
  pin?: string;
  participants: any[];
  currentQuestion?: LiveQuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  timeLimit: number;
  secondsRemaining: number;
  answeredCount: number;
  lastStats?: any;
  podium?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherLiveQuizService {
  private socketService = inject(SocketService);
  private socket: Socket | null = null;

  public state = signal<TeacherQuizState>({
    status: 'disconnected',
    participants: [],
    questionIndex: 0,
    totalQuestions: 0,
    timeLimit: 0,
    secondsRemaining: 0,
    answeredCount: 0,
  });

  openLobby(quizId: string) {
    this.socket = this.socketService.connect('/live-quiz');
    this.setupListeners();
    this.state.update(s => ({ ...s, quizId, error: undefined }));
    
    if (this.socket.connected) {
      this.socket.emit('teacher:open-lobby', { quizId });
    } else {
      this.socket.once('connect', () => {
        this.socket!.emit('teacher:open-lobby', { quizId });
      });
    }
  }

  startQuiz() {
    const currentState = this.state();
    if (!this.socket || !currentState.quizId) return;
    this.socket.emit('teacher:start-quiz', { quizId: currentState.quizId });
  }

  nextQuestion() {
    const currentState = this.state();
    if (!this.socket || !currentState.quizId) return;
    this.socket.emit('teacher:next-question', { quizId: currentState.quizId });
  }

  showPodium() {
    const currentState = this.state();
    if (!this.socket || !currentState.quizId) return;
    this.socket.emit('teacher:show-podium', { quizId: currentState.quizId });
  }

  private setupListeners() {
    if (!this.socket) return;

    this.socket.on('quiz:error', (err) => {
      this.state.update(s => ({ ...s, error: err.message }));
    });

    this.socket.on('lobby:opened', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'lobby',
        pin: data.pin,
        participants: data.participants
      }));
    });

    this.socket.on('lobby:student-joined', (data) => {
      this.state.update(s => {
        const parts = [...s.participants, { userId: data.userId, name: data.name }];
        return { ...s, participants: parts };
      });
    });

    this.socket.on('quiz:question-projected', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'question',
        questionIndex: data.index,
        totalQuestions: data.total,
        currentQuestion: data.question,
        timeLimit: data.timeLimit,
        secondsRemaining: data.timeLimit,
        answeredCount: 0,
        lastStats: undefined
      }));
    });

    this.socket.on('quiz:countdown', (data) => {
      this.state.update(s => ({ ...s, secondsRemaining: data.secondsRemaining }));
    });

    this.socket.on('quiz:answer-received', (data) => {
      this.state.update(s => ({ ...s, answeredCount: data.answeredCount }));
    });

    this.socket.on('quiz:question-results', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'stats',
        lastStats: data
      }));
    });

    this.socket.on('quiz:podium', (data) => {
      this.state.update(s => ({
        ...s,
        status: 'podium',
        podium: data
      }));
    });
  }

  disconnect() {
    this.socketService.disconnect();
    this.state.set({
      status: 'disconnected',
      participants: [],
      questionIndex: 0,
      totalQuestions: 0,
      timeLimit: 0,
      secondsRemaining: 0,
      answeredCount: 0,
    });
  }
}
