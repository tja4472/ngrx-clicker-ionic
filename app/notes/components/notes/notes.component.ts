import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Note } from '../../note.model';
import { NotesService } from '../../services/notes.service';
import { NoteComponent } from '../note/note.component';

import { NotesServiceStoreOnly } from '../../services/notes.service.store_only';

@Component({
    moduleId: module.id,
    selector: 'app-notes',
    templateUrl: 'build/notes/components/notes/notes.component.html',
    // styleUrls: ['notes.component.css'],
    directives: [NoteComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
    public notes: Observable<Note[]>;
    public notesService: NotesService;

    constructor(notesService: NotesServiceStoreOnly) {
        this.notesService = notesService;
        this.notes = notesService.getNotes();
    }

    public onAddNote(noteText: any): void {
        this.notesService.addNote(noteText);
    }

    public onChangeNoteText(newText: string, note: Note): void {
        this.notesService.changeNoteText(newText, note);
    }

    public ngOnInit(): void {
        this.notesService.initialise();
    }
}
