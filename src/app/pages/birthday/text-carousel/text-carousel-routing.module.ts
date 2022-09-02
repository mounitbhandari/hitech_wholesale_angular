import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCarouselComponent } from './text-carousel.component';

const routes: Routes = [{ path: '', component: TextCarouselComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextCarouselRoutingModule { }
