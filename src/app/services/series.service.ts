import { Injectable } from '@angular/core';
import { Content } from "../interfaces/content";
import { collection, collectionData, doc, Firestore, getDoc, setDoc } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Review } from "../interfaces/review";
import { ContentService } from "./content.service";
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SeriesService implements ContentService {

  constructor(private firestore: Firestore) {
  }

  addReview(user: User, content: Content, rating: number, review: string): void {
    const documentRef = collection(this.firestore, 'series/' + content.id + '/reviews');
    let documentReference = doc(documentRef, user.id);
    setDoc(documentReference, {
      username: user.username,
      rating: rating,
      review: review
    })
  }

  getContents(): Observable<Content[]> {
    const contentsRef = collection(this.firestore, 'series');
    return collectionData(contentsRef, {idField: 'id'}) as Observable<Content[]>;
  }

  async getContentById(documentId: string): Promise<Content> {
    const contentRef = doc(this.firestore, 'series', documentId);
    let documentSnapshot = await getDoc(contentRef);
    const content = documentSnapshot.data() as Content;
    content.id = documentSnapshot.id;
    return content;
  }

  getReviewsById(documentId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'series/' + documentId + '/reviews');
    return collectionData(reviewsRef, {idField: 'id'}) as Observable<Review[]>;
  }
}

