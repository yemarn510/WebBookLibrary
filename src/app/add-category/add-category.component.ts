import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm = new FormGroup({
    category_name: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  
  }
  
  addCategory(){
    console.warn(this.addCategoryForm.value)
  }
}
