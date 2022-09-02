import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';


@NgModule({
    declarations: [
        TopComponent
    ],
    exports: [
        TopComponent
    ],
    imports: [
        CommonModule,
        TopRoutingModule
    ]
})
export class TopModule { }
