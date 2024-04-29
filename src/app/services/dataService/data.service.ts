import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  book!: { bookID: number, bookName: string, description: string, author: string, price: number, bookImg: string, quantitys: number };

  constructor() { }
  setBook(book: any) {
    this.book = book;
  }
  getBook(){
    return this.book;
  }
}