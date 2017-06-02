import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './theme/components/404';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'auth', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
