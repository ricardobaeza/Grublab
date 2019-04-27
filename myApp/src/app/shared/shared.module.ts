import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import {RestaurantComponent} from '../restaurant/restaurant.component';

@NgModule({
    declarations: [HeaderComponent, RestaurantComponent],
    imports: [
        CommonModule,
        IonicModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        RestaurantComponent
    ],
})
export class SharedModule {
}
