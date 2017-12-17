import { Component } from '@angular/core';
import {IsFavouriteEventArgs} from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  onChange(eventArgs: IsFavouriteEventArgs){
    console.log('changed', eventArgs);
  }
}
