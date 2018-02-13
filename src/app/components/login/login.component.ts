import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'app/models/User.model';
import { UserService } from 'app/services/user-service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as UserActions from 'app/user-actions';
import * as fromUsers from 'app/reducers';
import 'rxjs/add/operator/map';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'col-md-12';

    user: Observable<User>;

    id: string;
    loginForm: FormGroup;
    username: AbstractControl;
    password: AbstractControl;

    constructor(
        fb: FormBuilder,
        private userService: UserService,
        private store: Store<fromUsers.State>,
        private route: ActivatedRoute,
        private router: Router )
    {
        this.loginForm = fb.group({
            'username' : ['', Validators.required],
            'password': ['' , Validators.required]
        });

        this.username = this.loginForm.controls['username'];
        this.password = this.loginForm.controls['password'];
    }

    ngOnInit() {}
}