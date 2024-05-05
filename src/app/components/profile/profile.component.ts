import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  editingMode: boolean = false;
  user: User = {id:'', username:'', email:''};
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().then(user => {
      if (user) {
        this.user = user;
      }
    }).catch(error => {
      console.error('Error al obtener el usuario:', error);
    });
  }

  toggleEditMode() {
    if (this.editingMode) {

      this.userService.updateUsername(this.user.id, this.user.username)
        .then(() => {
          console.log('Nombre de usuario actualizado correctamente');
        })
        .catch(error => {
          console.error('Error al actualizar el nombre de usuario:', error);
        });

      this.editingMode = false;
    } else {
      this.editingMode = true;
    }
  }
}
