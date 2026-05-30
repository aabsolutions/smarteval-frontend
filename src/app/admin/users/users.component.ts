import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HttpClient } from '@angular/common/http';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { AlertService } from '@core/services/alert.service';
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';

export interface User {
  _id: string;
  username: string;
  name: string;
  email: string;
  cedula?: string;
  roles: { name: string; priority: number }[];
  avatar: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    BreadcrumbComponent,
    TableShowHideColumnComponent,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  breadscrums = [
    {
      title: 'User Management',
      items: ['Admin'],
      active: 'Users',
    },
  ];

  displayedColumns: string[] = ['avatar', 'name', 'username', 'email', 'roles', 'actions'];
  columnDefinitions = [
    { def: 'avatar', label: 'Avatar', hide: false },
    { def: 'name', label: 'Name', hide: false },
    { def: 'username', label: 'Username', hide: false },
    { def: 'email', label: 'Email', hide: false },
    { def: 'roles', label: 'Roles', hide: false },
    { def: 'actions', label: 'Actions', hide: false }
  ];
  
  dataSource = new MatTableDataSource<User>([]);
  
  totalUsers = 0;
  pageSize = 10;
  pageIndex = 0;
  
  private http = inject(HttpClient);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<{ data: User[], total: number }>(`/api/users?page=${this.pageIndex + 1}&limit=${this.pageSize}`).subscribe({
      next: (response) => {
        this.dataSource.data = response.data;
        this.totalUsers = response.total;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadUsers();
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter((cd) => !cd.hide).map((cd) => cd.def);
  }

  resetPassword(user: User) {
    this.alertService.confirmDelete(`y resetear la clave de ${user.name}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.http.post(`/api/users/${user._id}/reset-password`, {}).subscribe({
          next: () => {
            this.alertService.successToast('Contraseña reseteada con éxito');
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error reseteando la contraseña'),
        });
      }
    });
  }

  openUserDialog(user?: User) {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '600px',
      data: { user },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers(); // Refresh list after close
      }
    });
  }

  deleteUser(user: User) {
    this.alertService.confirmDelete(`al usuario ${user.name}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.http.delete(`/api/users/${user._id}`).subscribe({
          next: () => {
            this.alertService.successToast('Usuario eliminado con éxito');
            this.loadUsers();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error deleting user'),
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
