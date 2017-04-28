import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgaModule } from '../../theme/nga.module';

import { routing }       from './builds.routing';
import { Builds } from './builds.component';

import { StripedTable } from './stripedTable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Builds,
    StripedTable
  ],
  providers: [

  ]
})
export class BuildsModule {}
