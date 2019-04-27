import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {UserService} from '../shared/firebase/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
