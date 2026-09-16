import { AuthService } from '../service/auth.service';
import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthTokenService } from '../service/auth-token.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private authenticationService = inject(AuthService);
  private authTokenService = inject(AuthTokenService);

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          if (request.url.includes('/auth/login')) {
            // No recargar la pagina, permitir que el componente de login muestre el error.
            return throwError(() => err);
          }
          if (request.url.includes('/auth/refresh')) {
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

      // Delegado en AuthTokenService para compartir el single-flight con los
      // sockets: si el websocket y una request HTTP caen juntos sale UN solo
      // POST /auth/refresh y ambos esperan el mismo resultado.
      return from(this.authTokenService.refresh()).pipe(
        switchMap((accessToken) => {
          this.isRefreshing = false;

          if (!accessToken) {
            this.authenticationService.logout();
            location.reload();
            return throwError(() => new Error('Session expired'));
          }

          this.refreshTokenSubject.next(accessToken);

          const authReq = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          return next.handle(authReq);
        }),
        catchError((err) => {
          this.isRefreshing = false;
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
