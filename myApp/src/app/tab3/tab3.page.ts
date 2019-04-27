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

    }

    getFavorites() {
        this.loaded = false;
        this.restaurants = [];
        this.userService.getFavorites().subscribe(doc => {
            let user = doc.data();
            let favorites = user.favorites;
            if (!favorites || (favorites && favorites.length < 1)) {
                this.loaded = true;
            }
            if (favorites && favorites !== this.restaurants) {
                favorites.forEach((fav) => {
                    this.loaded = false;
                    this.httpService.getRestuarant(fav).subscribe(data => {
                        this.restaurants.push(data);
                        this.loaded = true;
                    });
                });
            }
        });
    }

    ionViewDidEnter() {
        this.getFavorites();
    }

}
