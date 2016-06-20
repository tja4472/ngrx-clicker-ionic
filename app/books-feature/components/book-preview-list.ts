import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BookPreviewComponent, BookInput, BookClickedOutput } from './book-preview';

export type BooksInput = BookInput[];
export type BookClickedOutput = BookClickedOutput;

// <ion-card *ngFor="#repo of foundRepos" (click)="goToDetails(repo)">  

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent ],
  template: `
    <book-preview *ngFor="let book of books" [book]="book" (bookClicked)="bookClickedLocal($event)"></book-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class BookPreviewListComponent {
  @Input() public books: BooksInput;
  @Output() bookClicked = new EventEmitter<BookClickedOutput>();

  bookClickedLocal(bookId: BookClickedOutput) {
    console.log('BookPreviewListComponent:bookClickedLocal:', bookId);
    this.bookClicked.emit(bookId);
  }
}
