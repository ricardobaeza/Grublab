import {Component} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';
import {CommentsService} from '../shared/firebase/comments.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private  userService: UserService, private commentsService: CommentsService) {
        if (!this.userService.currentUser) {
            this.userService.initiate();
        }
        // commentsService.addComment(
        //     "I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda",
        //     this.userService.currentUser['id'],
        //     "16774318").then(_ => console.log('Comment added...'));
    }
}
