import { Action } from '@ngrx/store';
import { Car } from 'app/models/car.model';

export const GETALLCARS = "[Cars] Get all cars";
export const GETALLCARSSUCCESS = "[Cars] Get all cars success";

export const DELETECAR = "[Cars] Delete a car";
export const DELETECARSUCCESS = "[Cars] Delete a car success";

export class GetAllCars implements Action {
    readonly type = GETALLCARS;

    constructor( ) { }
}
export class GetAllCarsSuccess implements Action {
    readonly type = GETALLCARSSUCCESS;

    constructor( public payload: Array<Car> ) { }
}


export class DeleteCar implements Action {
    readonly type = DELETECAR;

    constructor( ) { }
}
export class DeleteCarSuccess implements Action {
    readonly type = DELETECARSUCCESS;

    constructor( public payload: Car ) { }
}

export type All
    = GetAllCars
    | GetAllCarsSuccess
    | DeleteCar
    | DeleteCarSuccess;