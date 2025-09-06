import { Routes } from '@angular/router';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { BookDetails } from './features/book-details/book-details';
import { Cart } from './cart/feature/cart-page/cart';
import { NotfoundPage } from './notfound-page/notfound-page';
import { SearchPage } from '../book-search/features/search-page/search-page';
import { Profile } from './profile/features/profile/profile';
import { Admin } from './shared/components/admin/admin';
import { isLoggedInGuard } from './core/guards/is-logged-in-guard';
import { BookShop } from './shop/feature/book-shop/book-shop';
import { isloggedoffGuard as isGuestGuard}  from './core/guards/isloggedoff-guard';


export const routes: Routes = [
  {path:'', component:BookShop},
  {path:'shop', component : BookShop},
  {path:'login',component:Login, data: {hideHeader: true}, canActivate : [isLoggedInGuard]},
  {path:'register', component:Register, data : {hideHeader : true} ,canActivate : [isLoggedInGuard]},
  {path:'profile', component : Profile, canActivate : [isGuestGuard]},
  {path : 'admin', component : Admin},
  {path:'book-details/:id', component:BookDetails},
  {path:'cart',component:Cart , canActivate : [isGuestGuard]},
  {path: 'search-page/:bookname', component : SearchPage},
  {path: '**', component: NotfoundPage},
  

];
