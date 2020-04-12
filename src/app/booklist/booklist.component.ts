import { Component, OnInit } from '@angular/core';
import { BookService } from '../common/book.service';
import { Book } from '../common/bookObj';
import { DialogService } from '../common/dialog.service';
import { Location } from '@angular/common';
import { CategoryService } from '../common/category.service';
import { Category } from '../common/categoryObj';
 
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  dataSource : any;
  category_name : String;
  categoryList : Category[];
  someArray = [1, "string", false];
  displayedColumns: any[] = [ 'Id','Title', 'Author', 'Publisher', 'Summary','Released_date', 'Category', 'Operations'];

  constructor(
    private bookService : BookService,
    private dialogService : DialogService,
    private categoryService : CategoryService,
    ) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(){
    this.categoryService.getCategoryList().subscribe(data => this.categoryList = data);
    this.bookService.getBooklist().subscribe(booklist => this.dataSource= booklist);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
