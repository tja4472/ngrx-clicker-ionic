import {ActionReducer, Action} from '@ngrx/store';

/*
    Default parameter will be used for initial state unless initial
    state is provided for this reducer in 'provideStore' method.
 */
export interface CounterObjectState {
    counter: number;
}

const initialState: CounterObjectState = {
    counter: 0,
};
/* tslint:disable */
export const counterObject: ActionReducer<CounterObjectState> = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT': {
            // Clone object.
            const copy: CounterObjectState = Object.assign({}, state);
            // Increment.
            copy.counter++;
            return copy;
        }
        case 'DECREMENT': {
            // Clone object.
            const copy: CounterObjectState = Object.assign({}, state);
            // Decrement.
            copy.counter--;
            return copy;
        }
        default:
            return state;
    }
};
