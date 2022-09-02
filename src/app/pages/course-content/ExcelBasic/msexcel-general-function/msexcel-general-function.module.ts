import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsexcelGeneralFunctionRoutingModule } from './msexcel-general-function-routing.module';
import { MsexcelGeneralFunctionComponent } from './msexcel-general-function.component';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    MsexcelGeneralFunctionComponent
  ],
  imports: [
    CommonModule,
    MsexcelGeneralFunctionRoutingModule,
    AccordionModule,
    ToastModule,
    ButtonModule,
    FieldsetModule,
    DividerModule,
    CardModule
  ]
})
export class MsexcelGeneralFunctionModule { }
