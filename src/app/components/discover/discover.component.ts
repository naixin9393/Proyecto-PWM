import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ContentService} from "../../services/content.service";
import {SongService} from "../../services/song.service";
import {BookService} from "../../services/book.service";
import {SeriesService} from "../../services/series.service";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent implements OnInit{
  discoverCategories: string[] = [];
  searchInput:string = "";
  searchType: string = "book";
  constructor(private http: HttpClient,
              private router: Router,
              protected songService: SongService,
              protected bookService: BookService,
              protected serieService: SeriesService,
              protected movieService: MovieService) {}

  ngOnInit(): void {
    this.http.get<any>('assets/discover-category-data.json').subscribe(data => {
      this.discoverCategories = data.titles;
    });
  }

  async goToContent() {
    let service: ContentService = this.bookService;
    if (this.searchType == "series"){service = this.serieService}
    else if (this.searchType == "movie"){service = this.movieService}
    else if (this.searchType == "song"){service = this.songService}
    const contents = await service.getContentByName(this.searchInput);
    if (contents.length == 0){
      console.log(`/${this.searchType}`);
      return;
    }
    await this.router.navigate([`/${this.searchType}/${contents[0].id}`])
  }
}
