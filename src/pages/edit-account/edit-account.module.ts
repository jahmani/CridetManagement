import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAccountPage } from './edit-account';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAccountPage),
    ComponentsModule
  ],
})
export class EditAccountPageModule {}
