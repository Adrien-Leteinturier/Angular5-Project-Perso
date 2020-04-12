
import {throwError as observableThrowError,  of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PresentationService {


  public url: string = '../assets/json/socials.json';
  public data: any;
  public observable: Observable<any>;
  
  
  constructor(public _http: HttpClient) { }

    getSocialsFromAPIwithCache(){
      if(this.data){
        return of(this.data);
      } else if(this.observable){
        return this.observable
      } else {
          this.observable = this._http
          .get(this.url).pipe(
          map(response => {
              this.observable = null;
              this.data = response;
              return this.data;
          }),
          catchError(error => {
              let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
              return observableThrowError(errorMessage);
          }),)
          return this.observable;
      }
  }

}
