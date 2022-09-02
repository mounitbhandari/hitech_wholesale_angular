import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelDateFunctionComponent } from './excel-date-function.component';

const routes: Routes = [{ path: '', component: ExcelDateFunctionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelDateFunctionRoutingModule { }
