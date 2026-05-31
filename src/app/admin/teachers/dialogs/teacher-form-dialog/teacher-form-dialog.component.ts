import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TeachersService, Teacher } from '../../teachers.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-teacher-form-dialog',
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
  templateUrl: './teacher-form-dialog.component.html',
})
export class TeacherFormDialogComponent {
  teacherForm: FormGroup;
  isEdit = false;

  private teachersService = inject(TeachersService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);

  constructor(
    public dialogRef: MatDialogRef<TeacherFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teacher?: Teacher }
  ) {
    this.isEdit = !!data?.teacher;

    this.teacherForm = this.fb.group({
      identifier: [data?.teacher?.identifier || '', [Validators.required]],
      name: [data?.teacher?.name || '', [Validators.required]],
      email: [data?.teacher?.email || '', [Validators.email]],
      phone: [data?.teacher?.phone || ''],
    });
  }

  onSubmit() {
    if (this.teacherForm.invalid) return;

    const teacherData = this.teacherForm.value;

    if (this.isEdit && this.data.teacher) {
      this.teachersService.updateTeacher(this.data.teacher._id, teacherData).subscribe({
        next: (res) => {
          this.alertService.successToast('Docente actualizado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error actualizando docente'),
      });
    } else {
      this.teachersService.createTeacher(teacherData).subscribe({
        next: (res) => {
          this.alertService.successToast('Docente creado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error creando docente'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
