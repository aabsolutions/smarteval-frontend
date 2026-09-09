import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { AuthService } from '@core';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { ColumnDefinition } from '@shared/components/master-table/master-table.component';
import { MatCardModule } from '@angular/material/card';
import { NgScrollbar } from 'ngx-scrollbar';
import { TableCardComponent } from '../../shared/components/table-card/table-card.component';
import { StudentProgressComponent, StudentProgress } from '../../shared/components/student-progress/student-progress.component';
import { TopStudentsCardComponent, Student } from '../../shared/components/top-students-card/top-students-card.component';
import { MessageCenterComponent, Message } from '../../shared/components/message-center/message-center.component';
import { AssessmentsService, TeacherSummary } from '../assessments/assessments.service';
import { LiveQuizService } from '../../features/live-quizzes/services/live-quiz.service';
import { NotificationsService, Notification } from '../../core/service/notifications.service';

export type avgLecChartOptions = {
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
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    MatCardModule,
    NgApexchartsModule,
    MatButtonModule,
    NgScrollbar,
    TableCardComponent,
    StudentProgressComponent,
    TopStudentsCardComponent,
    MessageCenterComponent,
  ],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public trendChartOptions!: Partial<avgLecChartOptions>;

  private authService = inject(AuthService);
  private assessmentsService = inject(AssessmentsService);
  private liveQuizService = inject(LiveQuizService);
  private notificationsService = inject(NotificationsService);

  teacherName = this.authService.currentUserValue.name || 'Docente';
  isLoading = true;
  summary?: TeacherSummary;
  totalLiveQuizzes = 0;
  activeLiveQuizzes = 0;

  studentsNeedingSupport: StudentProgress[] = [];
  topStudents: Student[] = [];
  notifications: Message[] = [];

  breadscrums = [
    {
      title: 'Dashboard',
      items: ['Teacher'],
      active: 'Dashboard',
    },
  ];

  recentAssessmentsColumns: ColumnDefinition[] = [
    { def: 'title', label: 'Evaluación', type: 'text', visible: true },
    { def: 'statusLabel', label: 'Estado', type: 'text', visible: true },
    { def: 'startTime', label: 'Inicio', type: 'text', visible: true },
    { def: 'endTime', label: 'Cierre', type: 'text', visible: true },
  ];
  recentAssessmentsData: any[] = [];

  ngOnInit() {
    this.loadSummary();
    this.loadLiveQuizzes();
    this.loadNotifications();
  }

  private loadSummary() {
    this.isLoading = true;
    this.assessmentsService.getTeacherSummary().subscribe({
      next: (summary) => {
        this.summary = summary;
        this.buildTrendChart(summary);
        this.buildRecentAssessments(summary);
        this.buildTopStudents(summary);
        this.buildStudentsNeedingSupport(summary);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  private loadLiveQuizzes() {
    this.liveQuizService.getTeacherQuizzes().subscribe({
      next: (quizzes) => {
        this.totalLiveQuizzes = quizzes.length;
        this.activeLiveQuizzes = quizzes.filter(q => q.status === 'lobby' || q.status === 'in-progress').length;
      },
      error: () => {},
    });
  }

  private loadNotifications() {
    this.notificationsService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = data.slice(0, 8).map(n => this.toMessage(n));
      },
      error: () => {},
    });
  }

  private toMessage(n: Notification): Message {
    return {
      id: n._id,
      title: n.title,
      content: n.message,
      sender: 'SmartEval',
      date: new Date(n.createdAt),
      read: n.read,
      type: 'message',
    };
  }

  onMarkNotificationRead(id: number | string) {
    this.notificationsService.markAsRead(String(id)).subscribe();
  }

  onMarkAllNotificationsRead() {
    this.notificationsService.markAllAsRead().subscribe();
  }

  private buildTrendChart(summary: TeacherSummary) {
    const categories = summary.scoreTrend.map(s => s.title.length > 18 ? s.title.slice(0, 18) + '…' : s.title);
    const data = summary.scoreTrend.map(s => s.averagePercentage);

    this.trendChartOptions = {
      series: [{ name: 'Promedio (%)', data }],
      chart: {
        height: 320,
        type: 'line',
        foreColor: '#9aa0ac',
        toolbar: { show: false },
      },
      stroke: { curve: 'smooth', width: 3 },
      dataLabels: { enabled: false },
      xaxis: { categories, title: { text: 'Evaluación' } },
      yaxis: { min: 0, max: 100, title: { text: 'Promedio (%)' } },
      grid: { show: true, borderColor: '#9aa0ac', strokeDashArray: 1 },
      markers: { size: 4, colors: ['#3b82f6'], strokeColors: '#fff', strokeWidth: 2 },
      tooltip: { theme: 'dark' },
      colors: ['#3b82f6'],
    };
  }

  private buildRecentAssessments(summary: TeacherSummary) {
    const statusLabels: Record<string, string> = {
      scheduled: 'Programada',
      active: 'Activa',
      closed: 'Cerrada',
    };

    this.recentAssessmentsData = summary.recentAssessments.map(a => ({
      title: a.title,
      statusLabel: statusLabels[a.status] || a.status,
      startTime: new Date(a.startTime).toLocaleDateString('es-ES'),
      endTime: new Date(a.endTime).toLocaleDateString('es-ES'),
    }));
  }

  private buildTopStudents(summary: TeacherSummary) {
    this.topStudents = summary.topStudents.map((s, i) => ({
      id: s.studentId,
      name: s.name,
      score: s.averagePercentage,
      rank: i + 1,
      subject: `${s.attemptsCount} intento${s.attemptsCount === 1 ? '' : 's'}`,
    }));
  }

  private buildStudentsNeedingSupport(summary: TeacherSummary) {
    this.studentsNeedingSupport = summary.studentsNeedingSupport.map(s => ({
      name: s.name,
      subject: `${s.attemptsCount} intento${s.attemptsCount === 1 ? '' : 's'}`,
      progress: Math.round(s.averagePercentage),
      grade: s.averagePercentage < 50 ? 'Crítico' : 'Necesita apoyo',
    }));
  }
}
