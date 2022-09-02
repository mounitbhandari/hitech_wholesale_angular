import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentHomeRoutingModule } from './course-content-home-routing.module';
import { CourseContentHomeComponent } from './course-content-home.component';


@NgModule({
  declarations: [
    CourseContentHomeComponent
  ],
  imports: [
    CommonModule,
    CourseContentHomeRoutingModule
  ]
})
export class CourseContentHomeModule { }
