import { Page404Component } from '../authentication/page404/page404.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentsListComponent } from './assessments-list/assessments-list.component';
import { AssessmentWaitroomComponent } from './assessment-waitroom/assessment-waitroom.component';
import { AssessmentPlayerComponent } from './assessment-player/assessment-player.component';
import { AssessmentResultsComponent } from './assessment-results/assessment-results.component';

export const STUDENT_ROUTE: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'assessments/open',
    component: AssessmentsListComponent,
    data: { filter: 'open' },
  },
  {
    path: 'assessments/closed',
    component: AssessmentsListComponent,
    data: { filter: 'closed' },
  },
  {
    path: 'assessments',
    redirectTo: 'assessments/open',
    pathMatch: 'full',
  },
  {
    path: 'assessments/:id/waitroom',
    component: AssessmentWaitroomComponent,
  },
  {
    path: 'assessments/:id/player/:attemptId',
    component: AssessmentPlayerComponent,
  },
  {
    path: 'assessments/:id/results/:attemptId',
    component: AssessmentResultsComponent,
  },
  {
    path: 'profile',
    loadComponent: () => import('@shared/components/profile/profile.component').then(m => m.ProfileComponent)
  },
  { path: '**', component: Page404Component },
];
