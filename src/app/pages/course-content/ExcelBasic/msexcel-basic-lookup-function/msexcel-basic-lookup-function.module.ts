import { TooltipModule } from 'primeng/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsexcelBasicLookupFunctionRoutingModule } from './msexcel-basic-lookup-function-routing.module';
import { MsexcelBasicLookupFunctionComponent } from './msexcel-basic-lookup-function.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    MsexcelBasicLookupFunctionComponent
  ],
  imports: [
    CommonModule,
    MsexcelBasicLookupFunctionRoutingModule,
    AccordionModule,
    ToastModule,
    ButtonModule,
    FieldsetModule,
    DividerModule,
    CardModule,
    TooltipModule
  ]
})
export class MsexcelBasicLookupFunctionModule { }
