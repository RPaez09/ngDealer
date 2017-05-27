import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/Car.model';
import { CarService } from "app/services/car-service.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarService]
})
export class HomeComponent implements OnInit {

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
