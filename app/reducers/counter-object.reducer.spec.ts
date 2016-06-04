import {counterObject, CounterObjectState} from './counter-object.reducer';

import {
    // beforeEach,
    // beforeEachProviders,
    describe,
    expect,
    // injectAsync,
    it,
}                               from '@angular/core/testing';
/* tslint:disable */
// had issue with jasmine typing conflicts, this is temporary workaround
// declare var it, expect, describe, toBe;


describe('The counterObject reducer', () => {
    it('should return current state when an invalid action is dispatched', () => {
        const state: CounterObjectState = {
            counter: 0
        };
        
        // Clone object.
        const stateClone: CounterObjectState = Object.assign({}, state);

        const actual = counterObject(state, { type: 'INVALID_ACTION' });
        const expected = state;

        // Same object.
        expect(actual).toBe(expected);

        // Same contents.
        expect(actual).toEqual(stateClone);
    });

    it('should increment the counter when INCREMENT action is dispatched', () => {
        const state: CounterObjectState = {
            counter: 0
        };
             
        const actual = counterObject(state, { type: 'INCREMENT' });
        
        const expected: CounterObjectState = {
            counter: 1
        };

        expect(actual).toEqual(expected);                                
    });

    it('should decrement the counter when DECREMENT action is dispatched', () => {
        const state: CounterObjectState = {
            counter: 0
        };
             
        const actual = counterObject(state, { type: 'DECREMENT' });
        
        const expected: CounterObjectState = {
            counter: -1
        };

        expect(actual).toEqual(expected);  
    });
});
