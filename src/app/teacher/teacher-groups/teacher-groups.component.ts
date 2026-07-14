import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TemplateRef, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { GroupsService, Group } from '../../admin/groups/groups.service';

@Component({
  selector: 'app-teacher-groups',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    BreadcrumbComponent
  ],
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.scss'],
})
export class TeacherGroupsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Mis Grupos',
      items: ['Docente'],
      active: 'Grupos',
    },
  ];

  displayedColumns: string[] = ['name', 'institution', 'jornada', 'nivel', 'students'];
  dataSource = new MatTableDataSource<Group>([]);
  
  @ViewChild('studentsDialog') studentsDialog!: TemplateRef<any>;
  
  private groupsService = inject(GroupsService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadMyGroups();
  }

  loadMyGroups() {
    this.groupsService.getAllGroups().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching my groups:', error);
      },
    });
  }

  openStudentRoster(group: Group) {
    this.dialog.open(this.studentsDialog, {
      width: '400px',
      data: group,
      panelClass: 'custom-dialog-container',
    });
  }
}
