import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DataService} from "../../../services/data.service";
import {Books} from "../../../interfaces/books";
import {Series} from "../../../interfaces/series";
import {Movies} from "../../../interfaces/movies";

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [
    CarouselModule,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent implements OnInit{
  movies?: Movies[];
  series?: Series[];
  books?: Books[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadMovies();
    this.loadSeries();
    this.loadBooks();
  }

  loadMovies(): void {
    this.dataService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  loadSeries(): void {
    this.dataService.getSeries().subscribe(data => {
      this.series = data;
    });
  }

  loadBooks(): void {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}
