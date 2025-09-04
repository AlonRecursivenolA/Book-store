import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './shared/header/header';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './core/services/local-storage-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  hideHeader:boolean = false;
  protected title = 'bookShop';
  catchEvent:any='';

    constructor(private router: Router, private route: ActivatedRoute, private localStorage:LocalStorage) {
    this.router.events.subscribe(() => {
      const current = this.route.snapshot.firstChild;
      this.hideHeader = !!current?.data['hideHeader'];
    });
  }

  redirectToSearchIfEnterPressed(event:any): void {
    // alert(event);
    if(event.key === 'Enter'){
      this.router.navigate(['/search-page', this.catchEvent]);
    }
    this.catchEvent += event.key;
  }
  navigateToCart(){
    this.router.navigate(['/cart'])
  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }
  navigateToShop(){
    this.router.navigate(['/'])
  }
    logout(){
    this.localStorage.logout();
    this.router.navigate(['/login'])
  }
  onMenuToggle(event:any){
    
  }
}
