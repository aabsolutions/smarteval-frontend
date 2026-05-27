import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Topic {
  _id: string;
  name: string;
  description?: string;
  teacherId: any;
}

@Injectable({ providedIn: 'root' })
export class TopicsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/topics';

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrl);
  }

  createTopic(topic: Partial<Topic>): Observable<Topic> {
    return this.http.post<Topic>(this.apiUrl, topic);
  }

  updateTopic(id: string, topic: Partial<Topic>): Observable<Topic> {
    return this.http.put<Topic>(`${this.apiUrl}/${id}`, topic);
  }

  deleteTopic(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
