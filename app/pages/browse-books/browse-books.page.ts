'use strict';

import {Component} from '@angular/core';
import {BookFindPage} from '../../books-feature/pages/book-find';

@Component({
  directives: [BookFindPage],
  templateUrl: 'build/pages/browse-books/browse-books.page.html'
})
export class BrowseBooksPage {
  constructor() {
    // no-op
  }
}
