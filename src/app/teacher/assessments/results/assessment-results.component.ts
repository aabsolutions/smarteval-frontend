import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, formatNumber } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { forkJoin } from 'rxjs';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { AssessmentsService } from '../assessments.service';
import Swal from 'sweetalert2';
import * as pdfMakeLib from 'pdfmake/build/pdfmake';
import * as pdfFontsLib from 'pdfmake/build/vfs_fonts';

const pdfMake: any = (pdfMakeLib as any).default || pdfMakeLib;
const pdfFonts: any = (pdfFontsLib as any).default || pdfFontsLib;

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;


@Component({
  selector: 'app-assessment-results',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule,
    BreadcrumbComponent
  ],
  templateUrl: './assessment-results.component.html',
  styleUrls: ['./assessment-results.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class AssessmentResultsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Resultados',
      items: ['Exámenes'],
      active: 'Consolidado',
    },
  ];

  assessmentId: string = '';
  resultsData: any = null;
  analyticsData: any[] = [];

  selection = new SelectionModel<any>(true, []);

  displayedColumns: string[] = ['select', 'studentName', 'identifier', 'group', 'attemptNumber', 'score', 'percentage', 'endTime', 'duration', 'status', 'warnings'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'actions', 'expand'];
  expandedElement: any | null = null;
  dataSource = new MatTableDataSource<any>([]);

  archivedDataSource = new MatTableDataSource<any>([]);
  archivedColumns: string[] = ['studentName', 'identifier', 'group', 'score', 'percentage', 'endTime'];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private assessmentsService = inject(AssessmentsService);

  ngOnInit(): void {
    this.assessmentId = this.route.snapshot.paramMap.get('id') || '';
    if (this.assessmentId) {
      this.loadData();
    }
  }

  loadData() {
    this.assessmentsService.getResults(this.assessmentId).subscribe({
      next: (data) => {
        this.resultsData = data;
        this.dataSource.data = data.results;

        if (this.resultsData.assessment.isSimulator) {
          this.displayedColumns = ['select', 'studentName', 'identifier', 'group', 'email', 'attemptsCount'];
          this.columnsToDisplayWithExpand = [...this.displayedColumns];
        } else {
          this.assessmentsService.getAnalytics(this.assessmentId).subscribe({
            next: (analytics) => {
              this.analyticsData = analytics;
            },
            error: (err) => console.error('Error fetching analytics', err)
          });
          
          this.loadArchived();
        }
      },
      error: (err) => console.error('Error fetching results', err)
    });
  }

  loadArchived() {
    this.assessmentsService.getArchivedAttempts(this.assessmentId).subscribe({
      next: (archived) => {
        this.archivedDataSource.data = archived;
      },
      error: (err) => console.error('Error fetching archived', err)
    });
  }

  archiveAttempt(element: any) {
    Swal.fire({
      title: '¿Eliminar este resultado?',
      text: "El intento se moverá al historial y el estudiante recuperará su oportunidad para rendir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.assessmentsService.archiveAttempt(element._id).subscribe({
          next: () => {
            Swal.fire('¡Eliminado!', 'El intento ha sido movido al historial.', 'success');
            this.selection.clear();
            this.loadData();
          },
          error: () => Swal.fire('Error', 'No se pudo completar la acción.', 'error')
        });
      }
    });
  }

  archiveSelected() {
    if (this.selection.selected.length === 0) return;
    
    Swal.fire({
      title: '¿Eliminar resultados seleccionados?',
      text: `Se eliminarán ${this.selection.selected.length} intentos. Los estudiantes recuperarán su oportunidad para rendir.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const requests = this.selection.selected.map(element => this.assessmentsService.archiveAttempt(element._id));
        forkJoin(requests).subscribe({
          next: () => {
            Swal.fire('¡Eliminados!', 'Los intentos han sido movidos al historial.', 'success');
            this.selection.clear();
            this.loadData();
          },
          error: () => Swal.fire('Error', 'Hubo un error al eliminar algunos intentos.', 'error')
        });
      }
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

  downloadSelected() {
    if (this.selection.selected.length === 0) return;
    
    this.selection.selected.forEach((element, index) => {
      setTimeout(() => {
        this.downloadPdf(element);
      }, index * 800);
    });
  }

  exportExcel() {
    this.assessmentsService.exportExcel(this.assessmentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `resultados_${this.assessmentId}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error('Error downloading Excel', err)
    });
  }

  goBack() {
    this.router.navigate(['/teacher/assessments']);
  }

  gradePaper(element: any) {
    this.router.navigate(['/teacher/paper-grading', element._id]);
  }

  getProgressBarColor(percentage: number): string {
    if (percentage >= 70) return 'primary'; // Verde/Azul
    if (percentage >= 40) return 'accent';  // Amarillo
    return 'warn';                          // Rojo
  }

  hasWarnings(element: any): boolean {
    if (element.outOfTime || element.isTimeout) return true;
    if (!element.antiCheatLog) return false;

    const log = element.antiCheatLog;
    return (log.tabSwitches > 0 || log.fullscreenExits > 0 || log.copyPasteAttempts > 0 || log.devtoolsAttempts > 0);
  }

  getWarningsTooltip(element: any): string {
    let msgs = [];
    if (element.outOfTime) msgs.push('Se excedió del tiempo límite.');
    if (element.isTimeout) msgs.push('Cierre automático por tiempo.');

    if (element.antiCheatLog) {
      const log = element.antiCheatLog;
      if (log.tabSwitches > 0) msgs.push(`${log.tabSwitches} cambios de pestaña.`);
      if (log.fullscreenExits > 0) msgs.push(`${log.fullscreenExits} salidas de fullscreen.`);
      if (log.copyPasteAttempts > 0) msgs.push(`${log.copyPasteAttempts} intentos de copiar/pegar.`);
      if (log.devtoolsAttempts > 0) msgs.push(`Intento de abrir devtools.`);
    }
    return msgs.join('\n');
  }

  downloadPdf(element: any) {
    this.assessmentsService.getAttemptDetail(this.assessmentId, element._id).subscribe({
      next: (attempt) => {
        this.generatePdf(attempt, element);
      },
      error: (err) => console.error('Error fetching attempt details', err)
    });
  }

  checkIfCorrect(type: string, studentAnswers: string[], correctAnswers: string[]): boolean {
    if (!studentAnswers || studentAnswers.length === 0) return false;

    if (type === 'fill-blank') {
      const normalizeStr = (str: string) => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
      const userAns = normalizeStr(studentAnswers[0]);
      return correctAnswers.some(c => normalizeStr(c) === userAns);
    }

    if (type === 'matching') {
      if (studentAnswers.length !== correctAnswers.length) return false;
      return studentAnswers.every((ans, i) => ans === correctAnswers[i]);
    }

    if (studentAnswers.length !== correctAnswers.length) return false;

    const sortedStudent = [...studentAnswers].sort();
    const sortedCorrect = [...correctAnswers].sort();

    return sortedStudent.every((val, index) => val === sortedCorrect[index]);
  }

  generatePdf(attempt: any, element: any) {
    const studentName = attempt.studentId?.name || 'Estudiante';
    const identifier = attempt.studentId?.username || 'N/A';
    const isApproved = element.percentage >= 70;

    // Extracted populated fields
    const assessmentDetails = attempt.assessmentId || {};
    const teacherName = assessmentDetails.teacherId?.name || 'Docente';

    const formatDate = (dateString: string) => {
      if (!dateString) return 'N/A';
      const d = new Date(dateString);
      return d.toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
    };

    const evalStart = formatDate(assessmentDetails.startTime);
    const evalEnd = formatDate(assessmentDetails.endTime);
    const attemptStart = formatDate(attempt.startTime);
    const duration = element.durationMinutes || 0;

    const content: any[] = [];

    // Header section with background
    content.push({
      table: {
        widths: ['*'],
        body: [
          [
            {
              text: `REPORTE DE EVALUACIÓN`,
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
              text: this.resultsData.assessment.title.toUpperCase(),
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

    // Info section (Student & Teacher)
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
            { text: `Grupo: ${attempt.studentGroup || 'N/A'}`, style: 'infoText', color: '#6b7280', fontSize: 9, border: [false, false, false, false] },
            { text: '', border: [false, false, false, false] }
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
        hLineWidth: (i: number, node: any) => (i === 3) ? 0.5 : 0,
        vLineWidth: () => 0,
        hLineColor: () => '#e5e7eb'
      },
      margin: [0, 0, 0, 20]
    });

    // Results summary cards (horizontal table)
    const formattedScore = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(element.score);
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
            { text: `${formattedScore} / ${element.maxScore}`, style: 'cardValue' },
            { text: `${element.percentage}%`, style: 'cardValue', color: isApproved ? '#16a34a' : '#dc2626' },
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

    // Detailed answers
    content.push({ text: 'DETALLE DE RESPUESTAS', style: 'sectionTitle', margin: [0, 0, 0, 15] });

    attempt.questionsPulled.forEach((q: any, i: number) => {
      const studentAnswerObj = attempt.studentAnswers?.find((sa: any) => sa.questionId === q.questionId);
      const studentAnswers = studentAnswerObj?.answers || [];
      const isCorrect = this.checkIfCorrect(q.type, studentAnswers, q.correctAnswers);

      const statementRaw = q.statement.replace(/<[^>]+>/g, '');

      const questionBody: any[] = [];

      questionBody.push([
        {
          text: [
            { text: `${i + 1}. `, bold: true },
            { text: statementRaw }
          ],
          style: 'questionTitle',
          colSpan: 2,
          border: [false, false, false, false],
          fillColor: '#f8fafc',
          margin: [10, 8, 10, 8]
        },
        {}
      ]);

      questionBody.push([
        {
          text: isCorrect ? '✓ Correcto' : '✗ Incorrecto',
          color: isCorrect ? '#16a34a' : '#dc2626',
          bold: true,
          colSpan: 2,
          border: [false, false, false, false],
          margin: [10, 0, 10, 5],
          fontSize: 10
        },
        {}
      ]);

      if (q.type === 'matching') {
        q.options.forEach((opt: string, optIndex: number) => {
          const optRaw = opt.replace(/<[^>]+>/g, '');
          const studentPicked = (studentAnswers.length > optIndex) ? studentAnswers[optIndex] : '';
          const correctPick = (q.correctAnswers.length > optIndex) ? q.correctAnswers[optIndex] : '';
          const isMatchedCorrectly = studentPicked === correctPick;

          questionBody.push([
            { text: '•', width: 20, alignment: 'right', border: [false, false, false, false], color: '#6b7280', margin: [0, 2, 5, 2] },
            { 
              text: [
                { text: optRaw + '\n', color: '#374151', bold: true },
                { text: `Tu respuesta: ${studentPicked || '(Ninguna)'}`, color: isMatchedCorrectly ? '#16a34a' : '#dc2626', fontSize: 10 },
                isMatchedCorrectly ? '' : { text: `\nRespuesta esperada: ${correctPick}`, color: '#16a34a', fontSize: 10 }
              ], 
              border: [false, false, false, false], 
              margin: [0, 2, 10, 8] 
            }
          ]);
        });
      } else if (q.type !== 'fill-blank') {
        q.options.forEach((opt: string) => {
          const optRaw = opt.replace(/<[^>]+>/g, '');
          const isStudentAns = studentAnswers.includes(opt);
          const isCorrectAns = q.correctAnswers.includes(opt);

          let marker = isStudentAns ? '●' : '○';
          let markerColor = isStudentAns ? '#2563eb' : '#9ca3af'; // Blue if selected, Gray if not

          let feedbackText = '';
          let feedbackColor = '';

          if (isStudentAns && isCorrectAns) {
            feedbackText = ' ✓ Tu respuesta correcta';
            feedbackColor = '#16a34a';
          } else if (isStudentAns && !isCorrectAns) {
            feedbackText = ' ✗ Tu respuesta incorrecta';
            feedbackColor = '#dc2626';
          } else if (!isStudentAns && isCorrectAns) {
            feedbackText = ' ⇦ Respuesta esperada';
            feedbackColor = '#16a34a';
          }

          questionBody.push([
            { text: marker, width: 20, alignment: 'right', border: [false, false, false, false], color: markerColor, margin: [0, 2, 5, 2] },
            {
              text: [
                { text: optRaw, color: '#374151', bold: isStudentAns },
                { text: feedbackText, color: feedbackColor, bold: true, fontSize: 9 }
              ],
              border: [false, false, false, false],
              margin: [0, 2, 10, 2]
            }
          ]);
        });
      } else {
        questionBody.push([
          { text: 'Tu respuesta:', width: 80, border: [false, false, false, false], margin: [10, 2, 5, 2], fontSize: 10, color: '#6b7280' },
          { text: studentAnswers.length > 0 ? studentAnswers[0] : '(Sin responder)', border: [false, false, false, false], color: isCorrect ? '#16a34a' : '#dc2626', bold: true, margin: [0, 2, 10, 2], fontSize: 10 }
        ]);
        questionBody.push([
          { text: 'Aceptada(s):', width: 80, border: [false, false, false, false], margin: [10, 2, 5, 2], fontSize: 10, color: '#6b7280' },
          { text: q.correctAnswers.join(' | '), border: [false, false, false, false], color: '#16a34a', margin: [0, 2, 10, 2], fontSize: 10 }
        ]);
      }

      content.push({
        table: {
          widths: ['auto', '*'],
          body: questionBody
        },
        layout: {
          hLineWidth: (i: number, node: any) => (i === node.table.body.length) ? 0.5 : 0,
          vLineWidth: () => 0,
          hLineColor: () => '#e5e7eb'
        },
        margin: [0, 0, 0, 15]
      });
    });

    // Anti-cheat summary section
    if (attempt.antiCheatLog || element.outOfTime || element.isTimeout) {
      content.push({ text: 'SUMARIO DE ADVERTENCIAS Y FALTAS', style: 'sectionTitle', margin: [0, 20, 0, 10], color: '#dc2626' });

      const warningsList: any[] = [];

      if (element.outOfTime) warningsList.push({ text: 'Se excedió del tiempo límite.', color: '#dc2626', margin: [0, 2] });
      if (element.isTimeout) warningsList.push({ text: 'La evaluación se cerró automáticamente por tiempo.', color: '#dc2626', margin: [0, 2] });

      if (attempt.antiCheatLog) {
        const log = attempt.antiCheatLog;
        if (log.tabSwitches > 0) warningsList.push({ text: `Cambios de pestaña detectados: ${log.tabSwitches}`, color: '#dc2626', margin: [0, 2] });
        if (log.fullscreenExits > 0) warningsList.push({ text: `Salidas de pantalla completa: ${log.fullscreenExits}`, color: '#dc2626', margin: [0, 2] });
        if (log.copyPasteAttempts > 0) warningsList.push({ text: `Intentos de copiar/pegar bloqueados: ${log.copyPasteAttempts}`, color: '#dc2626', margin: [0, 2] });
        if (log.devtoolsAttempts > 0) warningsList.push({ text: `Intentos de abrir herramientas de desarrollador: ${log.devtoolsAttempts}`, color: '#dc2626', margin: [0, 2] });

        if (log.events && log.events.length > 0) {
          warningsList.push({ text: 'Registro temporal detallado:', margin: [0, 5, 0, 2], bold: true, color: '#dc2626' });
          const eventsDetails = log.events.map((ev: any) => {
            const evTime = formatDate(ev.timestamp);
            return `${evTime} - [${ev.type}] ${ev.description}`;
          });
          warningsList.push({ ul: eventsDetails, margin: [10, 0, 0, 0], fontSize: 9, color: '#dc2626' });
        }
      }

      if (warningsList.length > 0) {
        content.push({
          stack: warningsList,
          margin: [10, 0, 0, 0],
          border: [true, false, false, false],
          borderColor: ['#dc2626', '', '', '']
        });
      } else {
        content.push({ text: 'No se registraron advertencias.', italics: true, color: '#6b7280' });
      }
    } else {
      content.push({ text: 'SUMARIO DE ADVERTENCIAS Y FALTAS', style: 'sectionTitle', margin: [0, 20, 0, 10], color: '#16a34a' });
      content.push({ text: 'No se registraron advertencias. Todo en orden.', italics: true, color: '#16a34a', margin: [10, 0, 0, 0] });
    }

    const documentDefinition: any = {
      content: content,
      styles: {
        header: { fontSize: 20, bold: true, letterSpacing: 1 },
        subHeaderTitle: { fontSize: 14, letterSpacing: 0.5 },
        sectionTitle: { fontSize: 12, bold: true, color: '#1f2937', letterSpacing: 0.5 },
        tableHeader: { fontSize: 9, bold: true, color: '#6b7280' },
        infoText: { fontSize: 11, color: '#111827', bold: true },
        cardTitle: { fontSize: 9, bold: true, color: '#6b7280', alignment: 'center' },
        cardValue: { fontSize: 14, bold: true, color: '#111827', alignment: 'center' },
        questionTitle: { fontSize: 11, color: '#111827' }
      },
      defaultStyle: {
        fontSize: 10,
        color: '#374151',
        lineHeight: 1.2
      },
      pageMargins: [40, 40, 40, 40]
    };

    pdfMake.createPdf(documentDefinition).download(`Resultado_${studentName}_${this.resultsData.assessment.title}.pdf`);
  }
}
