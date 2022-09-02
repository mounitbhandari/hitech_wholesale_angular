import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavStudentRoutingModule } from './sidenav-student-routing.module';
import { SidenavStudentComponent } from './sidenav-student.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        SidenavStudentComponent
    ],
    exports: [
        SidenavStudentComponent
    ],
    imports: [
        CommonModule,
        SidenavStudentRoutingModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatFormFieldModule,
      FontAwesomeModule
    ]
})
export class SidenavStudentModule { }
