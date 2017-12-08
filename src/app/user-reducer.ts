import { User } from 'app/models/User.model';
import * as UserActions from 'app/user-actions';

export interface State {
    currentUser : User,
    detailUser : User ,
    token : String
}

const initialState: State = {
    currentUser: null,
    detailUser: null,
    token : null
}

export function reducer( state = initialState, action: UserActions.All ): State {
    switch ( action.type ) {

        case UserActions.GETAUSER: {
            return state;
        }

        case UserActions.GETAUSERSUCCESS: {
            return { ...state , detailUser: action.payload };
        }

        case UserActions.CREATEAEUSER: {
            return state;
        }

        case UserActions.CREATEAUSERSUCCESS: {
            return state;
        }

        case UserActions.SIGNIN: {
            return state;
        }

        case UserActions.SIGNINSUCCESS: {
            return { ...state , currentUser: action.payload.user , token: action.payload.token };
        }

        case UserActions.SIGNOUT: {
            return state;
        }

        case UserActions.SIGNOUTSUCCESS: {
            return { ...state , currentUser: null , token: null }
        }

        default: { return state; }
    }
}