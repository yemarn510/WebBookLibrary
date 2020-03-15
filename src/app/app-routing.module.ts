import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path: '' , redirectTo:'/book', pathMatch: 'full'},
  {path: 'cancel' , redirectTo:'/book', pathMatch: 'full'},
  {path: 'book' , component : BooklistComponent},
  {path: 'edit/:id', component : EditBookComponent},
  {path: 'borrow/:id', component : BorrowBookComponent},
  {path: 'add', component: AddBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
