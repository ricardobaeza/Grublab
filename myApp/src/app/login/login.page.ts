import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/firebase/user.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = true;

  constructor(private userService: UserService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => console.log('users', data));
  }

}
