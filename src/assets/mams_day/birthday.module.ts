import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdayRoutingModule } from './birthday-routing.module';
import { BirthdayComponent } from './birthday.component';


@NgModule({
  declarations: [
    BirthdayComponent
  ],
  imports: [
    CommonModule,
    BirthdayRoutingModule
  ]
})
export class BirthdayModule { }
