import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentAssessmentsService } from '../services/student-assessments.service';
import { AssessmentsService } from '../../teacher/assessments/assessments.service'; 
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-assessment-waitroom',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './assessment-waitroom.component.html',
  styleUrls: ['./assessment-waitroom.component.scss']
})
export class AssessmentWaitroomComponent implements OnInit {
  assessmentId!: string;
  assessment: any;
  status: any;
  isStarting = false;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentService = inject(StudentAssessmentsService);
  private assessmentsService = inject(AssessmentsService);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.assessmentId = this.route.snapshot.paramMap.get('id')!;
    this.assessmentsService.getAssessment(this.assessmentId).subscribe(data => this.assessment = data);
    this.studentService.getAttemptStatus(this.assessmentId).subscribe(data => this.status = data);
  }

  start() {
    this.isStarting = true;
    this.studentService.startAttempt(this.assessmentId).subscribe({
      next: (attempt) => {
        this.router.navigate(['/student/assessments', this.assessmentId, 'player', attempt._id]);
      },
      error: (err) => {
        this.isStarting = false;
        const errMsg = typeof err === 'string' ? err : (err.error?.message || 'Error al iniciar examen');
        this.alertService.errorAlert('No se pudo iniciar', errMsg);
      }
    });
  }

  goBack() {
    this.router.navigate(['/student/assessments']);
  }
}
