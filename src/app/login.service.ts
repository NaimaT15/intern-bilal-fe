import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from './app.variable';
import { HttpHeaders } from '@angular/common/http';



const httpOptions={
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(username:string, password:string):Observable<any>{
    return this.http.post(ApiUrl.login, httpOptions)
  }
}
