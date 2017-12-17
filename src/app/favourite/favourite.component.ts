import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite=false;
  constructor() { }
  onStarClick(){
    this.isFavourite = !this.isFavourite;
  }

  

  ngOnInit() {
  }
}

