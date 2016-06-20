import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models';
import { AddCommasPipe } from '../pipes/add-commas';
import { EllipsisPipe } from '../pipes/ellipsis';
// import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

export type BookInput = Book;
export type BookClickedOutput = string;

@Component({
  selector: 'book-preview',
  pipes: [ AddCommasPipe, EllipsisPipe ],
  // directives: [
  //  MD_CARD_DIRECTIVES,
  //  MD_LIST_DIRECTIVES
  // ],
  template: `
 <ion-card (click)="bookClicked.emit(id)">
    <ion-card-header>
        <h2>{{ title }}</h2>
    </ion-card-header> 
 </ion-card>

      <md-card>
        <md-card-title-group>
          <md-card-title>{{ title }}</md-card-title>
          <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
          <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="description">{{ description | ellipsis }}</p>
        </md-card-content>
        <md-card-footer>
          <h5 md-subheader>Written By:</h5>
          <span>
            {{ authors | addCommas }}
          </span>
        </md-card-footer>
      </md-card>

  `,
  styles: [`
    md-card {
      width: 400px;
      height: 300px;
      margin: 15px;
    }
    md-card-title {
      margin-right: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    md-card-footer {
      padding-bottom: 25px;
    }
  `]
})
export class BookPreviewComponent {
  @Input() public book: BookInput;
  @Output() bookClicked = new EventEmitter<BookClickedOutput>();

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get authors() {
    return this.book.volumeInfo.authors;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
