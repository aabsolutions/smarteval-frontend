import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LiveQuizService, LiveQuizReport } from '../../services/live-quiz.service';
import { LiveQuiz } from '../../models/live-quiz.model';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-teacher-live-quizzes',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  template: `
    <section class="content">
      <div class="content-block">
        <div class="block-header">
          <app-breadcrumb [title]="'Live Quizzes'" [items]="['Docente']" [active_item]="'Live Quizzes'"></app-breadcrumb>
        </div>
        
        <div class="dashboard-container">
          <div class="header">
            <h1>Mis Quizzes Interactivos</h1>
            <button class="create-btn" (click)="createNewQuiz()">+ Nuevo Live Quiz</button>
          </div>

          <div class="quizzes-grid">
            <div class="quiz-card" *ngFor="let quiz of quizzes">
              <h3>{{ quiz.title }}</h3>
              <p class="status badge-{{quiz.status}}">{{ quiz.status | uppercase }}</p>
              <div class="meta">
                <span>{{ quiz.questions.length }} preguntas</span>
                <span *ngIf="quiz.pin" class="pin-badge">PIN: {{ quiz.pin }}</span>
              </div>
              
              <div class="actions">
                <button class="launch-btn" (click)="launchProjector(quiz._id)" *ngIf="quiz.status === 'draft'">
                  Lanzar Proyector
                </button>
                <button class="delete-btn" (click)="deleteQuiz(quiz._id)">
                  Eliminar
                </button>
                <button class="launch-btn" (click)="launchProjector(quiz._id)" *ngIf="quiz.status !== 'draft' && quiz.status !== 'finished'">
                  Reconectar Proyector
                </button>
                <button class="launch-btn" (click)="viewReport(quiz._id)" *ngIf="quiz.status === 'finished'">
                  Ver Reporte
                </button>
              </div>
            </div>

            <!-- Empty state -->
            <div class="empty-state" *ngIf="quizzes.length === 0">
              No tienes Live Quizzes todavía. ¡Crea uno para empezar a jugar!
            </div>
          </div>
        </div>
      </div>

      <!-- Modal de Reporte -->
      <div class="report-overlay" *ngIf="selectedReport" (click)="closeReport()">
        <div class="report-modal" (click)="$event.stopPropagation()">
          <div class="report-header">
            <h2>{{ selectedReport.title }}</h2>
            <button class="close-btn" (click)="closeReport()">✕</button>
          </div>

          <h3>Ranking Final</h3>
          <table class="report-table">
            <thead>
              <tr><th>#</th><th>Nombre</th><th>Puntaje</th><th>Correctas</th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let r of selectedReport.ranking">
                <td>{{ r.rank }}</td>
                <td>{{ r.name }}</td>
                <td>{{ r.totalScore }}</td>
                <td>{{ r.correctAnswers }} / {{ selectedReport.totalQuestions }}</td>
              </tr>
            </tbody>
          </table>

          <h3>Por Pregunta</h3>
          <table class="report-table">
            <thead>
              <tr><th>#</th><th>Enunciado</th><th>Aciertos</th><th>% Correcto</th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let q of selectedReport.perQuestion">
                <td>{{ q.questionIndex + 1 }}</td>
                <td>{{ q.statement }}</td>
                <td>{{ q.correctCount }} / {{ q.totalAnswered }}</td>
                <td>{{ q.correctPercentage | number:'1.0-0' }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .dashboard-container { padding: 15px 0; font-family: 'Inter', sans-serif; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
    .header h1 { font-size: 2rem; font-weight: 700; color: #1e293b; }
    .create-btn { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    .create-btn:hover { background: #2563eb; }
    
    .quizzes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
    .quiz-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
    .quiz-card h3 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
    
    .status { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; margin-bottom: 15px; }
    .badge-draft { background: #f1f5f9; color: #475569; }
    .badge-lobby { background: #dbeafe; color: #1d4ed8; }
    .badge-in-progress { background: #dcfce3; color: #15803d; }
    .badge-finished { background: #fef3c7; color: #b45309; }
    
    .meta { display: flex; justify-content: space-between; color: #64748b; font-size: 0.9rem; margin-bottom: 20px; }
    .pin-badge { font-weight: 700; color: #0f172a; }
    
    .actions { display: flex; gap: 10px; }
    .launch-btn { flex: 1; background: #10b981; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    .launch-btn:hover { background: #059669; }
    .delete-btn { flex: 0.3; background: #ef4444; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    .delete-btn:hover { background: #dc2626; }
    
    .empty-state { grid-column: 1 / -1; text-align: center; padding: 50px; color: #64748b; background: white; border-radius: 12px; border: 1px dashed #cbd5e1; }

    .report-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .report-modal { background: white; border-radius: 12px; padding: 30px; max-width: 700px; width: 90%; max-height: 85vh; overflow-y: auto; }
    .report-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .report-header h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; }
    .close-btn { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #64748b; }
    .report-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
    .report-table th, .report-table td { text-align: left; padding: 10px; border-bottom: 1px solid #e2e8f0; }
    .report-table th { color: #64748b; font-size: 0.85rem; text-transform: uppercase; }
  `]
})
export class TeacherLiveQuizzesComponent implements OnInit {
  public quizzes: LiveQuiz[] = [];
  public selectedReport: LiveQuizReport | null = null;
  private quizService = inject(LiveQuizService);
  private router = inject(Router);

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getTeacherQuizzes().subscribe(data => {
      this.quizzes = data;
    });
  }

  createNewQuiz() {
    this.router.navigate(['/teacher/live-quizzes/create']);
  }

  launchProjector(id: string) {
    const urlTree = this.router.createUrlTree(['/live-quiz/host', id]);
    let url = this.router.serializeUrl(urlTree);
    
    // Si la URL no empieza con # pero el proyecto usa HashRouting, se lo forzamos.
    if (!url.startsWith('#')) {
      url = '#' + url;
    }
    
    // Construimos la ruta absoluta usando el origin actual para que el navegador no se maree
    const absoluteUrl = window.location.origin + window.location.pathname + url;
    window.open(absoluteUrl, '_blank');
  }

  viewReport(id: string) {
    this.quizService.getReport(id).subscribe({
      next: (report) => this.selectedReport = report,
      error: () => alert('No se pudo cargar el reporte.')
    });
  }

  closeReport() {
    this.selectedReport = null;
  }

  deleteQuiz(id: string) {
    if (confirm('¿Estás seguro de eliminar este Live Quiz? Esta acción no se puede deshacer.')) {
      this.quizService.delete(id).subscribe({
        next: () => {
          this.loadQuizzes();
        },
        error: (err) => {
          console.error(err);
          alert('Hubo un error al intentar eliminar el quiz.');
        }
      });
    }
  }
}
