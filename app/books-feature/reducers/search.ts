import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../models';
import { BookActions, SearchCompleteAction } from '../actions';

export interface SearchState {
  ids: string[];
  loading: boolean;
  query: string;
};

const initialState: SearchState = {
  ids: [],
  loading: false,
  query: ''
};

export default function(state: SearchState = initialState, action: Action): SearchState {
  switch (action.type) {
    case BookActions.SEARCH: {
      const query: any = action.payload;

      return Object.assign(state, {
        query,
        loading: true
      });
    }

    case SearchCompleteAction.ACTION: {
      const books: Book[] = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}

export function getStatus() {
  return (state$: Observable<SearchState>) => state$
    .select(s => s.loading);
}

export function getBookIds() {
  return (state$: Observable<SearchState>) => state$
    .select(s => s.ids);
}

export function getQuery() {
  return (state$: Observable<SearchState>) => state$
    .select(s => s.query);
}
