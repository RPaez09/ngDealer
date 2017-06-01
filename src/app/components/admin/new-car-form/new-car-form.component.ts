import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'new-car-form',
  templateUrl: './new-car-form.component.html',
  styleUrls: ['./new-car-form.component.css']
})
export class NewCarFormComponent implements OnInit {

  newCarForm: FormGroup;
  make: AbstractControl;
  model: AbstractControl;
  year: AbstractControl;

  constructor(fb: FormBuilder) {
    
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
  }

}
