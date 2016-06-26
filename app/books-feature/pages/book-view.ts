import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
// import { RouteParams } from '@ngrx/router';
import { NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBook, isBookInCollection } from '../reducers';
import { BookActions } from '../actions/book';
import {
  BookDetailComponent,
  BookInput,
  InCollectionInput,
  AddOutput,
  RemoveOutput
} from '../components/book-detail';

@Component({
  // NOTE: selector should not be used in 'pages' that will be pushed.
  // selector: 'book-view-page',
  directives: [BookDetailComponent],
  template: `
<ion-navbar *navbar>
  <button menuToggle>
    <ion-icon name="menu"></ion-icon>
  </button>
  <ion-title>{{title}}</ion-title>
</ion-navbar>

<ion-content>
    <book-detail
      [book]="book$ | async"
      [inCollection]="isBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </book-detail>
</ion-content>
  `
})
export class BookViewPage {
  book$: Observable<BookInput>;
  isBookInCollection$: Observable<InCollectionInput>;

  private bookId: string;

  constructor(
    private store: Store<AppState>,
    private bookActions: BookActions,
    private navParams: NavParams
    //private routeParams$: RouteParams
  ) {
    console.log('BookViewPage:', navParams);
    this.bookId = navParams.data;

    this.book$ = store.let(getBook(this.bookId));
    this.isBookInCollection$ = store.let(isBookInCollection(this.bookId));
    /*
    this.book$ = routeParams$
      .select<string>('id')
      .switchMap(id => store.let(getBook(id)));

    this.isBookInCollection$ = routeParams$
      .select<string>('id')
      .switchMap(id => store.let(isBookInCollection(id)));
      */
  }


  addToCollection(book: AddOutput) {
    this.store.dispatch(this.bookActions.addToCollection(book));
  }

  removeFromCollection(book: RemoveOutput) {
    this.store.dispatch(this.bookActions.removeFromCollection(book));
  }
}
