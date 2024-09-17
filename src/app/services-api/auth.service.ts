import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedInSubject = new BehaviorSubject<boolean>(true);
  loggedInObs = this.loggedInSubject.asObservable();

  authenticate():void{
   this.loggedInSubject.next(true)
  }

  logout():void{
    this.loggedInSubject.next(false)
  }

   // Exemple pour obtenir les rôles de l'utilisateur connecté
   getUserRoles(): string[] {
    // Implémentez la logique pour récupérer les rôles (depuis le token, API, etc.)
    return ['USER', 'ADMIN']; // Remplacez par les rôles réels
  }

  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }
}

