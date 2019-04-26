import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../user';
import {AngularFireAuth} from '@angular/fire/auth';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    usersRef: AngularFirestoreCollection<any>;

    constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private storage: Storage, private router: Router) {
        this.usersRef = this.db.collection('users');
    }

    getAllUsers() {
        return this.usersRef.valueChanges();
    }

    addUser(user: User) {
        return this.usersRef.doc(user.id).set(user);
    }

    getUser(userID: string) {
        return this.usersRef.doc(userID).valueChanges();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(data => this.loginSuccess(data, password))
            .catch(error => this.loginFail(error));
    }

    loginSuccess(data, password: string) {
        this.getUser(data.user.uid).subscribe(user => {
            user['password'] = password;
            alert('Welcome ' + user['name']);
            this.storage.set('user', user).then(_ => console.log('user saved...'));
            this.router.navigate(['/tabs/tab1']).then();
        });
    }

    loginFail(error) {
        if (error.code === 'auth/user-not-found') {
            alert('User not found, sign up');
        } else {
            alert(error.message);
        }
    }


}
