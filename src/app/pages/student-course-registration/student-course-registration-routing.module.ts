import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseRegistrationComponent } from './student-course-registration.component';

const routes: Routes = [{ path: '', component: StudentCourseRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseRegistrationRoutingModule { }
