import {Component} from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  onSubmit() {
    this.userService.login(this.email, this.password).then(
      () => {
        alert('Logged in!');
        this.router.navigate(['/home']);
      }
    )
    .catch(error => alert(error.message));
  }
}
