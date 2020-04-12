
import {throwError as observableThrowError, of as observableOf} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class ExpsService {

  public data: any;
  public observable: Observable<any>;
  public url: string = '../assets/json/exps.json';

  constructor(public _http: HttpClient) {

  }

  getExpFromAPIwithCache() {
    if (this.data) {
      return observableOf(this.data);
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
}
