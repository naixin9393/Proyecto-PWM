import { Injectable } from '@angular/core';
import {TopEntry} from "../interfaces/top-entry";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private firestore: Firestore) { }
  addBook(book: TopEntry) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<TopEntry[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'name' }) as Observable<TopEntry[]>;
  }
}
