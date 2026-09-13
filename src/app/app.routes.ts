import { Route } from '@angular/router';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { Page404Component } from './authentication/page404/page404.component';
import { Role } from '@core';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },

      {
        path: 'admin',
        canActivate: [AuthGuard],
        data: {
          role: [Role.Admin, Role.SuperAdmin],
        },
        loadChildren: () =>
          import('./admin/admin.routes').then((m) => m.ADMIN_ROUTE),
      },
      {
        path: 'teacher',
        canActivate: [AuthGuard],
        data: {
          role: [Role.Teacher],
        },
        loadChildren: () =>
          import('./teacher/teacher.routes').then((m) => m.TEACHER_ROUTE),
      },
      {
        path: 'student',
        canActivate: [AuthGuard],
        data: {
          role: [Role.Student],
        },
        loadChildren: () =>
          import('./student/student.routes').then((m) => m.STUDENT_ROUTE),
      },
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./extra-pages/extra-pages.routes').then(
            (m) => m.EXTRA_PAGES_ROUTE
          ),
      },
      {
        path: 'multilevel',
        loadChildren: () =>
          import('./multilevel/multilevel.routes').then(
            (m) => m.MULTILEVEL_ROUTE
          ),
      },
    ],
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/auth.routes').then((m) => m.AUTH_ROUTE),
  },
  {
    path: 'live-quiz',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        loadComponent: () => import('./features/live-quizzes/pages/live-quiz-student/live-quiz-student.component').then(c => c.LiveQuizStudentComponent)
      },
      {
        path: 'host/:id',
        loadComponent: () => import('./features/live-quizzes/pages/live-quiz-host/live-quiz-host.component').then(c => c.LiveQuizHostComponent)
      }
    ]
  },
  {
    // Full-screen, fuera del layout con sidebar: proyector y pantalla del alumno
    path: 'word-cloud',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        loadComponent: () => import('./features/word-clouds/pages/word-cloud-student/word-cloud-student.component').then(c => c.WordCloudStudentComponent)
      },
      {
        path: 'host/:id',
        loadComponent: () => import('./features/word-clouds/pages/word-cloud-host/word-cloud-host.component').then(c => c.WordCloudHostComponent)
      }
    ]
  },
  { path: '**', component: Page404Component },
];
