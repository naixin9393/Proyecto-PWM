import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 loadPrint(){
   console.log("Funciona el botón");
 }
}

