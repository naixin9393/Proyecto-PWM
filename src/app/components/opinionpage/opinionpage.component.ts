import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-opinionpage',
  standalone: true,
  templateUrl: "opinionpage.component.html",
  imports: [
    NgOptimizedImage
  ],
  styleUrl: 'opinionpage.component.css'
})
export class OpinionpageComponent {
  editingMode: boolean = false;
  bookTitle: string ="Book Title";
  titleText: string = 'Your review'

  toggleEditMode() {
    this.editingMode = !this.editingMode;
    this.titleText = this.editingMode ? 'Edit your review' : 'Your review';
  }
}
