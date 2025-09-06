import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../core/services/local-storage-service';
import { BookService } from '../../../core/services/book-service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-book-container',
  imports: [CommonModule],
  templateUrl: './book-container.html',
  styleUrl: './book-container.scss'
})
export class BookContainer implements OnInit{
  constructor(private router:Router, private user: UserService , private bookService: BookService){

  }

  catchEvent:any = '';
  booksList: any = [];
  isLoggedIn: any;
  isOpen:boolean = false;
  simulated:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = !!this.user.getWhosLoggedIn();
    this.bookService.books.subscribe((books) => {
      this.booksList = books;
    });
  }
    displayBookDetails(index:number){
    this.router.navigate(['/book-details', index])
  }

    addToCart(book:any){
    let user =this.user.getUser();
    if(!this.isLoggedIn){
      alert('Please login before adding a book to your cart!');
      return;
    }
    for(let i = 0; i < user.booksInCart.length; i++){
      if(book.name.includes(user.booksInCart[i].name)){
        alert('Book Already In Cart!');
        return;
      }
    }
    alert('Book Added To Cart!');
    user.booksInCart.push(book);
    this.user.saveUser(user);
  }
}
