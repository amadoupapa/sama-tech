import { Component, inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';

import { AuthService } from '../services-api/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    authService.loggedInObs.subscribe({
      next: (value) => {
        this.isLoggedIn = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    

    if (this.authService.isTokenValid()) {
      return true;
    }

    // if (this.authService.hasRole('ADMIN') && this.isLoggedIn) {

    //   return true;
    // }
    else {
      this.authService.logout();
      this.router.navigate(['']);
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(PermissionsService).canActivate(next, state);
};
