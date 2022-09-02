import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';


@NgModule({
  declarations: [
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
