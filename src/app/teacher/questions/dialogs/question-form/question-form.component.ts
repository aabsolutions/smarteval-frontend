import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { QuestionsService, Question } from '../../questions.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-question-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormDialogComponent implements OnInit {
  questionForm: FormGroup;
  isEdit = false;
  topics: any[] = [];

  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<QuestionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { question?: Question; topicId: string, topics: any[] }
  ) {
    this.topics = data.topics || [];
    this.isEdit = !!data.question;

    this.questionForm = this.fb.group({
      topicId: [data.topicId, Validators.required],
      type: ['single-choice', Validators.required],
      statement: ['', Validators.required],
      difficulty: ['medium', Validators.required],
      points: [1, [Validators.required, Validators.min(1)]],
      options: this.fb.array([]),
      correctAnswers: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.questionForm.get('type')?.valueChanges.subscribe(type => {
      this.handleTypeChange(type);
    });

    if (this.isEdit && this.data.question) {
      this.questionForm.patchValue({
        topicId: this.data.question.topicId._id || this.data.question.topicId,
        type: this.data.question.type,
        statement: this.data.question.statement,
        difficulty: this.data.question.difficulty,
        points: this.data.question.points,
      });

      const opts = this.data.question.options || [];
      const answers = this.data.question.correctAnswers || [];
      
      this.handleTypeChange(this.data.question.type, opts, answers);
    } else {
      this.handleTypeChange('single-choice');
    }
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  get correctAnswers() {
    return this.questionForm.get('correctAnswers') as FormArray;
  }

  handleTypeChange(type: string, initialOptions: string[] = [], initialAnswers: string[] = []) {
    this.options.clear();
    this.correctAnswers.clear();

    if (type === 'single-choice' || type === 'multiple-choice') {
      if (initialOptions.length > 0) {
        initialOptions.forEach(opt => this.addOption(opt));
      } else {
        this.addOption();
        this.addOption();
      }
      if (initialAnswers.length > 0) {
        initialAnswers.forEach(ans => this.addCorrectAnswer(ans));
      }
    } else if (type === 'true-false') {
      this.addOption('Verdadero');
      this.addOption('Falso');
      if (initialAnswers.length > 0) {
        this.addCorrectAnswer(initialAnswers[0]);
      }
    } else if (type === 'fill-blank') {
      if (initialAnswers.length > 0) {
        initialAnswers.forEach(ans => this.addCorrectAnswer(ans));
      } else {
        this.addCorrectAnswer();
      }
    } else if (type === 'matching') {
      if (initialOptions.length > 0 && initialAnswers.length === initialOptions.length) {
        initialOptions.forEach((opt, idx) => this.addMatchingPair(opt, initialAnswers[idx]));
      } else {
        this.addMatchingPair();
        this.addMatchingPair();
        this.addMatchingPair();
      }
    }
  }

  addMatchingPair(option = '', correctAnswer = '') {
    this.options.push(this.fb.control(option, Validators.required));
    this.correctAnswers.push(this.fb.control(correctAnswer, Validators.required));
  }

  removeMatchingPair(index: number) {
    this.options.removeAt(index);
    this.correctAnswers.removeAt(index);
  }

  addOption(value = '') {
    this.options.push(this.fb.control(value, Validators.required));
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  addCorrectAnswer(value = '') {
    this.correctAnswers.push(this.fb.control(value, Validators.required));
  }

  removeCorrectAnswer(index: number) {
    this.correctAnswers.removeAt(index);
  }

  setSingleCorrectAnswer(value: string) {
    this.correctAnswers.clear();
    this.correctAnswers.push(this.fb.control(value));
  }

  toggleMultipleCorrectAnswer(value: string, event: any) {
    if (event.checked) {
      this.correctAnswers.push(this.fb.control(value));
    } else {
      const idx = this.correctAnswers.controls.findIndex(c => c.value === value);
      if (idx >= 0) this.correctAnswers.removeAt(idx);
    }
  }

  isMultipleCorrect(value: string) {
    return this.correctAnswers.controls.some(c => c.value === value);
  }

  getSingleCorrectAnswer() {
    return this.correctAnswers.length > 0 ? this.correctAnswers.at(0).value : null;
  }

  onSubmit() {
    if (this.questionForm.invalid) return;

    const formValue = this.questionForm.value;
    
    if (formValue.type === 'single-choice' && formValue.correctAnswers.length !== 1) {
      this.alertService.errorAlert('Atención', 'Debe seleccionar la respuesta correcta.');
      return;
    }
    if (formValue.type === 'multiple-choice' && formValue.correctAnswers.length === 0) {
      this.alertService.errorAlert('Atención', 'Debe seleccionar al menos una respuesta correcta.');
      return;
    }
    if (formValue.type === 'true-false' && formValue.correctAnswers.length !== 1) {
      this.alertService.errorAlert('Atención', 'Debe seleccionar si es Verdadero o Falso.');
      return;
    }
    if (formValue.type === 'matching' && formValue.options.length < 3) {
      this.alertService.errorAlert('Atención', 'Debe agregar al menos 3 pares para emparejar.');
      return;
    }

    if (this.isEdit) {
      this.questionsService.updateQuestion(this.data.question!._id, formValue).subscribe({
        next: (res) => {
          this.alertService.successToast('Pregunta actualizada');
          this.dialogRef.close(res);
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al actualizar'),
      });
    } else {
      this.questionsService.createQuestion(formValue).subscribe({
        next: (res) => {
          this.alertService.successToast('Pregunta creada');
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
