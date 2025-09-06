import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service';

export const isloggedoffGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const isLoggedIn = userService.isSomeoneLoggedIn();
  
  if(!isLoggedIn){
    alert('Please login to view this page!');
    return router.createUrlTree(['/login']);;
  }

  return true;
};
