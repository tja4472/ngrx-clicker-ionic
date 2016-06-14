import { ActionReducer, Action } from '@ngrx/store';

import { Note } from '../note.model';

export const note: ActionReducer<Note> = (noteAA: Note = null, action: Action) => {
  console.log('>>>>noteReducer<<<<');

  switch (action.type) {
    // Actions initiated by the user/front end
    case 'ADD_NOTE':
      return Object.assign({}, action.payload, { dirty: true });
    case 'UPDATE_NOTE_TEXT':
      if (noteAA.id === action.payload.id) {
        return Object.assign({}, noteAA, { text: action.payload.text }, { dirty: true });
      } else {
        return noteAA;
      }
    // Actions initiated from the backend  
    case 'ADD_NOTE_FROM_SERVER':
      return Object.assign({}, action.payload, { dirty: false });
    case 'UPDATE_NOTE_FROM_SERVER':
      if (noteAA.id === action.payload.note.id) {
        return Object.assign({}, action.payload.note, { dirty: false });
      } else {
        return noteAA;
      }
    default:
      return noteAA;
  }
};
