import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgScrollbar } from 'ngx-scrollbar';

export interface StudentProgress {
  name: string;
  subject: string;
  progress: number;
  grade: string;
}

@Component({
  selector: 'app-student-progress',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    NgScrollbar
],
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss'],
})
export class StudentProgressComponent {
  @Input() title = 'Student Progress';
  @Input() emptyMessage = 'Sin datos todavía.';
  @Input() students: StudentProgress[] = [];
}
