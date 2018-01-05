import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserStoresPage } from './user-stores';

@NgModule({
  declarations: [
    UserStoresPage ,
  ],
  imports: [
    IonicPageModule.forChild(UserStoresPage),
  ],
})

export class UserStoresPageModule {}
