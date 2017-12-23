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
      comments: `CRUD operations , seperation of concerns , look at posts.service and Dataservice`,
      component: 'posts',
      path: '/posts'
    },
    {
      name: 'Http Assignment',
      comments: ``,
      component: 'my-followers',
      path: '/myFollowers'
    }
];
getSections(): any[] {
  return this.sections;
}


}
