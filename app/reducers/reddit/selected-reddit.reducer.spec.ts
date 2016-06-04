import {selectedReddit} from './selected-reddit.reducer';
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

describe('The selectedReddit reducer', () => {
    const redditActions = new RedditActions();
    
    it('should return current state when no valid actions have been made', () => {
        const state = "Angular 2";
        const actual = selectedReddit(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should return currently selected reddit when SELECT_REDDIT is dispatched', () => {
        const state = "Angular 2";
        const redditSelected = 'ReactJS';
        const actual = selectedReddit(state, redditActions.selectReddit(redditSelected));
        const expected = redditSelected;
        expect(actual).toBe(expected);
    });
});
