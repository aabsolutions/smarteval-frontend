import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { AuthTokenService } from '../service/auth-token.service';

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
  private authTokenService = inject(AuthTokenService);

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

    const socket = io(`${environment.apiUrl}${namespace}`, {
      // FUNCIÓN, no objeto: socket.io guarda el `auth` en la instancia y lo
      // reenvía tal cual en el paquete CONNECT de CADA reconexión automática.
      // Con un objeto el token quedaba congelado en la construcción, así que un
      // alumno que perdía la red y volvía con el token ya vencido entraba en un
      // loop de AUTH_REQUIRED. Como función se re-evalúa —y se renueva— en cada
      // intento de conexión.
      auth: (cb) => {
        this.authTokenService
          .ensureFreshToken()
          .then((token) => cb({ token: token ?? '' }));
      },
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
