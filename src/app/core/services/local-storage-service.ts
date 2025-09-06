import { Injectable } from '@angular/core';
import { BookService } from './book-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  remove(key:string):void{
      localStorage.removeItem(key)
    }
    setItem(key:string, value:any):void{
      localStorage.setItem(key, JSON.stringify(value));
    }
    get(key: string){
    try {
      const v = localStorage.getItem(key);
      return v ? (JSON.parse(v)) : null;
    } catch { 
      return null;
     }
  }
  
}
