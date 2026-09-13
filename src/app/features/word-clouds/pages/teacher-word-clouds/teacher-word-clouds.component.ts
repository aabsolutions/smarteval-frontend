import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { WordCloudApiService } from '../../services/word-cloud-api.service';
import { WordCloudSessionSummary } from '../../models/word-cloud.model';

const STATUS_LABELS: Record<string, string> = {
  draft: 'Borrador',
  open: 'Abierta',
  closed: 'Cerrada',
  finished: 'Finalizada',
};

/** Listado del docente. Va dentro del layout con sidebar. */
@Component({
  selector: 'app-teacher-word-clouds',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './teacher-word-clouds.component.html',
  styleUrls: ['./teacher-word-clouds.component.css'],
})
export class TeacherWordCloudsComponent implements OnInit {
  private api = inject(WordCloudApiService);
  private router = inject(Router);

  sessions: WordCloudSessionSummary[] = [];
  loading = true;
  error: string | null = null;
  confirmingId: string | null = null;

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.api.getTeacherSessions().subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar tus nubes de palabras';
        this.loading = false;
      },
    });
  }

  statusLabel(status: string): string {
    return STATUS_LABELS[status] ?? status;
  }

  entriesCount(session: WordCloudSessionSummary): number {
    return session.entries?.length ?? 0;
  }

  create() {
    this.router.navigate(['/teacher/word-clouds/create']);
  }

  edit(id: string) {
    this.router.navigate(['/teacher/word-clouds/create'], { queryParams: { id } });
  }

  /** El proyector vive fuera del layout con sidebar: es pantalla completa. */
  launch(id: string) {
    this.router.navigate(['/word-cloud/host', id]);
  }

  askDelete(id: string) {
    this.confirmingId = id;
  }

  cancelDelete() {
    this.confirmingId = null;
  }

  doDelete(id: string) {
    this.api.delete(id).subscribe({
      next: () => {
        this.sessions = this.sessions.filter((s) => s._id !== id);
        this.confirmingId = null;
      },
      error: () => {
        this.error = 'No se pudo eliminar la nube';
        this.confirmingId = null;
      },
    });
  }
}
