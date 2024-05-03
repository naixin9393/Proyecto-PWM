import { Injectable } from '@angular/core';
import { Content } from "../interfaces/content";
import { collection, collectionData, doc, docData, Firestore, getDoc } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Review } from "../interfaces/review";
import { ContentService } from "./content.service";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class MovieService implements ContentService {

  constructor(private firestore: Firestore) { }

  addReview(user: User, content: Content, rating: number, reviewText: string): void {
        throw new Error('Method not implemented.');
    }

  getContents(): Observable<Content[]> {
    const contentsRef = collection(this.firestore, 'movies');
    return collectionData(contentsRef, {idField: 'idField'}) as Observable<Content[]>;
  }

  getContentById(documentId: string): Observable<Content> {
    const contentRef = doc(this.firestore, 'movies', documentId);
    return docData(contentRef) as Observable<Content>;

  }

  getReviewsById(documentId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'movies/' + documentId + '/reviews');
    return collectionData(reviewsRef, {idField: 'id'}) as Observable<Review[]>;
  }
}
