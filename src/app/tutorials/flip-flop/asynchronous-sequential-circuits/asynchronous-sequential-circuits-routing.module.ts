import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsynchronousSequentialCircuitsComponent } from './asynchronous-sequential-circuits.component';

const routes: Routes = [{ path: '', component: AsynchronousSequentialCircuitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsynchronousSequentialCircuitsRoutingModule { }
