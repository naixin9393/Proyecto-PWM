import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { doc, docData, Firestore, getDoc, setDoc } from "@angular/fire/firestore";
import { Observable } from "rxjs";

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
      let user = documentSnapshot.data() as User;
      user.id = documentSnapshot.id;
      return user;
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

  getUserById(userId: string): Observable<User> {
    let documentReference = doc(this.firestore, 'users', userId);
    return docData(documentReference) as Observable<User>;
  }
}
