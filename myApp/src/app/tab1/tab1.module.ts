import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ServicesModule } from '../shared/services/zomato-api.module';
import {Tab5PageModule} from '../tab5/tab5.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: Tab1Page}]),
    ServicesModule,
    Tab5PageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
