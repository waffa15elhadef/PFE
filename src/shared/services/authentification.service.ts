import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  SERVER = 'http://localhost:8080/api/';
  subject = new Subject<User>();
  private token = localStorage.getItem('ACCESS_TOKEN');
  user: User;

  private headers: HttpHeaders = new HttpHeaders({ "x-access-token": this.token });

  Logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ID_USER');
    this.router.navigate(['/login']);
  }

  Login(user: User): Observable<any> {
    return this.http
      .post<string>(this.SERVER+'auth/signin', user)
      .pipe(
        map((res: any) => {
          this.saveToken(res.accessToken);
          if (res != null) {
            this.getUserById().subscribe(result=>{
              this.user=result;
              this.subject.next(this.user); 
            })
             
            
          }
          return res;
        })
      );
  }


  getUserById(): Observable<User> {
   return this.http.get<User>(this.SERVER+"user",{headers:this.headers});
  }
  private saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('ID_USER', this.parseJwt(token).id);
  }

  private parseJwt(token) {
    if (token != 'null') {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return -1;
  }

  getToken(): string {
    this.token = localStorage.getItem('ACCESS_TOKEN');

    return this.token;
  }

  getID(): string {
    return localStorage.getItem('ID_USER');
  }

  isLogged(): boolean {
    return (
      this.getToken() != null &&
      this.getID() != null &&
      this.getID() == this.parseJwt(this.getToken()).id
    );
  }
  constructor(private http: HttpClient, private router: Router) {}
}
