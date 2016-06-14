import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import * as uuid from 'node-uuid';

import { Note } from '../note.model';
import { AppState } from '../note.model';
import { NotesService } from './notes.service';
import { NotesDataService } from './notes.data.service';

@Injectable()
export class NotesServiceStoreOnly implements NotesService {
    private store: Store<AppState>;

    constructor(store: Store<AppState>, notesDataService: NotesDataService) {
        this.store = store;
        console.log('>>>>>>>>>>>>>>NotesServiceStoreOnly<<<<<<<<<<<<<<<');
        console.log('uuid>>', uuid);
        console.log('uuid.v1()>>', uuid.v1());
    }

    public initialise(): void {
        this.store.dispatch({ type: 'INIT_NOTES', payload: {} });
    }

    public getNotes(): Observable<Note[]> {
        return this.store.select<Note[]>('notes');
    }

    public addNote(text: string): void {
        console.log('NotesServiceStoreOnly:addNote>>', text);
        this.store.dispatch({ type: 'ADD_NOTE', payload: { text: text, colour: 'red', id: uuid.v1() } });
    }

    public changeNoteText(text: string, note: Note): void {
        this.store.dispatch({ type: 'UPDATE_NOTE_TEXT', payload: { id: note.id, text: text } });
    }

}
