import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher : new FormControl(''),
    summary: new FormControl(''),
    release_date: new FormControl(''),
    category: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  addBook(){
    console.warn(this.addBookForm.value)
  }

}
