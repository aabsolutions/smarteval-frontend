import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GroupsService, Group } from '../../groups.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-group-form',
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
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormDialogComponent {
  groupForm: FormGroup;
  isEdit = false;

  private groupsService = inject(GroupsService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);

  constructor(
    public dialogRef: MatDialogRef<GroupFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group?: Group }
  ) {
    this.isEdit = !!data?.group;
    this.groupForm = this.fb.group({
      name: [data?.group?.name || '', [Validators.required]],
      description: [data?.group?.description || ''],
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
