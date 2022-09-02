import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorBasedJKFlipFlopComponent } from './nor-based-jkflip-flop.component';

const routes: Routes = [{ path: '', component: NorBasedJKFlipFlopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorBasedJKFlipFlopRoutingModule { }
