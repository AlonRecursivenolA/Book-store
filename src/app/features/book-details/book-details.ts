import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../core/services/book-service';
import { LocalStorage } from '../../core/services/local-storage-service';
import { UserService } from '../../core/services/user-service';


@Component({
  selector: 'app-book-details',
  imports: [CommonModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})
export class BookDetails implements OnInit{

  bookName!:any;
  displayedBook!:any;
  catchEvent:any = "";
    constructor(private route:ActivatedRoute, private bookService:BookService, private router:Router, private user:UserService){

  }
  ngOnInit(): void {
   this.bookName = this.route.snapshot.paramMap.get('id');
   this.displayedBook = this.bookService.getAllBooks();
   this.displayedBook = this.displayedBook.filter((book:any) => {
      return book.name.includes(this.bookName);
   })
  }

  redirectToSearchIfEnterPressed(event:any): void {
    
    if(event.key === 'Enter'){
      this.router.navigate(['/search-page', this.catchEvent]);
    }
    this.catchEvent += event.key;

  }

  logout(){
    this.user.logout();
    this.router.navigate(['/login']);
  }
  redirectToShop(){
    this.router.navigate(['/shop']);
  }
  navigateToCart(){
    this.router.navigate(['/cart'])
  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }

}
