import { Injectable } from '@angular/core';
import {TopEntry} from "../interfaces/top-entry";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, getDoc
} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {Content} from "../interfaces/content";
import {ContentService} from "./content.service";
import {Review} from "../interfaces/review";


@Injectable({
  providedIn: 'root'
})
export class BookService implements ContentService{
  constructor(private firestore: Firestore) { }
  addBook(book: TopEntry) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<TopEntry[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'name' }) as Observable<TopEntry[]>;
  }

  getContents(): Observable<Content[]> {
    const contentsRef = collection(this.firestore, 'books');
    return collectionData(contentsRef, {idField: 'id'}) as Observable<Content[]>;
  }

  async getContentById(documentId: string): Promise<Content> {
    const contentRef = doc(this.firestore, 'books', documentId);
    let documentSnapshot = await getDoc(contentRef);
    return documentSnapshot.data() as Content;
  }

  getReviewsById(documentId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'books/' + documentId + '/reviews');
    return collectionData(reviewsRef, {idField: 'id'}) as Observable<Review[]>;
  }

}
