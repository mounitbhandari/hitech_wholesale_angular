import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorBasedJKFlipFlopRoutingModule } from './nor-based-jkflip-flop-routing.module';
import { NorBasedJKFlipFlopComponent } from './nor-based-jkflip-flop.component';


@NgModule({
    declarations: [
        NorBasedJKFlipFlopComponent
    ],
    exports: [
        NorBasedJKFlipFlopComponent
    ],
    imports: [
        CommonModule,
        NorBasedJKFlipFlopRoutingModule
    ]
})
export class NorBasedJKFlipFlopModule { }
