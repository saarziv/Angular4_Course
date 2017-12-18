import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  getAuthors(): any[] {
    return [
      {name: 'Allen Watts', age: '80'},
      {name: 'Michel Gilbbert', age: '44'},
      {name: 'Deshunda West', age: '60'}
       // null
    ];
  }
}
