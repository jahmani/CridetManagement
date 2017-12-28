import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTransactionCatPage } from './edit-transaction-cat';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditTransactionCatPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTransactionCatPage),
    ComponentsModule
  ],
})
export class EditTransactionCatPageModule {}
