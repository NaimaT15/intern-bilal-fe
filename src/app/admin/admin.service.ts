import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiUrl } from '../app.variable';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT ',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addCategory(categoryData: any) {
    return this.http.post<any>(ApiUrl.category, categoryData);
  }

  updateCategory(categoryData: any) {
    return this.http.patch<any>(
      ApiUrl.category + '/' + categoryData.id,
      categoryData
    );
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

  updatePhotoBasedWithImage(pdData: any): Observable<any> {
    var formData = new FormData();
    for (const key in pdData) {
      formData.append(`${key}`, `${pdData[key]}`);
    }
    if (pdData.image) {
      formData.append('image', pdData.image);
    }
    return this.http.patch<any>(`${ApiUrl.photoBased}/${pdData.id}`, formData);
  }

  updatePhotoBasedWithOutImage(pdData: any): Observable<any> {
    return this.http.patch<any>(
      `${ApiUrl.updateWithoutImagePb}/${pdData.id}`,
      pdData
    );
  }

  getCategories() {
    return this.http.get<Category[]>(ApiUrl.catogries);
  }
  getPhoto() {
    return this.http.get<Photo[]>(ApiUrl.Photos);
  }
  getSinglecat(id: any) {
    return this.http.get<USER[]>(`${ApiUrl.category}/${id}`);
  }

  getSingleUser(id: any) {
    return this.http.get<USER[]>(`${ApiUrl.user}/${id}`);
  }
  updateUser(userData: any) {
    return this.http.patch<any>(`${ApiUrl.user}/${userData.id}`, userData);
  }

  getUsers() {
    return this.http.get<USER[]>(ApiUrl.users);
  }

  getSinglePhotoBased(id: any): Observable<any> {
    return this.http.get<any>(`${ApiUrl.photoBased}/${id}`);
  }

  addUser(userData: any) {
    return this.http.post<any>(ApiUrl.user, userData);
  }
  deleteUser(userData: USER) {
    const url = `${ApiUrl.user}/${userData.id}`;
    return this.http.delete(url);
  }
  deleteCat(catData: Category) {
    const url = `${ApiUrl.category}/${catData.id}`;
    return this.http.delete(url);
  }
  deletephoto(phData: Photo) {
    const url = `${ApiUrl.addPb}/${phData.id}`;
    return this.http.delete(url);
  }
  addVideo(vData: any): Observable<any> {
    var formData = new FormData();
    for (const key in vData) {
      formData.append(`${key}`, `${vData[key]}`);
    }
    if (vData.video) {
      formData.append('video', vData.video);
    }
    return this.http.post(ApiUrl.video, formData);
  }
  videos() {
    return this.http.get<Video>(ApiUrl.video);
  }
  getSingleVideo(vdata: Video) {
    const url = `${ApiUrl.addPb}/${vdata.id}`;
    return this.http.get(url);
  }
  deleteVideo(vdata: Video) {
    const url = `${ApiUrl.addPb}/${vdata.id}`;
    return this.http.delete(url);
  }
  addVisitor(vData: any) {
    return this.http.post<any>(ApiUrl.visitor, vData);
  }
  visitors() {
    return this.http.get(ApiUrl.visitors);
  }
  getSingleVisitor(vdata: any) {
    const url = `${ApiUrl.visitor}/${vdata.id}`;
    return this.http.get(url);
  }
  deleteVisitor(vdata: any) {
    const url = `${ApiUrl.visitor}/${vdata.id}`;
    return this.http.delete(url);
  }
  addDonater(dData: any) {
    return this.http.post<any>(ApiUrl.donater, dData);
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
export interface Video {
  id?: number;
  name: string;
  description: string;
  photo: File;
}
