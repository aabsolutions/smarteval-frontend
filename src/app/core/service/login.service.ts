import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@core/models/interface';
import { of, switchMap } from 'rxjs';
import { LocalStorageService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  protected http = inject(HttpClient);
  private store = inject(LocalStorageService);

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
