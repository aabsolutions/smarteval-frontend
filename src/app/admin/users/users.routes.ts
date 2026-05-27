import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { UsersComponent } from './users.component';

export const USERS_ROUTE: Route[] = [
  {
    path: '',
    component: UsersComponent,
  },
  { path: '**', component: Page404Component },
];
