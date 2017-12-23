import { Injectable } from '@angular/core';


@Injectable()
export class SectionService {
  sections = [
    {
      name: 'angularFundamentals',
      comments: `string interpolation , class binding ,*ngFor , use of authors.service`,
      component: 'authors-list',
      path: '/authorsList'
    },
    {
      name: 'Displaying data and handeling events',
      comments: `two way binding , pipe, custom pipes - use of title.pipe`,
      component: 'title-casing',
      path: '/titleCasing'
    },
    {
      name: 'Building Reusable Components',
      comments: ``,
      component: 'favourite',
      path: '/favourite'
    },
    {
      name: 'Consuming Http services',
      comments: `CRUD operations , seperation of concerns , look at posts.service`,
      component: 'posts',
      path: '/posts'
    }
];
getSections(): any[] {
  return this.sections;
}


}