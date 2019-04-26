import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/firebase/user.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

    email: string;
    password: string;
    errorMessage: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    signIn() {
        this.userService.login(this.email, this.password);
    }

}
