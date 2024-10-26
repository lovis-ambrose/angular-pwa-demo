import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { EditorComponent } from '../editor/editor.component';
import { TipsComponent } from '../tips/tips.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bb-create-new',
  standalone: true,
  templateUrl: './create-new.component.html',
  imports: [
    TooltipModule,
    EditorComponent,
    TipsComponent,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent {
  isFormDirty: boolean = false;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  // Method to handle form change event from the editor component
  onFormChanged(isDirty: boolean) {
    this.isFormDirty = isDirty;
  }

  // Show confirmation dialog before navigating home
  confirmClose(event: Event) {
    if (this.isFormDirty) {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'You have unsaved changes. Are you sure you want to leave without saving?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          // Message indicating the user chose to leave
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Navigating home...',
          });
          this.goBackHome();
        },
        reject: () => {
          // Message indicating the user chose to continue editing
          this.messageService.add({
            severity: 'warn',
            summary: 'Continue Editing',
            detail: 'Save your changes before leaving.',
            life: 3000
          });
        }
      });
    } else {
      // Directly navigate if there are no unsaved changes
      this.goBackHome();
    }
  }

  // Navigate to the home route
  goBackHome() {
    this.router.navigateByUrl('');
  }
}
