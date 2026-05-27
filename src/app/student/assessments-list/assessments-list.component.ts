import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { StudentAssessmentsService } from '../services/student-assessments.service';

@Component({
  selector: 'app-assessments-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, BreadcrumbComponent],
  templateUrl: './assessments-list.component.html',
  styleUrls: ['./assessments-list.component.scss']
})
export class AssessmentsListComponent implements OnInit {
  assessments: any[] = [];
  breadscrums = [
    { title: 'Mis Exámenes', items: ['Estudiante'], active: 'Exámenes' }
  ];

  private assessmentsService = inject(StudentAssessmentsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.assessmentsService.getAvailableAssessments().subscribe({
      next: (data) => {
        this.assessments = data;
        this.checkStatuses();
      }
    });
  }

  checkStatuses() {
    this.assessments.forEach(a => {
      this.assessmentsService.getAttemptStatus(a._id).subscribe(status => {
        a.attemptsCount = status.attemptsCount;
        a.lastAttempt = status.history[0];
      });
    });
  }

  goToAssessment(assessmentId: string) {
    this.router.navigate(['/student/assessments', assessmentId, 'waitroom']);
  }
}
