import { AuthService } from '../service/auth.service';
import { Injectable, inject, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { TokenService } from '../service/token.service';
import { LocalStorageService } from '@shared/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private authenticationService = inject(AuthService);
  private tokenService = inject(TokenService);
  private store = inject(LocalStorageService);
  private httpBackend = inject(HttpBackend);
  
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          if (request.url.includes('/auth/login') || request.url.includes('/auth/refresh')) {
            this.authenticationService.logout();
            location.reload();
            return throwError(() => err);
          }
          
          return this.handle401Error(request, next, err);
        }

        const error = err.error?.message || err.statusText;
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler, originalError: any) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const tokenData: any = this.store.get('redstar-token');
      const refreshToken = tokenData?.refresh_token;

      if (!refreshToken) {
        this.isRefreshing = false;
        this.authenticationService.logout();
        location.reload();
        return throwError(() => new Error('No refresh token'));
      }

      // Use a fresh HttpClient to avoid triggering interceptors again in a loop
      const http = new HttpClient(this.httpBackend);

      return http.post<any>('/api/auth/refresh', { refresh_token: refreshToken }).pipe(
        switchMap((tokenResponse: any) => {
          this.isRefreshing = false;
          
          if (tokenResponse?.access_token) {
            const currentTokenData: any = this.store.get('redstar-token');
            const newTokenData = {
              ...currentTokenData,
              access_token: tokenResponse.access_token,
              expires_in: tokenResponse.expires_in
            };
            this.tokenService.set(newTokenData);
            
            this.refreshTokenSubject.next(tokenResponse.access_token);
            
            const authReq = request.clone({
              setHeaders: {
                Authorization: `Bearer ${tokenResponse.access_token}`
              }
            });
            return next.handle(authReq);
          }
          
          this.authenticationService.logout();
          location.reload();
          return throwError(() => new Error('Session expired'));
        }),
        catchError((err) => {
          this.isRefreshing = false;
          this.authenticationService.logout();
          location.reload();
          return throwError(() => err);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(request.clone({
            setHeaders: {
              Authorization: `Bearer ${jwt}`
            }
          }));
        })
      );
    }
  }
}
