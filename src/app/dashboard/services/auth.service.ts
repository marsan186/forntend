import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router, private _http: HttpClient) { }

  register(admin) {
    return this._http.post("http://localhost:3000/admin/register", admin);
  }
  login(admin) {
    return this._http.post("http://localhost:3000/admin/login", admin);
    // localStorage.setItem('user', user)
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['dashboard/login']);
  }

  isAuthenticated() {
    return localStorage.getItem('admin');
  }
}
