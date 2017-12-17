import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IsFavouriteEventArgs } from '../favourite/favourite.component';

@Component({
  selector: 'like',//tslint:disable-line
  templateUrl: './like.component.html',
  styles: [
  `
  .like-font-size {
    font-size: 400%;
  }
  .glyphicon {
    color: #ccc;
    font-size: 400%;
    cursor:pointer;
  }
  .highlighted {
    color: deeppink;
  }
  `
]
})
export class LikeComponent {
  @Input('is-liked') isLiked: boolean;//tslint:disable-line
  @Input('likes-count') likesCount: number;//tslint:disable-line
  @Output('like-click') clicked = new EventEmitter();//tslint:disable-line
  likeClick() {
    this.isLiked = !this.isLiked;
    (this.isLiked) ? this.likesCount++ : this.likesCount--;
    this.clicked.emit();
  }

}

