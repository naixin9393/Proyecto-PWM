import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BookService} from "../../services/book.service";
import {SeriesService} from "../../services/series.service";
import {MovieService} from "../../services/movie.service";
import {SongService} from "../../services/song.service";
import {ReviewService} from "../../services/review.service";
import {ContentService} from "../../services/content.service";
import {Content} from "../../interfaces/content";
import {UserService} from "../../services/user.service";
import {Review} from "../../interfaces/review";

@Component({
  selector: 'app-top-ranking',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './top-ranking.component.html',
  styleUrl: './top-ranking.component.css'
})
export class TopRankingComponent implements OnInit {
  topEntries: Review[] = [];
  content: Content[] = [];
  topName: string = "TopNotFound";
  typeName: string = "TopNotFound";

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private serieService: SeriesService,
              private movieService: MovieService,
              private reviewService: ReviewService,
              private bookService: BookService,
              private songService: SongService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.topName = String(routeParams.get('topName'));
    this.getTop(this.topName);
  }

  getTop(topName: string) {
    let service:ContentService;
    if (topName.toLowerCase().includes("book")) {
      service = this.bookService;
      this.typeName = "book"
    } else if (topName.toLowerCase().includes("film")) {
      service = this.movieService;
      this.typeName = "movie"
    } else if (topName.toLowerCase().includes("serie")) {
      service = this.serieService;
      this.typeName = "series"
    } else {
      service = this.songService;
      this.typeName = "song"
    }
    this.getContents(service, topName);
  }


  private async getYourTop() {
    let user = await this.userService.getCurrentUser()
    if (user){
      const querySnapshot = await this.userService.getUserReviews(user.id)
      this.topEntries = querySnapshot.docs.map(doc => doc.data()) as Review[];
      this.topEntries = this.topEntries.filter(review => {
        return this.content.some(content => content.id === review.contentId);
      });
      this.topEntries.sort((a, b) => b.rating - a.rating);
    }
  }

  private async getWorldTop(service: ContentService) {
    for (let content of this.content) {
      const querySnapshot = await this.reviewService.queryReviewByContent(content.id)
      for (let topEntry of querySnapshot.docs.map(doc => doc.data()) as Review[]) {
        this.topEntries.push(topEntry);
      }
    }


        const reviewsByContent: { [key: string]: Review[] } = {};
        this.topEntries.forEach(review => {
          if (!reviewsByContent[review.contentId]) {
            console.log(review.contentId)
            reviewsByContent[review.contentId] = [];
          }
          reviewsByContent[review.contentId].push(review);
        });

        // Calcular la media de las puntuaciones por título
        const reviewsWithMean: Review[] = [];
        for (const id in reviewsByContent) {
          const reviewsOfContent = reviewsByContent[id];
          let resultReview = reviewsOfContent[0];
          const sumOfValue = reviewsOfContent.reduce((acc, review) => acc + parseFloat(String(review.rating)), 0);
          resultReview.rating = sumOfValue / reviewsOfContent.length
          reviewsWithMean.push(resultReview);
        }
        this.topEntries = reviewsWithMean;
        this.topEntries.sort((a, b) => b.rating - a.rating);
  }

  private getContents(service: ContentService, topName:string) {
    service.getContents()
      .subscribe(
        (data: Content[]) => {
          this.content = data;
          if (topName.toLowerCase().includes("your")) {
            this.getYourTop();
          } else if (topName.toLowerCase().includes("country")) {
            this.getWorldTop(service);
          } else{
            this.getWorldTop(service);
          }
        },
        (error) => {
          console.error('Error al cargar los datos:', error);
        }
      );
  }
  getContentById(id:string){
    return this.content.find(c => c.id === id)
  }
}


