import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextCarouselNGXRoutingModule } from './text-carousel-ngx-routing.module';
import { TextCarouselNGXComponent } from './text-carousel-ngx.component';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {NgxNumToWordsModule} from "ngx-num-to-words";



@NgModule({
  declarations: [
    TextCarouselNGXComponent
  ],
  exports: [
    TextCarouselNGXComponent
  ],
  imports: [
    CommonModule,
    TextCarouselNGXRoutingModule,
    CarouselModule,
    ButtonModule,
    ChipModule,
    NgxNumToWordsModule
  ]
})
export class TextCarouselNGXModule {

}
