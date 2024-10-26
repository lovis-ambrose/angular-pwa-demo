import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'bb-post-options',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './post-options.component.html',
  styleUrl: './post-options.component.scss'
})
export class PostOptionsComponent implements OnInit {
  value!: string;
  minDate!: string;

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }
}
