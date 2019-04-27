import { Component, Input } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  @Input() value: number;

  constructor(navParams: NavParams, private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }
}
