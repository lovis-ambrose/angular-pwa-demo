import {Component} from '@angular/core';
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {LeftBarComponent} from "../components/left-bar/left-bar.component";
import {MainComponent} from "../components/main/main.component";
import {RightBarComponent} from "../components/right-bar/right-bar.component";

@Component({
  selector: 'bb-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    NavBarComponent,
    LeftBarComponent,
    MainComponent,
    RightBarComponent
]
})
export class HomeComponent {

}
