import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GroupsService, Group } from '../../groups.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormDialogComponent implements OnInit {
  groupForm: FormGroup;
  isEdit = false;
  teachersList: any[] = [];

  private groupsService = inject(GroupsService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);
  private http = inject(HttpClient);

  constructor(
    public dialogRef: MatDialogRef<GroupFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group?: Group }
  ) {
    this.isEdit = !!data?.group;
    
    // Si viene group.teachers, nos aseguramos que si son objetos, sacamos el id, si ya son strings los dejamos.
    const selectedTeachers = data?.group?.teachers?.map(t => typeof t === 'string' ? t : t._id) || [];
    
    this.groupForm = this.fb.group({
      name: [data?.group?.name || '', [Validators.required]],
      description: [data?.group?.description || ''],
      teachers: [selectedTeachers]
    });
  }

  ngOnInit() {
    this.fetchTeachers();
  }

  fetchTeachers() {
    this.http.get<any[]>('/api/users').subscribe({
      next: (users) => {
        // Asumiendo que el admin tiene permiso para ver todos los usuarios o ya vienen filtrados
        // Filtramos localmente para asegurarnos de mostrar solo TEACHER
        this.teachersList = users.filter(u => u.roles && u.roles[0]?.name === 'TEACHER');
      },
      error: (err) => console.error('Error fetching teachers', err)
    });
  }

  onSubmit() {
    if (this.groupForm.invalid) return;

    const groupData = this.groupForm.value;

    if (this.isEdit && this.data.group) {
      this.groupsService.updateGroup(this.data.group._id, groupData).subscribe({
        next: (res) => {
          this.alertService.successToast('Grupo actualizado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error updating group'),
      });
    } else {
      this.groupsService.createGroup(groupData).subscribe({
        next: (res) => {
          this.alertService.successToast('Grupo creado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error creating group'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
