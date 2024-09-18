import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { Alert } from '../utils/alert';
import { LoginResponse } from '../models/login.response';
import { MyEncryption } from '../utils/cryptage.util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private static BASE_URL = `http://127.0.0.1:9091/api/auth`;

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedInObs = this.loggedInSubject.asObservable();

  authenticate(username: string, password: string): void {
    this.http
      .post<LoginResponse>(`${AuthService.BASE_URL}/login`, {
        username,
        password,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', MyEncryption.encrypt(res.token));
          localStorage.setItem('tokenExpiration', res.expiresIn.toString());
          const dateActuelle = new Date();
          const tokenDateExpiration = new Date(
            dateActuelle.getTime() + res.expiresIn
          );
          localStorage.setItem(
            'tokenDateExpiration',
            tokenDateExpiration.toString()
          );
          console.log(dateActuelle.toISOString());
          console.log(tokenDateExpiration.toISOString());
          this.loggedInSubject.next(true);
          this.router.navigate(['../admin/dash']).then(()=>{
            location.reload()
          });
          
        },
        error: (err) => {
          console.log(err);
          Alert.showAlert(err['error']['message']);
        },
      });
  }

  logout(): void {
    this.loggedInSubject.next(false);
    this.clearAccessStorage();
    this.router.navigate(['']).then(()=>{
      location.reload()
    });
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

  getPrincipal(): any {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    if (token && tokenExpiration) {
      console.log(headers);
      this.http
        .get<any>(`http://127.0.0.1:9091/api/control-panel/me`, {
          headers: headers,
        })
        .subscribe({
          next: (res) => {
            console.log(res);
            // localStorage.setItem('principal',res)
            console.log(this.isTokenExpired());
            return res;
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      alert('Token invalide');
      return null;
    }
  }

  clearAccessStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('tokenDateExpiration');
  }

  isTokenValid(): boolean {
    if (localStorage.getItem('token') && !this.isTokenExpired()) {
      return true;
    } else {
      return false;
    }
  }

  isTokenExpired(): boolean {
    const tokenDateExpiration = localStorage.getItem('tokenDateExpiration');

    if (tokenDateExpiration) {
      const dateActuelle = new Date().getTime();
      const dateExpiration = Date.parse(tokenDateExpiration);
      console.log(dateActuelle+' '+ dateExpiration);

      if (dateActuelle > dateExpiration) {
        console.log('Token expired');
        return true;
      }
    }

    return false;
  }
}
