import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/firebase/user.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

    email: string;
    password: string;

    constructor(private userService: UserService, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    signIn() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(data => this.loginSuccess(data))
            .catch(error => this.loginFail(error));
    }

    loginSuccess(data) {
        this.userService.getUser(data.user.uid).subscribe(user => alert('Welcome ' + user['name']));
    }

    loginFail(error) {
        if (error.code === 'auth/user-not-found') {
            alert('User not found, sign up');
        } else {
            alert(error.message);
        }
    }

}
