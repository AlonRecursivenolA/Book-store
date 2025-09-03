import { Injectable } from '@angular/core';
import { BookService } from './book-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

    constructor(private booksService:BookService){

    }

    getRegisteredUsers(){
      const users: string[] = [];
      const registeredUsersStr = localStorage.getItem('registeredUsers');
      const registeredUsers: string[] = registeredUsersStr ? JSON.parse(registeredUsersStr) : [];
      for(let i = 0; i < registeredUsers.length; i++){
        users.push(registeredUsers[i]);
      }
      return users;
    }

    logout(){
      localStorage.removeItem('whosLoggedIn');
    }
    savedBooks(){
      const bookList = this.booksService.getAllBooks();
      localStorage.setItem('book-list', JSON.stringify(bookList));
    }
    getBooks(){
      if(localStorage.getItem('book-list')){
          return localStorage.getItem('book-list');
      }
      return [];
    }
    saveUser(savedUser:any){
      if(savedUser){
        localStorage.setItem(`${savedUser.name}`,JSON.stringify(savedUser));
      }
    }
saveRegisteredUsers(saveUser: any) {
  const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

  users.push(saveUser);

  localStorage.setItem('registeredUsers', JSON.stringify(users));
}
      getUser(){
        let currentUserKey = localStorage.getItem('whosLoggedIn');
        if(currentUserKey){

          currentUserKey = JSON.parse(currentUserKey);
          if (typeof currentUserKey === 'string') {
            let currentUserStr = localStorage.getItem(currentUserKey);
            if (currentUserStr !== null) {
              return JSON.parse(currentUserStr);
            }
          }
        }
        return null;
      }
    clearLocalStorage(){
      localStorage.clear();
    }
    removeLocalStorageItem(item:any){
      localStorage.removeItem(item);
    }
    
    updatePassword(password:string){
      if(password && !/[A-Z]/.test(password) && password.length > 6){
        let currentUser = this.getUser()
        currentUser.password = password;
        this.saveUser(currentUser);
      }
    }
    updateDetails(){
      //cases
    }
    getBookCart(){
      return this.getUser().booksInCart;
    }
    addToBookCart(book:any){
      this.getBookCart().push(book)
      this.saveUser(this.getUser());
    }
    getWhosLoggedIn(){
      return localStorage.getItem('whosLoggedIn');
    }
    whosLoggedIn(name:string){
      localStorage.setItem(`whosLoggedIn`, JSON.stringify(name))
    }
}
