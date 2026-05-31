import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GroupsService, Group } from '../../groups.service';
import { InstitutionsService, Institution } from '../../../institutions/institutions.service';
import { TeachersService, Teacher } from '../../../teachers/teachers.service';
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
  teachersList: Teacher[] = [];
  institutionsList: Institution[] = [];
  jornadas = ['MATUTINA', 'VESPERTINA', 'NOCTURNA', 'VIRTUAL'];
  niveles = ['EGB MEDIA', 'EGB SUPERIOR', 'BACHILLERATO', 'SUPERIOR'];

  private groupsService = inject(GroupsService);
  private institutionsService = inject(InstitutionsService);
  private teachersService = inject(TeachersService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);
  private http = inject(HttpClient);

  constructor(
    public dialogRef: MatDialogRef<GroupFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group?: Group }
  ) {
    this.isEdit = !!data?.group;
    
    const selectedTeacher = typeof data?.group?.teacher === 'object' ? data?.group?.teacher?._id : data?.group?.teacher;
    const selectedInstitution = typeof data?.group?.institution === 'object' ? data?.group?.institution?._id : data?.group?.institution;

    this.groupForm = this.fb.group({
      name: [data?.group?.name || '', [Validators.required]],
      description: [data?.group?.description || ''],
      institution: [selectedInstitution || '', [Validators.required]],
      jornada: [data?.group?.jornada || '', [Validators.required]],
      nivel: [data?.group?.nivel || '', [Validators.required]],
      teacher: [selectedTeacher || null]
    });
  }

  ngOnInit() {
    this.fetchTeachers();
    this.fetchInstitutions();
  }

  fetchInstitutions() {
    this.institutionsService.getAllInstitutions().subscribe({
      next: (data) => this.institutionsList = data,
      error: (err) => console.error('Error fetching institutions', err)
    });
  }

  fetchTeachers() {
    this.teachersService.getAllTeachers().subscribe({
      next: (res) => {
        this.teachersList = res;
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
