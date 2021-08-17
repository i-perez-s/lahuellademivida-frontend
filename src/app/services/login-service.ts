import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';
import { Router } from '@angular/router';
import { Oil } from '../models/oil';
import { Kit } from '../models/kit';
import { Diffuser } from '../models/diffuser';
import { from } from 'rxjs';


@Injectable ()
export class LoginService{
  public url:string

  constructor(
    private http: HttpClient,
    private router: Router
  ){
    this.url = Global.url;
  }


  //metodos login
  signInUser(user) {
  return this.http.post<any>(this.url + 'user/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/huella']);
  }


  //metodos mensaje
  getMessages( type: string){
    const headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this.http.get(this.url + 'contact/' + type, {headers: headers});
  }

  delete(id, type){
    const headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this.http.delete(this.url + type + 'delete/' + id, {headers: headers});
  }

  //metodos prductos
  getProducts(type: string){
    const headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this.http.get(this.url + type + '/products', {headers: headers});
  }

  saveOil(oil: Oil): Observable<any>{
    const params = JSON.stringify(oil);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'oil/create', params, { headers: headers });
  }

  saveKit(kit: Kit): Observable<any>{
    const params = JSON.stringify(kit);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'kit/create', params, { headers: headers });
  }
  saveDiffuser(diffuser: Diffuser): Observable<any>{
    const params = JSON.stringify(diffuser);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'diffuser/create', params, { headers: headers });
  }

}

