import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent implements OnInit{
  discoverCategories: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('../../assets/discover-category-data.json').subscribe(data => {
      this.discoverCategories = data.titles;
    });
  }
}
