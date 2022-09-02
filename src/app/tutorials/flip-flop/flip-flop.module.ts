import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipFlopRoutingModule } from './flip-flop-routing.module';
import { FlipFlopComponent } from './flip-flop.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {SliderModule} from "primeng/slider";
import {MatBadgeModule} from "@angular/material/badge";
import {RadioButtonModule} from "primeng/radiobutton";
import {AsynchronousSequentialCircuitsModule} from "./asynchronous-sequential-circuits/asynchronous-sequential-circuits.module";
import {SynchronousSequentialCircuitsModule} from "./synchronous-sequential-circuits/synchronous-sequential-circuits.module";
import {NorBasedFlipFlopModule} from "./nor-based-flip-flop/nor-based-flip-flop.module";
import {NorBasedJKFlipFlopModule} from "./nor-based-jkflip-flop/nor-based-jkflip-flop.module";


@NgModule({
  declarations: [
    FlipFlopComponent
  ],
  imports: [
    CommonModule,
    FlipFlopRoutingModule,
    MatTabsModule,
    ToggleButtonModule,
    FormsModule,
    SliderModule,
    MatBadgeModule,
    RadioButtonModule,
    AsynchronousSequentialCircuitsModule,
    SynchronousSequentialCircuitsModule,
    NorBasedFlipFlopModule,
    NorBasedJKFlipFlopModule
  ]
})
export class FlipFlopModule { }
