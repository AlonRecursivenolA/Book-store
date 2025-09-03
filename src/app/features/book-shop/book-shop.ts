import { Component, HostListener, OnInit } from '@angular/core';
import { LocalStorage } from '../../core/services/local-storage-service';
import { BookService } from '../../core/services/book-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-shop',
  imports: [CommonModule],
  templateUrl: './book-shop.html',
  styleUrl: './book-shop.scss'
})
export class BookShop implements OnInit
{
  catchEvent:any = '';
  booksList: any = [];
  isLoggedIn: any;
  isOpen:boolean = false;
  simulated:boolean = false;
  constructor(private localStoragee: LocalStorage, private bookService:BookService, private router: Router) {
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.localStoragee.getWhosLoggedIn();
    this.bookService.books.subscribe((books) => {
      this.booksList = books;
    });
  }
  searchSubmit(input:any){
    this.router.navigate(['/search-page', input.value]);
  }

  logout(){
    this.localStoragee.logout();
    this.router.navigate(['/login'])
  }
  login(){
    this.router.navigate(['/login'])
  }
  register(){
    this.router.navigate(['/register'])
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
    let user =this.localStoragee.getUser();
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
    this.localStoragee.saveUser(user);
  }
  navigateToCart(){
    if(!this.isLoggedIn){
      alert('please login first!')
      return;
    }
    this.router.navigate(['/cart'])
  }
  navigateToProfile(){
    if(!this.isLoggedIn){
      alert('Please Login First!');
      return;
    }
    this.router.navigate(['/profile'])
  }
  openNavBar(){
    this.isOpen = !this.isOpen;
    this.simulated = !this.simulated;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 600) {
      this.isOpen = false;
      this.simulated = false;
    }
  }
}
