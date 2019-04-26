import { Component, OnInit } from '@angular/core';
import { ZomatoApiService } from '../services/zomato-api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  constructor(private zomatoService: ZomatoApiService) { }

  allPlaces = [];

  ngOnInit() {
    this.zomatoService.getPlace().subscribe(data => {
      this.allPlaces.push(data)
    })
  }

}

// this is a really good comment