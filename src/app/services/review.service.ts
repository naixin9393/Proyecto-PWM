import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
  getReviewsMock(contentId: number) {
    return [
      0, 1, 2, 3
    ];
  }

  getReviewMock(reviewId: number) {
    if (reviewId === 0) {
      return null;
    }
    return {
      id: reviewId,
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      username: 'user'
    }
  }
}
