import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HttpClient } from '@angular/common/http';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { AlertService } from '@core/services/alert.service';

export interface User {
  _id: string;
  username: string;
  name: string;
  email: string;
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
    BreadcrumbComponent,
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
  dataSource = new MatTableDataSource<User>([]);
  
  private http = inject(HttpClient);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>('/api/users').subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
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
