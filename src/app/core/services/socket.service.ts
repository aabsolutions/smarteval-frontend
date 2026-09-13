import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  /**
   * Un socket POR namespace.
   *
   * Antes había un único `socket` y `connect(ns)` devolvía el existente si estaba
   * conectado, ignorando el namespace pedido: un alumno que venía de un Live Quiz
   * y abría la Nube de Palabras recibía el socket de `/live-quiz` y nunca escuchaba
   * los eventos de `/word-cloud`.
   */
  private sockets = new Map<string, Socket>();
  private tokenService = inject(TokenService);

  connect(namespace: string): Socket {
    const existing = this.sockets.get(namespace);
    if (existing?.connected) {
      return existing;
    }

    // Socket del mismo namespace pero caído: lo descartamos antes de recrear
    if (existing) {
      existing.removeAllListeners();
      existing.disconnect();
      this.sockets.delete(namespace);
    }

    const bearerToken = this.tokenService.getBearerToken();
    const token = bearerToken.replace(/^Bearer\s/i, '');

    const socket = io(`${environment.apiUrl}${namespace}`, {
      auth: { token },
      autoConnect: true,
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log(`[Socket] Conectado a ${namespace} con ID:`, socket.id);
    });

    socket.on('disconnect', (reason) => {
      console.log(`[Socket] Desconectado de ${namespace}: ${reason}`);
    });

    socket.on('connect_error', (error) => {
      console.error(`[Socket] Error de conexión en ${namespace}:`, error.message);
    });

    this.sockets.set(namespace, socket);
    return socket;
  }

  /**
   * Desconecta un namespace puntual. Sin argumento desconecta todos
   * (útil en logout); pasar siempre el namespace desde las features.
   */
  disconnect(namespace?: string): void {
    if (namespace) {
      const socket = this.sockets.get(namespace);
      if (socket) {
        socket.removeAllListeners();
        socket.disconnect();
        this.sockets.delete(namespace);
      }
      return;
    }

    this.sockets.forEach((socket) => {
      socket.removeAllListeners();
      socket.disconnect();
    });
    this.sockets.clear();
  }

  getSocket(namespace: string): Socket | null {
    return this.sockets.get(namespace) ?? null;
  }
}
