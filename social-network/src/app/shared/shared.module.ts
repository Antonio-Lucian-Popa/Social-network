import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostModalComponent } from './components/create-post/create-post-modal/create-post-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const COMPONENTS: any[] = [
  CreatePostComponent,
  PostComponent
];

const NB_MODULES: any[] = [
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  TextFieldModule,
  MatFormFieldModule,
  MatInputModule
];


@NgModule({
  declarations: [...COMPONENTS, CreatePostModalComponent],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  entryComponents: [CreatePostModalComponent],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
