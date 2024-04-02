import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 loadPrint(){
   console.log("Funciona el botón");
 }
}

