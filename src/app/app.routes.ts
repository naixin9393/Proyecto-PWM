import { Routes } from '@angular/router';
import {OpinionpageComponent} from "./components/opinionpage/opinionpage.component";
import {TopRankingComponent} from "./components/top-ranking/top-ranking.component";
import {MyRankingsComponent} from "./components/my-rankings/my-rankings.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {ProfileComponent} from "./components/profile/profile.component";
import { ContentComponent } from "./components/content/content.component";
import { InjectionToken } from "@angular/core";
import {HomeComponent} from "./components/home/home.component";

export const SERIES_SERVICE = new InjectionToken<string>('SeriesService');
export const MOVIE_SERVICE = new InjectionToken<string>('MovieService');
export const BOOK_SERVICE: InjectionToken<string> = new InjectionToken<string>('BookService');
export const SONG_SERVICE: InjectionToken<string> = new InjectionToken<string>('SongService');


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series/:id', component: ContentComponent, data: { requiredService: SERIES_SERVICE }},
  { path: 'movie/:id', component: ContentComponent, data: { requiredService: MOVIE_SERVICE }},
  { path: 'book/:id', component: ContentComponent, data: { requiredService: BOOK_SERVICE }},
  { path: 'song/:id', component: ContentComponent, data: { requiredService: SONG_SERVICE }},
  { path: 'opinion', component: OpinionpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent},
  { path: 'my-rankings', component: MyRankingsComponent},
  { path: 'tops/:topName', component: TopRankingComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent}
];

