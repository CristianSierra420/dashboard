import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/users/users').then(m => m.Users)
  }
];
