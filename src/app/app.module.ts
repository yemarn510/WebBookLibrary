import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';


import { HttpClientModule }    from '@angular/common/http';
import { MaterialModule } from './common/materialModule';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    EditBookComponent,
    BorrowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
