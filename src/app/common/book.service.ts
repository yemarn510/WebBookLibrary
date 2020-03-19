import { Injectable } from '@angular/core';
import { Book } from './bookObj'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  private bookUrl = "http://127.0.0.1:8000/api/books";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  getBooklist(): Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl + "/");
  }

  getBookById(id : number): Observable<Book>{
    return this.http.get<Book>(this.bookUrl + "/" + id + "/");
  }

  addBook(book : Book){
    console.warn(" The book inside service : "+ book.title);
    return this.http.post(this.bookUrl + "/" , book);
  }
  editBook(id : Number, book : Book):Observable<Book>{
    return this.http.put<Book>(this.bookUrl + "/" + id + "/" , book);
  }

  deleteBook(id: Number) {
    return this.http.delete<Book>(this.bookUrl + "/" + id + "/");
  }
}
