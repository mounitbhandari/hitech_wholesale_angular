import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsexcelGeneralFunctionComponent } from './msexcel-general-function.component';

const routes: Routes = [{ path: '', component: MsexcelGeneralFunctionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsexcelGeneralFunctionRoutingModule { }
