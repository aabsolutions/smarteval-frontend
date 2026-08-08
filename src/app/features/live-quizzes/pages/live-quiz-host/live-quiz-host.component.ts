import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeacherLiveQuizService } from '../../services/teacher-live-quiz.service';

@Component({
  selector: 'app-live-quiz-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-quiz-host.component.html',
  styleUrls: ['./live-quiz-host.component.css']
})
export class LiveQuizHostComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  public hostService = inject(TeacherLiveQuizService);

  get state() {
    return this.hostService.state();
  }

  ngOnInit() {
    // Tomar el ID del quiz de la URL (ej: /teacher/live-quiz/host/60a12b...)
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) {
      this.openLobby(quizId);
    }
  }

  openLobby(quizId: string) {
    this.hostService.openLobby(quizId);
  }

  startQuiz() {
    this.hostService.startQuiz();
  }

  nextQuestion() {
    this.hostService.nextQuestion();
  }

  showPodium() {
    this.hostService.showPodium();
  }

  ngOnDestroy() {
    this.hostService.disconnect();
  }

  // Helpers para la vista
  getAnswerPercentage(option: string): number {
    const stats = this.state.lastStats?.distribution;
    if (!stats || !stats[option]) return 0;
    return stats[option].percentage;
  }

  getAnswerCount(option: string): number {
    const stats = this.state.lastStats?.distribution;
    if (!stats || !stats[option]) return 0;
    return stats[option].count;
  }

  isOptionCorrect(option: string): boolean {
    const correct = this.state.lastStats?.correctAnswer;
    return correct ? correct.includes(option) : false;
  }
}
