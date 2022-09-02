import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynchronousSequentialCircuitsComponent } from './synchronous-sequential-circuits.component';

const routes: Routes = [{ path: '', component: SynchronousSequentialCircuitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SynchronousSequentialCircuitsRoutingModule { }
