import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '../common/categoryObj';
import { CategoryService } from '../common/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm = new FormGroup({
    category_name: new FormControl(''),
  });

  constructor(private categoryService : CategoryService,
    private location: Location,
    ) { }

  ngOnInit(): void {
  
  }
  
  addCategory(){
    console.warn(this.addCategoryForm.value);
    this.categoryService.addCategory(this.addCategoryForm.value).subscribe();
    this.location.back();
  }
}
