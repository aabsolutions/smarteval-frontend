import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  _id: string;
  name: string;
  identifier: string;
  email: string;
  groupId: any;
}

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/students';

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  createStudent(student: any): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  createBulkStudents(students: any[]): Observable<Student[]> {
    return this.http.post<Student[]>(`${this.apiUrl}/bulk`, { students });
  }

  updateStudent(id: string, student: any): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(`${this.apiUrl}/${id}`);
  }
}
