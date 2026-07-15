import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  _id: string;
  type: string;
  statement: string;
  options: string[];
  correctAnswers: string[];
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topicId: any;
  teacherId: any;
  imageUrl?: string;
  imagePublicId?: string;
}

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/questions';

  getAllQuestions(topicId?: string): Observable<Question[]> {
    let params = new HttpParams();
    if (topicId) {
      params = params.set('topicId', topicId);
    }
    return this.http.get<Question[]>(this.apiUrl, { params });
  }

  createQuestion(question: Partial<Question>): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  createBulkQuestions(questions: Partial<Question>[]): Observable<Question[]> {
    return this.http.post<Question[]>(`${this.apiUrl}/bulk`, { questions });
  }

  updateQuestion(id: string, question: Partial<Question>): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/${id}`, question);
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateBulkPoints(ids: string[], points: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk-points`, { ids, points });
  }

  deleteBulk(ids: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk-delete`, { ids });
  }

  uploadImage(file: File): Observable<{ url: string; publicId: string }> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<{ url: string; publicId: string }>(`${this.apiUrl}/upload-image`, formData);
  }

  exportDocxByTopic(topicId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export-docx`, {
      params: { topicId },
      responseType: 'blob'
    });
  }
}
