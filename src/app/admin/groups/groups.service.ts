import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Group {
  _id: string;
  name: string;
  description?: string;
  institution?: any;
  jornada?: string;
  nivel?: string;
  teacher?: any;
  createdBy?: any;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/groups';

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl);
  }

  createGroup(group: Partial<Group>): Observable<Group> {
    return this.http.post<Group>(this.apiUrl, group);
  }

  updateGroup(id: string, group: Partial<Group>): Observable<Group> {
    return this.http.put<Group>(`${this.apiUrl}/${id}`, group);
  }

  deleteGroup(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  assignTeacher(groupId: string, teacherId: string): Observable<Group> {
    return this.http.post<Group>(`${this.apiUrl}/${groupId}/assign-teacher`, { teacherId });
  }
}
