Instead of passing around action string constants and manually recreating
action objects at the point of dispatch, we create services encapsulating
each appropriate action group. Action types are included as static
members and kept next to their action creator. This promotes a
uniform interface and single import for appropriate actions
within your application components.

 ```typescript
@Injectable()
export class BookActions {
  public static SEARCH: string = '[Book] Search';
  public search(query: string): Action {
    return {
      type: BookActions.SEARCH,
      payload: query
    };
  }

  public static SEARCH_COMPLETE: string = '[Book] Search Complete';
  public searchComplete(results: Book[]): Action {
    return {
      type: BookActions.SEARCH_COMPLETE,
      payload: results
    };
  }
 ```

reducer
```typescript
     case BookActions.SEARCH_COMPLETE: {
      const books: Book[] = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query
      };
    }
```

effect
```typescript
  @Effect() public search$: Observable<Action> = this.updates$
    .whenAction(BookActions.SEARCH)
    .map<string>(toPayload)
    .filter(query => query !== '')
    .switchMap(query => this.googleBooks.searchBooks(query)
      .map(books => this.bookActions.searchComplete(books))
      .catch(() => Observable.of(this.bookActions.searchComplete([])))
    );
```