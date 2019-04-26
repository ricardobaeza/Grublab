import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { last } from '@angular/router/src/utils/collection';
@Injectable({
  providedIn: 'root'
})
export class ZomatoApiService {

  constructor( private http: HttpClient,
               private geolocation: Geolocation) { }
  common = 'search';
  private apiUrl = 'https://developers.zomato.com/api/v2.1/search'

  getPlaceByCoords(lattiude, longitude) {
    console.log("this is the lat: " + lattiude);
    console.log("this is the long: " + longitude)
    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=${lattiude}&lon=${longitude}`, {params: {apikey: '3059aec27009a71444cbfa438274aa73'}}
      )
  }

  getCurrentCoords(callBack) {
    console.log('loading ...')
    this.geolocation.getCurrentPosition().then((resp)=> {
      
      this.getPlaceByCoords(resp.coords.latitude, resp.coords.longitude).subscribe(data => {
          callBack(data.restaurants);
        })
    }).catch(err => { console.log(err)});

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      console.log(data);
    })
  }

  

}
