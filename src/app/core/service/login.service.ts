import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@core/models/interface';
import { of, switchMap } from 'rxjs';
import { LocalStorageService } from '@shared/services';
import { JWT } from './JWT';
const jwt = new JWT();

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  protected http = inject(HttpClient);
  private store = inject(LocalStorageService);

  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin@123',
      name: 'Sarah Smith',
      email: 'admin@school.org',
      roles: [
        {
          name: 'ADMIN',
          priority: 1,
        },
      ],
      permissions: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
      avatar: 'admin.jpg',
    },
    {
      id: 2,
      username: 'teacher',
      password: 'teacher@123',
      name: 'Ashton Cox',
      email: 'teacher@school.org',
      roles: [
        {
          name: 'TEACHER',
          priority: 2,
        },
      ],
      permissions: ['canAdd', 'canEdit', 'canRead'],
      avatar: 'teacher.jpg',
      refresh_token: true,
    },
    {
      id: 3,
      username: 'student',
      password: 'student@123',
      name: 'Cara Stevens',
      email: 'student@school.org',
      roles: [
        {
          name: 'STUDENT',
          priority: 3,
        },
      ],
      permissions: ['canRead'],
      avatar: 'student.jpg',
      refresh_token: true,
    },
  ];

  login(username: string, password: string, _rememberMe = false) {
    return this.http.post<any>('/api/auth/login', { username, password });
  }

  refresh() {
    const tokenData: any = this.store.get('redstar-token');
    const refreshToken = tokenData?.refresh_token;
    if (!refreshToken) {
      return of({ status: 401, body: {} });
    }
    return this.http.post<any>('/api/auth/refresh', { refresh_token: refreshToken }).pipe(
      switchMap((response) => {
        return of({ status: 200, body: response });
      })
    );
  }

  logout() {
    this.store.clear();
    return of({ success: true });
  }

  user() {
    return this.http.get<User>('/api/auth/me');
  }
}
