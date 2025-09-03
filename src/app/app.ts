import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'bookShop';
}
