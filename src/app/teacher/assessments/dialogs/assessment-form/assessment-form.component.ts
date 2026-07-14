import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssessmentsService } from '../../assessments.service';
import { GroupsService } from '../../../../admin/groups/groups.service';
import { QuestionsService, Question } from '../../../questions/questions.service';
import { TopicsService, Topic } from '../../../topics/topics.service';
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
  questions: Question[] = [];
  isEdit = false;
  assessmentData: any;

  private fb = inject(FormBuilder);
  private assessmentsService = inject(AssessmentsService);
  private topicsService = inject(TopicsService);
  private groupsService = inject(GroupsService);
  private questionsService = inject(QuestionsService);
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
      isCumulative: [this.assessmentData.isCumulative ?? false],
      cumulativeQuestionIds: [this.assessmentData.cumulativeQuestionIds || []],
      shuffleOptions: [this.assessmentData.shuffleOptions ?? true],
      antiCheat: [this.assessmentData.antiCheat ?? false],
      maxAttempts: [this.assessmentData.maxAttempts || 1, [Validators.required, Validators.min(1)]],
      isSimulator: [this.assessmentData.isSimulator ?? false],
      flashcardsTimeLimitMinutes: [this.assessmentData.flashcardsTimeLimitMinutes || 0, [Validators.min(0)]]
    });

    if (this.isEdit) {
      // Disable all fields except allowed ones
      const editableFields = ['title', 'description', 'endTime', 'durationMinutes', 'maxAttempts', 'flashcardsTimeLimitMinutes'];
      Object.keys(this.assessmentForm.controls).forEach(key => {
        if (!editableFields.includes(key)) {
          this.assessmentForm.get(key)?.disable();
        }
      });
    }

    this.topicsService.getAllTopics().subscribe({
      next: (data) => this.topics = data
    });

    this.questionsService.getAllQuestions().subscribe({
      next: (data) => this.questions = data
    });

    this.groupsService.getAllGroups().subscribe({
      next: (data) => this.groups = data
    });
  }

  onSubmit(): void {
    const isCumul = this.assessmentForm.get('isCumulative')?.value;
    
    // Custom validation
    if (isCumul) {
      this.assessmentForm.get('topicId')?.setErrors(null);
      this.assessmentForm.get('totalQuestionsToPull')?.setErrors(null);
      
      const qIds = this.assessmentForm.get('cumulativeQuestionIds')?.value;
      if (!qIds || qIds.length === 0) {
        this.alertService.errorAlert('Error', 'Debes seleccionar al menos una pregunta para un examen acumulativo.');
        return;
      }
    } else {
      if (!this.assessmentForm.get('topicId')?.value) {
        this.assessmentForm.get('topicId')?.setErrors({ required: true });
        return;
      }
    }

    if (this.assessmentForm.invalid && !isCumul) return;

    if (this.isEdit) {
      // Send allowed editable fields
      const formValue = this.assessmentForm.getRawValue(); // gets values even if disabled, but we only pick the editable ones
      const updateData = { 
        title: formValue.title,
        description: formValue.description,
        endTime: new Date(formValue.endTime).toISOString(),
        durationMinutes: formValue.durationMinutes,
        maxAttempts: formValue.maxAttempts,
        flashcardsTimeLimitMinutes: formValue.flashcardsTimeLimitMinutes
      };
      this.assessmentsService.updateAssessment(this.assessmentData._id, updateData).subscribe({
        next: (res) => {
          this.alertService.successToast('Examen actualizado con éxito');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al actualizar examen'),
      });
    } else {
      const createData = {
        ...this.assessmentForm.value,
        startTime: new Date(this.assessmentForm.value.startTime).toISOString(),
        endTime: new Date(this.assessmentForm.value.endTime).toISOString()
      };
      
      // Fix validation for creation payload
      if (isCumul) {
        delete createData.topicId;
        delete createData.totalQuestionsToPull;
      } else {
        delete createData.cumulativeQuestionIds;
      }
      
      this.assessmentsService.createAssessment(createData).subscribe({
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

  // Helper getters
  get filteredQuestions() {
    const topicId = this.assessmentForm.get('topicId')?.value;
    if (topicId) {
      return this.questions.filter(q => q.topicId?._id === topicId);
    }
    return this.questions;
  }

  get cumulativeQuestionsControl() {
    return this.assessmentForm.get('cumulativeQuestionIds');
  }

  toggleQuestionSelection(qId: string) {
    const current = this.cumulativeQuestionsControl?.value || [];
    if (current.includes(qId)) {
      this.cumulativeQuestionsControl?.setValue(current.filter((id: string) => id !== qId));
    } else {
      this.cumulativeQuestionsControl?.setValue([...current, qId]);
    }
  }
}
