import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastTransactionPopupComponent } from './last-transaction-popup.component';

const routes: Routes = [{ path: '', component: LastTransactionPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastTransactionPopupRoutingModule { }
