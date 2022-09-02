import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavTutorialRoutingModule } from './sidenav-tutorial-routing.module';
import { SidenavTutorialComponent } from './sidenav-tutorial.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    SidenavTutorialComponent
  ],
  exports: [
    SidenavTutorialComponent
  ],
  imports: [
    CommonModule,
    SidenavTutorialRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    FontAwesomeModule
  ]
})
export class SidenavTutorialModule { }
