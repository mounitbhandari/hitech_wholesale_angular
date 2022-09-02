import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentUserComponent } from './student-user.component';

const routes: Routes = [{ path: '', component: StudentUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentUserRoutingModule { }
