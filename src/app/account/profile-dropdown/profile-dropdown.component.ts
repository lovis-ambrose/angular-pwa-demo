import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bb-profile-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss'
})
export class ProfileDropdownComponent {

  constructor(
    private _router: Router,
  ) {
  }
  goToCreateNew() {
    this._router.navigateByUrl('new');
  }

  goToSettings() {
    this._router.navigateByUrl('settings');
  }
}
