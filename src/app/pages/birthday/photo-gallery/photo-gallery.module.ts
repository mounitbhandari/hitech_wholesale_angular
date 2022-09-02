import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery.component';
import {GalleriaModule} from "primeng/galleria";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  exports: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    GalleriaModule,
    ButtonModule,
  ]
})
export class PhotoGalleryModule { }
