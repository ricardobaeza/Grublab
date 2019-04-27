import {Component} from '@angular/core';
import {UserService} from '../shared/firebase/user.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private  userService: UserService) {
        if (!this.userService.currentUser) {
            this.userService.initiate();
        } else {
            this.userService.favoriteRestaurant('42');
        }
    }
}
