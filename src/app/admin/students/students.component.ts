import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { StudentsService, Student } from './students.service';
import { StudentFormDialogComponent } from './dialogs/student-form/student-form.component';
import { BulkImportDialogComponent } from './dialogs/bulk-import/bulk-import.component';
import { MatInputModule } from '@angular/material/input';
import { GroupsService } from '../groups/groups.service';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-students',
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
    MatInputModule
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Estudiantes',
      items: ['Administración'],
      active: 'Estudiantes',
    },
  ];

  displayedColumns: string[] = ['identifier', 'name', 'email', 'group', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);
  groups: any[] = [];
  
  private studentsService = inject(StudentsService);
  private groupsService = inject(GroupsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadGroups();
    this.loadStudents();
  }

  loadGroups() {
    this.groupsService.getAllGroups().subscribe({
      next: (data) => this.groups = data,
      error: (err) => console.error('Error fetching groups:', err)
    });
  }

  loadStudents() {
    this.studentsService.getAllStudents().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      },
    });
  }

  openStudentDialog(student?: Student) {
    const dialogRef = this.dialog.open(StudentFormDialogComponent, {
      width: '600px',
      data: { student, groups: this.groups },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadStudents();
      }
    });
  }

  openImportDialog() {
    const dialogRef = this.dialog.open(BulkImportDialogComponent, {
      width: '900px',
      data: { groups: this.groups },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadStudents();
      }
    });
  }

  deleteStudent(student: Student) {
    this.alertService.confirmDelete(`al estudiante ${student.name}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.studentsService.deleteStudent(student._id).subscribe({
          next: () => {
            this.alertService.successToast('Estudiante eliminado con éxito');
            this.loadStudents();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar estudiante'),
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
