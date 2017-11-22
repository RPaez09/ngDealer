import { Car } from 'app/models/car.model';
import * as CarActions from "app/car-actions";

export interface State {
    Cars : Array<Car>,
    SelectedCar?: Car
}

const initialState: State = {
    Cars: []
};

export function reducer( state = initialState, action: CarActions.All ): State { 
    switch (action.type) {

        case CarActions.GETACAR: {
            return state;
        }

        case CarActions.GETACARSUCCESS: {
            return { ...state , SelectedCar: action.payload };
        }

        case CarActions.GETALLCARS: {
            return  state;
        }

        case CarActions.GETALLCARSSUCCESS: {
            return  { ...state , Cars: action.payload };
        }

        case CarActions.CREATECAR: {
            return state;
        }

        case CarActions.CREATECARSUCCESS: {
            return { ...state , Cars: ( state.Cars.concat(action.payload) ) };
        }

        case CarActions.DELETECAR: {
            return state;
        }

        case CarActions.DELETECARSUCCESS: {
            return { ...state , Cars: ( state.Cars.filter( car => car._id !== action.payload._id ) )  };
        }

        case CarActions.UPDATECAR: {
            return state;
        }

        case CarActions.UPDATECARSUCCESSS: {

            var index : number = state.Cars.findIndex(
                function(car){
                    if(car._id == action.payload._id){
                        return true
                    }
                }
            );

            return { ...state , Cars: ( state.Cars.splice(index , 1 , action.payload) ) };
        }

        default: { return state; }
    }
 }