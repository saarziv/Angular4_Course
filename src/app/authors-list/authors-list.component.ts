import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authorsList: string[];
  isPulled = true;
  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
    this.authorsList = this.authorService.getAuthors();
  }

}
