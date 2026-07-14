import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Assessment {
  _id: string;
  title: string;
  description?: string;
  topicId: any;
  teacherId: any;
  groupIds: any[];
  startTime: string;
  endTime: string;
  durationMinutes: number;
  totalQuestionsToPull: number;
  shuffleOptions: boolean;
  maxAttempts: number;
  isSimulator?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AssessmentsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/assessments';

  getAllAssessments(archived: boolean = false): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/teacher?archived=${archived}`);
  }

  createAssessment(assessment: Partial<Assessment>): Observable<Assessment> {
    return this.http.post<Assessment>(this.apiUrl, assessment);
  }

  updateAssessment(id: string, assessment: Partial<Assessment>): Observable<Assessment> {
    return this.http.put<Assessment>(`${this.apiUrl}/${id}`, assessment);
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/${id}`);
  }

  deleteAssessment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  toggleArchive(id: string): Observable<Assessment> {
    return this.http.post<Assessment>(`${this.apiUrl}/${id}/archive`, {});
  }

  getResults(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/results`);
  }

  getAttemptDetail(id: string, attemptId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/results/${attemptId}`);
  }

  getAnalytics(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/analytics`);
  }

  exportExcel(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/export/excel`, { responseType: 'blob' });
  }

  archiveAttempt(attemptId: string): Observable<any> {
    return this.http.patch(`/api/assessment-attempts/${attemptId}/archive`, {});
  }

  getArchivedAttempts(assessmentId: string): Observable<any> {
    return this.http.get(`/api/assessment-attempts/${assessmentId}/archived`);
  }

  generatePaperAttempts(assessmentId: string, studentIds: string[]): Observable<any[]> {
    return this.http.post<any[]>('/api/assessment-attempts/generate-paper', { assessmentId, studentIds });
  }

  getEligibleStudents(assessmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/assessment-attempts/eligible-students/${assessmentId}`);
  }
}
