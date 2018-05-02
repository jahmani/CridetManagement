var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { ImageServiceProvider } from "../providers/image-service/image-service";
import { StorePathConfig } from "./StorePathConfig";
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ImagesFsRepository = /** @class */ (function (_super) {
    __extends(ImagesFsRepository, _super);
    function ImagesFsRepository(afs, activeStoreService, imageService) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Images) || this;
        _this.activeStoreService = activeStoreService;
        _this.imageService = imageService;
        console.log("Hello ImagesFsRepository Provider");
        return _this;
    }
    ImagesFsRepository.prototype.beforeImageUploaded = function (newImage, newId) {
        return _super.prototype.saveNew.call(this, newImage, newId);
    };
    ImagesFsRepository.prototype.beforeImageRemoved = function (newImage) {
        newImage.data.isDelted = true;
        return _super.prototype.saveOld.call(this, newImage);
    };
    ImagesFsRepository.prototype.afterImageRemoved = function (removedItem) {
        _super.prototype.remove.call(this, removedItem);
    };
    ImagesFsRepository.prototype.saveNewImage = function (imgMeta, id) {
        var _this = this;
        id = id || this.getNewDocId();
        var newItem = {
            height: imgMeta.height,
            //  name: imgMeta.imageId,
            size: imgMeta.size,
            width: imgMeta.width
        };
        return this.beforeImageUploaded({ data: newItem, id: null }, id).then(function (key) {
            return _this.imageService
                .upload(imgMeta, key, _this.activeStoreService.activeStoreKey)
                .then(function (res) {
                return Promise.all([res.imageTask, res.thumbTask]).then(function (_a) {
                    var imgSnapshot = _a[0], thumbSnapshot = _a[1];
                    newItem.url = imgSnapshot.downloadURL;
                    newItem.thumbUrl = thumbSnapshot.downloadURL;
                    return _this.afterImageUploaded(null, { data: newItem, id: id });
                });
            });
        });
    };
    ImagesFsRepository.prototype.remove = function (removedItem) {
        var _this = this;
        return this.beforeImageRemoved(removedItem).then(function () {
            return _this.imageService.remove(removedItem.data).then(function (removeRes) {
                return _this.afterImageRemoved(removedItem);
            });
        });
    };
    ImagesFsRepository.prototype.afterImageUploaded = function (oldImage, newImage) {
        return _super.prototype.saveOld.call(this, newImage);
    };
    ImagesFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService,
            ImageServiceProvider])
    ], ImagesFsRepository);
    return ImagesFsRepository;
}(StoreDataFsRepository));
export { ImagesFsRepository };
/*

*/
//# sourceMappingURL=images-fs-repository.js.map