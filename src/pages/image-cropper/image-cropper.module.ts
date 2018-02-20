import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageCropperPage } from './image-cropper';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ImageCropperPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageCropperPage),
    ComponentsModule
  ],
})
export class ImageCropperPageModule {}
