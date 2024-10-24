import {Routes} from '@angular/router';
import {PostDetailsComponent} from "./posts/post-details/post-details.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CreateNewComponent} from "./posts/create-new/create-new.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'username/post-title',
    component: PostDetailsComponent,
  },
  {
    path: 'new',
    component: CreateNewComponent,
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];