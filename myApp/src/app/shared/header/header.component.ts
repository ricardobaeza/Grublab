import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular"
import { ModalPage } from '../../modal/modal.page';
import { ZomatoApiService } from '../services/zomato-api.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private modal: ModalController,
              private zomatoService: ZomatoApiService,
              private route: Router) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  async openModal() {
    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {value: 123}
    });
    await modal.present();
    
    const {data} = await modal.onDidDismiss();
    sessionStorage.setItem('filter', JSON.stringify(data));
    this.route.navigate(["filter/" + data.result]);


    
  }
}
