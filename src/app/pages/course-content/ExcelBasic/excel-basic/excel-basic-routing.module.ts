import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelBasicComponent } from './excel-basic.component';

const routes: Routes = [{ path: '', component: ExcelBasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelBasicRoutingModule { }
