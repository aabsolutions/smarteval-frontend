import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-progress-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>Historial de Evaluaciones - {{data.student.name}}</h2>
    <mat-dialog-content>
      <div *ngIf="isLoading" class="p-4 text-center">
        Cargando historial...
      </div>
      <div *ngIf="!isLoading && history.length === 0" class="p-4 text-center text-muted">
        Este estudiante aún no ha rendido evaluaciones.
      </div>
      <table mat-table [dataSource]="history" *ngIf="!isLoading && history.length > 0" class="mat-cell advance-table w-100">
        
        <!-- Fecha Column -->
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef> Fecha </th>
          <td mat-cell *matCellDef="let row"> {{row.endTime | date:'short'}} </td>
        </ng-container>

        <!-- Evaluación Column -->
        <ng-container matColumnDef="assessment">
          <th mat-header-cell *matHeaderCellDef> Evaluación </th>
          <td mat-cell *matCellDef="let row"> {{row.assessmentId?.title}} </td>
        </ng-container>

        <!-- Calificación Column -->
        <ng-container matColumnDef="score">
          <th mat-header-cell *matHeaderCellDef> Calificación </th>
          <td mat-cell *matCellDef="let row">
            <span [class.text-success]="(row.score / row.maxScore) >= 0.7" [class.text-danger]="(row.score / row.maxScore) < 0.7" style="font-weight: bold;">
              {{row.score | number:'1.0-2'}}/{{row.maxScore | number:'1.0-2'}}
            </span>
            <small class="text-muted ms-1">({{(row.score / row.maxScore) * 100 | number:'1.0-0'}}%)</small>
          </td>
        </ng-container>

        <!-- Repaso Column -->
        <ng-container matColumnDef="flashcards">
          <th mat-header-cell *matHeaderCellDef> Repaso (Flashcards) </th>
          <td mat-cell *matCellDef="let row">
            <span *ngIf="row.usedFlashcards" class="badge badge-solid-green">
              Usado ({{ formatTime(row.flashcardsTimeSeconds) }})
            </span>
            <span *ngIf="!row.usedFlashcards" class="badge badge-solid-red">No usado</span>
          </td>
        </ng-container>

        <!-- PDF Column -->
        <ng-container matColumnDef="pdf">
          <th mat-header-cell *matHeaderCellDef> PDF </th>
          <td mat-cell *matCellDef="let row">
            <button mat-icon-button color="primary" (click)="downloadPdf(row)" [disabled]="isDownloading">
              <mat-icon>picture_as_pdf</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close color="primary">Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .badge { padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 500; }
    .badge-solid-green { background-color: #dcfce7; color: #166534; }
    .badge-solid-red { background-color: #fee2e2; color: #991b1b; }
    .w-100 { width: 100%; }
    .text-success { color: #16a34a !important; }
    .text-danger { color: #dc2626 !important; }
  `]
})
export class StudentProgressDialogComponent implements OnInit {
  private http = inject(HttpClient);
  
  isLoading = true;
  history: any[] = [];
  displayedColumns: string[] = ['date', 'assessment', 'score', 'flashcards', 'pdf'];
  isDownloading = false;

  constructor(
    public dialogRef: MatDialogRef<StudentProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student: any, userId: string }
  ) {}

  ngOnInit() {
    this.http.get<any[]>(`/api/assessment-attempts/teacher/student-history/${this.data.userId}`).subscribe({
      next: (data) => {
        this.history = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading history', err);
        this.isLoading = false;
      }
    });
  }

  formatTime(seconds: number): string {
    if (!seconds) return '0s';
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  downloadPdf(attempt: any) {
    // I'm deferring this implementation or I can just call the server endpoint if it exists
    // Actually, in the frontend, the pdf generation is handled on the client side using pdfmake
    // Since we are inside the teacher-groups, we don't have the assessment data fully populated
    // To generate the PDF correctly, we need all the questions and answers.
    // For now, I will use a placeholder or re-fetch it.
    this.isDownloading = true;
    this.http.get<any>(`/api/assessments/${attempt.assessmentId._id}`).subscribe({
      next: (assessmentData) => {
        this.http.get<any>(`/api/assessment-attempts/details/${attempt._id}`).subscribe({
          next: (attemptDetail) => {
            // Import and generate
            import('pdfmake/build/pdfmake').then(pdfMakeLib => {
              import('pdfmake/build/vfs_fonts').then(pdfFontsLib => {
                const pdfMake: any = (pdfMakeLib as any).default || pdfMakeLib;
                const pdfFonts: any = (pdfFontsLib as any).default || pdfFontsLib;
                pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

                const documentDefinition = this.buildPdfDef(attemptDetail, assessmentData);
                pdfMake.createPdf(documentDefinition).download(`Resultado_${this.data.student.name}_${assessmentData.title}.pdf`);
                this.isDownloading = false;
              });
            });
          },
          error: () => this.isDownloading = false
        });
      },
      error: () => this.isDownloading = false
    });
  }

  buildPdfDef(attempt: any, assessmentData: any) {
    const studentName = attempt.studentId?.name || this.data.student.name;
    const identifier = attempt.studentId?.username || this.data.student.identifier || 'N/A';
    
    // Calculate percentage
    const percentage = (attempt.score / attempt.maxScore) * 100;
    const isApproved = percentage >= 70;

    const teacherName = assessmentData.teacherId?.name || 'Docente';
    
    const formatDate = (dateString: string) => {
      if (!dateString) return 'N/A';
      const d = new Date(dateString);
      return d.toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
    };

    const evalStart = formatDate(assessmentData.startTime);
    const evalEnd = formatDate(assessmentData.endTime);
    const attemptStart = formatDate(attempt.startTime);
    const durationMs = new Date(attempt.endTime).getTime() - new Date(attempt.startTime).getTime();
    const duration = Math.round(durationMs / 60000);

    const content: any[] = [];

    // Header section
    content.push({
      table: {
        widths: ['*'],
        body: [
          [
            {
              text: 'REPORTE DE EVALUACIÓN',
              style: 'header',
              border: [false, false, false, false],
              fillColor: '#8082f2',
              color: 'white',
              margin: [20, 20, 20, 5],
              alignment: 'center'
            }
          ],
          [
            {
              text: assessmentData.title.toUpperCase(),
              style: 'subHeaderTitle',
              border: [false, false, false, false],
              fillColor: '#2563eb',
              color: '#eff6ff',
              margin: [20, 0, 20, 20],
              alignment: 'center'
            }
          ]
        ]
      },
      layout: 'noBorders',
      margin: [0, -20, 0, 20]
    });

    // Info section
    content.push({
      table: {
        widths: ['*', '*'],
        body: [
          [
            { text: 'ESTUDIANTE', style: 'tableHeader', border: [false, false, false, false] },
            { text: 'DOCENTE', style: 'tableHeader', alignment: 'right', border: [false, false, false, false] }
          ],
          [
            { text: `${studentName} (${identifier})`, style: 'infoText', border: [false, false, false, false] },
            { text: teacherName, style: 'infoText', alignment: 'right', border: [false, false, false, false] }
          ],
          [
            { text: 'PERIODO DE EVALUACIÓN', style: 'tableHeader', margin: [0, 15, 0, 0], border: [false, false, false, false] },
            { text: 'REGISTRO DE RESPUESTA', style: 'tableHeader', alignment: 'right', margin: [0, 15, 0, 0], border: [false, false, false, false] }
          ],
          [
            { text: `${evalStart} - ${evalEnd}`, style: 'infoText', border: [false, false, false, false] },
            { text: attemptStart, style: 'infoText', alignment: 'right', border: [false, false, false, false] }
          ]
        ]
      },
      layout: {
        hLineWidth: (i: number) => (i === 2) ? 0.5 : 0,
        vLineWidth: () => 0,
        hLineColor: () => '#e5e7eb'
      },
      margin: [0, 0, 0, 20]
    });

    // Results summary cards
    const formattedScore = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(attempt.score);
    content.push({
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [
            { text: 'PUNTAJE', style: 'cardTitle' },
            { text: 'PORCENTAJE', style: 'cardTitle' },
            { text: 'TIEMPO', style: 'cardTitle' },
            { text: 'ESTADO', style: 'cardTitle' }
          ],
          [
            { text: `${formattedScore} / ${attempt.maxScore}`, style: 'cardValue', color: isApproved ? '#16a34a' : '#dc2626' },
            { text: `${percentage.toFixed(0)}%`, style: 'cardValue', color: '#6b7280', fontSize: 10 },
            { text: `${duration} min`, style: 'cardValue' },
            { text: isApproved ? 'APROBADO' : 'REPROBADO', style: 'cardValue', color: isApproved ? '#16a34a' : '#dc2626' }
          ]
        ]
      },
      layout: {
        fillColor: (rowIndex: number) => rowIndex === 0 ? '#f3f4f6' : null,
        hLineWidth: (i: number, node: any) => (i === 0 || i === node.table.body.length) ? 0 : 1,
        vLineWidth: () => 0,
        hLineColor: () => '#e5e7eb',
        paddingLeft: () => 10,
        paddingRight: () => 10,
        paddingTop: () => 8,
        paddingBottom: () => 8
      },
      margin: [0, 0, 0, 30]
    });

    return {
      content: content,
      styles: {
        header: { fontSize: 20, bold: true, letterSpacing: 1 },
        subHeaderTitle: { fontSize: 14, letterSpacing: 0.5 },
        sectionTitle: { fontSize: 12, bold: true, color: '#1f2937', letterSpacing: 0.5 },
        tableHeader: { fontSize: 9, bold: true, color: '#6b7280' },
        infoText: { fontSize: 11, color: '#111827', bold: true },
        cardTitle: { fontSize: 9, bold: true, color: '#6b7280', alignment: 'center' },
        cardValue: { fontSize: 14, bold: true, color: '#111827', alignment: 'center' },
      },
      defaultStyle: {
        fontSize: 10,
        color: '#374151',
        lineHeight: 1.2
      },
      pageMargins: [40, 40, 40, 40]
    };
  }
}
