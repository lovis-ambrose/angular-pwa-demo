import {Component} from '@angular/core';
import {TooltipModule} from "primeng/tooltip";
import {Router} from "@angular/router";
import {EditorComponent} from "../editor/editor.component";
import {TipsComponent} from "../tips/tips.component";

@Component({
  selector: 'bb-create-new',
  standalone: true,
  templateUrl: './create-new.component.html',
  imports: [
    TooltipModule,
    EditorComponent,
    TipsComponent
  ],
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {
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
