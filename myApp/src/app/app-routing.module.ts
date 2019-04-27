import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'details/:id', loadChildren: './currentitem/details/details.module#DetailsPageModule' },
  // { path: 'restaurant-info', loadChildren: './restaurant-info/restaurant-info.module#RestaurantInfoPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
