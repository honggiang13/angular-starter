import {
  Component,
  OnInit,
} from '@angular/core';

import { BookService } from '../services/book.service';
import { Book } from '../shared/models/book.model';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Books` component loaded asynchronously');

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public book = new Book();
  public books: Book[] = [];
  public isLoading = true;

  constructor(
    private bookService: BookService
  ) { }

  public ngOnInit() {
    console.log('hello `Books` component');
    this.getBooks();
  }

  public getBooks() {
    this.bookService.getBooks(0, 10).subscribe(
      (data) => this.books = data,
      (error) => console.log(error),
      () => this.isLoading = false
    );
  }

}
