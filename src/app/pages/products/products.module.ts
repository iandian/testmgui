import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgaModule } from '../../theme/nga.module';

import { routing }       from './products.routing';
import { Products } from './products.component';
import { ProductsService } from './products.service';

import { TrafficChart } from './trafficChart';
import { TrafficChartService } from './trafficChart/trafficChart.service';


import { LineChart } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Products,
    TrafficChart,
	LineChart
  ],
  providers: [
    ProductsService,
    TrafficChartService,
	LineChartService
  ]
})
export class ProductsModule {}
