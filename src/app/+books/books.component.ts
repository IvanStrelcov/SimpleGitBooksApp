import { Component, OnInit } from '@angular/core';
import { BooksService }      from '../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this._booksService.getBooks();
  }
}
