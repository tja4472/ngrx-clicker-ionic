import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models';

@Injectable()
export class SearchCompleteAction implements Action {
  static ACTION = '[Book] Search Complete';

  type: string = SearchCompleteAction.ACTION;
  payload: Book[];

  constructor(results: Book[]) {
    this.payload = results;
  }
}
