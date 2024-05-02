import { Content } from "../interfaces/content";
import { Observable } from "rxjs";
import { Review } from "../interfaces/review";

export abstract class ContentService {
  abstract getContentById(documentId: string): Promise<Content>;
  abstract getContents(): Observable<Content[]>;
  abstract getReviewsById(documentId: string): Observable<Review[]>;
}
