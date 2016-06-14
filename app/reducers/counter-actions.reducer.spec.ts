import {counterObject, CounterActionsState} from './counter-actions.reducer';
import {CounterActions} from '../actions';

import {
    // beforeEach,
    // beforeEachProviders,
    describe,
    expect,
    // injectAsync,
    it
} from '@angular/core/testing';
/* tslint:disable */
describe('The counterActions reducer', () => {
    const counterActions = new CounterActions();
        
    it('should return current state when an invalid action is dispatched', () => {
        const state: CounterActionsState = {
            counter: 0
        };
        
        // Clone object.
        const stateClone: CounterActionsState = Object.assign({}, state);

        const actual = counterObject(state, { type: 'INVALID_ACTION' });
        const expected = state;

        // Same object.
        expect(actual).toBe(expected);

        // Same contents.
        expect(actual).toEqual(stateClone);
    });

    it('should increment the counter when INCREMENT action is dispatched', () => {
        // const counterActions = new CounterActions();
        
        const state: CounterActionsState = {
            counter: 0
        };
             
        const actual = counterObject(state, counterActions.increment());
        
        const expected: CounterActionsState = {
            counter: 1
        };

        expect(actual).toEqual(expected);                                
    });

    it('should decrement the counter when DECREMENT action is dispatched', () => {
        // const counterActions = new CounterActions();
                
        const state: CounterActionsState = {
            counter: 0
        };
             
        const actual = counterObject(state, counterActions.decrement());
        
        const expected: CounterActionsState = {
            counter: -1
        };

        expect(actual).toEqual(expected);  
    });
});
