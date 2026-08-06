import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TopStudentsCardComponent, Student } from '../../shared/components/top-students-card/top-students-card.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { StudentAssessmentsService } from '../services/student-assessments.service';
import { Router } from '@angular/router';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexStroke,
  ApexLegend,
  ApexMarkers,
  ApexGrid,
  ApexFill,
  ApexTitleSubtitle,
  NgApexchartsModule
} from 'ng-apexcharts';

export type PerformanceChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    BreadcrumbComponent,
    BaseChartDirective,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgApexchartsModule,
    TopStudentsCardComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private assessmentsService = inject(StudentAssessmentsService);
  private router = inject(Router);

  breadscrums = [
    { title: 'Panel Estudiantil', items: ['Inicio'], active: 'Dashboard' }
  ];

  nextExam: any = null;
  private timer: any;

  public progressChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: { legend: { display: false }, tooltip: { enabled: false } }
  };
  public progressChartLabels: string[] = ['Aprobadas', 'Pendientes'];
  public progressChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.progressChartLabels,
    datasets: [{
      data: [15, 25],
      backgroundColor: ['#26890c', '#e0e0e0'], // kahoot green and light gray
      borderWidth: 0,
      borderRadius: 10,
    }]
  };
  public progressChartType: 'doughnut' = 'doughnut';
  public progressPercentage = Math.round((15 / 40) * 100);

  public performanceChartOptions!: Partial<PerformanceChartOptions>;

  recentGrades: any[] = [];
  topClassmates: Student[] = [];

  countdownDays = 0;
  countdownHours = 0;
  countdownMinutes = 0;
  countdownSeconds = 0;
  isExamActive = false;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    forkJoin({
      assessments: this.assessmentsService.getAvailableAssessments(),
      history: this.assessmentsService.getStudentHistory(),
      leaderboard: this.assessmentsService.getStudentLeaderboard()
    }).subscribe({
      next: (results) => {
        const assessments = results.assessments || [];
        const history = results.history || [];

        // 1. Next Exam & Upcoming
        const nowTime = new Date().getTime();
        const activeAssessments = assessments.filter(a => 
           a.isActive !== false && new Date(a.endTime).getTime() > nowTime
        );

        if (activeAssessments.length > 0) {
          const sorted = activeAssessments.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
          this.nextExam = sorted[0];

          this.updateCountdown();
          this.timer = setInterval(() => this.updateCountdown(), 1000);
        } else {
          this.nextExam = null;
        }

        // 2. History / Recent Grades
        this.recentGrades = history.map(attempt => {
           const title = attempt.assessmentId?.topicId?.name || attempt.assessmentId?.title || 'Examen';
           const ratio = attempt.score / (attempt.maxScore || 1);
           return {
             subject: title,
             grade: attempt.score,
             maxScore: attempt.maxScore,
             date: new Date(attempt.endTime).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
             status: ratio >= 0.6 ? 'Aprobado' : 'Desaprobado',
             isExcellent: ratio >= 0.9
           };
        });

        // 3. Effectiveness Chart
        let totalScore = 0;
        let totalMaxScore = 0;
        history.forEach(h => {
          totalScore += h.score || 0;
          totalMaxScore += h.maxScore || 1;
        });
        
        this.progressChartLabels = ['Efectividad', 'Margen de Mejora'];
        this.progressPercentage = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

        this.progressChartData = {
          labels: this.progressChartLabels,
          datasets: [{
            data: [this.progressPercentage, 100 - this.progressPercentage],
            backgroundColor: ['#ffffff', 'rgba(255,255,255,0.3)'],
            borderWidth: 0,
            borderRadius: 10,
          }]
        };

        // 4. Performance Chart
        const performanceCategories: string[] = [];
        const performanceData: number[] = [];
        const performanceFullNames: string[] = [];
        
        const sortedHistory = [...history].sort((a, b) => new Date(a.endTime).getTime() - new Date(b.endTime).getTime());
        
        sortedHistory.forEach(h => {
           const dateStr = new Date(h.endTime).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
           const title = h.assessmentId?.topicId?.name || h.assessmentId?.title || 'Examen';
           
           performanceCategories.push(`${title.substring(0,10)}...`);
           const score10 = (h.score / (h.maxScore || 1)) * 10;
           performanceData.push(Number(score10.toFixed(1)));
           performanceFullNames.push(`${title} (${dateStr})`);
        });

        this.performanceChartOptions = {
          series: [
            {
              name: 'Calificación',
              data: performanceData.length > 0 ? performanceData : [0],
            },
          ],
          chart: {
            height: '100%',
            type: 'line',
            foreColor: '#ffffff',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2,
            },
            toolbar: { show: false },
          },
          stroke: { curve: 'smooth' },
          xaxis: {
            categories: performanceCategories.length > 0 ? performanceCategories : ['Sin datos'],
            labels: { style: { colors: '#ffffff' } }
          },
          grid: {
            show: true,
            borderColor: 'rgba(255,255,255,0.2)',
            strokeDashArray: 1,
          },
          yaxis: {
            labels: { style: { colors: '#ffffff' } },
            min: 0,
            max: 10
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#35fdd8'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
            },
          },
          markers: {
            size: 4,
            colors: ['#FFA41B'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: { size: 7 },
          },
          tooltip: {
            theme: 'dark',
            marker: { show: true },
            x: { 
              show: true,
              formatter: function(val: any, { dataPointIndex }: any) {
                return performanceFullNames[dataPointIndex] || val;
              }
            },
            y: {
              formatter: function(val: any) {
                return val + ' / 10';
              }
            }
          },
        };

        // 4. Real Top 5 Classmates from Backend (Classes not archived)
        const leaderboardData = results.leaderboard || [];
        this.topClassmates = leaderboardData;

        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching dashboard data', err)
    });
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  private updateCountdown() {
    if (!this.nextExam || !this.nextExam.startTime || !this.nextExam.endTime) return;
    const now = new Date().getTime();
    const startDistance = new Date(this.nextExam.startTime).getTime() - now;
    const endDistance = new Date(this.nextExam.endTime).getTime() - now;

    if (startDistance > 0) {
      this.isExamActive = false;
      this.setCountdown(startDistance);
    } else if (endDistance > 0) {
      this.isExamActive = true;
      this.setCountdown(endDistance);
    } else {
      this.isExamActive = false;
      this.setCountdown(0);
    }
    
    this.cdr.detectChanges();
  }

  private setCountdown(distance: number) {
    if (distance > 0) {
      this.countdownDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdownHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdownMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      this.countdownDays = 0;
      this.countdownHours = 0;
      this.countdownMinutes = 0;
      this.countdownSeconds = 0;
    }
  }

  joinExam() {
    if (this.nextExam) {
      this.router.navigate(['/student/assessments', this.nextExam._id, 'waitroom']);
    }
  }
}
