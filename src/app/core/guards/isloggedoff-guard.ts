import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isloggedoffGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);
  const isLoggedIn = localStorage.getItem('whosLoggedIn');
  
  if(!isLoggedIn){
    return router.createUrlTree(['/login']);;
  }

  return true;
};
