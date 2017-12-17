import { IsFavouriteEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  tweetPost = {
      post: 'post text content',
      isLiked: false,
      likesCount: 10
  };
  onChange(eventArgs: IsFavouriteEventArgs) {
    console.log('changed', eventArgs);
  }

}
