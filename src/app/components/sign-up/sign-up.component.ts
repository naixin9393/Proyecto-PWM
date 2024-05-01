import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AngularFireAuth} from "@angular/fire/compat/auth";

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

  constructor(public auth: AngularFireAuth) { }

  signIn(email:string, password:string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Autenticación exitosa, puedes acceder a userCredential.user
      })
      .catch((error) => {
        // Manejo de errores de autenticación
      });
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


