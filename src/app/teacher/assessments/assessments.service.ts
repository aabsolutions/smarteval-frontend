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

  getAllAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/teacher`);
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
}
