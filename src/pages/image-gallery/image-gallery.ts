import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ModalController } from 'ionic-angular';
//import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html"
})

export class ImageGalleryPage {
  images: { url: string; }[];
  galleryType = "slides";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl : ModalController
    ) {
      this.images =  [1,2,3,4,5,6,7,8,9,10].map(num=>{return {url:`../../assets/img/${num}.jpg`}})
    }
    /*
 presentImage(index){
  let modal = this.modalCtrl.create(GalleryModal, {
    photos: this.images,
    initialSlide: index
  });
  modal.present();
 }
 */
  ionViewDidLoad() {
    console.log("ionViewDidLoad ImageGalleryPage");
  }
}
