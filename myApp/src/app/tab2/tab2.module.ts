import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {SharedModule} from '../shared/shared.module';
import {ServicesModule} from '../shared/services/zomato-api.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}]),
        SharedModule,
        ServicesModule,
    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
