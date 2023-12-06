import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service'; 
import { of } from 'rxjs';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return of(true);
  }

  // Redirect to the login page
  console.log('Le Guard marche bien');
  return router.parseUrl('/login');
};
