import { Routes } from '@angular/router';
import {OpinionpageComponent} from "./components/opinionpage/opinionpage.component";
import {TopRankingComponent} from "./components/top-ranking/top-ranking.component";
import {MyRankingsComponent} from "./components/my-rankings/my-rankings.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
  { path: 'opinion', component: OpinionpageComponent },
  { path: 'discover', component: DiscoverComponent},
  { path: 'my-rankings', component: MyRankingsComponent},
  { path: 'tops/:topName', component: TopRankingComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent}
];
