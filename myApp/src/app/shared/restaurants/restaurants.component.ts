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

  hotAlgorithm = Math.floor(Math.random() * 11);

  currentPath;

  lat = [40.083332, 29.700001, 26.838619, 38.473625, 29.749907, 40.191891, 33.830517, 34.496212, 37.541290, 36.082157]
  lon = [113.300003, -98.116669, -80.129967, -122.889992, -95.358421, -85.401695, -116.545601, -93.057220, -77.434769, -94.171852]


  cardonClick(id){
    this.route.navigate(['details/' + id])
  }

  ngOnInit() {


    this.currentPath = window.location.pathname.split("/").pop();

    if(this.currentPath == 'tab1'){
      this.zomatoService.getCurrentCoords(( data )=> { 
      this.allPlaces = data;
      this.isLoaded = true;
    })
    }
    else{
      this.zomatoService.getPlaceByCoords(this.lat[this.hotAlgorithm],this.lon[this.hotAlgorithm]).subscribe(data => {
        console.log(data.restaurants)
       this.allPlaces = data.restaurants;
       this.isLoaded = true;
     })
    }
    
    


    
  }


      this.zomatoService.getCurrentCoords(( data )=> { 
        console.log("loading..")
        this.allPlaces = data;
        this.isLoaded = true;
      })
  }
}

// this is a really good comment