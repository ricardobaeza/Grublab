import { Component } from '@angular/core';
<<<<<<< HEAD
import { OnInit } from '@angular/core';
import { HttpServiceService} from "../shared/services/http-service.service";
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private httpService: HttpServiceService) {

  }
  private locationData = {};
  ngOnInit() {
    
  }


}
=======

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {}
>>>>>>> 1602a3d938da36abbb9eca56082c4673038d6c79
