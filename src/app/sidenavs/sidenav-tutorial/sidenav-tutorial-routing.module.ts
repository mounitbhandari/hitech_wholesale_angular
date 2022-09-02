import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavTutorialComponent } from './sidenav-tutorial.component';

const routes: Routes = [{ path: '', component: SidenavTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavTutorialRoutingModule { }
