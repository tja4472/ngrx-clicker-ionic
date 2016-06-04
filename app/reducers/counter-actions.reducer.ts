import {ActionReducer, Action} from '@ngrx/store';

import {CounterActions} from '../actions';

/*
    Default parameter will be used for initial state unless initial
    state is provided for this reducer in 'provideStore' method.
 */
export interface CounterActionsState {
    counter: number;
}

const initialState: CounterActionsState = {
    counter: 0,
};
/* tslint:disable */
export const counterObject: ActionReducer<CounterActionsState> = (state = initialState, action: Action) => {
    switch (action.type) {
        case CounterActions.INCREMENT: {
            // Clone object.
            const copy: CounterActionsState = Object.assign({}, state);
            // Increment.
            copy.counter++;
            return copy;
        }
        case CounterActions.DECREMENT: {
            // Clone object.
            const copy: CounterActionsState = Object.assign({}, state);
            // Decrement.
            copy.counter--;
            return copy;
        }
        default:
            return state;
    }
};
