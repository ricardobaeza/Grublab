import {AngularFirestoreCollection} from '@angular/fire/firestore';


export interface User {
    id: string;
    name: string;
    email: string;
    favorites?: AngularFirestoreCollection;
    comments?: AngularFirestoreCollection;
}
