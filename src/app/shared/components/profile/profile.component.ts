import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';
import { AuthService } from '@core/service/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private alertService = inject(AlertService);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.initForms();
    this.loadProfile();
  }

  initForms() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [{ value: '', disabled: true }]
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  loadProfile() {
    // Assuming currentUserValue holds the basic info, or we can fetch it
    const user: any = this.authService.currentUserValue;
    if (user) {
      this.profileForm.patchValue({
        name: user['firstName'] ? user['firstName'] + ' ' + user['lastName'] : user['name'],
        email: user['email'] || '', // Don't fallback to username
        username: user['username']
      });
    }
  }

  updateProfile() {
    if (this.profileForm.invalid) return;
    
    this.http.put('/api/users/me/profile', this.profileForm.value).subscribe({
      next: () => {
        this.alertService.successToast('Perfil actualizado con éxito');
        this.authService.updateCurrentUser(this.profileForm.value);
      },
      error: (err: any) => {
        this.alertService.errorAlert('Error', err.error?.message || 'Hubo un error al actualizar el perfil');
      }
    });
  }

  changePassword() {
    if (this.passwordForm.invalid) return;
    
    this.http.put('/api/users/me/change-password', this.passwordForm.value).subscribe({
      next: () => {
        this.alertService.successToast('Contraseña cambiada con éxito');
        this.passwordForm.reset();
      },
      error: (err: any) => {
        this.alertService.errorAlert('Error', err.error?.message || 'La contraseña actual no es correcta o hubo un error');
      }
    });
  }
}
