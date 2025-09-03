import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
  constructor(private router:Router){

  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }
}
