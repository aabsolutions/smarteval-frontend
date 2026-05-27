import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StudentsService, Student } from '../../students.service';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-student-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormDialogComponent implements OnInit {
  studentForm: FormGroup;
  isEdit = false;
  groups: any[] = [];

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<StudentFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student?: Student; groups: any[] }
  ) {
    this.groups = data.groups || [];
    this.isEdit = !!data.student;

    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      identifier: ['', Validators.required],
      email: ['', [Validators.email]],
      groupId: ['', Validators.required],
      password: [''],
    });

    if (!this.isEdit) {
      this.studentForm.get('password')?.setValidators([Validators.required]);
    }
  }

  ngOnInit(): void {
    if (this.isEdit && this.data.student) {
      this.studentForm.patchValue({
        name: this.data.student.name,
        identifier: this.data.student.identifier,
        email: this.data.student.email,
        groupId: this.data.student.groupId?._id || this.data.student.groupId,
      });
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) return;

    const formValue = this.studentForm.value;
    if (this.isEdit && !formValue.password) {
      delete formValue.password;
    }

    if (this.isEdit) {
      this.studentsService.updateStudent(this.data.student!._id, formValue).subscribe({
        next: (res) => {
          this.alertService.successToast('Estudiante actualizado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al actualizar'),
      });
    } else {
      this.studentsService.createStudent(formValue).subscribe({
        next: (res) => {
          this.alertService.successToast('Estudiante creado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al crear'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
