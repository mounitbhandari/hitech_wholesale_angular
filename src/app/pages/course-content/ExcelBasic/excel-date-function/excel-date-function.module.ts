import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelDateFunctionRoutingModule } from './excel-date-function-routing.module';
import { ExcelDateFunctionComponent } from './excel-date-function.component';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import {TooltipModule} from "primeng/tooltip";


@NgModule({
  declarations: [
    ExcelDateFunctionComponent
  ],
  imports: [
    CommonModule,
    ExcelDateFunctionRoutingModule,
    AccordionModule,
    ToastModule,
    ButtonModule,
    FieldsetModule,
    DividerModule,
    CardModule,
    TooltipModule
  ]
})
export class ExcelDateFunctionModule { }
