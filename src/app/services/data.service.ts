import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Series} from "../interfaces/series";
import {Movies} from "../interfaces/movies";
import {Books} from "../interfaces/books";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>('assets/data/movies.json');
  }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>('assets/data/series.json');
  }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>('assets/data.books.json');
  }
}
