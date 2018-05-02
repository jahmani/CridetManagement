import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersListPage } from './orders-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrdersListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersListPage),ComponentsModule
  ],
})
export class OrdersListPageModule {}
