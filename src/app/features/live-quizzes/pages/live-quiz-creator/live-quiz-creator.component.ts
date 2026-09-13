import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LiveQuizService } from '../../services/live-quiz.service';
import { QuestionsService, Question } from '../../../../teacher/questions/questions.service';
import { LiveQuizQuestion } from '../../models/live-quiz.model';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

export interface TopicGroup {
  topicId: string;
  topicName: string;
  questions: Question[];
}

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
  public topicGroups: TopicGroup[] = [];
  public selectedQuestionIds: Set<string> = new Set();
  public collapsedTopics: Set<string> = new Set();

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
        this.topicGroups = this.groupByTopic(questions);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  private groupByTopic(questions: Question[]): TopicGroup[] {
    const groups = new Map<string, TopicGroup>();
    for (const q of questions) {
      const topic = q.topicId as { _id?: string; name?: string } | string;
      const topicId = (typeof topic === 'object' && topic?._id) ? topic._id : String(topic ?? 'sin-tema');
      const topicName = (typeof topic === 'object' && topic?.name) ? topic.name : 'Sin tema';

      if (!groups.has(topicId)) {
        groups.set(topicId, { topicId, topicName, questions: [] });
      }
      groups.get(topicId)!.questions.push(q);
    }
    return Array.from(groups.values()).sort((a, b) => a.topicName.localeCompare(b.topicName));
  }

  toggleTopicCollapse(topicId: string) {
    if (this.collapsedTopics.has(topicId)) {
      this.collapsedTopics.delete(topicId);
    } else {
      this.collapsedTopics.add(topicId);
    }
  }

  isTopicFullySelected(group: TopicGroup): boolean {
    return group.questions.every(q => this.selectedQuestionIds.has(q._id));
  }

  isTopicPartiallySelected(group: TopicGroup): boolean {
    const selectedCount = group.questions.filter(q => this.selectedQuestionIds.has(q._id)).length;
    return selectedCount > 0 && selectedCount < group.questions.length;
  }

  toggleTopicSelection(group: TopicGroup) {
    if (this.isTopicFullySelected(group)) {
      group.questions.forEach(q => this.selectedQuestionIds.delete(q._id));
    } else {
      group.questions.forEach(q => this.selectedQuestionIds.add(q._id));
    }
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
