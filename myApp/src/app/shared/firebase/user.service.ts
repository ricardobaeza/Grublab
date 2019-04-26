import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from '../user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    usersRef: AngularFirestoreCollection<any>;

    constructor(private db: AngularFirestore) {
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

}
