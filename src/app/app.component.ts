import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DiscoverComponent} from "./discover/discover.component";
import {MyRankingsComponent} from "./my-rankings/my-rankings.component";
import {TopRankingComponent} from "./top-ranking/top-ranking.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DiscoverComponent,
    MyRankingsComponent,
    TopRankingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MisTops';
}
