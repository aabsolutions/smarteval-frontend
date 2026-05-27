import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentAssessmentsService } from '../services/student-assessments.service';

@Component({
  selector: 'app-assessment-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './assessment-results.component.html'
})
export class AssessmentResultsComponent implements OnInit {
  attemptId!: string;
  assessmentId!: string;
  attempt: any;
  processedQuestions: any[] = [];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentService = inject(StudentAssessmentsService);

  ngOnInit() {
    this.assessmentId = this.route.snapshot.paramMap.get('id')!;
    this.attemptId = this.route.snapshot.paramMap.get('attemptId')!;

    this.studentService.getAttemptStatus(this.assessmentId).subscribe(status => {
      const attempt = status.history.find((h: any) => h._id === this.attemptId);
      if (attempt) {
        this.attempt = attempt;
        this.processFeedback();
      } else {
        this.router.navigate(['/student/assessments']);
      }
    });
  }

  processFeedback() {
    this.processedQuestions = this.attempt.questionsPulled.map((q: any) => {
      const studentAnswerObj = this.attempt.studentAnswers?.find((sa: any) => sa.questionId === q.questionId);
      const studentAnswers = studentAnswerObj?.answers || [];
      
      const isCorrect = this.checkIfCorrect(q.type, studentAnswers, q.correctAnswers);
      
      return {
        ...q,
        studentAnswers,
        isCorrect
      };
    });
  }

  checkIfCorrect(type: string, studentAnswers: string[], correctAnswers: string[]): boolean {
    if (studentAnswers.length === 0) return false;
    
    if (type === 'fill-blank') {
      const userAns = studentAnswers[0].toLowerCase().trim();
      return correctAnswers.some(c => c.toLowerCase().trim() === userAns);
    }
    
    if (studentAnswers.length !== correctAnswers.length) return false;
    
    // Sort to compare regardless of order for multiple choice
    const sortedStudent = [...studentAnswers].sort();
    const sortedCorrect = [...correctAnswers].sort();
    
    return sortedStudent.every((val, index) => val === sortedCorrect[index]);
  }

  get isApproved() {
    return (this.attempt.score / this.attempt.maxScore) >= 0.7; // Changed to 70% per user request previously
  }

  goBack() {
    this.router.navigate(['/student/assessments']);
  }
}
