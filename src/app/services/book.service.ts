import { Injectable } from '@angular/core';
import { TopEntry } from "../interfaces/top-entry";
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  updateDoc, arrayUnion
} from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Content } from "../interfaces/content";
import { ContentService } from "./content.service";
import { Review } from "../interfaces/review";
import { User } from '../interfaces/user';
import { ReviewService } from "./review.service";


@Injectable({
  providedIn: 'root'
})
export class BookService implements ContentService {
  constructor(private firestore: Firestore, private reviewService: ReviewService) {
  }

  addReview(user: User, content: Content, rating: number, review: string): void {
    this.reviewService.addReview(content, user, rating, review).then(
      documentRef => {
        if (documentRef) {
          const id = documentRef.id
          const contentRef = doc(this.firestore, 'books', content.id);
          updateDoc(contentRef, {
            reviews: arrayUnion(id)
          })
        }
      }
    )
  }

  addBook(book: TopEntry) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<TopEntry[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'id' }) as Observable<TopEntry[]>;
  }

  getContents(): Observable<Content[]> {
    const contentsRef = collection(this.firestore, 'books');
    return collectionData(contentsRef, { idField: 'id' }) as Observable<Content[]>;
  }

  getContentById(documentId: string): Observable<Content> {
    const contentRef = doc(this.firestore, 'books', documentId);
    return new Observable<Content>(
      observer => {
        docData(contentRef).subscribe(
          documentSnapshot => {
            const content = documentSnapshot as Content;
            content.id = documentId;
            observer.next(content);
          });
      }
    );
  }

  getReviewsById(documentId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'books/' + documentId + '/reviews');
    return collectionData(reviewsRef, { idField: 'id' }) as Observable<Review[]>;
  }
}
