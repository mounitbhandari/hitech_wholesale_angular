import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavStudentComponent } from './sidenav-student.component';

const routes: Routes = [{ path: '', component: SidenavStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavStudentRoutingModule { }
