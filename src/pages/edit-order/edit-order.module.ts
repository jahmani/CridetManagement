import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOrderPage } from './edit-order';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOrderPage),ComponentsModule
  ],
})
export class EditOrderPageModule {}
