import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../common/category.service';
import { Category } from '../common/categoryObj';
import { DialogService } from '../common/dialog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  dataSource : Category[];
  deleteId : Number;
  displayedColumns: string[] = [ 'Id','Title', 'Operations'];
  
  constructor(
    private categoryService : CategoryService,
    private dialogService : DialogService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryService.getCategoryList().subscribe(list => this.dataSource = list);
  }

  deleteACategory(id : Number){
    this.categoryService.deleteCategory(id).subscribe();
  }

  onDelete(id : Number){
    this.dialogService.openConfirmDialog("Are U sure to Delete this ?").afterClosed().subscribe
    (res => { this.deleteId =id ;
      if(res){
        this.deleteACategory(this.deleteId);
        location.reload();
      }
    });
  }
  
}
