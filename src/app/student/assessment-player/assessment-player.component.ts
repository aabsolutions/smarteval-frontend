import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StudentAssessmentsService, AssessmentAttempt } from '../services/student-assessments.service';
import { AssessmentsService } from '../../teacher/assessments/assessments.service';
import { AntiCheatService } from '../services/anti-cheat.service';
import { AlertService } from '@core/services/alert.service';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-assessment-player',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatCardModule, MatButtonModule,
    MatRadioModule, MatCheckboxModule, MatInputModule, MatProgressBarModule, MatIconModule,
    MatSelectModule
  ],
  templateUrl: './assessment-player.component.html',
  styleUrls: ['./assessment-player.component.scss']
})
export class AssessmentPlayerComponent implements OnInit, OnDestroy {
  attemptId!: string;
  assessmentId!: string;
  attempt!: AssessmentAttempt;
  assessment: any;

  questions: any[] = [];
  currentIndex = 0;

  answersMap: { [questionId: string]: string[] } = {};

  timeRemaining = '00:00';
  private timerInterval: any;
  isSubmitting = false;
  private serverTimeOffset = 0;

  breadscrums = [
    {
      title: 'Rendición de Examen',
      items: ['Exámenes'],
      active: 'Rendir'
    }
  ];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentService = inject(StudentAssessmentsService);
  private assessmentsService = inject(AssessmentsService);
  private antiCheatService = inject(AntiCheatService);
  private alertService = inject(AlertService);

  ngOnInit() {
    this.assessmentId = this.route.snapshot.paramMap.get('id')!;
    this.attemptId = this.route.snapshot.paramMap.get('attemptId')!;

    this.assessmentsService.getAssessment(this.assessmentId).subscribe(ass => {
      this.assessment = ass;

      this.studentService.getAttemptStatus(this.assessmentId).subscribe((status: any) => {
        if (status.serverTime) {
          this.serverTimeOffset = new Date().getTime() - new Date(status.serverTime).getTime();
        }

        const attempt = status.history.find((h: any) => h._id === this.attemptId);
        if (!attempt) {
          alert('Intento no encontrado');
          this.router.navigate(['/student/assessments']);
          return;
        }

        if (attempt.status === 'completed') {
          this.router.navigate(['/student/assessments', this.assessmentId, 'results', this.attemptId]);
          return;
        }

        this.attempt = attempt;
        this.questions = attempt.questionsPulled;

        if (attempt.studentAnswers) {
          attempt.studentAnswers.forEach((sa: any) => {
            this.answersMap[sa.questionId] = [...sa.answers];
          });
        }

        if (this.assessment.antiCheat) {
          this.antiCheatService.requestFullscreen().then(() => {
            this.antiCheatService.start();
          });
        }

        this.startTimer();
      });
    });
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.assessment?.antiCheat) {
      this.antiCheatService.stop();
    }
  }

  startTimer() {
    const startTime = new Date(this.attempt.startTime).getTime();
    const durationMs = this.assessment.durationMinutes * 60 * 1000;
    const endTime = startTime + durationMs;

    const realNow = new Date().getTime() - this.serverTimeOffset;
    let distanceMs = endTime - realNow;
    
    if (distanceMs < 0) distanceMs = 0;
    let lastTick = performance.now();

    this.timerInterval = setInterval(() => {
      const currentTick = performance.now();
      distanceMs -= (currentTick - lastTick);
      lastTick = currentTick;

      if (distanceMs <= 0) {
        clearInterval(this.timerInterval);
        this.timeRemaining = '00:00';
        this.submit(true);
        return;
      }

      const totalSeconds = Math.ceil(distanceMs / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      this.timeRemaining = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  get singleAnswer() {
    const ans = this.answersMap[this.currentQuestion.questionId];
    return ans && ans.length > 0 ? ans[0] : '';
  }

  set singleAnswer(val: string) {
    this.answersMap[this.currentQuestion.questionId] = [val];
  }

  isMultipleChecked(opt: string) {
    const ans = this.answersMap[this.currentQuestion.questionId];
    return ans ? ans.includes(opt) : false;
  }

  toggleMultipleAnswer(opt: string, isChecked: boolean) {
    const qId = this.currentQuestion.questionId;
    if (!this.answersMap[qId]) this.answersMap[qId] = [];

    if (isChecked) {
      this.answersMap[qId].push(opt);
    } else {
      this.answersMap[qId] = this.answersMap[qId].filter(a => a !== opt);
    }
  }

  get fillBlankAnswer() {
    const ans = this.answersMap[this.currentQuestion.questionId];
    return ans && ans.length > 0 ? ans[0] : '';
  }

  set fillBlankAnswer(val: string) {
    this.answersMap[this.currentQuestion.questionId] = [val];
  }

  getMatchingAnswer(index: number) {
    const ans = this.answersMap[this.currentQuestion.questionId];
    return ans && ans.length > index ? ans[index] : '';
  }

  setMatchingAnswer(index: number, val: string) {
    const qId = this.currentQuestion.questionId;
    if (!this.answersMap[qId]) {
      this.answersMap[qId] = new Array(this.currentQuestion.options.length).fill('');
    }
    this.answersMap[qId][index] = val;
  }

  getShapeIcon(index: number): string {
    const icons = ['change_history', 'diamond', 'circle', 'crop_square', 'star', 'hexagon'];
    return icons[index % icons.length];
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  async submit(isTimeout: boolean = false) {
    if (this.isSubmitting) return;

    if (!isTimeout) {
      const confirmed = await this.alertService.confirmAction(
        'Entregar Examen',
        '¿Estás seguro que deseas entregar tu examen? Una vez enviado no podrás modificar tus respuestas.',
        'Sí, entregar'
      );
      if (!confirmed) return;
    }

    const answersArray = Object.keys(this.answersMap).map(qId => ({
      questionId: qId,
      answers: this.answersMap[qId]
    }));

    let antiCheatLog = undefined;
    if (this.assessment?.antiCheat) {
      antiCheatLog = this.antiCheatService.getLog();
      this.antiCheatService.stop();
    }

    this.isSubmitting = true;
    this.studentService.submitAttempt(this.attemptId, answersArray, antiCheatLog, isTimeout).subscribe({
      next: (res) => {
        clearInterval(this.timerInterval);
        this.alertService.successToast('Examen entregado con éxito');
        this.router.navigate(['/student/assessments', this.assessmentId, 'results', this.attemptId]);
      },
      error: (err) => {
        this.isSubmitting = false;
        const errMsg = typeof err === 'string' ? err : (err.error?.message || 'Ocurrió un error al enviar tus respuestas.');
        this.alertService.errorAlert('Error al enviar examen', errMsg);
      }
    });
  }
}
