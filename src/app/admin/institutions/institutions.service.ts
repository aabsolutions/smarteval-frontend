import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Institution {
  _id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class InstitutionsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/institutions';

  getAllInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl);
  }

  createInstitution(institution: Partial<Institution>): Observable<Institution> {
    return this.http.post<Institution>(this.apiUrl, institution);
  }

  updateInstitution(id: string, institution: Partial<Institution>): Observable<Institution> {
    return this.http.put<Institution>(`${this.apiUrl}/${id}`, institution);
  }

  deleteInstitution(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
