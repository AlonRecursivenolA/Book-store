import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../core/services/local-storage-service';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-shop-container',
  imports: [CommonModule],
  templateUrl: './cart-container.html',
  styleUrl: './cart-container.scss'
})
export class ShopContainer implements OnInit{
  cartBooks!:any;
  constructor(private router:Router, private user:UserService){

  }
  ngOnInit(): void {
      const user=this.user.getUser();
      this.cartBooks = user.booksInCart;
  }

  displayBookDetails(index:number){

    this.router.navigate(['/book-details', index])
  }
}
