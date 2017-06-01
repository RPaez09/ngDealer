import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CarService } from "app/services/car-service.service";

@Component({
  selector: 'new-car-form',
  templateUrl: './new-car-form.component.html',
  styleUrls: ['./new-car-form.component.css'],
  providers: [CarService]
})
export class NewCarFormComponent implements OnInit {

  newCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;

  constructor(fb: FormBuilder , private carService: CarService) {
    
    this.newCarForm = fb.group({
      'make': ['', Validators.required ],
      'model': ['', Validators.required ],
      'year': ['', Validators.required ]
    });

    this.make = this.newCarForm.controls['make'];
    this.model = this.newCarForm.controls['model'];
    this.year = this.newCarForm.controls['year'];

   }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form);

    let newCar = {
      make: form.make,
      model: form.model,
      year: parseInt(form.year)
    };

    this.carService.addCar(newCar)
      .subscribe(
        data => console.log(data),
        error => console.log(error) );
    
    this.newCarForm.reset();
  }

}
