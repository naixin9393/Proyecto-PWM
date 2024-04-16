import { Routes } from '@angular/router';
import { ContentComponent } from "./components/content/content.component";
import { AddContentComponent } from "./components/add-content/add-content.component";

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'add-content/:id', component: AddContentComponent }
];
