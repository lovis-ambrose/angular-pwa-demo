import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'bb-reactions',
  standalone: true,
  imports: [
    CommonModule,
    TooltipModule
  ],
  templateUrl: './reactions.component.html',
  styleUrl: './reactions.component.scss'
})
export class ReactionsComponent {
  reactions = [
    { icon: 'bi-heart-fill text-danger', count: 49 ,tooltip: 'like'},
    { icon: 'bi-headset text-primary', count: 5 ,tooltip: 'unicorn'},
    { icon: 'bi-emoji-frown-fill text-warning', count: 4, tooltip: 'exploding head' },
    { icon: 'bi-hand-thumbs-up text-warning', count: 4, tooltip: 'raise hands' },
    { icon: 'bi-fire text-danger', count: 6, tooltip: 'fire' },
  ];
}
