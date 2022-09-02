import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCarouselNGXComponent } from './text-carousel-ngx.component';

const routes: Routes = [{ path: '', component: TextCarouselNGXComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextCarouselNGXRoutingModule { }
