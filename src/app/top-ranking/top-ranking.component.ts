import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-top-ranking',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './top-ranking.component.html',
  styleUrl: './top-ranking.component.css'
})
export class TopRankingComponent implements OnInit {
  topEntries: TopEntry[] = [];
  topName: string = "TopNotFound";

  constructor(private http: HttpClient,
  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.topName = String(routeParams.get('topName'));
    this.http.get<TopEntry[]>('../../assets/books.json')
      .subscribe(
        (data: TopEntry[]) => {
          this.topEntries = data;
        },
        (error) => {
          console.error('Error al cargar los datos:', error);
        }
      );  }
}

export interface TopEntry {
  name: string;
  author: string;
  value: number;
}

