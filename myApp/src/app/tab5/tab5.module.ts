import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab5Page } from './tab5.page';
import {HeaderComponent} from '../shared/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [Tab5Page, HeaderComponent]
})
export class Tab5PageModule {}
