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
  private apiUrl = 'https://developers.zomato.com/api/v2.1/search';
  private apikey = '8d275800a10f71ebce654bb6a7bfb88a';

  getPlaceByCoords(lattiude, longitude) {
    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=${lattiude}&lon=${longitude}`, {params: {apikey: this.apikey}}
      )
  }

  getOneByID(id) {
    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/restaurant`, {params: {apikey: this.apikey, res_id: id}}
    )
  }

  getCurrentCoords(callBack) {
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
