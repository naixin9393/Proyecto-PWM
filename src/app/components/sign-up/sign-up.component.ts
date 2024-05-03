import {Component} from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  protected length = false;
  protected uppercase = false;
  protected lowercase = false;
  protected number = false;
  protected special = false;
  protected passwords = false;
  protected requirements = false;
  protected password: string = "";
  protected confirmPassword: string = "";
  email: string = '';
  username: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.createUser(this.email, this.username, this.password).then(
      () => {
        alert('Signed up!');
        this.router.navigate(['/login']);
      }
    )
    .catch(error => alert(error.message));
  }

  satisfyRequirements() {
    this.length = this.satisfyLength();
    this.uppercase = this.satisfyUppercase();
    this.lowercase = this.satisfyLowercase();
    this.number = this.satisfyNumber();
    this.special = this.satisfySpecial();
    this.passwords = this.satisfyPasswords();

    this.requirements = this.length &&
      this.uppercase &&
      this.lowercase &&
      this.number &&
      this.special &&
      this.passwords;
  }

  satisfyLength() {
    return this.password.length >= 8;
  }

  satisfyUppercase() {
    return /[A-Z]/.test(this.password);
  }

  satisfyLowercase() {
    return /[a-z]/.test(this.password);
  }

  satisfyNumber() {
    return /\d/.test(this.password);
  }

  satisfySpecial() {
    return /[^A-Za-z0-9]/.test(this.password);
  }

  satisfyPasswords() {
    return this.password === this.confirmPassword;
  }
}


