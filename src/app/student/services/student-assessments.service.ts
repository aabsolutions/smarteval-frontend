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

  getAvailableAssessments(groupId?: string): Observable<any[]> {
    let params = new HttpParams();
    if (groupId) params = params.set('groupId', groupId);
    return this.http.get<any[]>('/api/assessments/student', { params });
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
}
