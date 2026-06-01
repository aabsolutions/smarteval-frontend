import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { StudentsService, Student } from './students.service';
import { StudentFormDialogComponent } from './dialogs/student-form/student-form.component';
import { BulkImportDialogComponent } from './dialogs/bulk-import/bulk-import.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GroupsService } from '../groups/groups.service';
import { Institution } from '../institutions/institutions.service';
import { AlertService } from '@core/services/alert.service';
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';

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
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule,
    TableShowHideColumnComponent
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

  columnDefinitions = [
    { def: 'identifier', label: 'Cédula/Código', visible: true },
    { def: 'name', label: 'Nombre Completo', visible: true },
    { def: 'email', label: 'Correo', visible: true },
    { def: 'group', label: 'Grupo', visible: true },
    { def: 'institution', label: 'Institución', visible: true },
    { def: 'actions', label: 'Acciones', visible: true }
  ];
  dataSource = new MatTableDataSource<Student>([]);
  allStudents: Student[] = [];
  groups: any[] = [];
  institutions: Institution[] = [];
  levels: string[] = ['EGB MEDIA', 'EGB SUPERIOR', 'BACHILLERATO', 'SUPERIOR'];
  
  selectedInstitution = '';
  selectedLevel = '';
  searchText = '';
  
  private studentsService = inject(StudentsService);
  private groupsService = inject(GroupsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    
    // Custom filter predicate for object properties and dropdowns
    this.dataSource.filterPredicate = (data: Student, filterStr: string) => {
      const filters = JSON.parse(filterStr);
      let match = true;
      
      if (filters.search) {
        const searchStr = filters.search.toLowerCase();
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          const val = (data as any)[key];
          if (key === 'groupId' && val) return currentTerm + val.name + '◬' + val.institution?.name + '◬' + val.nivel + '◬';
          return currentTerm + val + '◬';
        }, '').toLowerCase();
        if (dataStr.indexOf(searchStr) === -1) match = false;
      }
      
      if (filters.institution && data.groupId?.institution?._id !== filters.institution && data.groupId?.institution !== filters.institution) {
        match = false;
      }
      
      if (filters.level && data.groupId?.nivel !== filters.level) {
        match = false;
      }
      
      return match;
    };

    this.loadGroups();
    this.loadStudents();
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter((cd) => cd.visible).map((cd) => cd.def);
  }

  loadGroups() {
    this.groupsService.getAllGroups().subscribe({
      next: (data) => {
        this.groups = data;
        
        // Extract unique institutions from groups
        const uniqueInstitutions = new Map<string, any>();
        data.forEach(g => {
          if (g.institution && g.institution._id) {
            uniqueInstitutions.set(g.institution._id, g.institution);
          }
        });
        this.institutions = Array.from(uniqueInstitutions.values());
      },
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

  applyAllFilters() {
    const filterObj = {
      search: this.searchText,
      institution: this.selectedInstitution,
      level: this.selectedLevel
    };
    this.dataSource.filter = JSON.stringify(filterObj);
  }

  applyFilter(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
    this.applyAllFilters();
  }
}
