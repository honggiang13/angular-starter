import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { BooksComponent } from './+books/books.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'books', loadChildren: './+books#BooksModule' },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
