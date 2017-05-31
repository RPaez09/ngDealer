import { Component, OnInit, Input } from '@angular/core';
import { Car } from "app/models/Car.model";

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  @Input() carList: Array<Car>;

  constructor() { }

  ngOnInit() {
  }

}
