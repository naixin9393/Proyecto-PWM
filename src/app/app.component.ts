import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {OpinionpageComponent} from "./components/opinionpage/opinionpage.component";
import {FooterComponent} from "./components/footer/footer.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {MyRankingsComponent} from "./components/my-rankings/my-rankings.component";
import {TopRankingComponent} from "./components/top-ranking/top-ranking.component";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            OpinionpageComponent,
            FooterComponent,
            DiscoverComponent,
            MyRankingsComponent,
            TopRankingComponent,
            AngularFireAuthModule,
            AngularFireModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MisTops';
}
