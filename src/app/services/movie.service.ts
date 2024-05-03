import { Injectable } from '@angular/core';
import { Content } from "../interfaces/content";
import { collection, collectionData, doc, Firestore, getDoc } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Review } from "../interfaces/review";
import { ContentService } from "./content.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService implements ContentService {

  constructor(private firestore: Firestore) { }

  getContents(): Observable<Content[]> {
    const contentsRef = collection(this.firestore, 'movies');
    return collectionData(contentsRef, {idField: 'idField'}) as Observable<Content[]>;
  }
  async getContentById(documentId: string): Promise<Content> {
    const contentRef = doc(this.firestore, 'movies', documentId);
    let documentSnapshot = await getDoc(contentRef);
    const content = documentSnapshot.data() as Content;
    content.id = documentSnapshot.id;
    return content;

  }

  getReviewsById(documentId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'movies/' + documentId + '/reviews');
    return collectionData(reviewsRef, {idField: 'id'}) as Observable<Review[]>;
  }
}
