import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

interface BookData{
  title: string;
  imgURL: string;
}

// @ts-ignore
@Component({
  selector: 'app-opinionpage',
  standalone: true,
  templateUrl: "opinionpage.component.html",
  imports: [
    NgOptimizedImage,
    HttpClientModule
  ],
  styleUrl: 'opinionpage.component.css'
})
export class OpinionpageComponent implements OnInit{
  editingMode: boolean = false;
  bookData: BookData = {
    title: "Loading Title...",
    imgURL: ""
  }
  titleText: string = 'Your review';


  constructor(private http: HttpClient){}
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
  }
}
