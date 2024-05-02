import { Component } from '@angular/core';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TopComponent} from "./top/top.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    TopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
