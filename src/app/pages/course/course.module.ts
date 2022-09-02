import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from "primeng/table";
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import {ToastModule} from "primeng/toast";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {EditorModule} from "primeng/editor";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {StepsModule} from "primeng/steps";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {SelectButtonModule} from "primeng/selectbutton";
import {ToggleButtonModule} from "primeng/togglebutton";
import {TooltipModule} from "primeng/tooltip";
import {SidebarModule} from "primeng/sidebar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ToastModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    ButtonModule,
    RippleModule,
    EditorModule,
    TableModule,
    MatButtonModule,
    ConfirmDialogModule,
    DialogModule,
    StepsModule,
    PanelModule,
    DropdownModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SelectButtonModule,
    ToggleButtonModule,
    TooltipModule,
    SidebarModule,
    NgbModule,
    MatAutocompleteModule
  ]
})
export class CourseModule { }
