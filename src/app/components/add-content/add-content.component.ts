import { Component } from '@angular/core';
import { Content } from "../../interfaces/content";
import { ContentService } from "../../services/content.service";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

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
  protected content?: Content;
  protected contentId: number = 1;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.content = this.contentService.getContentMock(this.contentId);
  }
}
