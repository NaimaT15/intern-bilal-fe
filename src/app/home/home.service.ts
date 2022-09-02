import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../app.variable';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getHomeCategory(num: number) {
    return this.http.get(`${ApiUrl.home_category}/${num}`);
  }
}
