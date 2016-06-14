import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { Note } from '../note.model';

@Injectable()
export class NotesDataService {
    private API_ROOT: String = 'http://localhost:3000';
    private JSON_HEADER: any = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    constructor(public http: Http) { }

    public getNotes(): Observable<Array<Note>> {
        return this.http.get(`${this.API_ROOT}/notes`)
            .map((response: Response) => response.json());
    }

    public addNote(note: Note): Observable<Note> {
        return this.http.post(`${this.API_ROOT}/notes`, JSON.stringify(note), this.JSON_HEADER)
            .map((response: Response) => response.json());
    }

    public updateNote(note: Note): Observable<Note> {
        console.log(`notes.service updating note ${note.id} using path ${this.API_ROOT}/notes/${note.id}`);
        if (note.id) {
            return this.http.put(`${this.API_ROOT}/notes/${note.id}`, JSON.stringify(note), this.JSON_HEADER)
                .map((response: Response) => response.json());
        }
    }
}
