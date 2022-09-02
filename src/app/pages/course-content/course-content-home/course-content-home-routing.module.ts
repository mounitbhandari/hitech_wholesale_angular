import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseContentHomeComponent } from './course-content-home.component';

const routes: Routes = [{ path: '', component: CourseContentHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseContentHomeRoutingModule { }
