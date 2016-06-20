import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export type QueryInput = string;
export type SearchOutput = string;

@Component({
  selector: 'book-search',
  templateUrl: 'build/books-feature/components/book-search/book-search.html',
})
export class BookSearchComponent {
  /**
   * Tip: Push events into a subject if you want to handle event streams using
   * observables.
   */
  public keyup$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

  @Input() query: QueryInput = '';
  @Output() public search: Observable<SearchOutput> = this.keyup$
    .debounceTime(300)
    .map(event => (event.target as HTMLInputElement).value)
    .distinctUntilChanged();
}
