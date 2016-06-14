import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../../note.model';

@Component({
    moduleId: module.id,
    selector: 'app-note',
    templateUrl: 'build/notes/components/note/note.component.html',
    // styleUrls: ['note.component.css']
})
export class NoteComponent {
    @Input() public note: Note;
    @Output() public changeNoteText: any = new EventEmitter(false);

    constructor() {
        //
    }
}
