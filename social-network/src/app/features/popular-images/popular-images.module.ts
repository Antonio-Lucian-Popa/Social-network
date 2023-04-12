import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularImagesRoutingModule } from './popular-images-routing.module';
import { PopularImagesComponent } from './popular-images.component';


@NgModule({
  declarations: [
    PopularImagesComponent
  ],
  imports: [
    CommonModule,
    PopularImagesRoutingModule
  ]
})
export class PopularImagesModule { }
