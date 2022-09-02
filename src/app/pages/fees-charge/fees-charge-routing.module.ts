import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesChargeComponent } from './fees-charge.component';

const routes: Routes = [{ path: '', component: FeesChargeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesChargeRoutingModule { }
