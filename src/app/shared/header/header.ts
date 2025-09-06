import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../../core/services/local-storage-service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
  @Output() cartClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() search = new EventEmitter<any>();
  @Output() goShop = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() login = new EventEmitter<boolean>();
  @Output() register = new EventEmitter<boolean>();
  @Output() menuToggle = new EventEmitter<boolean>();
  @Output() menutoggle = new EventEmitter<boolean>();
  isOpen:boolean = false;
  simulated:boolean = false;
  isLoggedIn:boolean = false;
  
  constructor(private user:UserService){

  }
  ngOnInit(): void {
      this.isLoggedIn = this.user.isSomeoneLoggedIn();
  }
  onEnter(e: any, input: HTMLInputElement) {
    this.search.emit(e);
    if(e.key === 'Enter'){
      input.value = "";
    }
  }
  toggleNavBar() {
    this.simulated = !this.simulated;
    this.isOpen = !this.isOpen;
    this.menuToggle.emit(this.simulated);
    this.menutoggle.emit(this.isOpen);
  }
}