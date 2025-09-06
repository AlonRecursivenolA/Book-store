import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../app/core/services/book-service';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../../../app/core/services/local-storage-service';
import { Header } from '../../../app/shared/header/header';
import { UserService } from '../../../app/core/services/user-service';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage implements OnInit{
  searchedBooks!:[]
  bookName!:any
  booksList!:any
  catchEvent:any = "";
  isLoggedIn:any;
  isOpen:boolean = false;
  simulated:boolean = false;
  
  constructor(private activatedRoute:ActivatedRoute, private bookService:BookService, private router : Router, private user:UserService){

  }
      ngOnInit(): void {
        this.isLoggedIn = !!this.user.getWhosLoggedIn();
        this.activatedRoute.paramMap.subscribe(pm => {
          this.bookName = pm.get('bookname') ?? '';
          const all = this.bookService.getAllBooks();
          this.booksList = all.filter((book: any) =>
            (book?.name ?? '').toLowerCase().includes(this.bookName.toLowerCase())
          );
        });
      }
  searchSubmit(input:any){
    this.router.navigate(['/search-page', input.value]);
  }

  displayBookDetails(name:number){
    this.router.navigate(['/book-details', name])
  }
    redirectToSearchIfEnterPressed(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const term = (this.catchEvent ?? '').trim();
        if (!term) return;
        this.catchEvent = '';    
        this.router.navigate(['/search-page', term], { replaceUrl: true });
        return; 
      }

      if (event.key.length === 1) {
        this.catchEvent = (this.catchEvent ?? '') + event.key;
      } else if (event.key === 'Backspace') {
        this.catchEvent = (this.catchEvent ?? '').slice(0, -1);
      }
    }

    redirectToShop(){
    this.router.navigate(['/shop'])
  }

  goToCart(){
    if(!this.isLoggedIn){
      alert('Please Login First!');
      return
    }
    this.router.navigate(['/cart'])
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
  goToUser(){
    if(!this.isLoggedIn){
      alert('Please Login First!');
      return
    }
    this.router.navigate(['/profile'])
  }
  openNavBar(){
    this.isOpen = !this.isOpen;
    this.simulated = !this.simulated
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 600) {
      this.isOpen = false;
      this.simulated = false;
    }
  }

}
