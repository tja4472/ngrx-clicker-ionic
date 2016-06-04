import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
// import { Book } from '../models';

/* tslint:disable */

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class RedditActions {
    static SELECT_REDDIT = '[Reddit] Select';
    selectReddit(redditName: string): Action {
        return {
            payload: redditName,
            type: RedditActions.SELECT_REDDIT
        };
    }

    static INVALIDATE_REDDIT = '[Reddit] Invalidate';
    invalidateReddit(redditName: string): Action {
        return {
            payload: { reddit: redditName },
            type: RedditActions.INVALIDATE_REDDIT
        };
    }

    static REQUEST_POSTS = '[Reddit] Request posts';
    requestPosts(redditName: string): Action {
        return {
            payload: { reddit: redditName },
            type: RedditActions.REQUEST_POSTS
        };
    }

    static RECEIVE_POSTS = '[Reddit] Receive posts';
    /*    
        receivePosts(payload: any): Action {
            return {
                payload: payload,
                type: RedditActions.RECEIVE_POSTS
            };
        }
    */
    receivePosts(
        redditName: string,
        data: any): Action {
        //
        return {
            payload: { reddit: redditName, data },
            type: RedditActions.RECEIVE_POSTS
        };
    }
    /*
    search(query: string): Action {
      return {
        type: CounterActions.SEARCH,
        payload: query
      };
    }  
    */
}
