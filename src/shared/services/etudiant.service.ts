import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  SERVER = 'http://localhost:8080/api/';
  private token = localStorage.getItem('ACCESS_TOKEN');

  private headers: HttpHeaders = new HttpHeaders({
    'x-access-token': this.token,
  });

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.SERVER + 'etudiant', {
      headers: this.headers,
    });
  }
  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SERVER + 'etudiant/' + id, {
      headers: this.headers,
    });
  }
  create(etudiant) {
    return this.httpClient.post(this.SERVER + 'etudiant/create', etudiant, {
      headers: this.headers,
    });
  }
  delete(id) {
    return this.httpClient.delete(this.SERVER + 'etudiant/' + id, {
      headers: this.headers,
    });
  }
  edit(id,etudiant){
    return this.httpClient.put(this.SERVER+"etudiant/"+ id, etudiant,{
      headers: this.headers,
    })
  }
}
