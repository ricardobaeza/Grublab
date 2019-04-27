import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { ZomatoApiService } from '../shared/services/zomato-api.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filteredArray = [];
  isLoaded = false;
  constructor(
              private route: ActivatedRoute,
              private apiservice: ZomatoApiService,
              private router: Router
              ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.apiservice.getByFilter(id,(data)=> {
      this.filteredArray = data.restaurants
      this.isLoaded = true;
      console.log(this.filteredArray);
    });
  }

  navigateItem(id) {
    this.router.navigate(['/details/' + id]);
  }

}
