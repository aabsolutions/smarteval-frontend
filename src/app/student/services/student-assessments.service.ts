import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AssessmentAttempt {
  _id: string;
  assessmentId: any;
  status: string;
  startTime: string;
  endTime?: string;
  score: number;
  maxScore: number;
  questionsPulled: any[];
  studentAnswers: any[];
}

@Injectable({ providedIn: 'root' })
export class StudentAssessmentsService {
  private http = inject(HttpClient);

  getAvailableAssessments(): Observable<any[]> {
    return this.http.get<any[]>('/api/assessments/student');
  }

  getStudentHistory(): Observable<any[]> {
    return this.http.get<any[]>('/api/assessment-attempts/student/history');
  }

  startAttempt(assessmentId: string): Observable<AssessmentAttempt> {
    return this.http.post<AssessmentAttempt>(`/api/assessment-attempts/start/${assessmentId}`, {});
  }

  submitAttempt(
    attemptId: string, 
    answers: { questionId: string, answers: string[] }[],
    antiCheatLog?: any,
    isTimeout?: boolean
  ): Observable<AssessmentAttempt> {
    return this.http.post<AssessmentAttempt>(`/api/assessment-attempts/submit/${attemptId}`, { 
      answers,
      antiCheatLog,
      isTimeout
    });
  }

  getAttemptStatus(assessmentId: string): Observable<any> {
    return this.http.get<any>(`/api/assessment-attempts/status/${assessmentId}`);
  }

  getFlashcards(assessmentId: string): Observable<{ flashcardsTimeLimitMinutes: number, questions: any[] }> {
    return this.http.get<{ flashcardsTimeLimitMinutes: number, questions: any[] }>(`/api/assessments/${assessmentId}/flashcards`);
  }

  trackFlashcardTime(assessmentId: string, seconds: number): Observable<void> {
    return this.http.post<void>(`/api/assessments/${assessmentId}/flashcards/track-time`, { seconds });
  }
}
