/* tslint:disable */
'use strict';
import {ChangeDetectionStrategy} from '@angular/core';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {RedditModel} from "../../services/reddit-model";
import {RedditList} from '../../components/reddit-list/reddit-list';
import {RedditSelect} from '../../components/reddit-select/reddit-select';
import {RefreshButton} from '../../components/refresh-button/refresh-button';
import {RedditActions} from '../../actions';

import {RedditEffects} from "../../effects/reddit-effects";
import {Subscription} from "rxjs/Subscription";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [RedditList, RedditSelect, RefreshButton],
  providers: [RedditModel],
  templateUrl: 'build/pages/reddit/reddit.html',
})
export class RedditPage {
  private redditActions = new RedditActions();

  constructor(
    private redditModel: RedditModel,
    private _store: Store<any>
  ) { 
  }

  selectReddit(reddit: string) {
    this._store.dispatch(this.redditActions.selectReddit(reddit))
  }

  invalidateReddit(reddit: string) {
    this._store.dispatch(this.redditActions.invalidateReddit(reddit))
    this._store.dispatch(this.redditActions.selectReddit(reddit))
  }
}
