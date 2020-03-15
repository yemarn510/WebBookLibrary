import { Component, OnInit } from '@angular/core';
import { BookService } from '../common/book.service';
import { Book } from '../common/bookObj';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  dataSource : Book[];
  displayedColumns: string[] = [ 'Id','Title', 'Author', 'Publisher', 'Summary','Released_date', 'Category', 'Operations'];

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(){
    this.bookService.getBooklist().subscribe(booklist => this.dataSource = booklist);
  }
}
