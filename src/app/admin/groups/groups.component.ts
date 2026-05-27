import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { GroupsService, Group } from './groups.service';
import { GroupFormDialogComponent } from './dialogs/group-form/group-form.component';
import { MatInputModule } from '@angular/material/input';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-groups',
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
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Grupos',
      items: ['Administración'],
      active: 'Grupos',
    },
  ];

  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Group>([]);
  
  private groupsService = inject(GroupsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups() {
    this.groupsService.getAllGroups().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching groups:', error);
      },
    });
  }

  openGroupDialog(group?: Group) {
    const dialogRef = this.dialog.open(GroupFormDialogComponent, {
      width: '600px',
      data: { group },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadGroups();
      }
    });
  }

  deleteGroup(group: Group) {
    this.alertService.confirmDelete(`el grupo ${group.name}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.groupsService.deleteGroup(group._id).subscribe({
          next: () => {
            this.alertService.successToast('Grupo eliminado con éxito');
            this.loadGroups();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar grupo'),
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
