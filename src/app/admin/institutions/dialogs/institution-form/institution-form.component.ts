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
    });
  }

  onSubmit() {
    if (this.institutionForm.invalid) return;

    const institutionData = this.institutionForm.value;

    if (this.isEdit && this.data.institution) {
      this.institutionsService.updateInstitution(this.data.institution._id, institutionData).subscribe({
        next: (res) => {
          this.alertService.successToast('Institución actualizada');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error actualizando institución'),
      });
    } else {
      this.institutionsService.createInstitution(institutionData).subscribe({
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
