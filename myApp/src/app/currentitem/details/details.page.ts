import {Component, OnInit} from '@angular/core';
import {ZomatoApiService} from '../../shared/services/zomato-api.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../../shared/firebase/user.service';
import {CommentsService} from '../../shared/firebase/comments.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    constructor(
        private zomatoService: ZomatoApiService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private commentsService: CommentsService,
        ) {
    }

    isLoaded = false;
    isFavorite = false;
    resData = {};
    comments = [];
    newComment: string;

    toggleHeart() {

        if (this.isFavorite === false) {
            this.isFavorite = true;
            //@ts-ignore
            this.userService.favoriteRestaurant(this.route.snapshot.paramMap.get('id'));
        } else if (this.isFavorite === true) {
            this.isFavorite = false;
        }
        console.log(this.isFavorite);
    }

    back() {
        this.router.navigate(['/tabs/tab1']);
    }

    ngOnInit() {
        this.zomatoService.getOneByID(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
            this.resData = data;
            this.isLoaded = true;
        });
    }

    getComments() {
        this.commentsService.getComments().subscribe(collection => {
            let docs = collection.docs;
            docs.forEach((doc) => {
                let comment = doc.data();
                if (comment['restaurantID'] === this.route.snapshot.paramMap.get('id')) {
                    this.comments.push(comment);
                }
            });
        });
    }

    submitNewComment() {
        this.commentsService.addComment(this.newComment, this.route.snapshot.paramMap.get('id'), this.userService.currentUser['id']);
    }

}
