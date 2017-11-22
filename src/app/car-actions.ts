import { Action } from '@ngrx/store';
import { Car } from 'app/models/car.model';

export const GETALLCARS = "[Cars] Get all cars";
export const GETALLCARSSUCCESS = "[Cars] Get all cars success";

export const CREATECAR = "[Cars] Create a car";
export const CREATECARSUCCESS = "[Cars] Create a car success";

export const DELETECAR = "[Cars] Delete a car";
export const DELETECARSUCCESS = "[Cars] Delete a car success";

export const GETACAR = "[Cars] Get a car";
export const GETACARSUCCESS = "[Cars] Get a car success";

export const UPDATECAR = "[Cars] Update a car";
export const UPDATECARSUCCESSS = "[Cars] Update a car success";

export class GetACar implements Action {
    readonly type = GETACAR;

    constructor( ) { }
}

export class GetACarSuccess implements Action {
    readonly type = GETACARSUCCESS;

    constructor( public payload: Car ) { }
}

export class GetAllCars implements Action {
    readonly type = GETALLCARS;

    constructor( ) { }
}
export class GetAllCarsSuccess implements Action {
    readonly type = GETALLCARSSUCCESS;

    constructor( public payload: Array<Car> ) { }
}

export class CreateCar implements Action {
    readonly type = CREATECAR;
}
export class CreateCarSuccess implements Action {
    readonly type = CREATECARSUCCESS;

    constructor( public payload: Car ) { };
}

export class DeleteCar implements Action {
    readonly type = DELETECAR;

    constructor( ) { }
}
export class DeleteCarSuccess implements Action {
    readonly type = DELETECARSUCCESS;

    constructor( public payload: Car ) { }
}

export class UpdateCar implements Action {
    readonly type = UPDATECAR;

    constructor( ) { }
}
export class UpdateCarSuccess implements Action {
    readonly type = UPDATECARSUCCESSS;

    constructor( public payload: Car ) { }
}

export type All
    = GetACar
    | GetACarSuccess
    | GetAllCars
    | GetAllCarsSuccess
    | CreateCar
    | CreateCarSuccess
    | DeleteCar
    | DeleteCarSuccess
    | UpdateCar
    | UpdateCarSuccess;