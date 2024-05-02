import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Content} from "../../interfaces/content";
import {SeriesService} from "../../services/series.service";
import {MovieService} from "../../services/movie.service";
import {BookService} from "../../services/book.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CarouselModule} from "ngx-bootstrap/carousel";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  topSeries: Content[] = [];
  topBooks: Content[] = [];
  topMovies: Content[] = [];

  constructor(private serieService: SeriesService, private movieService: MovieService, private bookService: BookService) {
  }

  ngOnInit() {
    this.serieService.getContents().subscribe(series => this.topSeries = series);
    this.bookService.getContents().subscribe(books => this.topBooks = books);
    this.movieService.getContents().subscribe(movies => this.topMovies = movies);
  }
}
