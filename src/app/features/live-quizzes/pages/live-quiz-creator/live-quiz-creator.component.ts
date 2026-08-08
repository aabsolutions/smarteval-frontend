import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LiveQuizService } from '../../services/live-quiz.service';
import { QuestionsService, Question } from '../../../../teacher/questions/questions.service';
import { LiveQuizQuestion } from '../../models/live-quiz.model';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-live-quiz-creator',
  standalone: true,
  imports: [CommonModule, FormsModule, BreadcrumbComponent],
  templateUrl: './live-quiz-creator.component.html',
  styleUrls: ['./live-quiz-creator.component.css']
})
export class LiveQuizCreatorComponent implements OnInit {
  public quizTitle = '';
  public defaultTimeLimit = 30;
  
  public bankQuestions: Question[] = [];
  public selectedQuestionIds: Set<string> = new Set();

  private liveQuizService = inject(LiveQuizService);
  private questionsService = inject(QuestionsService);
  private router = inject(Router);

  public isLoading = false;

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.isLoading = true;
    this.questionsService.getAllQuestions().subscribe({
      next: (questions) => {
        this.bankQuestions = questions;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleSelection(id: string) {
    if (this.selectedQuestionIds.has(id)) {
      this.selectedQuestionIds.delete(id);
    } else {
      this.selectedQuestionIds.add(id);
    }
  }

  selectAll() {
    if (this.selectedQuestionIds.size === this.bankQuestions.length) {
      this.selectedQuestionIds.clear();
    } else {
      this.bankQuestions.forEach(q => this.selectedQuestionIds.add(q._id));
    }
  }

  createQuiz() {
    if (!this.quizTitle.trim()) {
      alert('Debes ingresar un título para el quiz.');
      return;
    }
    if (this.selectedQuestionIds.size === 0) {
      alert('Debes seleccionar al menos una pregunta.');
      return;
    }

    this.isLoading = true;

    // Filtrar y mapear las preguntas seleccionadas
    const questionsToInclude: LiveQuizQuestion[] = this.bankQuestions
      .filter(q => this.selectedQuestionIds.has(q._id))
      .map(q => ({
        questionId: q._id,
        type: q.type,
        statement: q.statement,
        options: q.options,
        correctAnswers: q.correctAnswers,
        points: q.points,
        imageUrl: q.imageUrl,
        timeLimitSeconds: this.defaultTimeLimit
      }));

    this.liveQuizService.create({
      title: this.quizTitle,
      questions: questionsToInclude
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/teacher/live-quizzes']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        alert('Ocurrió un error al crear el quiz');
      }
    });
  }

  cancel() {
    this.router.navigate(['/teacher/live-quizzes']);
  }
}
