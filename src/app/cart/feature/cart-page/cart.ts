import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../core/services/book-service';
import { LocalStorage } from '../../../core/services/local-storage-service';
import { CommonModule } from '@angular/common';
import { Header } from '../../../shared/header/header';
import { Banner } from '../../ui/banner/banner';
import { ShopContainer } from '../../ui/cart-container/cart-container';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, Banner, ShopContainer],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit{
  cartBooks!:any;
  catchEvent:any = '';
  constructor(private router:Router,private bookService:BookService, private localStorage:LocalStorage){

  }
  ngOnInit(): void {
      const user=this.localStorage.getUser();
      this.cartBooks = user.booksInCart;
  }

    searchSubmit(input:any){
    this.router.navigate(['/search-page', input.value]);
  }

  displayBookDetails(index:number){

    this.router.navigate(['/book-details', index])
  }

  addToCart(book:any){
    let user =this.localStorage.getUser();
    for(let i = 0; i < user.booksInCart.length; i++){
      if(book.name.includes(user.booksInCart[i].name)){
        alert('Book Already In Cart!');
        return;
      }
    }
    user.booksInCart.push(book);
    this.localStorage.saveUser(user);
  }
}
