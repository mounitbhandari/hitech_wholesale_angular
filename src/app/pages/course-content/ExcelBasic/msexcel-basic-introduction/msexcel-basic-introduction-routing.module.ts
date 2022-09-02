import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSExcelBasicIntroductionComponent } from './msexcel-basic-introduction.component';

const routes: Routes = [{ path: '', component: MSExcelBasicIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSExcelBasicIntroductionRoutingModule { }
