import { User } from 'app/models/User.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
    HttpModule,
    Http,
    Response,
    RequestOptions,
    Headers } from '@angular/http';

@Injectable()
export class UserService {

    constructor( private _http: Http ){ }

    CreateUser( userCredentials: { username: string, password: string } ){
        return this._http.post('http://localhost:3000/signup/' , userCredentials )
            .map( res => res.json() );
    }

    SignIn( userCredentials: { username: string , password: string } ){
        return this._http.post('http://localhost:3000/signin/' , userCredentials)
            .map( res => res.json() );
    }

}