import * as fromCars from 'app/car-reducer';

export interface State {
    cars: fromCars.State;
}

export const reducers = {
    cars: fromCars.reducer
};

export function selectCars( state: State ) {
    return state.cars.Cars;
}