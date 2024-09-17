import { Component, inject, Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";

import { AuthService } from "../services-api/auth.service";

@Injectable({
    providedIn: 'root',
  })
  
  export class PermissionsService{
    constructor(private authService: AuthService, private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    

    if (this.authService.hasRole('ADMIN')) {
      return true;
    } else {
    this.authService.logout()
      return false;
    }
  }
    
  }

  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }