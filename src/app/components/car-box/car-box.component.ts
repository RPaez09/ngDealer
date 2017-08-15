import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Car } from "app/models/Car.model";

@Component({
  selector: 'app-car-box',
  templateUrl: './car-box.component.html',
  styleUrls: ['./car-box.component.css']
})
export class CarBoxComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-12';
  @Input() car: Car;
  constructor() { }

  ngOnInit() {

  }

}
