import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTransactionPage } from './edit-transaction';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTransactionPage),
    ComponentsModule
  ],
})
export class EditTransactionPageModule {}
