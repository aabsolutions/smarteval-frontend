import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { NgScrollbar } from 'ngx-scrollbar';

export interface Message {
  id: number | string;
  title: string;
  content: string;
  sender: string;
  date: Date;
  read: boolean;
  type: 'announcement' | 'message' | 'alert-msg';
  priority?: 'high' | 'medium' | 'low';
}

@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    MatMenuModule,
    NgScrollbar,
  ],
})
export class MessageCenterComponent implements OnInit {
  @Input() title = 'Message Center';
  @Input() messages: Message[] = [];
  @Input() maxMessages = 10;
  @Output() markRead = new EventEmitter<number | string>();
  @Output() markAllRead = new EventEmitter<void>();

  expandedMessageId: number | string | null = null;

  constructor() {}

  ngOnInit(): void {
    // Limit the number of messages displayed
    this.messages = (this.messages || []).slice(0, this.maxMessages);
  }

  toggleMessageExpansion(messageId: number | string): void {
    if (this.expandedMessageId === messageId) {
      this.expandedMessageId = null;
    } else {
      this.expandedMessageId = messageId;
      this.markAsRead(messageId);
    }
  }

  markAsRead(messageId: number | string): void {
    const message = this.messages.find((m) => m.id === messageId);
    if (message && !message.read) {
      message.read = true;
      this.markRead.emit(messageId);
    }
  }

  markAllAsRead(): void {
    this.messages.forEach((message) => {
      message.read = true;
    });
    this.markAllRead.emit();
  }

  getUnreadCount(): number {
    return this.messages.filter((message) => !message.read).length;
  }

  getMessageTypeIcon(type: string): string {
    switch (type) {
      case 'announcement':
        return 'campaign';
      case 'alert-msg':
        return 'error_outline';
      case 'message':
        return 'mail';
      default:
        return 'message';
    }
  }

  getMessageTypeClass(type: string): string {
    return type.toLowerCase();
  }

  getPriorityClass(priority: string | undefined): string {
    return priority ? priority.toLowerCase() : 'medium';
  }

  getFormattedDate(date: Date): string {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffTime = today.getTime() - messageDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  }
}
