import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';



@Component({
  selector: 'favourite',// tslint:disable-line
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite: boolean;// tslint:disable-line
  @Output('change') click = new EventEmitter();// tslint:disable-line
  constructor() { }
  onStarClick() {
    this.isFavourite = !this.isFavourite;
    const eventArg = {
      newValue: this.isFavourite,
      time: new Date().toLocaleDateString()
    };
    this.click.emit(eventArg);
  }



  ngOnInit() {
  }
}
export interface IsFavouriteEventArgs {
  newValue: boolean;
  time: string;
}
