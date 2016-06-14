import { ActionReducer, Action } from '@ngrx/store';

import { Note } from '../note.model';
import { note } from './note.reducer';

export const notes: ActionReducer<Array<Note>> = (notesAA: Array<Note> = [], action: Action) => {
  console.log('>>>>notesReducer<<<<');

  switch (action.type) {
    case 'ADD_NOTE':
    case 'ADD_NOTE_FROM_SERVER':
      return [...notesAA, note(null, action)];
    case 'UPDATE_NOTE_TEXT':
    case 'UPDATE_NOTE_FROM_SERVER':
      return notesAA.map(_note => note(_note, action));
    default:
      return notesAA;
  }
};
