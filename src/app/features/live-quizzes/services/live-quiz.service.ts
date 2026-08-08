import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LiveQuiz, CreateLiveQuizPayload, ImportQuestionsPayload } from '../models/live-quiz.model';

@Injectable({
  providedIn: 'root'
})
export class LiveQuizService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/live-quizzes`;

  create(payload: CreateLiveQuizPayload): Observable<LiveQuiz> {
    return this.http.post<LiveQuiz>(this.apiUrl, payload);
  }

  getTeacherQuizzes(): Observable<LiveQuiz[]> {
    return this.http.get<LiveQuiz[]>(`${this.apiUrl}/teacher`);
  }

  getQuiz(id: string): Observable<LiveQuiz> {
    return this.http.get<LiveQuiz>(`${this.apiUrl}/${id}`);
  }

  update(id: string, payload: Partial<CreateLiveQuizPayload>): Observable<LiveQuiz> {
    return this.http.put<LiveQuiz>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  importQuestions(id: string, payload: ImportQuestionsPayload): Observable<LiveQuiz> {
    return this.http.post<LiveQuiz>(`${this.apiUrl}/${id}/import-questions`, payload);
  }
}
