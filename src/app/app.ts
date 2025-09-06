import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './shared/header/header';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './core/services/local-storage-service';
import { UserService } from './core/services/user-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  hideHeader:boolean = false;
  protected title = 'bookShop';
  catchEvent:any='';
  isLoggedIn:boolean = false;

    constructor(private router: Router, private route: ActivatedRoute, private user:UserService) {
    this.router.events.subscribe(() => {
      const current = this.route.snapshot.firstChild;
      this.hideHeader = !!current?.data['hideHeader'];
    });
  }

  ngOnInit(): void {
      
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
    this.user.logout();
    this.router.navigate(['/login'])
  }
  onMenuToggle(event:any){
    
  }
  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register'])
  }
}
