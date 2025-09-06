import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storage:LocalStorage){

  }
  

  getRegisteredUsers(): any[] {
    const users:any[] = this.storage.get('registeredUsers');
    return Array.isArray(users) ? users : [];
  }

  saveRegisteredUsers(saveUser:any)
  {
      const users = this.storage.get('registeredUsers') || '[]';
      users.push(saveUser);
      this.storage.setItem('registeredUsers', JSON.stringify(users));
  }

  getUser(){
        let currentUserKey = this.getWhosLoggedIn();
        if(currentUserKey){

          currentUserKey = currentUserKey;
          if (typeof currentUserKey === 'string') {
            let currentUserStr = localStorage.getItem(currentUserKey);
            if (currentUserStr !== null) {
              return JSON.parse(currentUserStr);
            }
          }
        }
        return null;
     }

  logout():void{
    this.storage.remove('whosLoggedIn');
  }

  setWhosLoggedIn(name:string){
    this.storage.setItem('whosLoggedIn', name)
  }

  getWhosLoggedIn():string | null{
    return this.storage.get('whosLoggedIn');
  }
  isSomeoneLoggedIn():boolean{
    if(this.getWhosLoggedIn()){
      return true;
    }
    return false;
  }
  saveUser(savedUser:any):void{
    if(savedUser){
      this.storage.setItem(`${savedUser.name}`,savedUser)
    }
  }

}
