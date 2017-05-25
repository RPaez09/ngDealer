import { Component, OnInit, Input } from '@angular/core';
import { Car } from "app/models/Car.model";

@Component({
  selector: 'app-car-box',
  templateUrl: './car-box.component.html',
  styleUrls: ['./car-box.component.css']
})
export class CarBoxComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
