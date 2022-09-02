import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesReceivedComponent } from './fees-received.component';

const routes: Routes = [{ path: '', component: FeesReceivedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesReceivedRoutingModule { }
