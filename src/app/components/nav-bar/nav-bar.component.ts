import {Component, HostListener} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {BadgeModule} from "primeng/badge";
import {TooltipModule} from "primeng/tooltip";
import {DialogService, DynamicDialogModule, DynamicDialogRef} from "primeng/dynamicdialog";
import {ProfileDropdownComponent} from "../../account/profile-dropdown/profile-dropdown.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'bb-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    BadgeModule,
    TooltipModule,
    NgIf,
    ProfileDropdownComponent
  ],
  providers: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  profileDropdownVisible = false;

  constructor(
    private _router: Router,
  ) {
  }
  goHome() {
    this._router.navigateByUrl('');
  }

  createNew() {
    this._router.navigateByUrl('new');
  }

  toggleProfileDropdown() {
    this.profileDropdownVisible = !this.profileDropdownVisible;
  }
  //close profile if click outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const isClickInside = targetElement.closest('.profile-wrapper, .pointer');
    if (!isClickInside) {
      this.profileDropdownVisible = false;
    }
  }
}
