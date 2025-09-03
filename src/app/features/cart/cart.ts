import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../core/services/book-service';
import { LocalStorage } from '../../core/services/local-storage-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
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
      // alert(user);
      this.cartBooks = user.booksInCart;
  }

    searchSubmit(input:any){
    this.router.navigate(['/search-page', input.value]);
  }

  logout(){
    this.localStorage.logout();
    this.router.navigate(['/login'])
  }
  displayBookDetails(index:number){

    this.router.navigate(['/book-details', index])
  }
  redirectToSearchIfEnterPressed(event:any): void {
    
    if(event.key === 'Enter'){
      this.router.navigate(['/search-page', this.catchEvent]);
    }
    this.catchEvent += event.key;

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
  navigateToCart(){
    this.router.navigate(['/cart'])
  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }
  navigateToShop(){
    this.router.navigate(['/shop'])
  }
  

}
