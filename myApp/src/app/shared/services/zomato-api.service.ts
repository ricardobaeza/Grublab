import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { last } from '@angular/router/src/utils/collection';
@Injectable({
  providedIn: 'root'
})
export class ZomatoApiService {

  filter;

  display = [];

  constructor( private http: HttpClient,
               private geolocation: Geolocation) { }
  common = 'search';
  private apiUrl = 'https://developers.zomato.com/api/v2.1/search';

  private apikey = '5587d2c8170822eac9a965523c09172a';

  getPlaceByCoords(lattiude, longitude) {

    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=${lattiude}&lon=${longitude}`, {params: {apikey: '3a4ce51a6177777d251db2b2bda3fa83'}}
      )
  }
  getOneByID(id) {
    return this.http.get<any>(`https://developers.zomato.com/api/v2.1/restaurant`, {params: {apikey: this.apikey, res_id: id}}
    )
  }

  getCurrentCoords(callBack) {
    console.log('loading...');
    this.geolocation.getCurrentPosition({timeout:5000}).then((resp)=> {
      console.log('got response');
      if(JSON.parse(sessionStorage.getItem('filter'))) {
        this.filter(resp.coords.latitude, resp.coords.longitude);
      }
      this.getPlaceByCoords(resp.coords.latitude, resp.coords.longitude).subscribe(data => {
          callBack(data.restaurants);
        })
    }).catch(err => { alert('There was a problem retrieving your location...'); console.log(err)});

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      console.log(data);
    })
  }

  filterGet(lattiude, longitude) {
     this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=${lattiude}&lon=${longitude}&category=${JSON.parse(sessionStorage.getItem('filter'))}`, {params: {apikey: '3a4ce51a6177777d251db2b2bda3fa83'}})
      .subscribe(data => {
        console.log(data);
      })

  }

  logSession() {
    if (JSON.parse(sessionStorage.getItem('filter'))) {
      console.log('yaya');
    }
  }

  getCategories(callBack) {
    this.http.get<any>('https://developers.zomato.com/api/v2.1/categories', {params: {apikey: '3a4ce51a6177777d251db2b2bda3fa83'}}).subscribe(data => {
      callBack(data.categories);
    })
  }
  
  checkFilter() {
    console.log(this.filter);
  }
  getByFilter(id, callBack) {
      
     this.http.get<any>(`https://developers.zomato.com/api/v2.1/search?lat=40.4357969&lon=-111.8690305&category=${id}`, {params: {apikey:"3a4ce51a6177777d251db2b2bda3fa83"}}).subscribe(data=> {
      callBack(data);
     })

  }
}
