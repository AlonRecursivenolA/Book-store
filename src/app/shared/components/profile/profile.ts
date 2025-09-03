import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../../core/services/local-storage-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit{
  loggedUserName!:string;
  loggedUserDetails!:any;
  catchEvent:any = "";
  isOpen:boolean = false;
  simulated:boolean = false;
  isLoggedIn:boolean = false;

  constructor(private localStorage:LocalStorage, private router: Router){

  }
  ngOnInit(): void {
      this.loggedUserName = this.localStorage.getUser().name;
      this.loggedUserDetails = this.localStorage.getUser().userDetails;
  }
  addChange(data:any, type:string){
    const user = this.localStorage.getUser();
    if(type==='home'){
      user.userDetails[0].homeAddress = data.value;
    }
    else if(type==='age'){
      user.userDetails[1].age = data.value;
    }
    else if(type==='genre'){
      user.userDetails[2].favoriteGenre = data.value;
    }
    this.localStorage.saveUser(user);
    this.router.navigate(['/profile'])
  }
  deleteUser(){
    this.localStorage.clearLocalStorage();
    this.router.navigate(['/'])
  }
  applyDiscount(number:any){
    const num = number.value;
    const user = this.localStorage.getUser();
    console.log(user);
    for(let i = 0; i < user.booksInCart.length; i++){
      user.booksInCart[i].newPrice = Math.floor(user.booksInCart[i].price * (1- num / 100));
      console.log(user.booksInCart[i].newPrice);

    }
    this.localStorage.saveUser(user);
  }
  applyDiscountLoggedUsers(number:any)
  {
    const user = this.localStorage.getUser();
    for(let i = 0; i < user.booksInCart.length; i++){
      user.booksInCart[i].newPrice = user.booksInCart[i].price - number;
      console.log(user.booksInCart[i].newPrice);
    }
    this.localStorage.saveUser(user);
    
  }

  redirectToSearchIfEnterPressed(event:any): void {
    
    if(event.key === 'Enter'){
      this.router.navigate(['/search-page', this.catchEvent]);
    }
    this.catchEvent += event.key;

  }

  navigateToShop(){
    this.router.navigate(['/shop'])
  }

  logout(){
    this.localStorage.logout();
    this.router.navigate(['/login'])
  }
  goToCart(){
    this.router.navigate(['/cart'])
  }
    openNavBar(){
    this.isOpen = !this.isOpen;
    this.simulated = !this.simulated;
  }


  login(){
    this.router.navigate(['/login'])
  }
  register(){
    this.router.navigate(['/register'])
  }
  goToProfile(){
    this.router.navigate(['/profile'])
  }
}
