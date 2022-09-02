import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SynchronousSequentialCircuitsRoutingModule } from './synchronous-sequential-circuits-routing.module';
import { SynchronousSequentialCircuitsComponent } from './synchronous-sequential-circuits.component';


@NgModule({
  declarations: [
    SynchronousSequentialCircuitsComponent
  ],
  exports: [
    SynchronousSequentialCircuitsComponent
  ],
  imports: [
    CommonModule,
    SynchronousSequentialCircuitsRoutingModule
  ]
})
export class SynchronousSequentialCircuitsModule { }
