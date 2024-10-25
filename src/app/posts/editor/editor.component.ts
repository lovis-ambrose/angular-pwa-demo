import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillEditorComponent, QuillModule} from "ngx-quill";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'bb-editor',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    QuillEditorComponent,
    TooltipModule,
    CommonModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [
    MessageService,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit{
  uploadedFiles: any[] = [];
  title: string = '';
  tags: string = '';
  content: string = '';

  constructor(
    private _messageService: MessageService
  ) {}

  ngOnInit() {}

  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this._messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
