import {ActionReducer, Action} from '@ngrx/store';

import {RedditActions} from '../../actions';

const initialState: string = 'Angular 2';

/* tslint:disable */
export const selectedReddit : ActionReducer<string> = (state : string = initialState, action: Action) => {
    console.log('>>>>selectedReddit<<<<');
    switch(action.type) {
        case RedditActions.SELECT_REDDIT:
            return action.payload;
        default:
            return state;
    }
};

