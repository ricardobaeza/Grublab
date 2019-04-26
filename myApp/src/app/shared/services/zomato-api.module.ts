
import { NgModule } from '@angular/core';
import { ZomatoApiService } from './zomato-api.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    

  ],
  exports: [
    RestaurantsComponent
  ],
  declarations: [ RestaurantsComponent ]
})
export class ServicesModule { 
  static forRoot(): ModuleWithProviders {
    return { 
      ngModule: ServicesModule, providers: [ ZomatoApiService ]
    }
  }
}
