import { Component, OnInit } from '@angular/core';
import { ZomatoApiService } from '../services/zomato-api.service';
import { Geolocation } from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  constructor(private zomatoService: ZomatoApiService) { }

  allPlaces = [];

  isLoaded = false;

  ngOnInit() {

      this.zomatoService.getCurrentCoords(( data )=> { 
        console.log("loading..")
        this.allPlaces = data;
        this.isLoaded = true;
      })
  }
}

// this is a really good comment