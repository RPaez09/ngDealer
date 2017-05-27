import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpModule,
         Http,
         Response,
         RequestOptions,
         Headers } from '@angular/http';

@Injectable()
export class CarService {

  constructor( private _http: Http ) { }

  getAllCars(){
    return this._http.get('http://localhost:3000/Cars')
      .map(res => res.json());
  }
}
