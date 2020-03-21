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

  addCategory(category_name : String): Observable<Category>{
    return this.http.post<Category>(this.categoryApiUrl + "/",  category_name);
  }

  editCategory(id : Number , category : Category): Observable<Category>{
    console.warn(" id : "+ id);
    console.warn(" category_name : " + category.category_name);
    return this.http.put<Category>(this.categoryApiUrl + "/" + id + "/",  category);
  }

  deleteCategory(id: Number){
    console.warn("the category with id : " + id + " has been deleted");
    return this.http.delete(this.categoryApiUrl + "/" + id + "/");
  }
}
