import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipFlopHomeComponent } from './flip-flop-home.component';

const routes: Routes = [{ path: '', component: FlipFlopHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipFlopHomeRoutingModule { }
