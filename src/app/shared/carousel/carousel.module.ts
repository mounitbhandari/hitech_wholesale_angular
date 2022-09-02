import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';
import {IvyCarouselModule} from "angular-responsive-carousel";


@NgModule({
    declarations: [
        CarouselComponent
    ],
    exports: [
        CarouselComponent
    ],
    imports: [
        CommonModule,
        CarouselRoutingModule,
        IvyCarouselModule
    ]
})
export class CarouselModule { }
