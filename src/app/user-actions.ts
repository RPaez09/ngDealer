import { Action } from '@ngrx/store';
import { User } from 'app/models/user.model';

export const GETAUSER = "[Users] Get a user";
export const GETAUSERSUCCESS = "[Users] Get a user success";

export const CREATEAEUSER = "[Users] Create a user";
export const CREATEAUSERSUCCESS = "[Users] Create a user success";

export const SIGNIN = "[Users] Sign in a user";
export const SIGNINSUCCESS = "[Users] Sign in a user success";

export const SIGNOUT = "[Users] Sign out a user";
export const SIGNOUTSUCCESS = "[Users] Sign out a user";

export class GetAUser implements Action {
    readonly type = GETAUSER;

    constructor( ){ }
}

export class GetAUserSuccess implements Action {
    readonly type = GETAUSERSUCCESS;

    constructor( public payload: User ){ }
}

export class CreateAUser implements Action {
    readonly type = CREATEAEUSER;

    constructor( ){ }
}

export class CreateAUserSuccess implements Action {
    readonly type = CREATEAUSERSUCCESS;

    constructor( public payload: User ){ }
}

export class SignIn implements Action {
    readonly type = SIGNIN;

    constructor( ){ }
}

export class SignInSuccess implements Action {
    readonly type = SIGNINSUCCESS;

    constructor( public payload: { user : User , token : string } ){ }
}

export class SignOut implements Action {
    readonly type = SIGNOUT;

    constructor( ){ }
}

export class SignOutSuccess implements Action {
    readonly type = SIGNOUTSUCCESS;

    constructor( public payload: User ){ }
}

export type All
    = GetAUser
    | GetAUserSuccess
    | CreateAUser
    | CreateAUserSuccess
    | SignIn
    | SignInSuccess
    | SignOut
    | SignOutSuccess;