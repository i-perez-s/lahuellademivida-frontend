import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';
import { Message } from '../models/message';


@Injectable ()
export class GeneralService{
  public url:string

  constructor(
    private _http:HttpClient
  ){
    this.url = Global.url
  }

  getAllProducts(url: string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this._http.get(this.url + url, {headers: headers});
  }
  getSinergias():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this._http.get(this.url + 'oil/getSinergias', {headers: headers});
  }

  getSimples():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this._http.get(this.url + 'oil/getSimples', {headers: headers});
  }


  getProduct(id, product: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this._http.get(this.url + product + '/find-product/' + id, {headers: headers});
  }

  saveMessage(message: Message): Observable<any>{
    const params = JSON.stringify(message);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'contact/create', params, { headers: headers });
  }

}

