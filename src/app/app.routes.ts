import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'fidelity-bond',
    loadChildren: () => import('./modules/fidelity-bond/fidelity-bond.module').then(m => m.FidelityBondModule)
  },
  {
    path: 'cmas/login',
    loadComponent: () => import('./modules/cmas/pages/login/login.component').then(m => m.LoginComponent)
  }
];
