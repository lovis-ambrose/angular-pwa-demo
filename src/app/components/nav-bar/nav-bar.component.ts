import {Component} from "@angular/core";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'bb-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [
    RouterModule
  ]
})
export class NavBarComponent {

  constructor(
    private router: Router,
  ) {
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
