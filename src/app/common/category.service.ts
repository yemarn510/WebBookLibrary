import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categoryObj';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryApiUrl = "http://127.0.0.1:8000/api/category";
  constructor(private http: HttpClient,
    ) { }

  getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryApiUrl + "/");
  }

  getCategoryById(id :Number): Observable<Category>{
    return this.http.get<Category>(this.categoryApiUrl+ "/" + id + "/");
  }
}
