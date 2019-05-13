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
    return this.http.get(`https://developers.zomato.com/api/v2.1/restaurant`, {params: {apikey: '09b80cb5a6d1d2e016908776f0ee13f0', res_id: restaurantId}})

  }



  
}
