import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

interface BookData{
  title: string;
  imageURL: string;
  starRating: number;
}

// @ts-ignore
@Component({
  selector: 'app-opinionpage',
  standalone: true,
  templateUrl: "opinionpage.component.html",
  imports: [
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrl: 'opinionpage.component.css'
})
export class OpinionpageComponent implements OnInit{
  editingMode: boolean = false;
  bookData: BookData = {
    title: "Loading Title...",
    imageURL: "Loading",
    starRating: 0
  }
  titleText: string = 'Your review';
  numberStar: number = 3;

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get<BookData>('/assets/data/book-data.json').subscribe(
      (data) => {
        this.bookData = data;
      },
      (error) => {
        console.error('Error loading book data:', error);
      }
    );
  }


  toggleEditMode() {
    this.editingMode = !this.editingMode;
    this.titleText = this.editingMode ? 'Edit your review' : 'Your review';
    this.bookData.starRating =this.numberStar;
  }

}
