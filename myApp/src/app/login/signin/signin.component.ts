import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  signIn() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(data => console.log(data))
        .catch(error => this.failSignIn(error));
  }

  failSignIn(error) {
    console.log(error);
    if (error.code === 'auth/user-not-found') {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
      alert('user created');
    } else {
      alert(error.message);
    }
  }

}
