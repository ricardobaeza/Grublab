import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login = true;

    constructor(private userService: UserService, private afAuth: AngularFireAuth,  private storage: Storage) {
    }

    ngOnInit() {
        this.userService.getAllUsers().subscribe(data => console.log('users', data));
    }

}
