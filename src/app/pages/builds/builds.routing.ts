import { Routes, RouterModule }  from '@angular/router';

import { Builds } from './builds.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: ':id', component: Builds }
  //{
  //path: '',
  //component: Products,
  //children: [
  //{ path: 'builds', component: Builds },
  //{ path: 'grid', component: Grid },
  //{ path: 'icons', component: Icons },
  //{ path: 'typography', component: Typography },
  //{ path: 'modals', component: Modals }
  //]
  //}
];

export const routing = RouterModule.forChild(routes);
