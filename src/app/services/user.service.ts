import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { doc, Firestore, getDoc, setDoc } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth, private firestore: Firestore) {
  }

  async getCurrentUser() {
    const fireStoreUser = this.auth.currentUser;
    if (fireStoreUser) {
      let documentReference = doc(this.firestore, 'users', fireStoreUser.uid);
      let documentSnapshot = await getDoc(documentReference);
      return documentSnapshot.data() as User;
    } else {
      return null;
    }
  }

  async createUser(email: string, username: string, password: string) {
    let userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;
    this.createUserDocument(user.uid, email, username);
  }

  private createUserDocument(uid: string, email: string, username: string) {
    let documentReference = doc(this.firestore, 'users', uid);
    setDoc(documentReference, {
      email: email,
      username: username
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
