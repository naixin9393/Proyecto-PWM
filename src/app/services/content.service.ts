import { Injectable } from '@angular/core';
import { Content } from "../interfaces/content";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {
  }

  async getContentById(id: number): Promise<Content> {
    const content = await fetch(`http://localhost:3000/content/${id}`)
    return content.json();
  }
}
