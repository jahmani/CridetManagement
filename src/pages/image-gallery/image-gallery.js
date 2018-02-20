var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var ImageGalleryPage = /** @class */ (function () {
    function ImageGalleryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (num) { return { url: "../../assets/img/" + num + ".jpg" }; });
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
    /*
     presentImage(index){
      let modal = this.modalCtrl.create(GalleryModal, {
        photos: this.images,
        initialSlide: index
      });
      modal.present();
     }
     */
    ImageGalleryPage.prototype.ionViewDidLoad = /*
     presentImage(index){
      let modal = this.modalCtrl.create(GalleryModal, {
        photos: this.images,
        initialSlide: index
      });
      modal.present();
     }
     */
    function () {
        console.log("ionViewDidLoad ImageGalleryPage");
    };
    //import { GalleryModal } from 'ionic-gallery-modal';
    /**
     * Generated class for the ImageGalleryPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    ImageGalleryPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ModalController])
    ], ImageGalleryPage);
    return ImageGalleryPage;
}());
export { ImageGalleryPage };
//# sourceMappingURL=image-gallery.js.map