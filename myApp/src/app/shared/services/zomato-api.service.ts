import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZomatoApiService {

  constructor( private http: HttpClient) { }
  common = 'restaurant';
  private apiUrl = 'https://developers.zomato.com/api/v2.1/' + this.common;

  getPlace(): Observable<any>{
    return this.http.get<any>(this.apiUrl , {params: {apikey: '3059aec27009a71444cbfa438274aa73', res_id: '16774318'}})
  }
}
