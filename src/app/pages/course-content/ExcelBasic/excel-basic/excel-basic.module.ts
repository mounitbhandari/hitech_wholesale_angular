import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelBasicRoutingModule } from './excel-basic-routing.module';
import { ExcelBasicComponent } from './excel-basic.component';


@NgModule({
  declarations: [
    ExcelBasicComponent
  ],
  imports: [
    CommonModule,
    ExcelBasicRoutingModule
  ]
})
export class ExcelBasicModule { }
