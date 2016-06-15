import { Pipe } from '@angular/core';

@Pipe({
  name: 'addCommas'
})
export class AddCommasPipe {
  public transform(authors: any) {
    if (!authors) return '';
    switch (authors.length) {
      case 1:
        return authors[0];
      case 2:
        return authors.join(' and ');
      default:
        const last: any = authors[authors.length - 1];
        const remaining: any = authors.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }
}
