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
export class CounterActions {
    static DECREMENT = '[Counter] Decrement';
    decrement(): Action {
        return {
            type: CounterActions.DECREMENT
        };
    }    
    static INCREMENT = '[Counter] Increment';
    increment(): Action {
        return {
            type: CounterActions.INCREMENT
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
