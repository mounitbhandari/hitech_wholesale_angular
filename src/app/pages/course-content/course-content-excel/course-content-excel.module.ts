import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentExcelRoutingModule } from './course-content-excel-routing.module';
import { CourseContentExcelComponent } from './course-content-excel.component';
import {AccordionModule} from "primeng/accordion";


@NgModule({
  declarations: [
    CourseContentExcelComponent
  ],
  imports: [
    CommonModule,
    CourseContentExcelRoutingModule,
    AccordionModule
  ]
})
export class CourseContentExcelModule { }
