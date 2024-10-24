import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'bb-main',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
}
