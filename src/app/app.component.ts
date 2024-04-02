import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MisTops';
}
