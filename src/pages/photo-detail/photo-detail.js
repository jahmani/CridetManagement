var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';
/**
 * Generated class for the PhotoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoDetailPage = /** @class */ (function () {
    function PhotoDetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.open_at_index = 0;
        this.open_at_index = this.navParams.get('photo_index');
        this.images = this.navParams.get('images');
        this.canDelete = this.navParams.get('canDelete');
        this.canSelect = this.navParams.get('canSelect');
        this.imagesFsRepository = this.navParams.get('imagesFsRepository');
    }
    PhotoDetailPage.prototype.ionViewDidEnter = function () {
        //   this.slider._rtl = true 
        this.slider.zoom = true;
        console.log("ionViewDidEnter");
    };
    PhotoDetailPage.prototype.select = function () {
        var index = this.slider.getActiveIndex();
        var extImage = this.images[index];
        this.viewCtrl.dismiss(extImage);
    };
    PhotoDetailPage.prototype.delete = function () {
        var _this = this;
        var index = this.slider.getActiveIndex();
        var extImage = this.images[index];
        this.imagesFsRepository.remove(extImage).then(function () {
            if (_this.images.length == 1)
                _this.close();
            else if (index != 0)
                _this.slider.slidePrev();
            else
                _this.slider.slideNext();
        });
    };
    PhotoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotoDetailPage');
    };
    PhotoDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], PhotoDetailPage.prototype, "slider", void 0);
    PhotoDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-photo-detail',
            templateUrl: 'photo-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams, ViewController])
    ], PhotoDetailPage);
    return PhotoDetailPage;
}());
export { PhotoDetailPage };
//# sourceMappingURL=photo-detail.js.map