import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgaModule } from '../../theme/nga.module';

import { routing }       from './report.routing';
import { ReportComponent } from './report.component';
import { StripedTable } from './stripedTable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ReportComponent,
    StripedTable
  ],
  providers: [

  ]
})
export class ReportModule {}
