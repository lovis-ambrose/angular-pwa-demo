import {Component} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {BadgeModule} from "primeng/badge";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'bb-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [
    RouterModule,
    BadgeModule,
    TooltipModule,
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

  createNew() {
    this.router.navigateByUrl('new');
  }
}
