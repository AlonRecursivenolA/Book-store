import { Routes } from '@angular/router';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { BookShop } from './features/book-shop/book-shop';
import { BookDetails } from './features/book-details/book-details';
import { Cart } from './features/cart/cart';
import { NotfoundPage } from './notfound-page/notfound-page';
import { SearchPage } from './features/search-page/search-page';
import { Profile } from './shared/components/profile/profile';
import { Admin } from './shared/components/admin/admin';
import { isLoggedInGuard } from './core/guards/is-logged-in-guard';

export const routes: Routes = [
  {path:'', component:BookShop},
  {path:'shop', component : BookShop},
  {path:'login',component:Login, canActivate : [isLoggedInGuard]},
  {path:'register', component:Register, canActivate : [isLoggedInGuard]},
  {path:'profile', component : Profile},
  {path : 'admin', component : Admin},
  {path:'book-details/:id', component:BookDetails},
  {path:'cart',component:Cart},
  {path: 'search-page/:bookname', component : SearchPage},
  {path: '**', component: NotfoundPage},
  

];
