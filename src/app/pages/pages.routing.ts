import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    canActivate: [ CanActivateViaAuthGuard ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'products', loadChildren: 'app/pages/products/products.module#ProductsModule' },
      { path: 'builds', loadChildren: 'app/pages/builds/builds.module#BuildsModule' },
      { path: 'report', loadChildren: 'app/pages/report/report.module#ReportModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
