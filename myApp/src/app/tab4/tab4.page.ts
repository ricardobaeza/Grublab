import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';
import {CommentsService} from '../shared/firebase/comments.service';
import {HttpServiceService} from '../shared/services/http-service.service';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

    comments: Object[] = [];
    loaded = false;

    constructor(private userService: UserService, private commentsService: CommentsService, private httpService: HttpServiceService) {
    }

    ngOnInit() {
        this.commentsService.getComments().subscribe(collection => {
            let docs = collection.docs;
            docs.forEach((doc) => {
                let comment = doc.data();
                if (comment['userID'] === this.userService.currentUser['id']) {
                    this.comments.push(comment);
                }

                this.httpService.getRestuarant(comment['restaurantID']).subscribe(data => {
                    comment['restaurantName'] = data.name;
                });
            });
            this.loaded = true;
        });
    }

}
