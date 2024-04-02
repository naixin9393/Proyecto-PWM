import { Component } from '@angular/core';
import { ContentDetails } from "../contentdetails";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  constructor() { }

  ngOnInit(): void {
  }

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

  getPlatform() {
    return "";
  }
}
