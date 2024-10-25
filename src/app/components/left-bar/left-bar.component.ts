import {Component} from '@angular/core';

@Component({
  selector: 'bb-left-bar',
  standalone: true,
  imports: [],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.scss'
})
export class LeftBarComponent {
  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
