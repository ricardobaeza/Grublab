import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiUrl = 'https://developers.zomato.com/api/v2.1/locations';
  
  constructor(private http: HttpClient) { }

  getRestuarant(restaurantId): Observable<any> {
    return this.http.get(`https://developers.zomato.com/api/v2.1/restaurant`, {params: {apikey: '41e36201d45ae6b98260930280a74dbf', res_id: restaurantId}})
  }



  
}
