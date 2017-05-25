import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/Car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carList: Array<Car>;

  constructor() { 
    this.carList = [new Car( {"make": "Honda", "model": "Civic", "year": 2004, "price": 9000} ),
                    new Car( {"make": "Toyota", "model": "Camry", "year": 1997, "price": 14000} ) ]; }

  ngOnInit() {
  }

}
