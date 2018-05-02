var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Optional } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { ImagesFsRepository } from "../../StoreData/images-fs-repository";
//import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageGalleryPage = /** @class */ (function () {
    function ImageGalleryPage(navCtrl, navParams, viewCtrl, modalCtrl, imagesFsRepository) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.imagesFsRepository = imagesFsRepository;
        this.canSelect = false;
        this.canGoBack = false;
        this.galleryType = "slides";
        this.canSelect = navParams.get("canSelect");
        this.canGoBack = navParams.get("canGoBack");
        if (!imagesFsRepository) {
            this.imagesFsRepository = navParams.get("imagesFsRepository");
        }
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (num) {
            return { url: "../../assets/img/" + num + ".jpg" };
        });
        this.storeImages = this.imagesFsRepository.List();
        //.pipe(map((extImages=>{
        //  return extImages.map(extImage=>extImage.data)
        //})))
    }
    ImageGalleryPage.prototype.openPhoto = function (index, images) {
        var _this = this;
        var modal = this.modalCtrl.create("PhotoDetailPage", {
            photo_index: index,
            canSelect: this.canSelect,
            images: images,
            imagesFsRepository: this.imagesFsRepository
        });
        modal.present();
        modal.onDidDismiss(function (extImageFile) {
            _this.selectPhoto(extImageFile);
        });
    };
    ImageGalleryPage.prototype.selectPhoto = function (image) {
        if (image)
            this.viewCtrl.dismiss(image);
    };
    ImageGalleryPage.prototype.onClick = function (index, images) {
        var _this = this;
        this.timer = 0;
        this.preventSimpleClick = false;
        var delay = 200;
        this.timer = setTimeout(function () {
            if (!_this.preventSimpleClick) {
                //whatever you want with simple click go here
                _this.openPhoto(index, images);
                console.log("simple click");
            }
        }, delay);
    };
    ImageGalleryPage.prototype.onDoubleClick = function (image) {
        this.preventSimpleClick = true;
        clearTimeout(this.timer);
        //whatever you want with double click go here
        this.selectPhoto(image);
        console.log("double click");
    };
    ImageGalleryPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ImageGalleryPage.prototype.AddNewImage = function () {
        var _this = this;
        //this.navCtrl.p
        var newImageModal = this.modalCtrl.create("ImageCropperPage");
        newImageModal.present();
        newImageModal.onDidDismiss(function (res) {
            console.log(res);
            var imgData = res.imageData;
            _this.imagesFsRepository.saveNewImage(imgData);
        });
    };
    /*
   presentImage(index){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: index
    });
    modal.present();
   }
   */
    ImageGalleryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ImageGalleryPage");
    };
    ImageGalleryPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-image-gallery",
            templateUrl: "image-gallery.html"
        }),
        __param(4, Optional()),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            ModalController,
            ImagesFsRepository])
    ], ImageGalleryPage);
    return ImageGalleryPage;
}());
export { ImageGalleryPage };
//# sourceMappingURL=image-gallery.js.map