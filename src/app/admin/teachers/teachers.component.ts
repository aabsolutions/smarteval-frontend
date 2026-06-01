import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';
import { TeachersService, Teacher } from './teachers.service';
import { TeacherFormDialogComponent } from './dialogs/teacher-form-dialog/teacher-form-dialog.component';
import { ViewChild } from '@angular/core';

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
    FeatherIconsComponent,
    MatPaginatorModule,
    TableShowHideColumnComponent
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

  columnDefinitions = [
    { def: 'identifier', label: 'Cédula', visible: true },
    { def: 'name', label: 'Nombre', visible: true },
    { def: 'email', label: 'Email', visible: true },
    { def: 'phone', label: 'Teléfono', visible: true },
    { def: 'actions', label: 'Acciones', visible: true }
  ];
  dataSource = new MatTableDataSource<Teacher>([]);
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  private teachersService = inject(TeachersService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadTeachers();
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter((cd) => cd.visible).map((cd) => cd.def);
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
