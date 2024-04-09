import { Component, Input } from '@angular/core';
import { ReviewService } from "../../review.service";
import { Review } from "../../review";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input()
  reviewId: number = 0;
  review: Review | null = null;
  constructor(private reviewService: ReviewService) {
  }

  ngOnInit(): void{
    this.review = this.reviewService.getReviewMock(this.reviewId)
  }
}
