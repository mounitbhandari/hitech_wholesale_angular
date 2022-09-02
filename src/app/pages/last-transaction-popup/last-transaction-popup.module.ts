import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { LastTransactionPopupRoutingModule } from './last-transaction-popup-routing.module';
import { LastTransactionPopupComponent } from './last-transaction-popup.component';


@NgModule({
  declarations: [
    LastTransactionPopupComponent
  ],
  imports: [
    CommonModule,
    LastTransactionPopupRoutingModule,
    MatDialogModule
  ]
})
export class LastTransactionPopupModule { }
