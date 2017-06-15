import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'app/services/car-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CarService]
})
export class AppComponent {
  constructor( private router: Router,
               private carService: CarService,
               private store: Store<fromCars.State>  ){

      this.store.dispatch( new CarActions.GetAllCars() )

      this.carService.getAllCars()
        .subscribe(
          data => this.store.dispatch( new CarActions.GetAllCarsSuccess( data ) ),
          error => console.error(error)
      );
   };
}
