import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-paper-grading',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    BreadcrumbComponent
  ],
  templateUrl: './paper-grading.component.html',
  styleUrls: ['./paper-grading.component.scss']
})
export class PaperGradingComponent implements OnInit {
  breadscrums = [
    {
      title: 'Calificación Papel',
      items: ['Profesor', 'Exámenes'],
      active: 'Transcribir Respuestas'
    }
  ];

  attemptId: string = '';
  attemptData: any = null;
  studentAnswers: { [questionId: string]: string[] } = {};

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private alertService = inject(AlertService);

  ngOnInit() {
    this.attemptId = this.route.snapshot.paramMap.get('attemptId') || '';
    if (this.attemptId) {
      this.loadAttempt();
    } else {
      this.promptForAttemptId();
    }
  }

  promptForAttemptId() {
    // If not passed in URL, maybe we can ask? But we route with attemptId anyway.
  }

  loadAttempt() {
    this.http.get(`/api/assessment-attempts/paper-attempt/${this.attemptId}`).subscribe({
      next: (data: any) => {
        this.attemptData = data;
        // Initialize answers
        this.attemptData.questionsPulled.forEach((q: any) => {
          this.studentAnswers[q.questionId] = [];
          if (q.type === 'matching') {
            this.studentAnswers[q.questionId] = new Array(q.options.length).fill('');
          }
        });
      },
      error: (err) => {
        this.alertService.errorAlert('Error', 'No se encontró el intento o ya fue calificado.');
        this.router.navigate(['/teacher/assessments']);
      }
    });
  }

  onSingleChoiceChange(qId: string, value: string) {
    this.studentAnswers[qId] = [value];
  }

  onMultipleChoiceChange(qId: string, value: string, isChecked: boolean) {
    const current = this.studentAnswers[qId] || [];
    if (isChecked) {
      current.push(value);
    } else {
      const idx = current.indexOf(value);
      if (idx > -1) current.splice(idx, 1);
    }
    this.studentAnswers[qId] = current;
  }

  onMatchingChange(qId: string, index: number, matchValue: string) {
    if (!this.studentAnswers[qId]) {
      this.studentAnswers[qId] = [];
    }
    this.studentAnswers[qId][index] = matchValue;
  }

  submitGrades() {
    this.alertService.confirmAction('¿Confirmar Calificación?', 'Una vez enviadas las respuestas, el sistema calculará la nota y no podrás editarla.').then(confirmed => {
      if (confirmed) {
        const payload = {
          studentId: this.attemptData.studentId._id,
          answers: Object.keys(this.studentAnswers).map(qId => ({
            questionId: qId,
            answers: this.studentAnswers[qId]
          }))
        };

        this.http.post(`/api/assessment-attempts/submit-paper/${this.attemptId}`, payload).subscribe({
          next: () => {
            this.alertService.successToast('Examen calificado correctamente');
            this.router.navigate(['/teacher/assessments', this.attemptData.assessmentId._id, 'results']);
          },
          error: (err) => {
            this.alertService.errorAlert('Error', 'No se pudo guardar la calificación.');
          }
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/teacher/assessments']);
  }
}
