import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiUrl } from '../app.variable';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addUser(userData: any) {
    return this.http.post<any>(ApiUrl.addUser, userData);
  }
}
