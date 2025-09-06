import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import booksData from '../data/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;

  private API_KEY = 'book-list';
  getAllBooks(){
    return booksData;

  }
  private _books = new BehaviorSubject(this.getAllBooks());
  books = this._books.asObservable();

  updateBooks(booksChanges : any){
    this._books.next(booksChanges);
  }
}
