import { Component, OnInit, Input } from '@angular/core';
import { Car } from "app/models/Car.model";

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
    
  }

}
