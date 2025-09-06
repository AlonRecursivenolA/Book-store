import { Component, HostListener, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../core/services/local-storage-service';
import { BookService } from '../../../core/services/book-service';
import { Banner } from '../../ui/banner/banner';
import { BookContainer } from '../../ui/book-container/book-container';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-book-shop',
  imports: [CommonModule, Banner, BookContainer],
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
  constructor(private user :UserService , private bookService:BookService, private router: Router) {
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.user.getWhosLoggedIn();
    this.bookService.books.subscribe((books) => {
      this.booksList = books;
    });
  }
  searchSubmit(input:any){
    this.router.navigate(['/search-page', input.value]);
  }

  logout(){
    this.user.logout();
    this.router.navigate(['/login'])
  }
  login(){
    this.router.navigate(['/login'])
  }
  register(){
    this.router.navigate(['/register'])
  }

  redirectToSearchIfEnterPressed(event:any): void {
    
    if(event.key === 'Enter'){
      this.router.navigate(['/search-page', this.catchEvent]);
    }
    this.catchEvent += event.key;

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
