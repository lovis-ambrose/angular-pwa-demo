import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'bb-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    RouterModule
  ]
})
export class MainComponent {
}
