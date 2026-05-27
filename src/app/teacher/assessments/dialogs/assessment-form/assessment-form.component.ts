import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssessmentsService } from '../../assessments.service';
import { TopicsService, Topic } from '../../../topics/topics.service';
import { GroupsService } from '../../../../admin/groups/groups.service';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-assessment-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './assessment-form.component.html'
})
export class AssessmentFormDialogComponent implements OnInit {
  assessmentForm!: FormGroup;
  topics: Topic[] = [];
  groups: any[] = [];
  isEdit = false;
  assessmentData: any;

  private fb = inject(FormBuilder);
  private assessmentsService = inject(AssessmentsService);
  private topicsService = inject(TopicsService);
  private groupsService = inject(GroupsService);
  public dialogRef = inject(MatDialogRef<AssessmentFormDialogComponent>);
  private alertService = inject(AlertService);
  private dialogData = inject(MAT_DIALOG_DATA, { optional: true });

  ngOnInit(): void {
    this.isEdit = !!this.dialogData?.assessment;
    this.assessmentData = this.dialogData?.assessment || {};

    const toLocalIsoString = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const tzOffset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - tzOffset).toISOString().slice(0, 16);
    };

    this.assessmentForm = this.fb.group({
      title: [this.assessmentData.title || '', Validators.required],
      description: [this.assessmentData.description || ''],
      topicId: [this.assessmentData.topicId?._id || '', Validators.required],
      groupIds: [this.assessmentData.groupIds?.map((g: any) => g._id || g) || [], Validators.required],
      startTime: [toLocalIsoString(this.assessmentData.startTime), Validators.required],
      endTime: [toLocalIsoString(this.assessmentData.endTime), Validators.required],
      durationMinutes: [this.assessmentData.durationMinutes || 60, [Validators.required, Validators.min(1)]],
      totalQuestionsToPull: [this.assessmentData.totalQuestionsToPull || 10, [Validators.required, Validators.min(1)]],
      shuffleOptions: [this.assessmentData.shuffleOptions ?? true],
      antiCheat: [this.assessmentData.antiCheat ?? false],
      maxAttempts: [this.assessmentData.maxAttempts || 1, [Validators.required, Validators.min(1)]],
      isSimulator: [this.assessmentData.isSimulator ?? false]
    });

    if (this.isEdit) {
      // Disable all fields except allowed ones
      const editableFields = ['title', 'description', 'endTime', 'durationMinutes', 'maxAttempts'];
      Object.keys(this.assessmentForm.controls).forEach(key => {
        if (!editableFields.includes(key)) {
          this.assessmentForm.get(key)?.disable();
        }
      });
    }

    this.topicsService.getAllTopics().subscribe({
      next: (data) => this.topics = data
    });

    this.groupsService.getAllGroups().subscribe({
      next: (data) => this.groups = data
    });
  }

  onSubmit(): void {
    if (this.assessmentForm.invalid) return;

    if (this.isEdit) {
      // Send allowed editable fields
      const formValue = this.assessmentForm.getRawValue(); // gets values even if disabled, but we only pick the editable ones
      const updateData = { 
        title: formValue.title,
        description: formValue.description,
        endTime: formValue.endTime,
        durationMinutes: formValue.durationMinutes,
        maxAttempts: formValue.maxAttempts
      };
      this.assessmentsService.updateAssessment(this.assessmentData._id, updateData).subscribe({
        next: (res) => {
          this.alertService.successToast('Examen actualizado con éxito');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al actualizar examen'),
      });
    } else {
      this.assessmentsService.createAssessment(this.assessmentForm.value).subscribe({
        next: (res) => {
          this.alertService.successToast('Examen creado con éxito');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al crear examen'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
