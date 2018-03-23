import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Book } from '../shared/models/book.model';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  public getBooks(page: any, size: any): Observable<Book[]> {
    let Params = new HttpParams();

    Params = Params.append('page', page);
    Params = Params.append('size', size);

    return this.http.get<Book[]>(`${environment.API_HOST}/books/`, { params: Params });
  }

  public countBooks(): Observable<number> {
    return this.http.get<number>('http://159.65.5.18:3000/books/count');
  }

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://159.65.5.18:3000/book', book);
  }

  public getBook(book: Book): Observable<Book> {
    return this.http.get<Book>(`http://159.65.5.18:3000/book/${book._id}`);
  }

  public editBook(book: Book): Observable<string> {
    return this.http.put(
      `http://159.65.5.18:3000/book/${book._id}`,
      book,
      {
        responseType: 'text'
      });
  }

  public deleteBook(book: Book): Observable<string> {
    return this.http.delete(`http://159.65.5.18:3000/book/${book._id}`, { responseType: 'text' });
  }

}
