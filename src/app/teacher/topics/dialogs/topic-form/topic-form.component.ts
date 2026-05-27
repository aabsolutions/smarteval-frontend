import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TopicsService, Topic } from '../../topics.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-topic-form',
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
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss'],
})
export class TopicFormDialogComponent {
  topicForm: FormGroup;
  isEdit = false;

  private topicsService = inject(TopicsService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);

  constructor(
    public dialogRef: MatDialogRef<TopicFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { topic?: Topic }
  ) {
    this.isEdit = !!data?.topic;
    this.topicForm = this.fb.group({
      name: [data?.topic?.name || '', [Validators.required]],
      description: [data?.topic?.description || ''],
    });
  }

  onSubmit() {
    if (this.topicForm.invalid) return;

    const topicData = this.topicForm.value;

    if (this.isEdit && this.data.topic) {
      this.topicsService.updateTopic(this.data.topic._id, topicData).subscribe({
        next: (res) => {
          this.alertService.successToast('Tema actualizado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error updating topic'),
      });
    } else {
      this.topicsService.createTopic(topicData).subscribe({
        next: (res) => {
          this.alertService.successToast('Tema creado');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error creating topic'),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
