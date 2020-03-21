import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../common/categoryObj';
import { CategoryService } from '../common/category.service';
import { DialogService } from '../common/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editCategory : Category;
  editCategoryForm = new FormGroup({
    id: new FormControl(''),
    category_name: new FormControl(''),
  });

  constructor(private categoryService : CategoryService,
    private dialogService : DialogService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }
  
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory():any{
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(id).subscribe(category => this.editCategory = category);
  }

  updateCategory(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.editCategory(id , this.editCategoryForm.value).subscribe();
  }

  editConfirm(){
    this.dialogService.openConfirmDialog("Are U sure to Edit this ?").afterClosed().subscribe
    (res => {
      if(res){
        this.updateCategory();
        this.location.back();
      }
    });
  }
}
