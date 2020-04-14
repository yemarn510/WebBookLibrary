import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../common/book.service';
import { Book } from '../common/bookObj';
import { DialogService } from '../common/dialog.service';
import { CategoryService } from '../common/category.service';
import { Category } from '../common/categoryObj';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
 
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  categoryList : Category[];
  displayedColumns: string[] = [ 'Id','Title', 'Author', 'Publisher', 'Summary', 'Released_date', 'Category', 'Rental Status', 'Operations'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private bookService : BookService,
    private dialogService : DialogService,
    private categoryService : CategoryService,
    ) {
    }

  ngOnInit(): void {
    this.getBookList();
    this.dataSource.sort = this.sort;
  }

  getBookList(){
    this.categoryService.getCategoryList().subscribe(data => this.categoryList = data);
    this.bookService.getBooklist().subscribe(booklist => {
      this.dataSource = new MatTableDataSource(booklist);
    }
    );
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
