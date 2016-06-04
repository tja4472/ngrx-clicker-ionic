/* tslint:disable */
import {ActionReducer, Action} from '@ngrx/store';

import {RedditActions} from '../../actions';

export interface RedditPosts {
    isFetching: boolean,
    didInvalidate?: boolean,
    posts: Array<any>,
    lastUpdated?: Date,
    selectedReddit?: string
}

export interface RedditPostsArray {
    [index: string]: RedditPosts;
}

const posts : ActionReducer<RedditPosts> = (state : RedditPosts = {
    isFetching: false,
    didInvalidate: false,
    posts: []
}, action: Action) => {
  switch(action.type) {
      case RedditActions.INVALIDATE_REDDIT:
          return Object.assign({}, state, {
              didInvalidate: true
          });
      case RedditActions.REQUEST_POSTS:
          return Object.assign({}, state, {
              isFetching: true,
              didInvalidate: false
          });
      case RedditActions.RECEIVE_POSTS:
          return Object.assign({}, state, {
              isFetching: false,
              didInvalidate: false,
              posts: action.payload.data.children.map(child => child.data),
              lastUpdated: Date.now()
          });
      default:
          return state;
  }
};

export const postsByReddit : ActionReducer<RedditPostsArray> = (state: RedditPostsArray = {}, action : Action) => {  
    switch (action.type) {
        case RedditActions.INVALIDATE_REDDIT:
        case RedditActions.RECEIVE_POSTS:
        case RedditActions.REQUEST_POSTS:
            return <RedditPostsArray>Object.assign({}, state, {
                [action.payload.reddit]: posts(state[action.payload.reddit], action)
            });
        default:
            return state;
    }
};

