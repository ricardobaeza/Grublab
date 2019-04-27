import { Component, OnInit } from '@angular/core';
import { ZomatoApiService } from '../services/zomato-api.service';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  constructor(private zomatoService: ZomatoApiService, private route: Router) { 
   
  }

  allPlaces = [];

  isLoaded = false;

  cardonClick(id){
    this.route.navigate(['details/' + id])
  }

  ngOnInit() {
    
    this.zomatoService.getCurrentCoords(( data )=> { 
      this.allPlaces = data;
      this.isLoaded = true;
    })
    
  }

}

// this is a really good comment