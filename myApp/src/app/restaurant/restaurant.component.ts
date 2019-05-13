import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss'],
})

@Injectable({
    providedIn: 'root'
})

export class RestaurantComponent implements OnInit {

    @Input() restaurant: any;
    @Input() favorite = false;

    constructor(public usersService: UserService) {
    }

    ngOnInit() {
    }

    toggleHeart() {
        this.favorite = !this.favorite;
        this.usersService.favoriteRestaurant(this.restaurant['id']);
    }

}
