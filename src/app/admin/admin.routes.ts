import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTE),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((m) => m.USERS_ROUTE),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./groups/groups.routes').then((m) => m.GROUPS_ROUTE),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.routes').then((m) => m.STUDENTS_ROUTE),
  },
  {
    path: 'teachers',
    loadComponent: () => import('./teachers/teachers.component').then(m => m.TeachersComponent)
  },
  {
    path: 'institutions',
    loadComponent: () => import('./institutions/institutions.component').then(m => m.InstitutionsComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('@shared/components/profile/profile.component').then(m => m.ProfileComponent)
  },
  { path: '**', component: Page404Component },
];
