import { Component, OnInit } from '@angular/core';
import { ZomatoApiService } from '../../shared/services/zomato-api.service';
import { ActivatedRoute } from "@angular/router";
import {UserService} from '../../shared/firebase/user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private zomatoService: ZomatoApiService, private route: ActivatedRoute, private userService: UserService) { }

  isLoaded = false;
  isFavorite = false;
  resData = {};

  toggleHeart(){
    
    if(this.isFavorite === false){
      this.isFavorite = true;
      this.userService.favoriteRestaurant(this.route.snapshot.paramMap.get("id"));
    }
    else if(this.isFavorite === true){
      this.isFavorite = false;
    }
    console.log(this.isFavorite)
  }

  ngOnInit() {
    this.zomatoService.getOneByID(this.route.snapshot.paramMap.get("id")).subscribe(( data ) => { 
      this.resData = data;
      this.isLoaded = true;
      console.log(this.resData)
    })
  }

}
