import { Car } from 'app/models/car.model';
import * as CarActions from "app/car-actions";

export interface State {
    Cars : Array<Car>
}

const initialState: State = {
    Cars: []
};

export function reducer( state = initialState, action: CarActions.All ): State { 
    switch (action.type) {

        case CarActions.GETALLCARS: {
            return  state;
        }

        case CarActions.GETALLCARSSUCCESS: {
            return  { ...state , Cars: action.payload };
        }

        default: { return state; }
    }
 }