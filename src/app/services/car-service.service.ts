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

  getACar(carId: string){
    return this._http.get('http://localhost:3000/Cars/' + carId)
      .map(res => res.json());
  }

  getAllCars(){
    return this._http.get('http://localhost:3000/Cars')
      .map(res => res.json());
  }

  addCar(car : Object){
    return this._http.post('http://localhost:3000/Cars', car)
      .map(res => res.json());
  }

  deleteCar(id: string){
    return this._http.delete('http://localhost:3000/cars/'+ id)
      .map(res => res.json());
  }

}
