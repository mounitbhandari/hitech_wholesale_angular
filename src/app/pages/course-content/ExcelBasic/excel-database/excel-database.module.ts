import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelDatabaseRoutingModule } from './excel-database-routing.module';
import { ExcelDatabaseComponent } from './excel-database.component';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TooltipModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    ExcelDatabaseComponent
  ],
  imports: [
    CommonModule,
    ExcelDatabaseRoutingModule,
    AccordionModule,
    ToastModule,
    ButtonModule,
    FieldsetModule,
    DividerModule,
    CardModule,
    TooltipModule
  ]
})
export class ExcelDatabaseModule { }
