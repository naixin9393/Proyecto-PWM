import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "./components/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MisTops';
}
