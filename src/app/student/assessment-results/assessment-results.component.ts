import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
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
export class AssessmentResultsComponent implements OnInit, OnDestroy {
  attemptId!: string;
  assessmentId!: string;
  attempt: any;
  history: any[] = [];
  processedQuestions: any[] = [];
  
  canReviewQuestions = false;
  reviewTimeRemaining = 0;
  reviewTimerSub?: Subscription;

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
        
        this.history = status.history.sort((a: any, b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
        
        let maxScore = -1;
        this.history.forEach((h: any) => { if (h.score >= maxScore) maxScore = h.score; });
        if (this.history.length > 1) {
           const bestAttempt = this.history.filter((h: any) => h.score === maxScore).pop();
           if (bestAttempt) bestAttempt.isHighestScore = true;
        }

        this.processFeedback();
        
        const REVIEW_LIMIT_MS = 30000; // 30 segundos para revisar
        const endTimeMs = new Date(this.attempt.endTime).getTime();
        const nowMs = Date.now();
        
        let timeDiff = nowMs - endTimeMs;
        if (timeDiff < 0) timeDiff = 0;
        
        if (timeDiff < REVIEW_LIMIT_MS) {
          this.canReviewQuestions = true;
          this.reviewTimeRemaining = Math.floor((REVIEW_LIMIT_MS - timeDiff) / 1000);
          
          this.reviewTimerSub = interval(1000).subscribe(() => {
            this.reviewTimeRemaining--;
            if (this.reviewTimeRemaining <= 0) {
              this.canReviewQuestions = false;
              this.reviewTimerSub?.unsubscribe();
              this.router.navigate(['/student/assessments']);
            }
          });
        } else {
          this.canReviewQuestions = false;
        }

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
      const normalizeStr = (str: string) => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
      const userAns = normalizeStr(studentAnswers[0]);
      return correctAnswers.some(c => normalizeStr(c) === userAns);
    }

    if (type === 'matching') {
      if (studentAnswers.length !== correctAnswers.length) return false;
      return studentAnswers.every((ans, i) => ans === correctAnswers[i]);
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
  
  get formattedTimer() {
    const m = Math.floor(this.reviewTimeRemaining / 60);
    const s = this.reviewTimeRemaining % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    this.reviewTimerSub?.unsubscribe();
  }
}
