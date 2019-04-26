import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpServiceService} from "../shared/services/http-service.service"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private httpService: HttpServiceService) {

  }
  ngOnInit() {
    console.log('this is working');
    this.httpService.getRestuarant("16774318").subscribe(data => {console.log(data)});
  }
}
