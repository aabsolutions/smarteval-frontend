import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { User } from '../users.component';
import { LocalStorageService } from '@shared/services';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-user-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss'],
})
export class UserFormDialogComponent implements OnInit {
  action: string;
  dialogTitle: string;
  userForm: UntypedFormGroup;
  user: User;
  
  private fb = inject(UntypedFormBuilder);
  private http = inject(HttpClient);
  private store = inject(LocalStorageService);
  private alertService = inject(AlertService);
  
  availableRoles: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.action = data.user ? 'edit' : 'add';
    this.dialogTitle = this.action === 'edit' ? 'Edit User' : 'New User';
    this.user = data.user || {};
    
    // Determine which roles are available based on the current user's role
    const currentUser = this.store.get('currentUser') as any;
    const currentRole = currentUser?.roles?.[0]?.name;
    
    if (currentRole === 'SUPERADMIN') {
      this.availableRoles = ['SUPERADMIN', 'ADMIN', 'TEACHER', 'STUDENT'];
    } else {
      this.availableRoles = ['TEACHER', 'STUDENT'];
    }

    this.userForm = this.createContactForm();
  }

  ngOnInit(): void {}

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      username: [this.user.username || '', [Validators.required]],
      name: [this.user.name || '', [Validators.required]],
      email: [this.user.email || '', [Validators.email, Validators.minLength(5)]],
      password: [
        '',
        this.action === 'add' ? [Validators.required] : []
      ], // Password required only on creation
      role: [this.user.roles?.[0]?.name || '', [Validators.required]],
    });
  }

  submit() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      
      const payload: any = {
        username: formValue.username,
        name: formValue.name,
        email: formValue.email,
        roles: [{ name: formValue.role, priority: this.getPriority(formValue.role) }]
      };

      if (formValue.password) {
        payload.password = formValue.password;
      }

      if (this.action === 'add') {
        this.http.post('/api/users', payload).subscribe({
          next: () => {
            this.alertService.successToast('Usuario creado');
            this.dialogRef.close(true);
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error creating user')
        });
      } else {
        this.http.put(`/api/users/${this.user._id}`, payload).subscribe({
          next: () => {
            this.alertService.successToast('Usuario actualizado');
            this.dialogRef.close(true);
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error updating user')
        });
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  private getPriority(roleName: string): number {
    const priorities: any = {
      'SUPERADMIN': 0,
      'ADMIN': 1,
      'TEACHER': 2,
      'STUDENT': 3
    };
    return priorities[roleName] || 3;
  }
}
