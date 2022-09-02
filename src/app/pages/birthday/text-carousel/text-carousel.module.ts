import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextCarouselRoutingModule } from './text-carousel-routing.module';
import { TextCarouselComponent } from './text-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";


@NgModule({
    declarations: [
        TextCarouselComponent
    ],
    exports: [
        TextCarouselComponent
    ],
    imports: [
        CommonModule,
        TextCarouselRoutingModule,
        CarouselModule,
        ButtonModule,
        ChipModule
    ]
})
export class TextCarouselModule { }
