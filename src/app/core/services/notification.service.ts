import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  id?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications$ = new Subject<Notification>();

  constructor() {}

  showNotification(notification: Notification): void {
    notification.id = Date.now().toString();
    notification.timestamp = new Date();
    this.notifications$.next(notification);
  }

  getNotifications() {
    return this.notifications$.asObservable();
  }

  success(message: string, duration?: number): void {
    this.showNotification({
      message,
      type: 'success',
      duration: duration || 3000
    });
  }

  error(message: string, duration?: number): void {
    this.showNotification({
      message,
      type: 'error',
      duration: duration || 5000
    });
  }

  warning(message: string, duration?: number): void {
    this.showNotification({
      message,
      type: 'warning',
      duration: duration || 4000
    });
  }

  info(message: string, duration?: number): void {
    this.showNotification({
      message,
      type: 'info',
      duration: duration || 3000
    });
  }
}
