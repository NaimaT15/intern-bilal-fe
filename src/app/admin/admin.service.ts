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
  addCategory(categoryData: any) {
    return this.http.post<any>(ApiUrl.addCategory, categoryData);
  }
  addpb(pdData: any) {
    return this.http.post<any>(ApiUrl.addPb, pdData);
  }
  getUsers() {
    return this.http.get<USER[]>(ApiUrl.users);
  }
  getCategories() {
    return this.http.get<Category[]>(ApiUrl.catogries);
  }
  getPhoto() {
    return this.http.get<Photo[]>(ApiUrl.Photos);
  }
}
export interface USER {
  id?: number;
  full_name: string;
  user_name: string;
  email: string;
  password: string;
  role_id: number;
}
export interface Category {
  name: string;
}
export interface Photo {
  name: string;
  description: string;
  category: string;
  photo: File;
  code: string;
}
