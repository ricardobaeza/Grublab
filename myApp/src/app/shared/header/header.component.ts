import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular"
import { ModalPage } from '../../modal/modal.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {value: 123}
    });
    return await modal.present();
  }

  async closeModal() {
    this.modal.dismiss(data=> {
      console.log(data);
    })
  }
}
