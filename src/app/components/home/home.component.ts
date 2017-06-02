import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/Car.model';
import { CarService } from 'app/services/car-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarService]
})
export class HomeComponent implements OnInit {

  carList: Observable<Array<Car>>;

  constructor(
    private carService: CarService,
    private store: Store<fromCars.State> ) 
    { 
      this.carList = store.select( state => state.cars.Cars );
     }

  ngOnInit() {
    
    this.store.dispatch( new CarActions.GetAllCars() )

    this.carService.getAllCars()
      .subscribe(
        data => this.store.dispatch( new CarActions.GetAllCarsSuccess( data ) ),
        error => console.error(error)
      );
  }

}
