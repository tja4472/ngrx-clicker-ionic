import { Component, Input } from '@angular/core';

import { BookPreviewComponent, BookInput } from './book-preview';

export type BooksInput = BookInput[];

// <ion-card *ngFor="#repo of foundRepos" (click)="goToDetails(repo)">  

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent ],
  template: `
    <book-preview *ngFor="let book of books" [book]="book"></book-preview>
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
}
