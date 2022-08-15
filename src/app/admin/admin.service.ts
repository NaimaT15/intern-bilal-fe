import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiUrl } from '../app.variable';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addCategory(categoryData: any) {
    return this.http.post<any>(ApiUrl.addCategory, categoryData);
  }

  addpb(pdData: any): Observable<any> {
    var formData = new FormData();
    for (const key in pdData) {
      formData.append(`${key}`, `${pdData[key]}`);
    }
    if (pdData.image) {
      formData.append('image', pdData.image);
    }
    return this.http.post<any>(ApiUrl.addPb, formData);
  }

  getCategories() {
    return this.http.get<Category[]>(ApiUrl.catogries);
  }
  getPhoto() {
    return this.http.get<Photo[]>(ApiUrl.Photos);
  }
  getUsers() {
    return this.http.get<USER[]>(ApiUrl.users);
  }

  addUser(userData: any) {
    return this.http.post<any>(ApiUrl.addUser, userData);
  }
  deleteUser(userData: USER) {
    const url = `${ApiUrl.addUser}/${userData.id}`;
    return this.http.delete(url);
  }
  deleteCat(catData: Category) {
    const url = `${ApiUrl.addCategory}/${catData.id}`;
    return this.http.delete(url);
  }
  deletephoto(phData: Photo) {
    const url = `${ApiUrl.addPb}/${phData.id}`;
    return this.http.delete(url);
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
  id?: number;
  name: string;
}
export interface Photo {
  id?: number;
  name: string;
  description: string;
  category: string;
  photo: File;
  code: string;
}
