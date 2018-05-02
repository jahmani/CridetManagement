import { Component, forwardRef } from '@angular/core';
import { Extended, ImageFile } from '../../interfaces/data-models';
import { ModalController } from 'ionic-angular';
import { ImagesFsRepository } from '../../StoreData/images-fs-repository';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageServiceProvider } from '../../providers/image-service/image-service';

/**
 * Generated class for the ImageSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-select',
  templateUrl: 'image-select.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageSelectComponent),
      multi: true
    }
  ]
})
export class ImageSelectComponent {

  srcChangeFunction: any;
  imgFileId: string;
  imgFile : Extended<ImageFile>

  constructor(    private modalCtrl: ModalController,
    private imagesFsRepository: ImagesFsRepository,
    private imageService : ImageServiceProvider
) {
    console.log('Hello ImageSelectComponent Component');
  }
  writeValue(imageUrl:string): void {
    this.imgFileId = this.imageService.getImageId(imageUrl);
    if (this.imgFileId) {
      this.imagesFsRepository.getOnce(this.imgFileId).then(extImage=>{
        this.imgFile = extImage
      })
    }
  }
  removeImage($event){
    this.imgFile = null
    this.imgFileId = null
    this.srcChangeFunction(this.imgFileId)
   
  }
  selectImage($event){
    let modal = this.modalCtrl.create("ImageGalleryPage", {
      imagesFsRepository:this.imagesFsRepository,
      canSelect : true,
      canGoBack : true
    });
    
    modal.present()
    modal.onDidDismiss((extImageFile:Extended<ImageFile>)=>{
      if(extImageFile){
        this.imgFile = extImageFile
        this.imgFileId = extImageFile.id
        this.srcChangeFunction(extImageFile.data.thumbUrl)
        }
    });    
  }
  registerOnChange(fn: any): void {
    this.srcChangeFunction = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
  placeHoldereSrc = "../../assets/icon/attachImage.png";
  get displayImageSrc(){
    return this.imgFile ? this.imgFile.data.thumbUrl : this.placeHoldereSrc
  }
}
