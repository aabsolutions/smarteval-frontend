import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InstitutionsService, Institution } from '../../institutions.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-institution-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss'],
})
export class InstitutionFormDialogComponent {
  institutionForm: FormGroup;
  isEdit = false;
  logoFile: File | null = null;
  coverFile: File | null = null;
  logoPreview: string | ArrayBuffer | null = null;
  coverPreview: string | ArrayBuffer | null = null;

  private institutionsService = inject(InstitutionsService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);

  constructor(
    public dialogRef: MatDialogRef<InstitutionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { institution?: Institution }
  ) {
    this.isEdit = !!data?.institution;
    
    this.institutionForm = this.fb.group({
      name: [data?.institution?.name || '', [Validators.required]],
      reportIdentification: [data?.institution?.reportIdentification || ''],
    });

    if (data?.institution?.logoUrl) {
      this.logoPreview = data.institution.logoUrl;
    }
    if (data?.institution?.coverUrl) {
      this.coverPreview = data.institution.coverUrl;
    }
  }

  onFileChange(event: any, type: 'logo' | 'cover') {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        this.alertService.errorAlert('Error', 'El archivo supera el tamaño máximo permitido (2MB)');
        return;
      }
      if (!file.type.match(/image\/(jpeg|png)/)) {
        this.alertService.errorAlert('Error', 'Formato no válido. Solo se permiten imágenes JPG y PNG.');
        return;
      }

      if (type === 'logo') {
        this.logoFile = file;
      } else {
        this.coverFile = file;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'logo') {
          this.logoPreview = e.target?.result || null;
        } else {
          this.coverPreview = e.target?.result || null;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.institutionForm.invalid) return;

    const formData = new FormData();
    formData.append('name', this.institutionForm.get('name')?.value);
    
    const reportId = this.institutionForm.get('reportIdentification')?.value;
    if (reportId) {
      formData.append('reportIdentification', reportId);
    }

    if (this.logoFile) {
      formData.append('logo', this.logoFile);
    }
    if (this.coverFile) {
      formData.append('cover', this.coverFile);
    }

    if (this.isEdit && this.data.institution) {
      this.institutionsService.updateInstitution(this.data.institution._id, formData).subscribe({
        next: (res) => {
          this.alertService.successToast('Institución actualizada');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error actualizando institución'),
      });
    } else {
      this.institutionsService.createInstitution(formData).subscribe({
        next: (res) => {
          this.alertService.successToast('Institución creada');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error creando institución'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
