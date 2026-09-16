import { Injectable, inject } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

interface RefreshResponse {
  access_token?: string;
  expires_in?: number;
}

/**
 * Única puerta de entrada al access_token.
 *
 * Nace porque el refresh vivía SOLO dentro de `ErrorInterceptor.handle401Error`,
 * o sea: el token se renovaba únicamente cuando una request HTTP devolvía 401.
 * Las dinámicas en vivo (Nube de Palabras, Live Quiz) son 100% websocket y no
 * hacen HTTP, así que el token envejecía hasta expirar y el handshake del
 * gateway fallaba con "Token requerido o inválido".
 *
 * Acá el token se valida ANTES de usarlo y se renueva si hace falta.
 */
@Injectable({ providedIn: 'root' })
export class AuthTokenService {
  private tokenService = inject(TokenService);
  private httpBackend = inject(HttpBackend);

  /**
   * HttpClient sin interceptores: si el refresh pasara por `ErrorInterceptor`,
   * un 401 del propio refresh volvería a entrar ahí y recursaría.
   */
  private http = new HttpClient(this.httpBackend);

  /**
   * Un solo refresh a la vez. Sin esto, el socket y una request HTTP que se
   * caen juntos disparan dos POST /auth/refresh en paralelo, y el segundo
   * puede pisar el token que acaba de guardar el primero.
   */
  private inFlight: Promise<string | null> | null = null;

  getAccessToken(): string {
    return this.tokenService.getBearerToken().replace(/^Bearer\s/i, '');
  }

  /**
   * Devuelve un token utilizable, renovándolo si venció.
   * `null` significa que no hay sesión recuperable: el refresh_token también
   * murió y el usuario tiene que volver a loguearse.
   */
  async ensureFreshToken(): Promise<string | null> {
    if (this.tokenService.valid()) {
      return this.getAccessToken();
    }
    return this.refresh();
  }

  refresh(): Promise<string | null> {
    if (!this.inFlight) {
      this.inFlight = this.doRefresh().finally(() => {
        this.inFlight = null;
      });
    }
    return this.inFlight;
  }

  private async doRefresh(): Promise<string | null> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      return null;
    }

    try {
      // URL ABSOLUTA a propósito. `HttpBackend` esquiva `JwtInterceptor`, que es
      // quien antepone environment.apiUrl a las rutas que empiezan con /api.
      // Con una URL relativa el POST salía al origen del propio frontend: en
      // `ng serve` lo salvaba proxy.conf.json, pero en producción —donde el
      // front y el backend viven en hosts distintos— era un 404 garantizado.
      const response = await firstValueFrom(
        this.http.post<RefreshResponse>(`${environment.apiUrl}/api/auth/refresh`, {
          refresh_token: refreshToken,
        })
      );

      if (!response?.access_token) {
        return null;
      }

      this.tokenService.set({
        access_token: response.access_token,
        refresh_token: refreshToken,
        expires_in: response.expires_in,
      });

      return response.access_token;
    } catch {
      return null;
    }
  }
}
