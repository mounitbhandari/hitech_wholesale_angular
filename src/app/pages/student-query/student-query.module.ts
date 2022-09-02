import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentQueryRoutingModule } from './student-query-routing.module';
import { StudentQueryComponent } from './student-query.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PasswordModule} from "primeng/password";
import {KeyFilterModule} from "primeng/keyfilter";
import {ChartModule} from "primeng/chart";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {PanelModule} from "primeng/panel";
import {MatStepperModule} from "@angular/material/stepper";
import {DropdownModule} from "primeng/dropdown";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {SelectButtonModule} from "primeng/selectbutton";
import {ToggleButtonModule} from "primeng/togglebutton";
import {EditorModule} from "primeng/editor";
import {WebcamModule} from "ngx-webcam";
import {CameraModule} from "../camera/camera.module";
import {TooltipModule} from "primeng/tooltip";
import {SidebarModule} from "primeng/sidebar";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {StorageModule} from "@ngx-pwa/local-storage";
import {ConfirmationService} from "primeng/api";


@NgModule({
  declarations: [
    StudentQueryComponent
  ],
  imports: [
    CommonModule,
    StudentQueryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,

    PasswordModule,
    KeyFilterModule,
    ChartModule,
    TableModule,
    DialogModule,
    StepsModule,
    ToastModule,
    ReactiveFormsModule,
    PanelModule,
    MatStepperModule,
    DropdownModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SelectButtonModule,
    ToggleButtonModule,
    EditorModule,
    WebcamModule,
    CameraModule,
    TooltipModule,
    SidebarModule,
    NgbModule,
    MatAutocompleteModule,
    StorageModule,
    

  ]
})
export class StudentQueryModule { }
