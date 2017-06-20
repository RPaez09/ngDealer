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
    ngOnInit() {
  }

}
