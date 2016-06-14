import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models';

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
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

  public static ADD_TO_COLLECTION: string = '[Book] Add to Collection';
  public addToCollection(book: Book): Action {
    return {
      type: BookActions.ADD_TO_COLLECTION,
      payload: book
    };
  }

  public static ADD_TO_COLLECTION_SUCCESS: string = '[Book] Add to Collection Success';
  public addToCollectionSuccess(book: Book): Action {
    return {
      type: BookActions.ADD_TO_COLLECTION_SUCCESS,
      payload: book
    };
  }

  public static ADD_TO_COLLECTION_FAIL: string = '[Book] Add to Collection Fail';
  public addToCollectionFail(book: Book): Action {
    return {
      type: BookActions.ADD_TO_COLLECTION_FAIL,
      payload: book
    };
  }

  public static REMOVE_FROM_COLLECTION: string = '[Book] Remove from Collection';
  public removeFromCollection(book: Book): Action {
    return {
      type: BookActions.REMOVE_FROM_COLLECTION,
      payload: book
    };
  }

  public static REMOVE_FROM_COLLECTION_SUCCESS: string = '[Book] Remove From Collection Success';
  public removeFromCollectionSuccess(book: Book): Action {
    return {
      type: BookActions.REMOVE_FROM_COLLECTION_SUCCESS,
      payload: book
    };
  }

  public static REMOVE_FROM_COLLECTION_FAIL: string = '[Book] Remove From Collection Fail';
  public removeFromCollectionFail(book: Book): Action {
    return {
      type: BookActions.REMOVE_FROM_COLLECTION_FAIL,
      payload: book
    };
  }

  public static LOAD_COLLECTION: string = '[Book] Load Collection';
  public loadCollection(): Action {
    return {
      type: BookActions.LOAD_COLLECTION
    };
  }

  public static LOAD_COLLECTION_SUCCESS: string = '[Book] Load Collection Success';
  public loadCollectionSuccess(books: Book[]): Action {
    return {
      type: BookActions.LOAD_COLLECTION_SUCCESS,
      payload: books
    };
  }

  public static LOAD_BOOK: string = '[Book] Load Book';
  public loadBook(book: Book): Action {
    return {
      type: BookActions.LOAD_BOOK,
      payload: book
    };
  }
}
