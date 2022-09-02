import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavDeveloperRoutingModule } from './sidenav-developer-routing.module';
import { SidenavDeveloperComponent } from './sidenav-developer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
    declarations: [
        SidenavDeveloperComponent
    ],
    exports: [
        SidenavDeveloperComponent
    ],
    imports: [
        CommonModule,
        SidenavDeveloperRoutingModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule
    ]
})
export class SidenavDeveloperModule { }
