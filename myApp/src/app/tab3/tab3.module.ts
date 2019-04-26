import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ServicesModule } from '../shared/services/zomato-api.module';
import {Tab5PageModule} from '../tab5/tab5.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: Tab3Page}]),
    ServicesModule,
    Tab5PageModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {
  
}
