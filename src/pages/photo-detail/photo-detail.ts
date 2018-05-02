import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';
import { ImagesFsRepository } from '../../StoreData/images-fs-repository';
import { Observable } from 'rxjs/Observable';
import { Extended, ImageFile } from '../../interfaces/data-models';

/**
 * Generated class for the PhotoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-detail',
  templateUrl: 'photo-detail.html',
})
export class PhotoDetailPage {
  private imagesFsRepository:ImagesFsRepository;
  images: Extended<ImageFile>[]
  open_at_index: any = 0; 
  canDelete : boolean 
  canSelect : boolean 
  @ViewChild(Slides) slider: Slides;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private viewCtrl:ViewController) {
    this.open_at_index = this.navParams.get('photo_index')
    this.images = this.navParams.get('images')
    this.canDelete = this.navParams.get('canDelete')
    this.canSelect = this.navParams.get('canSelect')
    this.imagesFsRepository = this.navParams.get('imagesFsRepository')
  }
  ionViewDidEnter() {
  //   this.slider._rtl = true 
  this.slider.zoom = true
    console.log("ionViewDidEnter");
  }
  select(){
    const index  = this.slider.getActiveIndex()
    const extImage = this.images[index]
    this.viewCtrl.dismiss(extImage)      
  }
delete(){
  const index  = this.slider.getActiveIndex()
  const extImage = this.images[index]
  this.imagesFsRepository.remove(extImage).then(()=>{
    if(this.images.length==1)
      this.close()
    else if(index!=0)
      this.slider.slidePrev()
    else
      this.slider.slideNext()
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoDetailPage');
  }
  close(){
    this.viewCtrl.dismiss()
  }
}
