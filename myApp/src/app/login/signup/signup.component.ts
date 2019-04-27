import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {UserService} from '../../shared/firebase/user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../../shared/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

    @Output() registered = new EventEmitter<any>();

    name: string;
    email: string;
    password: string;
    confirmPassword: string;

    errorMessage: string;

    constructor(private userService: UserService, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    register() {
        if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match';
            return;
        }
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(data => this.registerSuccess(data))
            .catch(error => this.registerFail(error));
    }

    registerSuccess(data) {
        let newUser: User = {
            id: data.user.uid,
            name: this.name,
            email: this.email,
        };
        this.userService.addUser(newUser)
            .then(_ => this.registered.emit(true))
            .catch(error => alert('Error adding user: ' + error));
    }

    registerFail(error) {
        if (error.code === "auth/email-already-in-use") {
            this.errorMessage = "There is already an account with that email";
        } else {
            this.errorMessage = error.message;
        }
    }

}
