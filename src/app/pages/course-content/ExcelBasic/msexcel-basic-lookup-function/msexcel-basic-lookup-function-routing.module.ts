import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsexcelBasicLookupFunctionComponent } from './msexcel-basic-lookup-function.component';

const routes: Routes = [{ path: '', component: MsexcelBasicLookupFunctionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsexcelBasicLookupFunctionRoutingModule { }
