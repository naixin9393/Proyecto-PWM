import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  editingMode: boolean = false;
  toggleEditMode(){
    this.editingMode = !this.editingMode;
  }
}
