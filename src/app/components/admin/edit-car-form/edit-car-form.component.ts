import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CarService } from "app/services/car-service.service";

import { Store } from '@ngrx/store';
import * as CarActions from 'app/car-actions';
import * as fromCars from 'app/reducers'; 

@Component({
  selector: 'edit-car-form',
  templateUrl: './edit-car-form.component.html',
  styleUrls: ['./edit-car-form.component.css'],
  providers: [CarService]
})
export class EditCarFormComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-12';

  editCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;

  constructor(
    fb: FormBuilder,
    private carServive: CarService,
    private store: Store<fromCars.State> )
  {

    this.editCarForm = fb.group({
      'make' : ['', Validators.required ],
      'model' : ['', Validators.required ],
      'year' : ['', Validators.required ]
    });

    this.make = this.editCarForm.controls['make'];
    this.model = this.editCarForm.controls['model'];
    this.year = this.editCarForm.controls['year'];

  }

    ngOnInit() {
  }

  onSubmit(form: any) {
    
  }

}
