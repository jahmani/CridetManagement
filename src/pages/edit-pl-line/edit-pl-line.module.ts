import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPlLinePage } from './edit-pl-line';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditPlLinePage,
  ],
  imports: [
    IonicPageModule.forChild(EditPlLinePage),ComponentsModule
  ],
})
export class EditPlLinePageModule {}
