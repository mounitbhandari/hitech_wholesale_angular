import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';
import {ToastModule} from "primeng/toast";
import {NgSelectModule} from "@ng-select/ng-select";

import { FeesReceivedRoutingModule } from './fees-received-routing.module';
import { FeesReceivedComponent } from './fees-received.component';

import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FeesReceivedComponent
  ],
  imports: [
    CommonModule,
    FeesReceivedRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    TableModule,
    ButtonModule,
    ToastModule,
    NgSelectModule,
    ConfirmDialogModule,
    DialogModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class FeesReceivedModule { }
