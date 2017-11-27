import { Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CarService } from "app/services/car-service.service";

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers'; 

@Component({
  selector: 'new-car-form',
  templateUrl: './new-car-form.component.html',
  styleUrls: ['./new-car-form.component.css'],
  providers: [CarService]
})
export class NewCarFormComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-12';

  newCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;
  price: AbstractControl;
  mileage: AbstractControl;
  color: AbstractControl;
  trim: AbstractControl;

  constructor(
    fb: FormBuilder, 
    private carService: CarService,
    private store: Store<fromCars.State>,
    private router: Router )
    {

    this.newCarForm = fb.group({
      'make': ['', Validators.required],
      'model': ['', Validators.required],
      'year': ['', Validators.required],
      'price' : ['', Validators.required],
      'mileage' : ['', Validators.required],
      'color' : ['', Validators.required],
      'trim' : ['']
    });

    this.make = this.newCarForm.controls['make'];
    this.model = this.newCarForm.controls['model'];
    this.year = this.newCarForm.controls['year'];
    this.price = this.newCarForm.controls['price'];
    this.mileage = this.newCarForm.controls['mileage'];
    this.color = this.newCarForm.controls['color'];
    this.trim = this.newCarForm.controls['trim'];

   }

  ngOnInit() {
  }

  onSubmit(form: any) {
    if(this.newCarForm.valid){
      let newCar = {
        make: form.make,
        model: form.model,
        year: parseInt(form.year),
        price: parseInt(form.price),
        mileage: parseInt(form.mileage),
        color: form.color,
        trim: form.trim
      };

      this.store.dispatch( new CarActions.CreateCar() );

      this.carService.addCar(newCar)
        .subscribe(
          data => {
            this.store.dispatch( new CarActions.CreateCarSuccess(data) );
            alert("Car has been succesfully added");
            this.router.navigate(['/admin']);
          },
          error => console.log(error) );
      
      this.newCarForm.reset();
    }
    else {
      alert("Please check your form");
    }
  }

}
