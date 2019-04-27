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
  private apikey = 'dfbf29d67d1fd3a06619e13a5341d82f'

  getPlaceByCoords(lattiude, longitude) {
    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=${lattiude}&lon=${longitude}`, {params: {apikey: this.apikey}}
      )
  }

  getOneByID(id){
    console.log("ITS CALLED")
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
