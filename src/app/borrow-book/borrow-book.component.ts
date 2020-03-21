import { Component, OnInit } from '@angular/core';
import { Book } from '../common/bookObj';
import { BookService } from '../common/book.service';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../common/dialog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  borrowBook: Book;
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private dialogService : DialogService,
    private location: Location,
    ) { }

  ngOnInit(): Book {
    return this.getBookToBorrow();
  }

  getBookToBorrow():any{
    const id = +this.route.snapshot.paramMap.get('id');
    return this.bookService.getBookById(id).subscribe(borrowBook => this.borrowBook = borrowBook)
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
    this.dialogService.openConfirmDialog("Are U sure U want to Borrow this Book ?").afterClosed().subscribe
    (res => {
      if(res){
        this.borrowThisBook();
        this.location.back();
      }
    });
  }
}
