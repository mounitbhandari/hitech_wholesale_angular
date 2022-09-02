import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineChartRoutingModule } from './line-chart-routing.module';
import { LineChartComponent } from './line-chart.component';
import {ChartModule} from "primeng/chart";


@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    LineChartRoutingModule,
    ChartModule
  ]
})
export class LineChartModule { }
