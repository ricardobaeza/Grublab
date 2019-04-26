import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/firebase/user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../../shared/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

    name: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor(private userService: UserService, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    register() {
        if (this.password !== this.confirmPassword) {
            alert('Passwords need to match!');
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
            .then(_ => alert('Successfully added user'))
            .catch(error => alert('Error adding user: ' + error));
    }

    registerFail(error) {
        if (error.code === "auth/email-already-in-use") {
            alert("Email in use");
        }
    }

}
