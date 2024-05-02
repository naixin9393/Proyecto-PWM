import { Component, Injector, Input } from '@angular/core';
import { Content } from "../../interfaces/content";
import { NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { PlatformService } from "../../services/platform.service";
import { ReviewComponent } from "./review/review.component";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Review } from "../../interfaces/review";
import { ContentService } from "../../services/content.service";
import { AddContentComponent } from "../add-content/add-content.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReviewComponent,
    NgForOf,
    NgIf,
    RouterLink,
    AddContentComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  protected contentId: string = "";
  protected contentService: ContentService | undefined;
  protected content?: Content;
  protected reviews?: Review[];
  isAddContentOpen: boolean = false;

  constructor(private platformService: PlatformService, private injector: Injector, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.contentId = params['id'];
      }
    )
    const serviceToken = this.route.snapshot.data['requiredService'];
    this.contentService = this.injector.get<ContentService>(<any>serviceToken);

    this.contentService.getReviewsById(this.contentId).subscribe(
        (reviews: Review[] | undefined) => this.reviews = reviews
    )
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

  toggleAddContent() {
    this.isAddContentOpen = !this.isAddContentOpen;
  }
}
