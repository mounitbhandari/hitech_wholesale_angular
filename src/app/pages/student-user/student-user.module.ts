import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentUserRoutingModule } from './student-user-routing.module';
import { StudentUserComponent } from './student-user.component';


@NgModule({
  declarations: [
    StudentUserComponent
  ],
  imports: [
    CommonModule,
    StudentUserRoutingModule
  ]
})
export class StudentUserModule { }
