/* tslint:disable */
'use strict';

import { Type, ViewChild }                    from '@angular/core';
import { App, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar }                          from 'ionic-native';
import { ClickerList }                        from './pages/clickerList/clickerList';
import { Page2 }                              from './pages/page2/page2';
import { RedditPage }                         from './pages/reddit/reddit';
import {RedditEffects} from "./effects/reddit-effects";
import { provideStore, combineReducers} from '@ngrx/store';
import {runEffects} from "@ngrx/effects";
import {postsByReddit} from "./reducers/reddit/postsByReddit.reducer"
import {selectedReddit} from "./reducers/reddit/selected-reddit.reducer"
import {Reddit} from "./services/reddit";
import {storeLogger} from "ngrx-store-logger";
import {RedditActions} from './actions';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/,
  providers: [
    provideStore(
      storeLogger()(combineReducers({ selectedReddit, postsByReddit }))
    ),
    RedditActions,
    runEffects(RedditEffects),
    Reddit
  ]
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