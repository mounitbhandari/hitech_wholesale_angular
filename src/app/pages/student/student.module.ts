import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PasswordModule} from "primeng/password";
import {KeyFilterModule} from "primeng/keyfilter";
import {ChartModule} from "primeng/chart";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {StepsModule} from "primeng/steps";
import {MenuItem} from "primeng/api/menuitem";
import {ToastModule} from "primeng/toast";
import {PanelModule} from "primeng/panel";
import {MatStepperModule} from "@angular/material/stepper";
import {DropdownModule} from "primeng/dropdown";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {SelectButtonModule} from "primeng/selectbutton";
import {ToggleButtonModule} from "primeng/togglebutton";
import {EditorModule} from "primeng/editor";
import {TabViewModule} from "primeng/tabview";
import {WebcamModule} from "ngx-webcam";
import {CameraComponent} from "../camera/camera.component";
import {CameraModule} from "../camera/camera.module";
import {TooltipModule} from "primeng/tooltip";
import {SidebarModule} from "primeng/sidebar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {StorageModule} from "@ngx-pwa/local-storage";




@NgModule({
  declarations: [
    StudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
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
export class StudentModule { }
