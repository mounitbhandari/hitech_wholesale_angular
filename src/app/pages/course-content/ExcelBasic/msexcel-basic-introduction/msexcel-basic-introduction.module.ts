import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSExcelBasicIntroductionRoutingModule } from './msexcel-basic-introduction-routing.module';
import { MSExcelBasicIntroductionComponent } from './msexcel-basic-introduction.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    MSExcelBasicIntroductionComponent
  ],
  imports: [
    CommonModule,
    MSExcelBasicIntroductionRoutingModule,
    ButtonModule
  ]
})
export class MSExcelBasicIntroductionModule { }
