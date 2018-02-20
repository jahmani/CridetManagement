import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditStoreInfoPage } from './edit-store-info';

@NgModule({
  declarations: [
    EditStoreInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditStoreInfoPage),
  ],
})
export class EditStoreInfoPageModule {}
