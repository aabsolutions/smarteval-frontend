import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Teacher {
  _id: string;
  identifier: string;
  name: string;
  email?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private http = inject(HttpClient);
  private apiUrl = '/api/teachers';

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacher(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/${id}`);
  }

  createTeacher(teacher: any): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, teacher);
  }

  updateTeacher(id: string, teacher: any): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}/${id}`, teacher);
  }

  deleteTeacher(id: string): Observable<Teacher> {
    return this.http.delete<Teacher>(`${this.apiUrl}/${id}`);
  }
}
