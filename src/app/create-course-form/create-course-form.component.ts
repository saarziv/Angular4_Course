import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.css']
})
export class CreateCourseFormComponent {
  categories = [
    {name: 'Development', value: 1},
    {name: 'Art', value: 2},
    {name: 'Managment', value: 3}
  ];
  submit(course) {
    console.log(course);
  }
}
