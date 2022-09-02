import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentRoutingModule } from './course-content-routing.module';
import { CourseContentComponent } from './course-content.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelMenuModule} from "primeng/panelmenu";


@NgModule({
  declarations: [
    CourseContentComponent
  ],
  imports: [
    CommonModule,
    CourseContentRoutingModule,
    ButtonModule,
    PanelMenuModule,
  ]
})
export class CourseContentModule { }
