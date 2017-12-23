import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';
import { Response } from '@angular/http';


@Injectable()
export class DataService {
  constructor(private http: HttpClient,private url: string) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url)
    .catch(this.handlerError);
  }
  create(resource: any) {
    return this.http.post<any>(this.url, resource)
    .catch(this.handlerError);
  }
  update(resource: any): Observable<any> {
    /*return this.http.patch<any>(this.url + '/' + post.id, { isRead: true })
    });*/
    return this.http.put<any>(this.url + '/' + resource.id, resource)
    .catch(this.handlerError);
 }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id)
    .catch(this.handlerError);
  }

  private handlerError (error: HttpErrorResponse){
    if(error.status === 400)
      return Observable.throw(new BadInputError(error));
    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return  Observable.throw(new AppError(error));
  }

}
