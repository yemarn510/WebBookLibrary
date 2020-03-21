import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../common/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DialogService } from '../common/dialog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBook : any;
  editBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher : new FormControl(''),
    summary: new FormControl(''),
    release_date: new FormControl(''),
    category: new FormControl(''),
  });
  
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private dialogService : DialogService,
    private location: Location,
    )
    { }

  
  ngOnInit(){
    this.getABook();
  }

  getABook(): any{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(oneBook => this.editBook = oneBook);
  }


  updateBook(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(this.editBookForm.value.title== "")
    {
      this.editBookForm.value.title = this.editBook.title;
    }
    if(this.editBookForm.value.author== "")
    {
      this.editBookForm.value.author = this.editBook.author;
    }
    if(this.editBookForm.value.publisher== "")
    {
      this.editBookForm.value.publisher = this.editBook.publisher;
    }
    if(this.editBookForm.value.summary== "")
    {
      this.editBookForm.value.summary = this.editBook.summary;
    }
    if(this.editBookForm.value.release_date== "")
    {
      this.editBookForm.value.release_date = this.editBook.release_date;
    }
    if(this.editBookForm.value.category== "")
    {
      this.editBookForm.value.category = this.editBook.category;
    }
    console.warn(this.editBookForm.value);
    this.bookService.editBook(id, this.editBookForm.value).subscribe();
  }

  editConfirm(){
    this.dialogService.openConfirmDialog("Are U sure to Edit this ?").afterClosed().subscribe
    (res => {
      if(res){
        this.updateBook();
        this.location.back();
      }
    });
  }

}
