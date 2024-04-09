import { Component } from '@angular/core';
import { ContentDetails } from "../../interfaces/contentdetails";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { PlatformService } from "../../services/platform.service";
import { ReviewComponent } from "./review/review.component";
import { ReviewService } from "../../services/review.service";

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
  protected reviewIds: number[] | undefined;

  constructor(private platformService: PlatformService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewIds = this.reviewService.getReviewsMock(this.contentId);
  }

  contentId: number = 1;

  contentDetails: ContentDetails = {
    title: 'One Piece',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    synopsis: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates',
    genres: ["Action", "Adventure", "Comedy", "Super Power", "Drama", "Fantasy", "Shounen"],
    rating: 4,
    releaseDate: new Date('1999-10-20'),
    availableOn: ['Crunchyroll', 'Funimation', 'Netflix'],
    episodes: 1000,
    durationInMinutes: 24
  }

  getPlatformUrl(platform: string): string {
    return this.platformService.getPlatformUrl(platform);
  }

  getPlatformIconClass(platform: string): string {
    return this.platformService.getPlatformIconUrl(platform);
  }
}
