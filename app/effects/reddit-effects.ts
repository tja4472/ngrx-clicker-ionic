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

    @Effect() fetchPosts$ = this._updates$
        .whenAction(RedditActions.SELECT_REDDIT)
        .filter(({state, action}) => this.shouldFetchPosts(state.postsByReddit, action.payload))
        .switchMap(({action}) => Observable.concat(
            Observable.of(this.redditActions.requestPosts(action.payload)),
            this._reddit
                .fetchPosts(action.payload)
                //.map(({data}) => ({ type: RedditActions.RECEIVE_POSTS, payload: { reddit: action.payload, data 
                .map(({data}) => (this.redditActions.receivePosts(action.payload, data)))
        ));

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
