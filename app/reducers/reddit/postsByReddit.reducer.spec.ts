import {postsByReddit, RedditPostsArray} from './postsByReddit.reducer';
import {RedditActions} from '../../actions';

import {
    // beforeEach,
    // beforeEachProviders,
    describe,
    expect,
    // injectAsync,
    it,
} from '@angular/core/testing';
/* tslint:disable */

describe('The postsByReddit reducer', () => {
        const redditActions = new RedditActions();
        
    it('should return current state when no valid actions have been made', () => {
        const state: RedditPostsArray = {};
        const actual = postsByReddit(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should set isFetching to true and didInvalidate to false when posts are requested', () => {
        const state: RedditPostsArray = {};
        const reddit = 'Angular 2';
        // const actual = postsByReddit(state, {type: 'REQUEST_POSTS', payload: {reddit}});
        const actual = postsByReddit(state, redditActions.requestPosts(reddit));        
        const expected = {
            [reddit]: {
                isFetching: true,
                didInvalidate: false,
                posts:[]
            }
        };
        expect(actual).toEqual(expected);
    });

    it('should invalidate a reddit when INVALIDATE_REDDIT is dispatched', () => {
        const reddit = 'Angular 2';
        const state: RedditPostsArray = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        const expected = {
            [reddit]: {
                isFetching: false,
                didInvalidate: true,
                posts:[]
            }
        };
        // const actual = postsByReddit(state, {type: 'INVALIDATE_REDDIT', payload: {reddit}});
        const actual = postsByReddit(state, redditActions.invalidateReddit(reddit));
        expect(actual).toEqual(expected);
    });

    it('should populate posts when RECEIVE_POSTS is dispatched', () => {
        const reddit = 'Angular 2';
        const state: RedditPostsArray = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        const expected = {
            [reddit]: {
                isFetching: false,
                didInvalidate: true,
                posts:[{},{},{}]
            }
        };
        // const actual = postsByReddit(state, {type: 'RECEIVE_POSTS', payload: {reddit, data: {children: [{}, {}, {}]}}});
        const actual = postsByReddit(state, redditActions.receivePosts(reddit, {children: [{}, {}, {}]}));
        expect(actual[reddit].posts.length).toEqual(expected[reddit].posts.length);
    });

    it('should mark lastUpdated when RECEIVE_POSTS is dispatched', () => {
        const reddit = 'Angular 2';
        const state: RedditPostsArray = {
            [reddit]: {
                isFetching: false,
                didInvalidate: false,
                posts:[]
            }
        };
        // const actual = postsByReddit(state, {type: 'RECEIVE_POSTS', payload: {reddit, data: {children: [{}]}}});
        const actual = postsByReddit(state, redditActions.receivePosts(reddit, {children: [{}]}));
        expect(actual[reddit].lastUpdated).toBeDefined();
    });
});