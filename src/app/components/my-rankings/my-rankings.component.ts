import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-rankings',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './my-rankings.component.html',
  styleUrl: './my-rankings.component.css'
})
export class MyRankingsComponent implements OnInit{
  myRankingsCategories: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/my-rankings-category-data.json').subscribe(data => {
      this.myRankingsCategories = data.titles;
    });
  }
}
