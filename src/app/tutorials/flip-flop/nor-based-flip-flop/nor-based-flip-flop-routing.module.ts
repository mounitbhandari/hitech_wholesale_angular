import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorBasedFlipFlopComponent } from './nor-based-flip-flop.component';

const routes: Routes = [{ path: '', component: NorBasedFlipFlopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorBasedFlipFlopRoutingModule { }
