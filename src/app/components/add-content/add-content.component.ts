import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from "../../interfaces/content";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ContentService } from "../../services/content.service";

@Component({
  selector: 'app-add-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './add-content.component.html',
  styleUrl: './add-content.component.css'
})
export class AddContentComponent {
  @Input()
  content?: Content;
  @Input()
  contentService: ContentService | undefined;
  @Output()
  closeEvent = new EventEmitter<void>();

  constructor() {
  }

  onClose() {
    this.closeEvent.emit();
  }
}
