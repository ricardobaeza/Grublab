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
    errorMessage: string;

    constructor(private userService: UserService, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    signIn() {
        this.login(this.email, this.password);
    }

    login(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(data => this.loginSuccess(data, password))
            .catch(error => this.loginFail(error));
    }

    loginSuccess(data, password: string) {
        this.userService.getUser(data.user.uid).subscribe(user => {
            user['password'] = password;
            this.userService.setUserInStorage(user);
            // this.storage.set('user', user).then(_ => console.log('user saved...'));
            this.userService.currentUser = user;
            this.userService.redirect('/tabs/tab1');
        });
    }

    loginFail(error) {
        if (error.code === 'auth/user-not-found') {
            this.errorMessage = 'There is not an account with that email'
        } else if (error.code === 'auth/wrong-password'){
            this.errorMessage = 'Incorrect password'
        } else {
            this.errorMessage = error.message;
        }
    }

}
