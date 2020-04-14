import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';

import { HttpClientModule }    from '@angular/common/http';
import { MaterialModule } from './common/materialModule';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { BookNavigationComponent } from './book-navigation/book-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    EditBookComponent,
    BorrowBookComponent,
    ConfirmDialogComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditCategoryComponent,
    BookNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ConfirmDialogComponent],
})
export class AppModule { }
