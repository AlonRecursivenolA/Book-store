import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../../core/services/local-storage-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() cartClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() search = new EventEmitter<any>();
  @Output() goShop = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() menuToggle = new EventEmitter<boolean>();
  @Output() menutoggle = new EventEmitter<boolean>();
  isOpen:boolean = false;
  simulated:boolean = false;
  isLoggedIn:boolean = false;

  onEnter(e: any) {
    this.search.emit(e);
  }
  toggleNavBar() {
    this.simulated = !this.simulated;
    this.isOpen = !this.isOpen;
    this.menuToggle.emit(this.simulated);
    this.menutoggle.emit(this.isOpen);
  }
}