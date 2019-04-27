import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';
import {CommentsService} from '../shared/firebase/comments.service';
import {HttpServiceService} from '../shared/services/http-service.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    restaurants = [];
    loaded = false;

    constructor(private userService: UserService, private commentsService: CommentsService, private httpService: HttpServiceService) {

    }

    ngOnInit(): void {
        //@ts-ignore
        this.userService.getFavorites().subscribe(doc => {
            if (typeof doc.data === 'function') {
                let user = doc.data();
                let favorites = user.favorites;
                favorites.forEach((fav) => {
                    this.httpService.getRestuarant(fav).subscribe(data => {
                        this.restaurants.push(data);
                    });
                });
            }
            this.loaded = true;
        });
    }

}
