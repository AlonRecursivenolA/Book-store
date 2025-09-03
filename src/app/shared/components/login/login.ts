import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LocalStorage } from '../../../core/services/local-storage-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit{

    constructor(private router:Router, private localStorage:LocalStorage){

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

    isCorrectLoginDetails(){
      const users:any = this.localStorage.getRegisteredUsers();
      for(let i = 0; i < users.length; i++){
        if(users[i].name === this.form.get('name')?.value && users[i].password === this.form.get('password')?.value){
          return true;
        }
      }

      return false;
    }
    handleLogin(){
      const name = this.form.get('name')?.value ?? '';
      console.log(name)

      if(!this.isCorrectLoginDetails()){
        alert('wrong details! try again or register');
        return;
      }
      if(name === 'admin') 
        {
          this.localStorage.whosLoggedIn(name);
          this.router.navigate(['/admin']);
        }
        else{
          this.localStorage.whosLoggedIn(name);
          this.router.navigate(['/shop'])
        }
    }
}
