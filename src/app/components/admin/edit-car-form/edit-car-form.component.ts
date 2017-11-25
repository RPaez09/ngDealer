import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Car }from 'app/models/Car.model';
import { CarService } from "app/services/car-service.service";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'edit-car-form',
  templateUrl: './edit-car-form.component.html',
  styleUrls: ['./edit-car-form.component.css'],
  providers: [CarService]
})
export class EditCarFormComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-12';

  id: string;
  car: Observable<Car>;

  editCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;

  constructor(
    fb: FormBuilder,
    private carServive: CarService,
    private store: Store<fromCars.State>,
    private route: ActivatedRoute,
    private router: Router )
  {
    //Form controls
    this.editCarForm = fb.group({
      'make' : ['', Validators.required ],
      'model' : ['', Validators.required ],
      'year' : ['', Validators.required ]
    });

    this.make = this.editCarForm.controls['make'];
    this.model = this.editCarForm.controls['model'];
    this.year = this.editCarForm.controls['year'];

    //Fetching car info
    this.car = store.select( fromCars.selectCar );

    route.params.subscribe(params => { this.id = params['id'] });

    this.store.dispatch( new CarActions.GetACar() );

    this.carServive.getACar( this.id )
      .subscribe(
        data => {
          this.store.dispatch( new CarActions.GetACarSuccess( data ) ) 
          this.make.setValue(data.make);
          this.model.setValue(data.model);
          this.year.setValue(data.year);
          console.log(data);
        },
        error => {
          console.log( error );
          this.router.navigate(['/404'])
        }
      )
  }

    ngOnInit() {
  }

  onSubmit(form: any) {
    
  }

}
