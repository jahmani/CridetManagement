var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef } from '@angular/core';
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
var ImageSelectComponent = /** @class */ (function () {
    function ImageSelectComponent(modalCtrl, imagesFsRepository, imageService) {
        this.modalCtrl = modalCtrl;
        this.imagesFsRepository = imagesFsRepository;
        this.imageService = imageService;
        this.placeHoldereSrc = "../../assets/icon/attachImage.png";
        console.log('Hello ImageSelectComponent Component');
    }
    ImageSelectComponent_1 = ImageSelectComponent;
    ImageSelectComponent.prototype.writeValue = function (imageUrl) {
        var _this = this;
        this.imgFileId = this.imageService.getImageId(imageUrl);
        if (this.imgFileId) {
            this.imagesFsRepository.getOnce(this.imgFileId).then(function (extImage) {
                _this.imgFile = extImage;
            });
        }
    };
    ImageSelectComponent.prototype.removeImage = function ($event) {
        this.imgFile = null;
        this.imgFileId = null;
        this.srcChangeFunction(this.imgFileId);
    };
    ImageSelectComponent.prototype.selectImage = function ($event) {
        var _this = this;
        var modal = this.modalCtrl.create("ImageGalleryPage", {
            imagesFsRepository: this.imagesFsRepository,
            canSelect: true,
            canGoBack: true
        });
        modal.present();
        modal.onDidDismiss(function (extImageFile) {
            if (extImageFile) {
                _this.imgFile = extImageFile;
                _this.imgFileId = extImageFile.id;
                _this.srcChangeFunction(extImageFile.data.thumbUrl);
            }
        });
    };
    ImageSelectComponent.prototype.registerOnChange = function (fn) {
        this.srcChangeFunction = fn;
    };
    ImageSelectComponent.prototype.registerOnTouched = function (fn) { };
    ImageSelectComponent.prototype.setDisabledState = function (isDisabled) { };
    Object.defineProperty(ImageSelectComponent.prototype, "displayImageSrc", {
        get: function () {
            return this.imgFile ? this.imgFile.data.thumbUrl : this.placeHoldereSrc;
        },
        enumerable: true,
        configurable: true
    });
    ImageSelectComponent = ImageSelectComponent_1 = __decorate([
        Component({
            selector: 'image-select',
            templateUrl: 'image-select.html',
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ImageSelectComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ModalController,
            ImagesFsRepository,
            ImageServiceProvider])
    ], ImageSelectComponent);
    return ImageSelectComponent;
    var ImageSelectComponent_1;
}());
export { ImageSelectComponent };
//# sourceMappingURL=image-select.js.map