'use strict';

import {Component} from '@angular/core';
import {BookFindPage} from '../../books-feature/pages/book-find';
import { NavController } from 'ionic-angular';

import { Page2 } from '../page2/page2';

@Component({
  directives: [BookFindPage],
  templateUrl: 'build/pages/browse-books/browse-books.page.html'
})
export class BrowseBooksPage {
  constructor(private nav: NavController) {
    // no-op
  }

  goToOtherPage() {
    // push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.nav.push(Page2);
  }
}
