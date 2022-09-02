import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdayRoutingModule } from './birthday-routing.module';
import { BirthdayComponent } from './birthday.component';
import {ButtonModule} from "primeng/button";
import {GalleriaModule} from "primeng/galleria";
import {PhotoGalleryModule} from "./photo-gallery/photo-gallery.module";
import {TextCarouselModule} from "./text-carousel/text-carousel.module";
import {TextCarouselNGXModule} from "./text-carousel-ngx/text-carousel-ngx.module";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    BirthdayComponent
  ],
    imports: [
        CommonModule,
        BirthdayRoutingModule,
        PhotoGalleryModule,
        GalleriaModule,
        ButtonModule,
        TextCarouselModule,
        TextCarouselNGXModule,
        ToggleButtonModule,
        FormsModule,
        MatSlideToggleModule
    ]
})
export class BirthdayModule { }
