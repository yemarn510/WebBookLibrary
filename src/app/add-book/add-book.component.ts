import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../common/book.service';
import { Book } from '../common/bookObj';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addNewBook : Book;
  addBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher : new FormControl(''),
    summary: new FormControl(''),
    release_date: new FormControl(''),
    category_id: new FormControl(''),
  });
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  addBook(){
    console.warn(this.addBookForm.value);
    if(null != this.addBookForm.value.release_date)
    {
      var event = new Date(this.addBookForm.value.release_date);

      let date = JSON.stringify(event)
      date = date.slice(1,11)
      this.addBookForm.value.release_date = date
      console.warn(this.addBookForm.value.release_date)
    }

    this.addNewBook.title = this.addBookForm.value.title;
    this.addNewBook.author = this.addBookForm.value.author;
    this.addNewBook.publisher = this.addBookForm.value.publisher;
    this.addNewBook.release_date = this.addBookForm.value.release_date;
    this.addNewBook.summary = this.addBookForm.value.summary;
    this.bookService.addBook(this.addNewBook);
  }

}
