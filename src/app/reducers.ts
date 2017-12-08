import * as fromCars from 'app/car-reducer';
import * as fromUsers from 'app/user-reducer';

export interface State {
    cars: fromCars.State,
    users: fromUsers.State
}

export const reducers = {
    cars: fromCars.reducer,
    users: fromUsers.reducer
};

export function selectCars( state: State ) {
    return state.cars.Cars;
}

export function selectCar( state: State ) {
    return state.cars.SelectedCar
}

export function selectCurrentUser( state: State ){
    return state.users.currentUser
}

export function selectDetailUser( state: State ){
    return state.users.detailUser
}

export function selectJWTtoken( state: State ){
    return state.users.token
}