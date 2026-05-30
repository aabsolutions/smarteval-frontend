import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private tokenService = inject(TokenService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ¡ACÁ ESTÁ LA MAGIA! Prependemos la URL del entorno a cualquier petición que empiece con /api
    let apiReq = request;
    if (request.url.startsWith('/api')) {
      apiReq = request.clone({
        url: `${environment.apiUrl}${request.url}`
      });
    }

    // add authorization header with jwt token if available
    const token = this.tokenService.getBearerToken();
    
    if (token) {
      apiReq = apiReq.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(apiReq);
  }
}
