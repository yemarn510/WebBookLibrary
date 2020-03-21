import { Component, OnInit } from '@angular/core';
import { BookService } from '../common/book.service';
import { Book } from '../common/bookObj';
import { DialogService } from '../common/dialog.service';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  dataSource : Book[];
  displayedColumns: string[] = [ 'Id','Title', 'Author', 'Publisher', 'Summary','Released_date', 'Category', 'Operations'];

  constructor(
    private bookService : BookService,
    private dialogService : DialogService,
    ) { }

  ngOnInit(): void {
    // document.body.classList.add('bg-img');
    this.getBookList();
  }

  getBookList(){
    this.bookService.getBooklist().subscribe(booklist => this.dataSource = booklist);
  }

  onDelete(id : Number){
    this.dialogService.openConfirmDialog("Are U sure to Delete this ?").afterClosed().subscribe
    (res => {
      if(res){
        this.bookService.deleteBook(id).subscribe();
        location.reload();
      }
    });
  }

}
