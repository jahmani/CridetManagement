
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { StoreDataModule } from '../../StoreData/storeData.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    
    IonicPageModule.forChild(TabsPage),
    StoreDataModule
  ],
})
export class TabsPageModule {
}
