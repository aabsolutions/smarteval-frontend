import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { AssessmentsService, Assessment } from './assessments.service';
import { AssessmentFormDialogComponent } from './dialogs/assessment-form/assessment-form.component';
import { SelectStudentsDialogComponent } from './dialogs/select-students-dialog/select-students-dialog.component';
import { AlertService } from '@core/services/alert.service';
import Swal from 'sweetalert2';
import * as pdfMakeLib from 'pdfmake/build/pdfmake';
import * as pdfFontsLib from 'pdfmake/build/vfs_fonts';

const pdfMake: any = (pdfMakeLib as any).default || pdfMakeLib;
const pdfFonts: any = (pdfFontsLib as any).default || pdfFontsLib;
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

@Component({
  selector: 'app-assessments',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    BreadcrumbComponent,
    FeatherIconsComponent,
    RouterModule
  ],
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
})
export class AssessmentsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Exámenes',
      items: ['Profesor'],
      active: 'Exámenes',
    },
  ];

  displayedColumns: string[] = ['title', 'topic', 'groups', 'startTime', 'endTime', 'actions'];
  dataSource = new MatTableDataSource<Assessment>([]);
  
  private assessmentsService = inject(AssessmentsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadAssessments();
  }

  loadAssessments() {
    this.assessmentsService.getAllAssessments().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching assessments:', error);
      },
    });
  }

  openAssessmentDialog(assessment?: Assessment) {
    const dialogRef = this.dialog.open(AssessmentFormDialogComponent, {
      width: '800px',
      panelClass: 'custom-dialog-container',
      data: { assessment }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAssessments();
      }
    });
  }

  deleteAssessment(assessment: Assessment) {
    this.alertService.confirmDelete(`el examen ${assessment.title}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.assessmentsService.deleteAssessment(assessment._id).subscribe({
          next: () => {
            this.alertService.successToast('Examen eliminado con éxito');
            this.loadAssessments();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar examen'),
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPrintDialog(row: Assessment) {
    Swal.fire({ title: 'Cargando estudiantes...', allowOutsideClick: false });
    Swal.showLoading();
    
    this.assessmentsService.getEligibleStudents(row._id).subscribe({
      next: (students) => {
        Swal.close();
        if (students.length === 0) {
          this.alertService.successToast('Todos los alumnos de los grupos asignados ya tienen un intento activo.');
          return;
        }

        const dialogRef = this.dialog.open(SelectStudentsDialogComponent, {
          width: '600px',
          data: { assessment: row, students: students }
        });

        dialogRef.afterClosed().subscribe((selectedIds) => {
          if (selectedIds && selectedIds.length > 0) {
            Swal.fire({ title: 'Generando...', allowOutsideClick: false });
            Swal.showLoading();
            this.assessmentsService.generatePaperAttempts(row._id, selectedIds).subscribe({
              next: (attempts) => {
                Swal.close();
                if (attempts.length === 0) {
                  this.alertService.successToast('No se generaron pruebas nuevas.');
                  return;
                }
                this.generateBulkPdf(row, attempts);
                this.alertService.successToast(`Se generaron ${attempts.length} pruebas impresas.`);
              },
              error: (err) => {
                Swal.close();
                this.alertService.errorAlert('Error', 'No se pudieron generar las pruebas');
              }
            });
          }
        });
      },
      error: () => {
        Swal.close();
        this.alertService.errorAlert('Error', 'No se pudieron cargar los estudiantes');
      }
    });
  }

  generateBulkPdf(assessment: Assessment, attempts: any[]) {
    const content: any[] = [];
    
    attempts.forEach((attempt, index) => {
      if (index > 0) {
        content.push({ text: '', pageBreak: 'before' });
      }

      content.push({
        text: `EVALUACIÓN: ${assessment.title.toUpperCase()}`,
        style: 'header',
        alignment: 'center',
        margin: [0, 0, 0, 20]
      });

      content.push({
        text: `ESTUDIANTE: ${attempt.studentId?.name || '__________________________'}    ID: ${attempt.studentId?.username || '______'}`,
        style: 'subheader',
        margin: [0, 0, 0, 20]
      });

      content.push({
        text: `INSTRUCCIONES: Marca con una X la opción correcta. ID de Intento para cargar notas: ${attempt._id}`,
        style: 'instructions',
        margin: [0, 0, 0, 20]
      });

      attempt.questionsPulled.forEach((q: any, i: number) => {
        const statementRaw = q.statement.replace(/<[^>]+>/g, '');
        content.push({
          text: `${i + 1}. ${statementRaw}`,
          style: 'questionText',
          margin: [0, 10, 0, 5]
        });

        if (q.type === 'matching') {
          content.push({ text: '(Une con líneas o escribe al lado)', margin: [15, 0, 0, 10], color: 'gray' });
          q.options.forEach((opt: string, idx: number) => {
            const optRaw = opt.replace(/<[^>]+>/g, '');
            const matchRaw = q.matchingOptions && q.matchingOptions[idx] ? q.matchingOptions[idx].replace(/<[^>]+>/g, '') : '__________';
            content.push({
              text: `${String.fromCharCode(65 + idx)}) ${optRaw}   ....................   [   ] ${matchRaw}`,
              margin: [15, 2, 0, 2]
            });
          });
        } else if (q.type === 'fill-blank') {
          content.push({
            text: 'R: __________________________________________________',
            margin: [15, 5, 0, 15]
          });
        } else {
          q.options.forEach((opt: string, idx: number) => {
            const optRaw = opt.replace(/<[^>]+>/g, '');
            content.push({
              text: `( ) ${String.fromCharCode(65 + idx)}. ${optRaw}`,
              margin: [15, 2, 0, 2]
            });
          });
        }
      });
    });

    const documentDefinition: any = {
      content: content,
      styles: {
        header: { fontSize: 18, bold: true },
        subheader: { fontSize: 14, bold: true },
        instructions: { fontSize: 10, italics: true, color: 'gray' },
        questionText: { fontSize: 12, bold: true }
      },
      defaultStyle: { fontSize: 11 }
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}
