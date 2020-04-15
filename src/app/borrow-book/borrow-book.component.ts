import { Component, OnInit } from '@angular/core';
import { Book } from '../common/bookObj';
import { BookService } from '../common/book.service';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../common/dialog.service';
import { Location } from '@angular/common';
import { CategoryService } from '../common/category.service';
import { Category } from '../common/categoryObj';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  category : any;
  borrowBook: any;
  constructor(
    private bookService: BookService,
    private categoryService : CategoryService,
    private route: ActivatedRoute,
    private dialogService : DialogService,
    private location: Location,
    ) { }

  ngOnInit(): Book {
    return this.getBookToBorrow();
  }

  getBookToBorrow():any{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(borrowBook => this.borrowBook = borrowBook);
    this.categoryService.getCategoryList().subscribe(data => this.category = data);
    console.warn(this.category.category_name)
  }
  borrowThisBook(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(this.borrowBook.rental_status == 0){
      this.borrowBook.rental_status = 1;
    }
    else if(this.borrowBook.rental_status == 1){
      this.borrowBook.rental_status = 0;
    }
    else{
      this.borrowBook.rental_status = 0;
    }
    this.bookService.borrowBook(id , this.borrowBook).subscribe();
  }
  borrowConfirm(){
    if(this.borrowBook.rental_status == 0){
      this.dialogService.openConfirmDialog("Are U sure U want to Borrow this Book ?").afterClosed().subscribe
      (res => {
      if(res){
        this.borrowThisBook();
        this.location.back();
      }
    });
    }
    else{
      this.borrowThisBook();
      this.location.back();
    }
    
  }
}
