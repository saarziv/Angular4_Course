import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FollowersService extends DataService {

  constructor(http: HttpClient) { 
    super(http,'https://api.github.com/users/mosh-hamedani/followers')
  }

}
