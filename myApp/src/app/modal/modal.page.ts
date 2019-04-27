import { Component, Input, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { ZomatoApiService } from '../shared/services/zomato-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  categories = [];
  @Input() value: number;

  ngOnInit() {
    this.zomatoApiServive.getCategories((data)=> {
      this.categories = data
      console.log(this.categories);
    })
  }

  constructor(navParams: NavParams, 
              private modalController: ModalController,
              private zomatoApiServive: ZomatoApiService) { }

  closeModal() {
    this.modalController.dismiss();
  }

  submitCategory(category) {
    
    this.modalController.dismiss({
      'result': category
    })
  }

}
