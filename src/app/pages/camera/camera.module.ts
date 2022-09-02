import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraComponent } from './camera.component';
import {WebcamModule} from "ngx-webcam";
import {MatButtonModule} from "@angular/material/button";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";


@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    CommonModule,
    CameraRoutingModule,
    WebcamModule,
    MatButtonModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [CameraComponent]
})
export class CameraModule { }
