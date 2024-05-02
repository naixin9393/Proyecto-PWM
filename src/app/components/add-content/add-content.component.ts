import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from "../../interfaces/content";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ContentService } from "../../services/content.service";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-add-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgForOf,
    FormsModule
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
  ratings: number[] = [1, 2, 3, 4, 5];
  rating: number = 1;
  reviewText: string = '';
  private user?: User | null;

  ngOnInit() {
    this.userService.getCurrentUser().then(user => {
      this.user = user;
    });
  }

  constructor(private userService: UserService) {
  }

  close() {
    this.closeEvent.emit();
  }

  submit() {
    if (this.user && this.content) {
      this.contentService?.addReview(this.user, this.content, this.rating, this.reviewText);
    }
    this.close();
  }
}
