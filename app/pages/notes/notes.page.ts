import {ChangeDetectionStrategy} from '@angular/core';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {NotesComponent} from '../../notes';
import { NotesServiceStoreOnly } from '../../notes';

// import {RedditModel} from "../../services/reddit-model";
// import {RedditList} from '../../components/reddit-list/reddit-list';
// import {RedditSelect} from '../../components/reddit-select/reddit-select';
// import {RefreshButton} from '../../components/refresh-button/refresh-button';
// import {RedditActions} from '../../actions';

// import {RedditEffects} from "../../effects/reddit-effects";
// import {Subscription} from "rxjs/Subscription";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [NotesComponent],
  providers: [NotesServiceStoreOnly],
  templateUrl: 'build/pages/notes/notes.page.html',
})
export class NotesPage {
  constructor(
    private _store: Store<any>
  ) {
  }
}
