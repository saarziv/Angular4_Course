import { TitlePipe } from './../title.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {
  userInput:string;
  constructor() { }

  ngOnInit() {
  }

}
