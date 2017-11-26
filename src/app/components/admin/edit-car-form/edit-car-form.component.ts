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

  car: Observable<Car>;
  
  id: string;
  editCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;
  price: AbstractControl;
  mileage: AbstractControl;
  color: AbstractControl;
  trim: AbstractControl;
  description:AbstractControl;

  constructor(
    fb: FormBuilder,
    private carService: CarService,
    private store: Store<fromCars.State>,
    private route: ActivatedRoute,
    private router: Router )
  {
    //Form controls
    this.editCarForm = fb.group({
      'make' : ['', Validators.required ],
      'model' : ['', Validators.required ],
      'year' : ['', Validators.required ],
      'price' : ['', Validators.required ],
      'mileage' : ['', Validators.required ],
      'color' : ['', Validators.required ],
      'trim' : ['', Validators.required ],
      'description' : ['']
    });

    this.make = this.editCarForm.controls['make'];
    this.model = this.editCarForm.controls['model'];
    this.year = this.editCarForm.controls['year'];
    this.price = this.editCarForm.controls['price'];
    this.mileage = this.editCarForm.controls['mileage'];
    this.color = this.editCarForm.controls['color'];
    this.trim = this.editCarForm.controls['trim'];
    this.description = this.editCarForm.controls['description'];

    //Fetching car info 
    this.car = store.select( fromCars.selectCar );

    route.params.subscribe(params => { this.id = params['id'] });

    this.store.dispatch( new CarActions.GetACar() );

    this.carService.getACar( this.id )
      .subscribe(
        data => {
          this.store.dispatch( new CarActions.GetACarSuccess( data ) ) 
          this.make.setValue(data.make);
          this.model.setValue(data.model);
          this.year.setValue(data.year);
          this.price.setValue(data.price);
          this.mileage.setValue(data.mileage);
          this.color.setValue(data.color);
          this.trim.setValue(data.trim);
          this.description.setValue(data.description);
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
    if( this.editCarForm.valid ){
      let editedCar = {
        _id: this.id,
        make: form.make,
        model: form.model,
        year: form.year,
        price: form.price,
        mileage: form.mileage,
        color: form.color,
        trim: form.trim,
        description: form.description,
        hidden: false
      };

      this.store.dispatch( new CarActions.UpdateCar() );

      this.carService.updateCar(editedCar)
        .subscribe(
          data => { 
            this.store.dispatch( new CarActions.UpdateCarSuccess(data) );
            alert("Car updated succesfully!");
            this.router.navigate(["/admin"]);
          },
          error => {
            console.log(error);
            alert("Error! Check your console");
          }
        );
    }
    else {
      alert("Invalid form: Please check your form values");
    }
  }

}
