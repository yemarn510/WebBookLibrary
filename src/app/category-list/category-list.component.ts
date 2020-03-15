import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../common/category.service';
import { Category } from '../common/categoryObj';
import { DialogService } from '../common/dialog.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  dataSource : Category[];
  displayedColumns: string[] = [ 'Id','Title', 'Operations'];
  constructor(private categoryService : CategoryService,
    private dialogService : DialogService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryService.getCategoryList().subscribe(list => this.dataSource = list);
  }

  onDelete(id : Number){
    this.dialogService.openConfirmDialog("Are U sure to Delete this ?").afterClosed().subscribe
    (res => {
      if(res){
        console.warn("deleting category with id : "+ id)
      }
    });
  }
  
}
