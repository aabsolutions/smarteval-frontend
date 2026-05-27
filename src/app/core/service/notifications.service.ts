import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private http = inject(HttpClient);

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>('/api/notifications');
  }

  markAsRead(id: string): Observable<any> {
    return this.http.patch(`/api/notifications/${id}/read`, {});
  }

  markAllAsRead(): Observable<any> {
    return this.http.patch('/api/notifications/read-all', {});
  }
}
