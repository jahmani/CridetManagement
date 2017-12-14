import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionCatsPage } from './transaction-cats';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TransactionCatsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionCatsPage),ComponentsModule
  ],
})
export class TransactionCatsPageModule {}
