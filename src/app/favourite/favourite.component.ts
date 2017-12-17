import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';



@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite: boolean
  @Output() change = new EventEmitter();
  constructor() { }
  onStarClick() {
    this.isFavourite = !this.isFavourite;
    const eventArg = {
      newValue: this.isFavourite,
      time: new Date().toLocaleDateString()
    }
    this.change.emit(eventArg);
  }



  ngOnInit() {
  }
}
export interface IsFavouriteEventArgs{
  newValue: boolean;
  time: Date;
}
