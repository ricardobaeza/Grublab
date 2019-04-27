import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    commentsRef: AngularFirestoreCollection<any>;

    constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
        this.commentsRef = this.db.collection('comments');
    }

    addComment(text: string, userID: string, restaurantID: string) {
        let now = new Date();
        let date = (now.getMonth() + 1) + ' / ' + now.getDate() + ' / ' + now.getFullYear();
        let time = now.getHours() + ':' + now.getMinutes();
        return this.commentsRef.add({ 'text': text, 'userID': userID, 'restaurantID': restaurantID, 'date': date, 'time': time});
    }

    getComments() {
        return this.commentsRef.get();
    }
}
