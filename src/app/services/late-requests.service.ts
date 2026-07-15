import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LateRequest {
  _id: string;
  studentId: any;
  teacherId: any;
  assessmentId: any;
  reason: string;
  imageUrls: string[];
  status: string;
  teacherComment?: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LateRequestsService {
  private apiUrl = `/api/late-requests`;

  constructor(private http: HttpClient) { }

  createRequest(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateRequest(id: string, data: FormData): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/update`, data);
  }

  getStudentRequests(): Observable<LateRequest[]> {
    return this.http.get<LateRequest[]>(`${this.apiUrl}/student`);
  }

  getTeacherRequests(): Observable<LateRequest[]> {
    return this.http.get<LateRequest[]>(`${this.apiUrl}/teacher`);
  }

  updateStatus(id: string, status: string, teacherComment?: string, extensionUntil?: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status, teacherComment, extensionUntil });
  }

  cancelRequest(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/cancel`, {});
  }

  deleteRequest(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
