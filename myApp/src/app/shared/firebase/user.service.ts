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
            let user = this.getUserFromStorage();
            if (user) {
                this.currentUser = user;
                this.redirect('/tabs/tab1');
            } else {
                this.redirect('/login');
            }
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

    signOut() {
        localStorage.clear();
        this.afAuth.auth.signOut().then();
        this.redirect('/login');
        window.location.reload();
    }

    redirect(path: string) {
        this.router.navigate([path]).then();
    }

    getUserFromStorage(): Object {
        return JSON.parse(localStorage.getItem('user'));
    }

    setUserInStorage(user: Object) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    favoriteRestaurant(restaurantID: string) {
        let user;
        this.usersRef.doc(this.currentUser['id']).get().subscribe(doc => {
            user = doc.data();
            let favorites = user.favorites;
            favorites.push(restaurantID);
            this.usersRef.doc(this.currentUser['id']).update({'favorites': favorites})
                .then(_ => console.log('Success!'))
                .catch(error => console.log('Error updating favorites: ' , error));
        });
    }

}
