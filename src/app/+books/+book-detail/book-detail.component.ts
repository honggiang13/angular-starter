import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`BookDetail` component loaded asynchronously');

@Component({
  selector: 'book-detail',
  template: `
    <h1>Hello from Book Detail</h1>
  `,
})
export class BookDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `BookDetail` component');
  }

}
