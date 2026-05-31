import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { GroupsService, Group } from '../../admin/groups/groups.service';

@Component({
  selector: 'app-teacher-groups',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
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

  displayedColumns: string[] = ['name', 'institution', 'jornada', 'nivel'];
  dataSource = new MatTableDataSource<Group>([]);
  
  private groupsService = inject(GroupsService);

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
}
