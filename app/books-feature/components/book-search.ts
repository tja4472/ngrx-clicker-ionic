import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
// import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

export type QueryInput = string;
export type SearchOutput = string;

@Component({
  selector: 'book-search',
  // directives: [ MD_INPUT_DIRECTIVES ],
  template: `
    <md-input placeholder="Search for a book" [value]="query" (keyup)="keyup$.next($event)"></md-input>
  `,
  styles: [`
    md-input {
      width: 300px;
    }
  `]
})
export class BookSearchComponent {
  /**
   * Tip: Push events into a subject if you want to handle event streams using
   * observables.
   */
  public keyup$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

  @Input() public query: QueryInput = '';
  @Output() public search: Observable<SearchOutput> = this.keyup$
    .debounceTime(300)
    .map(event => (event.target as HTMLInputElement).value)
    .distinctUntilChanged();
}
