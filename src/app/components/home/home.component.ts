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

  constructor(private carService: CarService) { 


    this.carList = [new Car( {"make": "Honda", "model": "Civic", "year": 2004, "price": 9000} ),
                    new Car( {"make": "Toyota", "model": "Camry", "year": 1997, "price": 14000} ) ]; }

  ngOnInit() {
    this.carService.getAllCars()
      .subscribe(
        data => this.carList = data,
        error => console.error(error),
        () => console.log('Requested')
      );
  }

}
