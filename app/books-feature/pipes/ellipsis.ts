import { Pipe } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe {
  public transform(str: any) {
    const withoutHtml: any = str.replace(/(<([^>]+)>)/ig);
    if (str.length >= 250)
      return withoutHtml.slice(0, 250) + '...';
    return withoutHtml;
  }
}
