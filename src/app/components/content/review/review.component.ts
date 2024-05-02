import { Component, Input } from '@angular/core';
import { Review } from "../../../interfaces/review";
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
  review: Review | null = null;
}
