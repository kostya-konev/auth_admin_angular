import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string; password: string }): Observable<string | boolean> {
    if (userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
      this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg');
      return of(true);
    }
    return throwError(() => new Error('Failed login'))
  }

  logout() {
    this.router.navigate(['login'])
  }
}
