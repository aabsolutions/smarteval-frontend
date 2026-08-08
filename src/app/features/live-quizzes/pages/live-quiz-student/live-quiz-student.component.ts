import { Component, inject, OnDestroy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentLiveQuizService } from '../../services/student-live-quiz.service';

interface Particle {
  style: string;
}

@Component({
  selector: 'app-live-quiz-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-quiz-student.component.html',
  styleUrls: ['./live-quiz-student.component.css']
})
export class LiveQuizStudentComponent implements OnDestroy {
  public quizService = inject(StudentLiveQuizService);
  
  public pinInput = signal<string>('');
  private responseStartTime = 0;
  
  public selectedOptions = signal<string[]>([]);
  private lastQuestionIndex = -1;

  // Partículas para efectos visuales
  public confettiParticles: Particle[] = [];
  public rainParticles: Particle[] = [];
  public fireParticles: Particle[] = [];

  constructor() {
    // Reset cuando llega nueva pregunta
    effect(() => {
      const state = this.state;
      if (state.status === 'question' && state.questionIndex !== this.lastQuestionIndex) {
        this.lastQuestionIndex = state.questionIndex;
        this.responseStartTime = Date.now();
        this.selectedOptions.set([]);
        this.confettiParticles = [];
        this.rainParticles = [];
        this.fireParticles = [];
      }
    }, { allowSignalWrites: true });

    // Generar partículas cuando llega el resultado
    effect(() => {
      const state = this.state;
      if (state.status === 'result' && state.lastResult) {
        if (state.lastResult.isCorrect) {
          this.generateConfetti();
        } else {
          this.generateRain();
        }
        if (state.lastResult.isCorrect && state.lastResult.streak >= 2) {
          this.generateFire(state.lastResult.streak);
        }
      }
    });
  }

  get state() {
    return this.quizService.state();
  }

  get streakLevel(): string {
    const streak = this.state.lastResult?.streak || 0;
    if (streak >= 6) return 'inferno';
    if (streak >= 4) return 'blaze';
    if (streak >= 2) return 'warm';
    return '';
  }

  joinQuiz() {
    if (this.pinInput().trim().length < 5) return;
    this.quizService.join(this.pinInput().trim());
  }

  toggleOption(option: string) {
    if (this.state.hasAnswered) return;
    const current = this.selectedOptions();
    if (current.includes(option)) {
      this.selectedOptions.set(current.filter(o => o !== option));
    } else {
      this.selectedOptions.set([...current, option]);
    }
  }

  submitSingle(option: string) {
    if (this.state.hasAnswered) return;
    const responseTime = Date.now() - this.responseStartTime;
    this.quizService.submitAnswer([option], responseTime);
  }

  submitMultiple() {
    if (this.selectedOptions().length === 0 || this.state.hasAnswered) return;
    const responseTime = Date.now() - this.responseStartTime;
    this.quizService.submitAnswer(this.selectedOptions(), responseTime);
  }

  private generateConfetti() {
    const colors = ['#22c55e', '#fbbf24', '#f43f5e', '#3b82f6', '#a855f7', '#ec4899', '#14b8a6'];
    this.confettiParticles = Array.from({ length: 60 }, () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 0.6;
      const duration = 1.5 + Math.random() * 2;
      const size = 6 + Math.random() * 10;
      const rotation = Math.random() * 360;
      const drift = -30 + Math.random() * 60;
      return {
        style: `left:${left}%;width:${size}px;height:${size * 0.4}px;background:${color};animation-delay:${delay}s;animation-duration:${duration}s;--rotation:${rotation}deg;--drift:${drift}px`
      };
    });
  }

  private generateRain() {
    this.rainParticles = Array.from({ length: 30 }, () => {
      const left = Math.random() * 100;
      const delay = Math.random() * 1;
      const duration = 0.8 + Math.random() * 0.6;
      const opacity = 0.3 + Math.random() * 0.5;
      return {
        style: `left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity}`
      };
    });
  }

  private generateFire(streak: number) {
    const count = streak >= 6 ? 40 : streak >= 4 ? 25 : 12;
    this.fireParticles = Array.from({ length: count }, () => {
      const left = 10 + Math.random() * 80;
      const delay = Math.random() * 1;
      const duration = 1 + Math.random() * 1.5;
      const size = 4 + Math.random() * (streak >= 6 ? 12 : streak >= 4 ? 8 : 5);
      const hue = Math.random() > 0.5 ? '25' : '40';
      return {
        style: `left:${left}%;bottom:0;animation-delay:${delay}s;animation-duration:${duration}s;width:${size}px;height:${size}px;background:hsl(${hue},100%,${50 + Math.random() * 20}%)`
      };
    });
  }

  ngOnDestroy() {
    this.quizService.leave();
  }
}
