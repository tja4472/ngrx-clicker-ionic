/* tslint:disable */
'use strict';
import {Component} from '@angular/core';
import { Type, ViewChild }                    from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar }                          from 'ionic-native';

import { ClickerList }                        from './pages/clickerList/clickerList';
import { Page2 }                              from './pages/page2/page2';
import { NotesPage }                         from './pages/notes/notes.page';
import { RedditPage }                         from './pages/reddit/reddit';
import {MyCollectionPage} from './pages/my-collection/my-collection.page';
import {BrowseBooksPage} from './pages/browse-books/browse-books.page';

import {RedditEffects} from "./effects/reddit-effects";

import { provideDB } from '@ngrx/db';
import { provideStore, combineReducers} from '@ngrx/store';
import {runEffects} from "@ngrx/effects";
import {postsByReddit} from "./reducers/reddit/postsByReddit.reducer"
import {selectedReddit} from "./reducers/reddit/selected-reddit.reducer"
import {Reddit} from "./services/reddit";
import {storeLogger} from "ngrx-store-logger";
import {RedditActions} from './actions';

import { NotesDataService } from './notes';
import { NotesEffectsService } from './notes';
import { notes } from './notes/';

// books-feature
import actions from './books-feature/actions';
import schema from './books-feature/db-schema';

import * as BooksReducers  from './books-feature/reducers';
// import {booksReducer, collectionReducer, routerReducer, searchReducer} from './books-feature/reducers';

import effects from './books-feature/effects';
import services from './books-feature/services';
import { compose } from '@ngrx/core/compose';

export const APP_PROVIDERS: any[] = [
  NotesDataService,
  //    provideStore({notes}),
  //    provideStore({notes}, {notes:[]}),
  /*  
    provideStore(
      storeLogger()(combineReducers({selectedReddit, postsByReddit}))
    ),
  */
  // {reducer1,reducer2}
  // those reducers are slices/branches/whatever of that one store

  provideStore(compose(storeLogger(), combineReducers)({
    notes,
    selectedReddit,
    postsByReddit,
    router: BooksReducers.routerReducer,
    search: BooksReducers.searchReducer,
    books: BooksReducers.booksReducer,
    collection: BooksReducers.collectionReducer
  })
  ),


  /*
    provideStore(
      storeLogger()(combineReducers({notes, selectedReddit, postsByReddit}))
    ),
  */
  /*
  provideStore(booksReducers),
  */
  RedditActions,
  runEffects(RedditEffects, NotesEffectsService, effects),
  Reddit,
  /**
   * provideDB sets up @ngrx/db with the provided schema and makes the Database
   * service everywhere.
   */
  provideDB(schema),

  /**
   * Finall we provide additional services and action creators so they can
   * be used by all of our components, effects, and guards.
   */
  services,
  actions
];

@Component({
  templateUrl: 'build/app.html',
})
export class ClickerApp {

  @ViewChild(Nav) private nav: Nav;

  private rootPage: Type;
  private pages: Array<{ title: string, component: Type }>;
  private menu: MenuController;
  private platform: Platform;

  constructor(platform: Platform, menu: MenuController) {

    this.platform = platform;
    this.menu = menu;

    this.rootPage = ClickerList;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Clickers', component: ClickerList },
      { title: 'Goodbye Ionic', component: Page2 },
      { title: 'Async/Reddit example', component: RedditPage },
      { title: 'Notes example', component: NotesPage },
      { title: 'Books - My Collection', component: MyCollectionPage },
      { title: 'Books - Browse Books', component: BrowseBooksPage },
    ];
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  };
}

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/
ionicBootstrap(ClickerApp, APP_PROVIDERS);
