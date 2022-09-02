import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipFlopHomeRoutingModule } from './flip-flop-home-routing.module';
import { FlipFlopHomeComponent } from './flip-flop-home.component';


@NgModule({
  declarations: [
    FlipFlopHomeComponent
  ],
  imports: [
    CommonModule,
    FlipFlopHomeRoutingModule
  ]
})
export class FlipFlopHomeModule { }
