import { Routes, RouterModule }  from '@angular/router';

import { Maps } from './maps.component';
import { BubbleMaps } from './components/bubbleMaps/bubbleMaps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
import { LineMaps } from './components/lineMaps/lineMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'bubblemaps', component: BubbleMaps },
      { path: 'googlemaps', component: GoogleMaps },
      { path: 'linemaps', component: LineMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
