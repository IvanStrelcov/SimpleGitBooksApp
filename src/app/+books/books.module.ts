import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import { BooksComponent } from './books.component';
import { BookComponent }  from './book';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BooksComponent,
    BookComponent
  ],
  exports: [
    BooksComponent,
    BookComponent
  ]
})
export class BooksModule { }
