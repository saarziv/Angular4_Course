import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
courses: string[] = ['english', 'angular', 'asp.net core'];
viewMode = 'courses';
containsCourses(): boolean {
    return this.courses.length > 0 ;
}

}
