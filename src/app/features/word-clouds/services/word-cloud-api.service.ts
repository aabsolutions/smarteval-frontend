import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  AppearanceOptions,
  AppearancePayload,
  CreateWordCloudPayload,
  WordCloudReport,
  WordCloudSessionSummary,
} from '../models/word-cloud.model';

@Injectable({
  providedIn: 'root',
})
export class WordCloudApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/word-clouds`;

  getAppearanceOptions(): Observable<AppearanceOptions> {
    return this.http.get<AppearanceOptions>(`${this.apiUrl}/appearance-options`);
  }

  create(payload: CreateWordCloudPayload): Observable<WordCloudSessionSummary> {
    return this.http.post<WordCloudSessionSummary>(this.apiUrl, payload);
  }

  getTeacherSessions(): Observable<WordCloudSessionSummary[]> {
    return this.http.get<WordCloudSessionSummary[]>(`${this.apiUrl}/teacher`);
  }

  getSession(id: string): Observable<WordCloudSessionSummary> {
    return this.http.get<WordCloudSessionSummary>(`${this.apiUrl}/${id}`);
  }

  update(id: string, payload: Partial<CreateWordCloudPayload>): Observable<WordCloudSessionSummary> {
    return this.http.put<WordCloudSessionSummary>(`${this.apiUrl}/${id}`, payload);
  }

  updateAppearance(id: string, payload: AppearancePayload): Observable<WordCloudSessionSummary> {
    return this.http.put<WordCloudSessionSummary>(`${this.apiUrl}/${id}/appearance`, payload);
  }

  uploadBackground(id: string, file: File): Observable<WordCloudSessionSummary> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<WordCloudSessionSummary>(`${this.apiUrl}/${id}/background`, formData);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getReport(id: string): Observable<WordCloudReport> {
    return this.http.get<WordCloudReport>(`${this.apiUrl}/${id}/report`);
  }

  /**
   * El Excel se arma en el backend porque incluye las explicaciones, que nunca
   * viajan a un cliente de estudiante: así lo protege el mismo guard + ownership
   * que todo el módulo.
   */
  downloadExcel(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/export/excel`, { responseType: 'blob' });
  }
}
