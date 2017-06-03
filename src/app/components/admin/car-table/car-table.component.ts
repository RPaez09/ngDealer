import { Component, OnInit, HostBinding } from '@angular/core';
import { Car } from "app/models/Car.model";
import { CarService } from "app/services/car-service.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  providers: [CarService]
})
export class CarTableComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-12';

  carList: Observable<Array<Car>>;

  deleteCar(id:string):void {
    if( confirm("Are you sure you want to delete this car?") ) {

      this.store.dispatch( new CarActions.DeleteCar() );

      this.carService.deleteCar(id)
        .subscribe(
          data => this.store.dispatch( new CarActions.DeleteCarSuccess( data ) ),
          error => console.log(error)
        );
    }
  }

  constructor(
    private carService: CarService,
    private store:Store<fromCars.State> ) { 
      this.carList = store.select( fromCars.selectCars );
     }

  ngOnInit() {

    this.store.dispatch( new CarActions.GetAllCars() );

    this.carService.getAllCars()
      .subscribe(
        data => this.store.dispatch( new CarActions.GetAllCarsSuccess( data ) ),
        error => console.error(error)
      );
  }

}
