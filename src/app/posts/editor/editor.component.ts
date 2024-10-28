import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillEditorComponent, QuillModule} from "ngx-quill";
import {TooltipModule} from 'primeng/tooltip';
import {CommonModule} from "@angular/common";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {DialogService, DynamicDialogModule, DynamicDialogRef} from "primeng/dynamicdialog";
import {PostOptionsComponent} from "../post-options/post-options.component";
import Quill from "quill";

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
export class EditorComponent implements OnInit, OnChanges{
  uploadedFiles: any[] = [];
  title: string = '';
  tags: string = '';
  content: string = '';
  ref: DynamicDialogRef | undefined;
  private isDirty: boolean = false;
  @Output() formChanged = new EventEmitter<boolean>();
  @Output() focusChanged = new EventEmitter<string>();

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

  ngOnChanges() {
    this.formChanged.emit(this.isDirty);
  }

  onFormChange() {
    this.isDirty = true;
    this.formChanged.emit(this.isDirty);
  }

  onTitleFocus() {
    this.focusChanged.emit('title');
  }

  onTagsFocus() {
    this.focusChanged.emit('tags');
  }

  // Attach focus event handler to Quill editor
  onEditorCreated(editorInstance: Quill) {
    const editor = editorInstance.root;
    editor.addEventListener('focus', () => this.focusChanged.emit('content'));
  }
}
