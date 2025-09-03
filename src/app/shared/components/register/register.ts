import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LocalStorage } from '../../../core/services/local-storage-service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit{

      constructor(private router : Router, private localStorage : LocalStorage){

      }
      ngOnInit(): void {
          this.localStorage.logout();
      }
      
      form = new FormGroup({
        name: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required, this.passwordValidator]),
      })

      passwordValidator(control: AbstractControl): ValidationErrors | null{
        const value = control.value;
        if(value && value.length < 6){
          return { shortPassword : "password should be 6 chars"}
        }
        if(value && !/[A-Z]/.test(value)){
          return {addCapital : "Add capital letter"}
        }
        return null;
      }

      submitRegistration() {
       
        if(this.isAlreadyTakenUserName()){
          alert('user name already taken! choose a new one.')
          return;
        }
        const savedUser = {
          name:this.form.get('name')?.value,
          password:this.form.get('password')?.value,
          booksInCart:[],
          userDetails : [{homeAddress:''},{age:null},{favoriteGenre:''}],
        }

        
        this.localStorage.whosLoggedIn(savedUser.name ?? '');
        this.localStorage.saveUser(savedUser);
        this.localStorage.saveRegisteredUsers(savedUser);
        this.router.navigate(['/shop'])
      }

      isAlreadyTakenUserName():boolean{
        const users:any = this.localStorage.getRegisteredUsers();
        for(let i = 0; i < users.length; i++){
          if(users[i].name === this.form.get('name')?.value){
            return true;
          }
        }
        return false;
      }
}
