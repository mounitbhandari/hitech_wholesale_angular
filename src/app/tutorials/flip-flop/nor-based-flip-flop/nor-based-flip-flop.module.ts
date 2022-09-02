import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorBasedFlipFlopRoutingModule } from './nor-based-flip-flop-routing.module';
import { NorBasedFlipFlopComponent } from './nor-based-flip-flop.component';


@NgModule({
    declarations: [
        NorBasedFlipFlopComponent
    ],
    exports: [
        NorBasedFlipFlopComponent
    ],
    imports: [
        CommonModule,
        NorBasedFlipFlopRoutingModule
    ]
})
export class NorBasedFlipFlopModule { }
