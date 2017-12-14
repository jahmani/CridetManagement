import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreUsersPage } from './store-users';

@NgModule({
  declarations: [
    StoreUsersPage,
  ],
  
  imports: [
    IonicPageModule.forChild(StoreUsersPage),
  ],
})
export class StoreUsersPageModule {}
