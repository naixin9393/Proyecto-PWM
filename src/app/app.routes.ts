import { Routes } from '@angular/router';
import {TopRankingComponent} from "./top-ranking/top-ranking.component";
import {MyRankingsComponent} from "./my-rankings/my-rankings.component";
import {DiscoverComponent} from "./discover/discover.component";

export const routes: Routes = [
  { path: '', component: DiscoverComponent},
  { path: 'tops/:topName', component: TopRankingComponent}
];
