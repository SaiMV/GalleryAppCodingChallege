import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'createPaginations' })
export class PaginationCreator implements PipeTransform {
  transform(numberOfPages: number): number[] {
    let paginationArray = [];
    for (let i = 0; i < numberOfPages; i++) {
      paginationArray.push(i + 1);
    }
    return paginationArray;
  }
}
