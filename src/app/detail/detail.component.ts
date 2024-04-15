import { Component } from '@angular/core';
import { Content } from "../interfaces/content";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { PlatformService } from "../services/platform.service";
import { ReviewComponent } from "./review/review.component";
import { ReviewService } from "../services/review.service";
import { ContentService } from "../services/content.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReviewComponent,
    NgForOf
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  protected reviewIds?: number[];
  protected content?: Content;

  constructor(private platformService: PlatformService, private reviewService: ReviewService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.reviewIds = this.reviewService.getReviewsMock(this.contentId);
    this.content = this.contentService.getContentMock(this.contentId);
  }

  contentId: number = 1;

  getPlatformUrl(platform: string): string {
    return this.platformService.getPlatformUrl(platform);
  }

  getPlatformIconClass(platform: string): string {
    return this.platformService.getPlatformIconUrl(platform);
  }
}
