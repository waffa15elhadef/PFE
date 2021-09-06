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
  SERVER = 'http://localhost/PFE/api/utilisateur/';
  
role=new Subject<number>();
  logout(): void {
    localStorage.removeItem('ID_USER');
    localStorage.removeItem('USER_ROLE');
    this.router.navigate(['/login']);
    this.role.next(-1)
  }

  login(user): Observable<any> {
    return this.http
      .post(this.SERVER+'login', user)
      .pipe(
        map((res: any) => {
          if (res != null) {
            this.role.next(res.role);
            this.saveToken(res);
          }
        })
      );
  }


  getUserById(): Observable<User> {
   return this.http.get<User>(this.SERVER+"user");
  }
  private saveToken(res: any): void {
    localStorage.setItem('USER_ROLE', res.role);
    localStorage.setItem('ID_USER', res.id_utilisateur);
  }

 

  getRole(): string {
    var role = localStorage.getItem('USER_ROLE');

    return role
  }

  getID(): string {
    return localStorage.getItem('ID_USER');
  }

  isLogged(): boolean {
    return (
      this.getRole() != null &&
      this.getID() != null );
    
  }
  constructor(private http: HttpClient, private router: Router) {}


  
  // constructor(private httpClient: HttpClient) {}

  // getAll(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(this.SERVER + 'getAll');
  // }
  // getById(id: number): Observable<any> {
  //   return this.httpClient.get<any>(this.SERVER + 'getById/?id=' + id);
  // }
  // login(etudiant) {
  //   return this.httpClient.post(this.SERVER + 'login', etudiant,{responseType: 'text'});
  // }
 
}
