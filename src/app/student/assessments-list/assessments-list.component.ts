import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { StudentAssessmentsService } from '../services/student-assessments.service';

@Component({
  selector: 'app-assessments-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule, BreadcrumbComponent],
  templateUrl: './assessments-list.component.html',
  styleUrls: ['./assessments-list.component.scss']
})
export class AssessmentsListComponent implements OnInit {
  assessments: any[] = [];
  allAssessments: any[] = [];
  filter: 'open' | 'closed' = 'open';
  breadscrums = [
    { title: 'Mis Exámenes', items: ['Estudiante'], active: 'Abiertos' }
  ];

  private assessmentsService = inject(StudentAssessmentsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.filter = this.route.snapshot.data['filter'] || 'open';
    this.breadscrums = [
      {
        title: this.filter === 'open' ? 'Exámenes Abiertos' : 'Exámenes Cerrados',
        items: ['Estudiante', 'Mis Exámenes'],
        active: this.filter === 'open' ? 'Abiertos' : 'Cerrados'
      }
    ];

    this.assessmentsService.getAvailableAssessments().subscribe({
      next: (data) => {
        this.allAssessments = data;
        this.applyFilter();
        this.checkStatuses();
      }
    });
  }

  applyFilter(): void {
    const now = new Date();
    this.assessments = this.allAssessments.filter(a => {
      const endTimeToUse = a.extensionUntil ? new Date(a.extensionUntil) : new Date(a.endTime);
      return this.filter === 'open' ? endTimeToUse > now : endTimeToUse <= now;
    });
  }

  checkStatuses() {
    this.allAssessments.forEach(a => {
      a.attemptsCount = 0; // Initialize to 0
      this.assessmentsService.getAttemptStatus(a._id).subscribe({
        next: (status) => {
          a.attemptsCount = status.attemptsCount || 0;
          a.lastAttempt = status.history?.[0];
        },
        error: (err) => console.error('Error fetching status for', a._id, err)
      });
    });
  }

  goToAssessment(assessmentId: string) {
    this.router.navigate(['/student/assessments', assessmentId, 'waitroom']);
  }

  goToResults(assessmentId: string, attemptId: string) {
    this.router.navigate(['/student/assessments', assessmentId, 'results', attemptId]);
  }

  goToFlashcards(assessmentId: string) {
    this.router.navigate(['/student/assessments', assessmentId, 'flashcards']);
  }
}

