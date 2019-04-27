import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../user';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    usersRef: AngularFirestoreCollection<any>;
    currentUser: Object = null;

    constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
        this.usersRef = this.db.collection('users');
    }

    initiate() {
        if (!this.currentUser) {
            // this.storage.get('user').then(user => {
            //     if (user) {
            //         this.currentUser = user;
            //         this.redirect('/tabs/tab1');
            //         // this.login(user.email, user.password).then(_ => this.loaded = true);
            //     } else {
            //         this.redirect('/login');
            //     }
            // });
        } else {
            this.redirect('/tabs/tab1');
        }
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
            this.currentUser = user;
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

    signOut() {
        this.afAuth.auth.signOut().then();
        this.redirect('/login')
    }

    redirect(path: string) {
        this.router.navigate([path]).then();
    }


}
