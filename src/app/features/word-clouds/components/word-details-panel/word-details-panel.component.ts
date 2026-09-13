import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetails } from '../../models/word-cloud.model';

/**
 * Panel de explicaciones. SOLO el host lo renderiza: los datos que consume
 * llegan por `cloud:update-teacher` / `cloud:word-details`, que el servidor
 * emite exclusivamente a la room `wc:${id}:teacher`.
 */
@Component({
  selector: 'app-word-details-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-details-panel.component.html',
  styleUrls: ['./word-details-panel.component.css'],
})
export class WordDetailsPanelComponent {
  @Input() details: WordDetails | null = null;
  @Input() canModerate = true;

  @Output() close = new EventEmitter<void>();
  @Output() removeEntry = new EventEmitter<string>();

  confirmingUserId: string | null = null;

  askRemove(userId: string) {
    this.confirmingUserId = userId;
  }

  cancelRemove() {
    this.confirmingUserId = null;
  }

  doRemove(userId: string) {
    this.removeEntry.emit(userId);
    this.confirmingUserId = null;
  }
}
