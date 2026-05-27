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
  { path: '**', component: Page404Component },
];
