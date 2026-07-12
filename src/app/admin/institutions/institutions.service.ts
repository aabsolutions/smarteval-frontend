import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Institution {
  _id: string;
  name: string;
  logoUrl?: string;
  coverUrl?: string;
  reportIdentification?: string;
}

@Injectable({ providedIn: 'root' })
export class InstitutionsService {
  private http = inject(HttpClient);
  private apiUrl = '/api/institutions';

  getAllInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl);
  }

  createInstitution(formData: FormData): Observable<Institution> {
    return this.http.post<Institution>(this.apiUrl, formData);
  }

  updateInstitution(id: string, formData: FormData): Observable<Institution> {
    return this.http.put<Institution>(`${this.apiUrl}/${id}`, formData);
  }

  deleteInstitution(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
