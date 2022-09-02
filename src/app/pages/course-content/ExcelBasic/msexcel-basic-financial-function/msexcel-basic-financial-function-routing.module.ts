import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSExcelBasicFinancialFunctionComponent } from './msexcel-basic-financial-function.component';

const routes: Routes = [{ path: '', component: MSExcelBasicFinancialFunctionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSExcelBasicFinancialFunctionRoutingModule { }
