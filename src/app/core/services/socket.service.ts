import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | null = null;
  private tokenService = inject(TokenService);

  connect(namespace: string): Socket {
    if (this.socket?.connected) {
      return this.socket;
    }

    const bearerToken = this.tokenService.getBearerToken();
    const token = bearerToken.replace(/^Bearer\s/i, '');

    this.socket = io(`${environment.apiUrl}${namespace}`, {
      auth: { token },
      autoConnect: true,
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      console.log(`[Socket] Conectado a ${namespace} con ID:`, this.socket?.id);
    });

    this.socket.on('disconnect', (reason) => {
      console.log(`[Socket] Desconectado: ${reason}`);
    });

    this.socket.on('connect_error', (error) => {
      console.error(`[Socket] Error de conexión:`, error.message);
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket(): Socket | null {
    return this.socket;
  }
}
