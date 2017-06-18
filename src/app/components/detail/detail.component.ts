import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'app/models/Car.model';
import { CarService } from 'app/services/car-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CarService]
})
export class DetailComponent implements OnInit {
    id: string;
    car: Observable<Car>;

  constructor(
    private carService: CarService,
    private store: Store<fromCars.State>,
    private route: ActivatedRoute ) 
    { 
        this.car = store.select( fromCars.selectCar );
        route.params.subscribe(params => { this.id = params['id'] });

        this.store.dispatch( new CarActions.GetACar() )

         this.carService.getACar( this.id )
            .subscribe(
                data => this.store.dispatch( new CarActions.GetACarSuccess( data ) ) ,
                error => console.log(error)
            );
    }

  ngOnInit() {
  }

}
