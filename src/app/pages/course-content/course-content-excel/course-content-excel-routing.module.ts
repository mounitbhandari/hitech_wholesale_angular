import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseContentExcelComponent } from './course-content-excel.component';

const routes: Routes = [{ path: '', component: CourseContentExcelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseContentExcelRoutingModule { }
