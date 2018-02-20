var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import Cropper from "cropperjs";
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from "angularfire2/storage";
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the ImageCropperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageCropperPage = /** @class */ (function () {
    function ImageCropperPage(viewCtrl, afStorage, navParams) {
        this.viewCtrl = viewCtrl;
        this.afStorage = afStorage;
        this.navParams = navParams;
        this.imageB64 = this.navParams.get("imageB64String");
        if (this.imageB64)
            this.imageB64Tagged = "data:image/jpeg;base64," + this.imageB64;
    }
    ImageCropperPage.prototype.extractExt = function (fileName) {
        var dotIndex = fileName.lastIndexOf(".");
        var ext = fileName.substring(dotIndex);
        return ext;
    };
    ImageCropperPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ImageCropperPage");
    };
    ImageCropperPage.prototype.ionViewWillUnload = function () {
        this.clear();
    };
    ImageCropperPage.prototype.imageLoaded = function () {
        console.log("starting Cropper... ");
        if (!this.cropper)
            this.cropper = new Cropper(this.input.nativeElement, {
                //aspectRatio: 1 / 1,
                autoCrop: false,
                dragMode: "move",
                viewMode: 2,
                modal: true,
                guides: true,
                highlight: false,
                background: true,
                autoCropArea: 0.8,
                responsive: true,
                crop: function (e) {
                    //  if (!this.editor.cropping) this.editor.cropping = true;
                }
            });
    };
    ImageCropperPage.prototype.imageRotate = function () {
        this.cropper.rotate(90);
        this.editor.rotating = true;
    };
    ImageCropperPage.prototype.selectImage = function () {
        this.fileInput.nativeElement.click();
    };
    ImageCropperPage.prototype.cancel = function () {
        this.cropper.reset();
        this.cropper.clear();
        this.editor.cropping = false;
        this.editor.rotating = false;
    };
    ImageCropperPage.prototype.clear = function () {
        if (this.cropper) {
            this.cropper.destroy();
            this.cropper = null;
            this.editor.cropping = false;
        }
    };
    ImageCropperPage.prototype.startCrop = function () {
        this.cropper.crop();
        this.editor.cropping = true;
    };
    ImageCropperPage.prototype.finish = function () {
        var cropper = this.cropper;
        if (this.editor.cropping || this.editor.rotating) {
            this.editor.cropping = false;
            this.editor.rotating = false;
            var croppedImgB64String = this.cropper
                .getCroppedCanvas(this.loader.type == "image/png"
                ? {}
                : {
                    fillColor: "#fff"
                })
                .toDataURL(this.loader.type, 100 / 100); // 90 / 100 = photo quality
            //this.imageB64Tagged = croppedImgB64Strming
            this.loader.previousUrl = this.loader.url;
            this.loader.url = croppedImgB64String;
            this.cropper.replace(croppedImgB64String);
        }
    };
    ImageCropperPage.prototype.onImageSelected = function (event) {
        event.stopPropagation();
        this.setCropperImage(event);
    };
    ImageCropperPage.prototype.setCropperImage = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.loader = {
                loaded: true,
                name: file.name,
                type: file.type,
                size: file.size,
                url: myReader.result
            };
            that.cropper.replace(loadEvent.target.result);
        };
        myReader.readAsDataURL(file);
    };
    ImageCropperPage.prototype.upload = function () {
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref = this.afStorage.ref(randomId + this.extractExt(this.loader.name));
        this.input.nativeElement.src;
        this.task = this.ref.putString(this.input.nativeElement.src, "data_url");
        this.uploadProgress = this.task.percentageChanges();
        /*
            this.downloadURL = this.task.downloadURL();
            this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
            */
    };
    /**
     * Generated class for the ImageCropperPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    ImageCropperPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [ViewController,
            AngularFireStorage,
            NavParams])
    ], ImageCropperPage);
    return ImageCropperPage;
}());
export { ImageCropperPage };
//# sourceMappingURL=image-cropper.js.map