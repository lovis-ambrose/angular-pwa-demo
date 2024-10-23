import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { PostOptionsComponent } from './post-options/post-options.component';
import {AppModule} from "../app.module";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";



@NgModule({
  declarations: [
    PostDetailsComponent,
    CreateNewComponent,
    PostOptionsComponent,
    NavBarComponent
  ],
    imports: [
      CommonModule,
      AppModule,

    ]
})
export class PostsModule { }
