import { Component, Renderer2 } from '@angular/core';
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
export class HeaderComponent{
  islogged: boolean = false;
  constructor(private router: Router, private renderer: Renderer2, private userService: UserService) {
    this.islogged = this.userService.getCurrentUser() != null;
  }


  async loadDiscoverBody() {
    await this.router.navigateByUrl('/discover');
    this.closeDropdownMenu();
  }

  async loadMyRankingsBody() {
    await this.router.navigateByUrl('/rankings');
    this.closeDropdownMenu();
  }

  closeDropdownMenu() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu && window.getComputedStyle(dropdownMenu).display === 'block') {
      this.renderer.setStyle(dropdownMenu, 'display', 'none');
    }
  }

  loadMenuToggle() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      const currentDisplay = window.getComputedStyle(dropdownMenu).display;
      const newDisplay = currentDisplay === 'none' ? 'block' : 'none';
      this.renderer.setStyle(dropdownMenu, 'display', newDisplay);
    }
  }
  logOut(){
    this.userService.logout();
    this.islogged = false;
  }
}
