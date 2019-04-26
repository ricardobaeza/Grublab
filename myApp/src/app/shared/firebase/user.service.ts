import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersRef: AngularFirestoreCollection<any>;

  constructor( private db: AngularFirestore ) {
    this.usersRef = this.db.collection('users');
  }

  getAllUsers() {
    this.db.collection('users');
    return this.usersRef.valueChanges();
  }

}
