import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillEditorComponent, QuillModule} from "ngx-quill";
import {TooltipModule} from 'primeng/tooltip';
import {CommonModule} from "@angular/common";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {DialogService, DynamicDialogModule, DynamicDialogRef} from "primeng/dynamicdialog";
import {PostOptionsComponent} from "../post-options/post-options.component";

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
    ToastModule,
    DynamicDialogModule
  ],
  providers: [
    MessageService,
    DialogService
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit{
  uploadedFiles: any[] = [];
  title: string = '';
  tags: string = '';
  content: string = '';
  ref: DynamicDialogRef | undefined;

  constructor(
    private _messageService: MessageService,
    private _dialogService: DialogService,
  ) {}

  ngOnInit() {}

  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this._messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  showDialog() {
    this.ref = this._dialogService.open(PostOptionsComponent, {
      width: '500px',
    })
  }
}
