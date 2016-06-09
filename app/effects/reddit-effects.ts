/* tslint:disable */
import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {StateUpdates, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Reddit} from "../services/reddit";
import {RedditActions} from '../actions';



@Injectable()
export class RedditEffects {
    constructor(
        private _updates$: StateUpdates<any>,
        private _reddit: Reddit,
        private redditActions: RedditActions
    ) { }

    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#do
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#filter
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#switchmap
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#concat
    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of
    // https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#map
    
    @Effect() fetchPosts$ = this._updates$
        .whenAction(RedditActions.SELECT_REDDIT)
        .do(val => console.log('Before filter>>', val))
        .filter(({state, action}) => this.shouldFetchPosts(state.postsByReddit, action.payload))
        .do(val => console.log('After filter>>', val))        
        .switchMap(({action}) => Observable.concat(
            // Does requestPost action.
            Observable.of(this.redditActions.requestPosts(action.payload)),
            // Then gets posts using Reddit service.
            this._reddit
                .fetchPosts(action.payload)
                .do(val => console.log('After fetchPosts>>', val))   
                // Does receivePosts action.
                .map(({data}) => (this.redditActions.receivePosts(action.payload, data)))
        ))
        .do(val => console.log('After switchMap>>', val));

    private shouldFetchPosts(postsByReddit, reddit) {
        console.log('shouldFetchPosts');
        const posts = postsByReddit[reddit];
        if (!posts) {
            return true;
        }
        if (posts.isFetching) {
            return false;
        }
        return posts.didInvalidate;
    }
}
