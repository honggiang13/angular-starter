import { BooksComponent } from './books.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BooksComponent },
    { path: 'book-detail', loadChildren: './+book-detail#BookDetailModule' }
  ]},
];
