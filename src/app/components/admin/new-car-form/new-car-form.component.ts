import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-car-form',
  templateUrl: './new-car-form.component.html',
  styleUrls: ['./new-car-form.component.css']
})
export class NewCarFormComponent implements OnInit {

  newCarForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.newCarForm = fb.group({
      'make': ['ABC123'],
      'model': ['ABC123'],
      'year': ['ABC123']
    });
   }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
