import { Action } from '@ngrx/store';
import { Car } from 'app/models/car.model';

export const GETALLCARS = "[Cars] Get all cars";
export const GETALLCARSSUCCESS = "[Cars] Get all cars success";

export class GetAllCars implements Action {
    readonly type = GETALLCARS;

    constructor( ) { }
}

export class GetAllCarsSuccess implements Action {
    readonly type = GETALLCARSSUCCESS;

    constructor( public payload: Array<Car> ) { }
}

export type All
    = GetAllCars
    | GetAllCarsSuccess;