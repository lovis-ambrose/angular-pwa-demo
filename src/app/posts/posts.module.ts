import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateNewComponent} from './create-new/create-new.component';
import {PostOptionsComponent} from './post-options/post-options.component';
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    CreateNewComponent,
    PostOptionsComponent,
  ],
    imports: [
      CommonModule,
      AppModule,

    ]
})
export class PostsModule { }
