import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelDatabaseComponent } from './excel-database.component';

const routes: Routes = [{ path: '', component: ExcelDatabaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelDatabaseRoutingModule { }
