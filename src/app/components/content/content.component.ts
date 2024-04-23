import { Component, Input } from '@angular/core';
import { Content } from "../../interfaces/content";
import { NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { PlatformService } from "../../services/platform.service";
import { ReviewComponent } from "./review/review.component";
import { ReviewService } from "../../services/review.service";
import { ContentService } from "../../services/content.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReviewComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  protected contentId: number = 0;
  protected reviewIds?: number[];

  protected content?: Content;

  constructor(private platformService: PlatformService, private reviewService: ReviewService, private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.contentId = params['id'];
      }
    )
    this.reviewIds = this.reviewService.getReviewsMock(this.contentId);
    this.contentService.getContentById(this.contentId).then(
      content => this.content = content
    )
  }

  getPlatformUrl(platform: string): string {
    return this.platformService.getPlatformUrl(platform);
  }

  getPlatformIconClass(platform: string): string {
    return this.platformService.getPlatformIconUrl(platform);
  }
}
