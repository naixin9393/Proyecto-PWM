import { Component } from '@angular/core';
import { Content } from "../../interfaces/content";
import { ContentService } from "../../services/content.service";
import { NgOptimizedImage } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";

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
  protected contentId: number = 0;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        params => {
          this.contentId = params['id'];
        }
    )
    this.contentService.getContentById(this.contentId).then(
        content => this.content = content
    );
  }
}
