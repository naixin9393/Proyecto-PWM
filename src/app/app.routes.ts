import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'profile', loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)}
];
