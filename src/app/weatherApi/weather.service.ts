
import {tap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
 
 



import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class WeatherService {

    public data1:any;
    public data2:any;
    public dataIcon:any;
    public observable: Observable<any>;
    constructor(public _http: HttpClient){}

    
    getWeatherCurrent(cityName): any{
        return this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid="+environment.weatherApi.apiKeys).pipe( // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
                map(data1 => data1),
                tap(x => console.log(x)),) 
    }


    getYourPosition(lat,long):any{
        return this._http.get("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long+"&units=metric&appid="+environment.weatherApi.apiKeys).pipe(
                    map(data2 => data2),
                    tap(x => console.log(x)),)
    }
}
