import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-my-results',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    MatIconModule, 
    MatTooltipModule,
    BreadcrumbComponent
  ],
  template: `
    <section class="content">
      <div class="content-block">
        <div class="block-header">
          <app-breadcrumb title="Mis Resultados" [items]="['Estudiante']" active_item="Resultados"></app-breadcrumb>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="materialTableHeader">
                <div class="left">
                  <ul class="header-buttons-left ms-0">
                    <li class="tbl-title">
                      <h2>Historial de Evaluaciones</h2>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="body overflow-auto">
                <div *ngIf="isLoading" class="p-4 text-center">
                  Cargando historial...
                </div>
                <div *ngIf="!isLoading && dataSource.data.length === 0" class="no-results">
                  Aún no tienes evaluaciones rendidas.
                </div>
                <div class="responsive_table" *ngIf="!isLoading && dataSource.data.length > 0">
                  <table mat-table [dataSource]="dataSource" class="mat-cell advance-table w-100">
                    
                    <!-- Fecha Column -->
                    <ng-container matColumnDef="date">
                      <th mat-header-cell *matHeaderCellDef> Fecha </th>
                      <td mat-cell *matCellDef="let row"> {{row.endTime | date:'medium'}} </td>
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
                        <span [class.text-success]="(row.score / row.maxScore) >= 0.7" [class.text-danger]="(row.score / row.maxScore) < 0.7" style="font-weight:bold;">
                          {{row.score | number:'1.0-2'}}/{{row.maxScore | number:'1.0-2'}} pts
                        </span>
                        <small class="text-muted ms-1">({{(row.score / row.maxScore) * 100 | number:'1.0-0'}}%)</small>
                      </td>
                    </ng-container>

                    <!-- Repaso Column -->
                    <ng-container matColumnDef="flashcards">
                      <th mat-header-cell *matHeaderCellDef> Repaso </th>
                      <td mat-cell *matCellDef="let row">
                        <span *ngIf="row.usedFlashcards" class="badge badge-solid-green">
                          Usado ({{ formatTime(row.flashcardsTimeSeconds) }})
                        </span>
                        <span *ngIf="!row.usedFlashcards" class="badge badge-solid-red">No usado</span>
                      </td>
                    </ng-container>

                    <!-- PDF Column -->
                    <ng-container matColumnDef="pdf">
                      <th mat-header-cell *matHeaderCellDef> Certificado </th>
                      <td mat-cell *matCellDef="let row">
                        <button mat-icon-button color="primary" matTooltip="Descargar Certificado" (click)="downloadPdf(row)" [disabled]="isDownloading">
                          <mat-icon>picture_as_pdf</mat-icon>
                        </button>
                      </td>
                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .badge { padding: 6px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .badge-solid-green { background-color: #dcfce7; color: #166534; }
    .badge-solid-red { background-color: #fee2e2; color: #991b1b; }
    .w-100 { width: 100%; }
    .text-success { color: #16a34a !important; }
    .text-danger { color: #dc2626 !important; }
    .no-results { text-align: center; padding: 2rem; color: #6b7280; font-style: italic; }
  `]
})
export class MyResultsComponent implements OnInit {
  private http = inject(HttpClient);
  
  isLoading = true;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['date', 'assessment', 'score', 'flashcards', 'pdf'];
  isDownloading = false;

  ngOnInit() {
    this.http.get<any[]>('/api/assessment-attempts/student/history').subscribe({
      next: (data) => {
        this.dataSource.data = data;
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
    this.isDownloading = true;
    this.http.get<any>(`/api/assessments/${attempt.assessmentId._id}`).subscribe({
      next: (assessmentData) => {
        this.http.get<any>(`/api/assessment-attempts/details/${attempt._id}`).subscribe({
          next: (attemptDetail) => {
            import('pdfmake/build/pdfmake').then(pdfMakeLib => {
              import('pdfmake/build/vfs_fonts').then(pdfFontsLib => {
                const pdfMake: any = (pdfMakeLib as any).default || pdfMakeLib;
                const pdfFonts: any = (pdfFontsLib as any).default || pdfFontsLib;
                pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

                const documentDefinition = this.buildPdfDef(attemptDetail, assessmentData);
                pdfMake.createPdf(documentDefinition).download(`Mis_Resultados_${assessmentData.title}.pdf`);
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
    const studentName = attempt.studentId?.name || 'Estudiante';
    const identifier = attempt.studentId?.username || 'N/A';
    
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
