
import {tap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuotesService {
  
  public data1:any;
  public observable: Observable<any>;
  public random:any;
  public urlGetQuotes:string = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_=';
  
  constructor(public _http: HttpClient){}
  
  
  
  getQuotes(){
    this.random = Math.floor(Math.random() * 100);
    return this._http.get(this.urlGetQuotes + this.random).pipe(
    map(data1 => data1),
    tap(x => console.log(x)),);
  }
  
}
