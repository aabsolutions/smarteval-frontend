import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { TeachersService, Teacher } from './teachers.service';
import { TeacherFormDialogComponent } from './dialogs/teacher-form-dialog/teacher-form-dialog.component';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    BreadcrumbComponent,
    FeatherIconsComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Docentes',
      items: ['Administración'],
      active: 'Docentes',
    },
  ];

  displayedColumns: string[] = ['identifier', 'name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Teacher>([]);
  
  private teachersService = inject(TeachersService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teachersService.getAllTeachers().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching teachers:', error);
      },
    });
  }

  openTeacherDialog(teacher?: Teacher) {
    const dialogRef = this.dialog.open(TeacherFormDialogComponent, {
      width: '400px',
      data: { teacher },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTeachers();
      }
    });
  }

  deleteTeacher(t: Teacher) {
    if (confirm(`¿Eliminar al docente ${t.name}?`)) {
      this.teachersService.deleteTeacher(t._id).subscribe({
        next: () => this.loadTeachers(),
        error: (err) => console.error(err)
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
