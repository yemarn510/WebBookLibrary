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

  afterReturn : any;
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
    if(null != this.addBookForm.value.release_date)
    {
      var event = new Date(this.addBookForm.value.release_date);

      let date = JSON.stringify(event)
      date = date.slice(1,11)
      this.addBookForm.value.release_date = date
    }
    this.bookService.addBook(this.addBookForm.value).subscribe(data => this.afterReturn =data);
  }

}
