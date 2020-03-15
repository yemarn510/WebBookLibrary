import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {path: '' , redirectTo:'/book', pathMatch: 'full'},
  {path: 'cancel' , redirectTo:'/book', pathMatch: 'full'},
  {path: 'book' , component : BooklistComponent},
  {path: 'edit/:id', component : EditBookComponent},
  {path: 'borrow/:id', component : BorrowBookComponent},
  {path: 'add', component: AddBookComponent},
  {path: 'category', component: CategoryListComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'category/edit/:id', component: EditCategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
