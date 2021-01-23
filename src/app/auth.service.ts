import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    /* return this.http
      .post<any>(`https://localhost:5001/api/account/login`, credentials)
      .subscribe((res) => {
        this.authenticate(res);
      });*/
    console.log(credentials);
  }
}
