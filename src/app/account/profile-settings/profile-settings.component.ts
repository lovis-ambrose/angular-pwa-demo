import { Component } from '@angular/core';
import {LeftBarComponent} from "../../components/left-bar/left-bar.component";
import {MainComponent} from "../../components/main/main.component";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";
import {RightBarComponent} from "../../components/right-bar/right-bar.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'bb-profile-settings',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgOptimizedImage,
    LeftBarComponent,
    MainComponent,
    NavBarComponent,
    RightBarComponent,
  ],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {
  isChecked = false;
  previewUrl: string = 'https://www.flaticon.com/free-icon/user_219986';
  selectedFileName: string | null = null;
  selectedColor: string = '#0000ff';

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFileName = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        // Ensure `result` is a string before assigning it to `previewUrl`
        if (typeof result === 'string') {
          this.previewUrl = result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

}
