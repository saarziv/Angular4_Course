import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
contactMethods = [
  {id: 1, name: 'Email'},
  {id: 2, name: 'Phone'},
  {id: 3, name: 'Fax'},
];
log(obj) {console.log(obj); }
submit(obj) { console.log(obj); }

}
