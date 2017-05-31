import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/Car.model';
import { CarService } from "app/services/car-service.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CarService]
})
export class AdminComponent implements OnInit {

  carList: Array<Car>;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCars()
      .subscribe(
        data => this.carList = data,
        error => console.error(error),
        () => console.log('Requested')
      );
  }

}
