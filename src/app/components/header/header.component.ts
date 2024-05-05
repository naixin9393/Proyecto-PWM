import {Component, OnInit, Renderer2} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  islogged: boolean = false;
  constructor(private router: Router, private renderer: Renderer2, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.isLoggedIn().subscribe(isLogged => {
      this.islogged = isLogged;
    });
  }

  logOut(){
    this.userService.logout();
    this.islogged = false;
  }
}
