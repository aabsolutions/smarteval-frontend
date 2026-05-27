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
import { AlertService } from '@core/services/alert.service';

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
}
