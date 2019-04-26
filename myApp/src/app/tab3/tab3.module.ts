import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
<<<<<<< HEAD

=======
import { ServicesModule } from '../shared/services/zomato-api.module';
>>>>>>> 1602a3d938da36abbb9eca56082c4673038d6c79
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
=======
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    ServicesModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {
  
}
>>>>>>> 1602a3d938da36abbb9eca56082c4673038d6c79
