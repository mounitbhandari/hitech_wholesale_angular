import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';
import {ToastModule} from "primeng/toast";
import {NgSelectModule} from "@ng-select/ng-select";

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {StepsModule} from "primeng/steps";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";

import { StudentCourseRegistrationRoutingModule } from './student-course-registration-routing.module';
import { StudentCourseRegistrationComponent } from './student-course-registration.component';



@NgModule({
  declarations: [
    StudentCourseRegistrationComponent
  ],
  imports: [
    CommonModule,
    StudentCourseRegistrationRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    ToastModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class StudentCourseRegistrationModule { }
