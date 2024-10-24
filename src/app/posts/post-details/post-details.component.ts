import {Component} from '@angular/core';
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";
import {SideNavComponent} from "../side-nav/side-nav.component";
import {PostBodyComponent} from "../post-body/post-body.component";
import {ProfileBarComponent} from "../profile-bar/profile-bar.component";

@Component({
  selector: 'bb-post-details',
  standalone: true,
  imports: [
    NavBarComponent,
    SideNavComponent,
    PostBodyComponent,
    ProfileBarComponent
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
}
