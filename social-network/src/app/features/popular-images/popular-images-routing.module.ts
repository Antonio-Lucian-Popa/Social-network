import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularImagesComponent } from './popular-images.component';

const routes: Routes = [{ path: '', component: PopularImagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularImagesRoutingModule { }
