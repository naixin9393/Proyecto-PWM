import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  editingMode: boolean = false;
  user: User | null = {id:'', username:'', email:''};
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().then(user => {
      this.user = user;
    }).catch(error => {
      console.error('Error al obtener el usuario:', error);
    });
  }

  toggleEditMode(){
    this.editingMode = !this.editingMode;
  }
}
