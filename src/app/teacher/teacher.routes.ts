import { Page404Component } from '../authentication/page404/page404.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { LateRequestsComponent } from './late-requests/late-requests.component';

export const TEACHER_ROUTE: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'topics',
    loadChildren: () =>
      import('./topics/topics.routes').then((m) => m.TOPICS_ROUTE),
  },
  {
    path: 'teacher-groups',
    loadComponent: () => import('./teacher-groups/teacher-groups.component').then(m => m.TeacherGroupsComponent)
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./questions/questions.routes').then((m) => m.QUESTIONS_ROUTE),
  },
  {
    path: 'assessments',
    component: AssessmentsComponent,
  },
  {
    path: 'late-requests',
    component: LateRequestsComponent,
  },
  {
    path: 'assessments/:id/results',
    loadComponent: () => import('./assessments/results/assessment-results.component').then(m => m.AssessmentResultsComponent)
  },
  {
    path: 'paper-grading/:attemptId',
    loadComponent: () => import('./assessments/paper-grading/paper-grading.component').then(m => m.PaperGradingComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('@shared/components/profile/profile.component').then(m => m.ProfileComponent)
  },
  { path: '**', component: Page404Component },
];
