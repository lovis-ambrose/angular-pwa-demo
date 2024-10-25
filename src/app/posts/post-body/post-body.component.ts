import {Component, OnInit} from '@angular/core';
import {TooltipModule} from "primeng/tooltip";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'bb-post-body',
  standalone: true,
  imports: [
    TooltipModule,
    ReactiveFormsModule,
    EditorModule,
    ButtonModule,
  ],
  templateUrl: './post-body.component.html',
  styleUrl: './post-body.component.scss'
})
export class PostBodyComponent implements OnInit{
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl()
    });
  }

  copyCode() {
  const code = `html {
    scroll-behavior: smooth;
  }`;

  navigator.clipboard.writeText(code).then(() => {
    console.log('Code copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}
