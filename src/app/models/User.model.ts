export interface IUser {
    _id: string;
    username: string;
    isAdmin: boolean;
}

export class User implements IUser{
    _id: string;
    username: string;
    isAdmin: boolean;

    constructor( {
        "_id" : _id,
        "username" : username,
        "isAdmin" : isAdmin
    } ) 
    {
        this._id = _id,
        this.username = username,
        this.isAdmin = isAdmin
    };
}