
import {throwError as observableThrowError,  of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class JobService {

  public data: any;
  public data2: any;
  public observable: Observable<any>;
  public observable2: Observable<any>;
  public url: string = '../assets/json/jobs.json';
  public url2: string = '../assets/json/prints.json';

  constructor(public _http: HttpClient) {

  }

  getJobsFromAPIwithCache() {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
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
        }),);
      return this.observable;
    }
  }

  getPrintsFromAPIwithCache() {
    if (this.data2) {
      return of(this.data2);
    } else if (this.observable2) {
      return this.observable2;
    } else {
      this.observable2 = this._http
        .get(this.url2).pipe(
        map(response => {
          this.observable2 = null;
          this.data2 = response;
          return this.data2;
        }),
        catchError(error => {
          let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
          return observableThrowError(errorMessage);
        }),);
      return this.observable2;
    }
  }
}
