import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductPage } from './edit-product';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditProductPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProductPage),ComponentsModule
  ],
})
export class EditProductPageModule {}
