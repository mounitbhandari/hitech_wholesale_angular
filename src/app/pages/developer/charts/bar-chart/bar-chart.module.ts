import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';
import {ChartModule} from "primeng/chart";


@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    BarChartRoutingModule,
    ChartModule
  ]
})
export class BarChartModule { }
