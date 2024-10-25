import {Component} from '@angular/core';
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {ReactionsComponent} from "../reactions/reactions.component";

@Component({
  selector: 'bb-side-nav',
  standalone: true,
  imports: [
    TooltipModule,
    CommonModule,
    ReactionsComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  reactionsVisible = false;

  showReactions() {
    this.reactionsVisible = true;
  }

  hideReactions() {
    this.reactionsVisible = false;
  }
}
