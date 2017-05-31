import { Component, OnInit, Input } from '@angular/core';
import { Car } from "app/models/Car.model";
import { CarService } from "app/services/car-service.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  providers: [CarService]
})
export class CarTableComponent implements OnInit {
  
  carList: Array<Car>;

  deleteCar(id:string):void {
    if( confirm("Are you sure you want to delete this car?") ) {
      this.carService.deleteCar(id)
        .subscribe(
          data => { 
            let index = this.carList.map( e => e._id ).indexOf( id );
            this.carList.splice(index,1);
           },
          error => console.log(error)
        );
    }
  }

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCars()
      .subscribe(
        data => this.carList = data,
        error => console.error(error)
      );
  }

}
