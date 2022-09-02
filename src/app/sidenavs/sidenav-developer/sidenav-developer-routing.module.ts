import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavDeveloperComponent } from './sidenav-developer.component';

const routes: Routes = [{ path: '', component: SidenavDeveloperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavDeveloperRoutingModule { }
