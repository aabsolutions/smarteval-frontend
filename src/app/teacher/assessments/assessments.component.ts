import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
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
    RouterModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
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
  dataSource = new MatTableDataSource<any>([]);
  
  private assessmentsService = inject(AssessmentsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  showArchived: boolean = false;
  
  rawAssessments: Assessment[] = [];
  uniqueGroups: any[] = [];
  selectedGroup: string = '';
  searchTerm: string = '';

  isGroup = (index: number, item: any): boolean => item.isGroupBy;

  ngOnInit(): void {
    this.loadAssessments();
  }

  toggleView() {
    this.showArchived = !this.showArchived;
    this.loadAssessments();
  }

  loadAssessments() {
    this.assessmentsService.getAllAssessments(this.showArchived).subscribe({
      next: (data) => {
        this.rawAssessments = data;
        
        const groupsMap = new Map<string, any>();
        data.forEach(assessment => {
          if (assessment.groupIds && assessment.groupIds.length > 0) {
            assessment.groupIds.forEach((g: any) => {
              if (g._id && g.name) groupsMap.set(g._id, g);
            });
          } else {
            groupsMap.set('no-group', { _id: 'no-group', name: 'Sin grupos asignados' });
          }
        });
        this.uniqueGroups = Array.from(groupsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
        
        this.buildGroupedData();
      },
      error: (error) => {
        console.error('Error fetching assessments:', error);
      },
    });
  }

  buildGroupedData() {
    let groupedData: any[] = [];
    const pairs: { group: any, assessment: Assessment }[] = [];
    
    this.rawAssessments.forEach(assessment => {
      const search = this.searchTerm.trim().toLowerCase();
      if (search) {
        const titleMatch = (assessment.title || '').toLowerCase().includes(search);
        const topicMatch = (assessment.topicId?.name || '').toLowerCase().includes(search);
        if (!titleMatch && !topicMatch) return;
      }

      if (assessment.groupIds && assessment.groupIds.length > 0) {
        assessment.groupIds.forEach((g: any) => {
          if (!this.selectedGroup || this.selectedGroup === g._id) {
            pairs.push({ group: g, assessment });
          }
        });
      } else {
        if (!this.selectedGroup || this.selectedGroup === 'no-group') {
          pairs.push({ group: { _id: 'no-group', name: 'Sin grupos asignados' }, assessment });
        }
      }
    });

    const groupedByGroupId = new Map<string, typeof pairs>();
    pairs.forEach(pair => {
      const groupId = pair.group._id || 'no-group';
      if (!groupedByGroupId.has(groupId)) groupedByGroupId.set(groupId, []);
      groupedByGroupId.get(groupId)!.push(pair);
    });

    const sortedGroups = Array.from(groupedByGroupId.keys()).sort((a, b) => {
      const groupA = groupedByGroupId.get(a)![0].group;
      const groupB = groupedByGroupId.get(b)![0].group;
      return groupA.name.localeCompare(groupB.name);
    });

    sortedGroups.forEach(groupId => {
      const groupItems = groupedByGroupId.get(groupId)!;
      groupItems.sort((a, b) => new Date(a.assessment.startTime).getTime() - new Date(b.assessment.startTime).getTime());
      
      groupedData.push({
        isGroupBy: true,
        groupName: groupItems[0].group.name,
        groupId: groupId
      });
      
      groupItems.forEach(item => {
        groupedData.push({
          isGroupBy: false,
          groupId: groupId,
          ...item.assessment
        });
      });
    });

    this.dataSource.data = groupedData;
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

  archiveAssessment(assessment: Assessment) {
    const action = this.showArchived ? 'desarchivar' : 'archivar';
    this.alertService.confirmAction(`¿Quieres ${action} el examen ${assessment.title}?`, `Si lo hacés, ${action === 'archivar' ? 'dejará de verse en la lista principal' : 'volverá a la lista principal'}.`, `Sí, ${action}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.assessmentsService.toggleArchive(assessment._id).subscribe({
          next: () => {
            this.alertService.successToast(`Examen ${action}do con éxito`);
            this.loadAssessments();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || `Error al ${action} examen`),
        });
      }
    });
  }

  applyFilter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.buildGroupedData();
  }

  onGroupFilterChange() {
    this.buildGroupedData();
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
