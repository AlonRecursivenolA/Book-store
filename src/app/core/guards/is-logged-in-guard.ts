import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('whosLoggedIn');
  
  if(isLoggedIn){
    return router.createUrlTree(['/shop']);;
  }

  return true;
};